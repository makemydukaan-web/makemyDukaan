import os
import asyncio
import logging
from datetime import datetime, timezone
from dotenv import load_dotenv
from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel, EmailStr
from pymongo import MongoClient
import resend

load_dotenv()

# Logging setup
logging.basicConfig(level=logging.INFO)
logger = logging.getLogger(__name__)

# MongoDB setup
MONGO_URL = os.environ.get("MONGO_URL")
DB_NAME = os.environ.get("DB_NAME", "makemydukaan")
client = MongoClient(MONGO_URL)
db = client[DB_NAME]

# Resend setup
RESEND_API_KEY = os.environ.get("RESEND_API_KEY")
SENDER_EMAIL = os.environ.get("SENDER_EMAIL", "onboarding@resend.dev")
resend.api_key = RESEND_API_KEY

app = FastAPI(title="MakeMyDukaan API")

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Pydantic Models
class ContactForm(BaseModel):
    name: str
    email: EmailStr
    phone: str
    business_type: str
    budget: str
    message: str = ""

class NewsletterSubscribe(BaseModel):
    email: EmailStr

# Health check
@app.get("/api/health")
async def health_check():
    return {"status": "healthy", "timestamp": datetime.now(timezone.utc).isoformat()}

# Contact form submission
@app.post("/api/contact")
async def submit_contact(form: ContactForm):
    try:
        # Save to database
        contact_data = {
            "name": form.name,
            "email": form.email,
            "phone": form.phone,
            "business_type": form.business_type,
            "budget": form.budget,
            "message": form.message,
            "created_at": datetime.now(timezone.utc).isoformat()
        }
        db.contacts.insert_one(contact_data)
        
        # Send email notification
        html_content = f"""
        <html>
        <body style="font-family: Arial, sans-serif; padding: 20px; background-color: #f8fafc;">
            <div style="max-width: 600px; margin: 0 auto; background: white; padding: 30px; border-radius: 10px;">
                <h2 style="color: #0F172A; border-bottom: 2px solid #14B8A6; padding-bottom: 10px;">New Quote Request - MakeMyDukaan</h2>
                <table style="width: 100%; border-collapse: collapse;">
                    <tr><td style="padding: 10px 0; font-weight: bold; color: #475569;">Name:</td><td style="padding: 10px 0;">{form.name}</td></tr>
                    <tr><td style="padding: 10px 0; font-weight: bold; color: #475569;">Email:</td><td style="padding: 10px 0;">{form.email}</td></tr>
                    <tr><td style="padding: 10px 0; font-weight: bold; color: #475569;">Phone:</td><td style="padding: 10px 0;">{form.phone}</td></tr>
                    <tr><td style="padding: 10px 0; font-weight: bold; color: #475569;">Business Type:</td><td style="padding: 10px 0;">{form.business_type}</td></tr>
                    <tr><td style="padding: 10px 0; font-weight: bold; color: #475569;">Budget:</td><td style="padding: 10px 0;">{form.budget}</td></tr>
                    <tr><td style="padding: 10px 0; font-weight: bold; color: #475569;">Message:</td><td style="padding: 10px 0;">{form.message or 'N/A'}</td></tr>
                </table>
            </div>
        </body>
        </html>
        """
        
        params = {
            "from": SENDER_EMAIL,
            "to": [SENDER_EMAIL],
            "subject": f"New Quote Request from {form.name}",
            "html": html_content
        }
        
        try:
            await asyncio.to_thread(resend.Emails.send, params)
            logger.info(f"Email sent for contact from {form.email}")
        except Exception as e:
            logger.error(f"Email sending failed: {str(e)}")
        
        return {"status": "success", "message": "Thank you! We'll get back to you within 24 hours."}
    
    except Exception as e:
        logger.error(f"Contact form error: {str(e)}")
        raise HTTPException(status_code=500, detail="Failed to submit form. Please try again.")

# Newsletter subscription
@app.post("/api/newsletter")
async def subscribe_newsletter(data: NewsletterSubscribe):
    try:
        existing = db.newsletter.find_one({"email": data.email}, {"_id": 0})
        if existing:
            return {"status": "info", "message": "You're already subscribed!"}
        
        db.newsletter.insert_one({
            "email": data.email,
            "subscribed_at": datetime.now(timezone.utc).isoformat()
        })
        return {"status": "success", "message": "Successfully subscribed to our newsletter!"}
    except Exception as e:
        logger.error(f"Newsletter error: {str(e)}")
        raise HTTPException(status_code=500, detail="Subscription failed. Please try again.")

if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="0.0.0.0", port=8001)
