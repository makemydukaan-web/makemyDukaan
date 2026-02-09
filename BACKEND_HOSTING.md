# Backend Hosting Guide - MakeMyDukaan FastAPI

Your FastAPI backend needs separate hosting from the frontend. This guide covers the best options.

## 🎯 Quick Recommendation

**For fastest setup:** Use Railway (5 minutes, free tier)
**For production:** Use Railway or Render

## Option 1: Railway (Recommended)

### Why Railway?
- ✅ 5-minute setup
- ✅ Free tier: $5 credit/month
- ✅ Auto-deploy from GitHub
- ✅ Built-in MongoDB plugin
- ✅ Easy environment variables
- ✅ Automatic HTTPS

### Step-by-Step Setup

1. **Sign Up**
   - Go to https://railway.app/
   - Click "Start a New Project"
   - Login with GitHub

2. **Deploy Backend**
   - Click "New Project" → "Deploy from GitHub repo"
   - Select your repository: `makemydukaan-web/makemyDukaan`
   - Railway will detect multiple services

3. **Configure Backend Service**
   - Click on the detected service
   - Go to **Settings** → **Root Directory**
   - Set to: `backend`
   - Railway auto-detects FastAPI!

4. **Add MongoDB**
   - In your project, click **New**
   - Select **Database** → **Add MongoDB**
   - Railway creates a MongoDB instance
   - Copy the connection string

5. **Set Environment Variables**
   - Click your backend service → **Variables**
   - Add these variables:
   ```
   MONGO_URL=<from MongoDB plugin>
   DB_NAME=makemydukaan
   RESEND_API_KEY=<your resend key>
   SENDER_EMAIL=<your email>
   PORT=8001
   ```

6. **Get Your Backend URL**
   - Go to **Settings** → **Domains**
   - Railway provides a URL like: `https://your-app.railway.app`
   - Copy this URL
   - Use it as `REACT_APP_BACKEND_URL` in Cloudflare Pages

7. **Deploy**
   - Click **Deploy**
   - Wait 2-3 minutes
   - Your backend is live!

### Cost Estimate
- Free tier: $5 credit/month
- Typical usage: $2-5/month (backend + MongoDB)
- Auto-scales with traffic

---

## Option 2: Render

### Why Render?
- ✅ Free tier available
- ✅ Simple interface
- ✅ Good for production
- ✅ Auto SSL certificates

### Step-by-Step Setup

1. **Sign Up**
   - Go to https://render.com/
   - Sign up with GitHub

2. **Create Web Service**
   - Click **New** → **Web Service**
   - Connect your GitHub repository
   - Select `makemydukaan-web/makemyDukaan`

3. **Configure**
   ```
   Name: makemydukaan-backend
   Root Directory: backend
   Environment: Python 3
   Build Command: pip install -r requirements.txt
   Start Command: uvicorn server:app --host 0.0.0.0 --port $PORT
   ```

4. **Choose Plan**
   - Free tier: Available (spins down after inactivity)
   - Starter: $7/month (always on)

5. **Add Environment Variables**
   ```
   MONGO_URL=<your MongoDB Atlas URL>
   DB_NAME=makemydukaan
   RESEND_API_KEY=<your resend key>
   SENDER_EMAIL=<your email>
   ```

6. **Deploy**
   - Click **Create Web Service**
   - Wait 5-10 minutes for first deploy
   - Copy your URL: `https://your-app.onrender.com`

### MongoDB on Render
- Render doesn't provide managed MongoDB
- Use MongoDB Atlas (see below)

### Cost Estimate
- Free tier: $0 (with spin-down)
- Starter: $7/month
- Pro: $25/month

---

## Option 3: Fly.io

### Why Fly.io?
- ✅ Generous free tier
- ✅ Global deployment
- ✅ Fast performance
- ✅ Good documentation

### Setup Overview

1. Install Fly CLI:
   ```bash
   curl -L https://fly.io/install.sh | sh
   ```

2. Login:
   ```bash
   fly auth login
   ```

3. Create app:
   ```bash
   cd backend
   fly launch
   ```

4. Configure `fly.toml`:
   ```toml
   app = "makemydukaan-backend"
   
   [build]
   
   [env]
     PORT = "8001"
   
   [[services]]
     internal_port = 8001
     protocol = "tcp"
   
     [[services.ports]]
       port = 80
       handlers = ["http"]
   
     [[services.ports]]
       port = 443
       handlers = ["tls", "http"]
   ```

5. Set secrets:
   ```bash
   fly secrets set MONGO_URL="your-mongo-url"
   fly secrets set RESEND_API_KEY="your-key"
   fly secrets set DB_NAME="makemydukaan"
   ```

6. Deploy:
   ```bash
   fly deploy
   ```

### Cost Estimate
- Free tier: Generous
- Paid: ~$5-10/month

---

## Option 4: DigitalOcean App Platform

### Why DigitalOcean?
- ✅ Traditional hosting company
- ✅ Reliable infrastructure
- ✅ Good for existing DO users

### Setup Overview

1. Go to https://cloud.digitalocean.com/apps
2. Create new app → GitHub
3. Select repository and branch
4. Configure:
   ```
   Type: Web Service
   Source Directory: backend
   Build Command: pip install -r requirements.txt
   Run Command: uvicorn server:app --host 0.0.0.0 --port 8080
   ```
5. Add environment variables
6. Choose plan (starts at $5/month)
7. Deploy

### Cost Estimate
- Basic: $5/month
- Professional: $12/month

---

## MongoDB Hosting

### MongoDB Atlas (Recommended)

**Why?**
- ✅ Official MongoDB cloud
- ✅ Free tier: 512MB
- ✅ Easy to use
- ✅ Automatic backups
- ✅ Global clusters

**Setup:**

1. **Sign Up**
   - Go to https://www.mongodb.com/cloud/atlas
   - Click "Try Free"
   - Sign up with Google/GitHub

2. **Create Cluster**
   - Choose **Shared** (Free)
   - Select cloud provider: AWS
   - Region: Choose closest to your backend
   - Cluster name: `makemydukaan`
   - Click **Create Cluster**

3. **Security Setup**
   - Create database user:
     - Username: `makemydukaan`
     - Password: Generate strong password
     - Save credentials safely!
   
   - Network Access:
     - Click **Add IP Address**
     - Select **Allow Access from Anywhere** (0.0.0.0/0)
     - Or add your backend host's IP

4. **Get Connection String**
   - Click **Connect** on your cluster
   - Choose **Connect your application**
   - Copy connection string:
   ```
   mongodb+srv://<username>:<password>@cluster0.xxxxx.mongodb.net/?retryWrites=true&w=majority
   ```
   - Replace `<username>` and `<password>`
   - This is your `MONGO_URL`

5. **Create Database**
   - Click **Collections** → **Add My Own Data**
   - Database name: `makemydukaan`
   - Collection name: `contacts`

### Cost
- Free tier: 512MB storage (plenty for starting out)
- Shared M2: $9/month (2GB storage)
- Scales as you grow

---

## Resend Email Service

Your contact form uses Resend. Setup:

1. **Sign Up**
   - Go to https://resend.com/
   - Sign up free

2. **Verify Domain** (Optional but recommended)
   - Add your domain (e.g., makemydukaan.in)
   - Add DNS records provided by Resend
   - Verified domains can send from custom email

3. **Get API Key**
   - Go to **API Keys**
   - Click **Create API Key**
   - Name: `makemydukaan-production`
   - Copy key (starts with `re_`)
   - Save securely!

4. **Add to Backend**
   - Set as `RESEND_API_KEY` environment variable
   - Set `SENDER_EMAIL` to verified email

### Cost
- Free tier: 100 emails/day
- Pro: $20/month (50,000 emails)

---

## Complete Deployment Checklist

### Backend Setup
- [ ] Choose hosting provider (Railway recommended)
- [ ] Deploy backend service
- [ ] Set up MongoDB Atlas
- [ ] Configure environment variables:
  - [ ] MONGO_URL
  - [ ] DB_NAME
  - [ ] RESEND_API_KEY
  - [ ] SENDER_EMAIL
- [ ] Test backend health endpoint: `/api/health`
- [ ] Copy backend URL

### Frontend Setup
- [ ] Add backend URL to Cloudflare Pages:
  - Variable: `REACT_APP_BACKEND_URL`
  - Value: Your backend URL
- [ ] Deploy frontend to Cloudflare Pages
- [ ] Test contact form

### Final Tests
- [ ] Visit your site
- [ ] Submit contact form
- [ ] Check email received
- [ ] Verify data in MongoDB
- [ ] Test all pages
- [ ] Test on mobile

---

## Cost Summary

### Minimal Setup (Free/Very Cheap)
```
Frontend: Cloudflare Pages     = Free
Backend: Railway Free Tier     = Free ($5 credit)
Database: MongoDB Atlas Free   = Free
Email: Resend Free Tier        = Free

Total: $0/month (then ~$3-5/month after free credits)
```

### Recommended Production
```
Frontend: Cloudflare Pages     = Free
Backend: Railway               = $5/month
Database: MongoDB Atlas Free   = Free
Email: Resend Free/Pro         = Free - $20/month

Total: $5-25/month
```

### Enterprise
```
Frontend: Cloudflare Pages     = Free
Backend: Railway/DO            = $12-25/month
Database: MongoDB Atlas M10    = $57/month
Email: Resend Pro              = $20/month

Total: $89-102/month
```

---

## Next Steps

1. Choose your hosting provider
2. Follow the step-by-step guide above
3. Get your backend URL
4. Update `REACT_APP_BACKEND_URL` in Cloudflare Pages
5. Deploy and test!

## Need Help?

- Railway: https://docs.railway.app/
- Render: https://render.com/docs
- MongoDB Atlas: https://docs.atlas.mongodb.com/
- Resend: https://resend.com/docs