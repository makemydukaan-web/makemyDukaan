# Cloudflare Pages Deployment Guide - MakeMyDukaan

This guide will walk you through deploying your MakeMyDukaan website to Cloudflare Pages.

## 📋 Prerequisites

- Cloudflare account (free tier works fine)
- GitHub repository with your code
- Backend hosted separately (see BACKEND_HOSTING.md)

## 🚀 Quick Start

### Step 1: Connect Your Repository

1. Log in to [Cloudflare Dashboard](https://dash.cloudflare.com/)
2. Go to **Workers & Pages** → **Create application** → **Pages**
3. Click **Connect to Git**
4. Select your GitHub account and repository: `makemydukaan-web/makemyDukaan`
5. Click **Begin setup**

### Step 2: Configure Build Settings

Use these exact settings:

```
Production branch: main (or master)
Build command: yarn build
Build output directory: build
Root directory: frontend
```

**Important:** Set the root directory to `frontend` since your React app is in that folder.

### Step 3: Set Environment Variables

Before deploying, add your environment variable:

1. In the build configuration page, scroll to **Environment variables**
2. Add the following:

```
Variable name: REACT_APP_BACKEND_URL
Value: https://your-backend-url.com
```

**Replace** `https://your-backend-url.com` with your actual backend URL (see Backend Hosting section below).

### Step 4: Deploy

1. Click **Save and Deploy**
2. Wait 2-3 minutes for the build to complete
3. Your site will be live at: `https://your-project-name.pages.dev`

## 🔧 Advanced Configuration

### Custom Domain

1. Go to your Pages project → **Custom domains**
2. Click **Set up a custom domain**
3. Enter your domain (e.g., `makemydukaan.in`)
4. Follow the DNS configuration steps
5. Cloudflare will automatically provision SSL certificate

### Build Optimizations

Cloudflare Pages automatically optimizes:
- ✅ Automatic minification
- ✅ HTTP/3 and QUIC support
- ✅ Global CDN distribution
- ✅ Auto SSL/TLS certificates
- ✅ DDoS protection

## 🖥️ Backend Hosting

**Important:** Cloudflare Pages only hosts static files (your React frontend). Your FastAPI backend needs separate hosting.

### Recommended Backend Hosting Options:

#### Option 1: Railway (Recommended - Easy & Fast)
- **Cost:** Free tier available, then ~$5/month
- **Setup:** 5 minutes
- **Features:** Auto-deploy from GitHub, built-in PostgreSQL/MongoDB

**Steps:**
1. Go to [Railway.app](https://railway.app/)
2. Sign up with GitHub
3. Click **New Project** → **Deploy from GitHub**
4. Select your repository
5. Set root directory to `backend`
6. Railway auto-detects FastAPI and deploys
7. Add environment variables in Railway dashboard
8. Copy the provided URL and use it as `REACT_APP_BACKEND_URL`

#### Option 2: Render
- **Cost:** Free tier available
- **Setup:** 10 minutes
- **Good for:** Production apps

**Steps:**
1. Go to [Render.com](https://render.com/)
2. Create **New Web Service**
3. Connect GitHub repository
4. Set:
   - Root Directory: `backend`
   - Build Command: `pip install -r requirements.txt`
   - Start Command: `uvicorn server:app --host 0.0.0.0 --port $PORT`
5. Add environment variables
6. Deploy and copy URL

#### Option 3: Fly.io
- **Cost:** Free tier available
- **Setup:** 15 minutes
- **Good for:** Global distribution

#### Option 4: DigitalOcean App Platform
- **Cost:** $5/month minimum
- **Setup:** 10 minutes
- **Good for:** Traditional hosting experience

### MongoDB Hosting

Your backend uses MongoDB. Options:

1. **MongoDB Atlas** (Recommended)
   - Free tier: 512MB storage
   - Signup: https://www.mongodb.com/cloud/atlas
   - Create cluster → Get connection string
   - Update `MONGO_URL` in backend environment variables

2. **Railway MongoDB**
   - Available as Railway plugin
   - Easy integration if using Railway for backend

### Email Service (Resend)

Your contact form uses Resend for emails:

1. Keep your existing Resend API key
2. Add `RESEND_API_KEY` to backend hosting environment variables
3. Update `SENDER_EMAIL` if needed

## 🔄 Deployment Workflow

### Automatic Deployments

Cloudflare Pages automatically deploys when you:
- Push to your production branch (main/master)
- Merge a pull request

### Preview Deployments

- Every pull request gets a unique preview URL
- Test changes before merging to production
- Preview URLs format: `https://abc123.your-project.pages.dev`

### Manual Deployments

1. Go to your Pages project
2. Click **Create deployment**
3. Select branch
4. Deploy

## 📊 Monitoring & Analytics

### Built-in Analytics

1. Go to your Pages project → **Analytics**
2. View:
   - Page views
   - Unique visitors
   - Bandwidth usage
   - Top pages

### Web Analytics (Optional)

Enable Cloudflare Web Analytics:
1. Go to **Analytics** → **Web Analytics**
2. Add your site
3. Get tracking code
4. Add to your React app's `public/index.html`

## 🛠️ Troubleshooting

### Build Fails

**Issue:** Build command fails
```
✅ Solution:
- Verify build command is exactly: yarn build
- Check root directory is set to: frontend
- Ensure package.json is in frontend folder
```

**Issue:** Module not found errors
```
✅ Solution:
- Check all dependencies are in frontend/package.json
- Try adding Node version environment variable:
  NODE_VERSION=18
```

### Blank Page After Deployment

**Issue:** Site loads but shows blank page
```
✅ Solution:
- Check browser console for errors
- Verify REACT_APP_BACKEND_URL is set correctly
- Ensure backend is accessible from browser
- Check _redirects file is in frontend/public/
```

### 404 on Page Refresh

**Issue:** Direct URLs return 404
```
✅ Solution:
- Verify _redirects file exists at: frontend/public/_redirects
- File should contain: /*    /index.html   200
- This is already configured in your repo!
```

### API Calls Failing

**Issue:** Contact form or API calls not working
```
✅ Solution:
1. Check REACT_APP_BACKEND_URL environment variable
2. Verify backend is deployed and accessible
3. Check backend CORS settings allow your frontend domain
4. Update backend CORS origins if needed:
   allow_origins=["https://your-site.pages.dev"]
```

### Environment Variables Not Working

**Issue:** Process.env variables are undefined
```
✅ Solution:
- Environment variables must start with REACT_APP_
- Set in Cloudflare Pages dashboard, not in .env file
- Redeploy after adding new variables
- Variables are injected at build time, not runtime
```

## 🔐 Security Best Practices

### Headers

Your site includes security headers via `frontend/public/_headers`:
- X-Frame-Options: Prevent clickjacking
- X-Content-Type-Options: Prevent MIME sniffing
- Referrer-Policy: Control referrer information
- Permissions-Policy: Restrict browser features

### HTTPS

- Cloudflare automatically provides SSL/TLS
- All traffic is encrypted
- Force HTTPS is enabled by default

### API Keys

- Never commit API keys to GitHub
- Use environment variables in Cloudflare dashboard
- Use different keys for production vs development

## 📝 Checklist

Before going live:

- [ ] Backend deployed and accessible
- [ ] MongoDB Atlas configured
- [ ] REACT_APP_BACKEND_URL set in Cloudflare
- [ ] Custom domain configured (optional)
- [ ] Test contact form submission
- [ ] Test all pages load correctly
- [ ] Test routing (refresh on different pages)
- [ ] Check mobile responsiveness
- [ ] Verify analytics working
- [ ] Update social media links if domain changed

## 🆘 Need Help?

- **Cloudflare Docs:** https://developers.cloudflare.com/pages/
- **Cloudflare Discord:** https://discord.gg/cloudflaredev
- **Community Forum:** https://community.cloudflare.com/

## 🎉 You're Done!

Your MakeMyDukaan website is now running on Cloudflare's global network with:
- ⚡ Lightning-fast performance
- 🌍 Global CDN distribution
- 🔒 Enterprise-grade security
- 📈 Built-in analytics
- 💰 Generous free tier

Welcome to Cloudflare Pages! 🚀