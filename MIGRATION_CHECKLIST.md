# Cloudflare Pages Migration Checklist

Use this checklist to migrate your MakeMyDukaan website from Netlify to Cloudflare Pages.

## 📋 Pre-Migration

### 1. Backend Hosting Setup
Since Cloudflare Pages only hosts static sites (frontend), you need to host the backend separately.

- [ ] Choose backend hosting provider (see [BACKEND_HOSTING.md](./BACKEND_HOSTING.md))
  - Recommended: Railway (fastest setup)
  - Alternative: Render, Fly.io, DigitalOcean
- [ ] Set up MongoDB Atlas account
- [ ] Create MongoDB cluster
- [ ] Note MongoDB connection string
- [ ] Verify Resend API key

### 2. Deploy Backend

- [ ] Sign up for chosen hosting provider
- [ ] Connect GitHub repository
- [ ] Configure backend service:
  - Root directory: `backend`
  - Build command: (auto-detected for Python)
  - Start command: (auto-detected for FastAPI)
- [ ] Add environment variables:
  - [ ] `MONGO_URL` (from MongoDB Atlas)
  - [ ] `DB_NAME=makemydukaan`
  - [ ] `RESEND_API_KEY` (your Resend key)
  - [ ] `SENDER_EMAIL` (your email)
- [ ] Deploy backend
- [ ] Test backend health endpoint: `https://your-backend-url.com/api/health`
- [ ] Copy backend URL (you'll need this for frontend)

**Backend URL:** ___________________________________

### 3. Cloudflare Account Setup

- [ ] Create Cloudflare account (if you don't have one)
- [ ] Verify email address
- [ ] Log in to [Cloudflare Dashboard](https://dash.cloudflare.com/)

## 🚀 Migration Steps

### 4. Connect Repository to Cloudflare Pages

- [ ] Go to **Workers & Pages**
- [ ] Click **Create application** → **Pages**
- [ ] Click **Connect to Git**
- [ ] Authorize Cloudflare to access your GitHub
- [ ] Select repository: `makemydukaan-web/makemyDukaan`
- [ ] Click **Begin setup**

### 5. Configure Build Settings

Enter these settings exactly:

- [ ] **Production branch:** `main` (or `master`)
- [ ] **Framework preset:** None (or Create React App)
- [ ] **Build command:** `yarn build`
- [ ] **Build output directory:** `build`
- [ ] **Root directory:** `frontend`

### 6. Set Environment Variables

- [ ] Scroll to **Environment variables (advanced)**
- [ ] Click **Add variable**
- [ ] Add:
  ```
  Variable name: REACT_APP_BACKEND_URL
  Value: [Your backend URL from Step 2]
  ```
- [ ] **Important:** Use your backend URL without trailing slash
  - ✅ Correct: `https://your-backend.railway.app`
  - ❌ Wrong: `https://your-backend.railway.app/`

### 7. Initial Deployment

- [ ] Review all settings
- [ ] Click **Save and Deploy**
- [ ] Wait 2-5 minutes for build to complete
- [ ] Check build logs for any errors
- [ ] Note your Cloudflare Pages URL: `https://your-project-name.pages.dev`

**Cloudflare Pages URL:** ___________________________________

## ✅ Post-Deployment Testing

### 8. Test Basic Functionality

- [ ] Visit your Cloudflare Pages URL
- [ ] Check homepage loads correctly
- [ ] Test navigation between pages:
  - [ ] Home → Services
  - [ ] Home → About
  - [ ] Home → Portfolio
  - [ ] Home → Contact
- [ ] Refresh page on different routes (should not 404)
- [ ] Check browser console for errors (F12)

### 9. Test Contact Form

- [ ] Go to Contact page
- [ ] Fill out contact form with test data
- [ ] Submit form
- [ ] Verify success message appears
- [ ] Check email inbox for notification
- [ ] Check MongoDB Atlas:
  - [ ] Go to Collections
  - [ ] Verify test contact appears in `contacts` collection

### 10. Test Mobile Responsiveness

- [ ] Open site on mobile device (or use browser DevTools)
- [ ] Test navigation menu
- [ ] Test all page layouts
- [ ] Test contact form on mobile

### 11. Performance Check

- [ ] Run Lighthouse audit (Chrome DevTools)
- [ ] Check Performance score (should be 90+)
- [ ] Check all Core Web Vitals
- [ ] Test page load speed from different locations

## 🌐 Custom Domain Setup

### 12. Add Custom Domain (Optional)

If you want to use your own domain (e.g., `makemydukaan.in`):

- [ ] In Cloudflare Pages project, go to **Custom domains**
- [ ] Click **Set up a custom domain**
- [ ] Enter your domain: `makemydukaan.in`
- [ ] Add both:
  - [ ] `makemydukaan.in` (apex)
  - [ ] `www.makemydukaan.in` (www subdomain)

### 13. Update DNS

If domain is not on Cloudflare:
- [ ] Copy CNAME record provided
- [ ] Add to your DNS provider
- [ ] Wait for DNS propagation (5 mins - 48 hours)

If domain is on Cloudflare:
- [ ] DNS records automatically created
- [ ] Wait 5 minutes
- [ ] SSL certificate auto-provisioned

### 14. Verify Custom Domain

- [ ] Visit your custom domain
- [ ] Check HTTPS works (green padlock)
- [ ] Test all functionality again
- [ ] Verify www redirect works

## 🔒 Security & Performance

### 15. Verify Security Headers

- [ ] Open browser DevTools → Network tab
- [ ] Refresh page
- [ ] Check response headers include:
  - [ ] `X-Frame-Options: DENY`
  - [ ] `X-Content-Type-Options: nosniff`
  - [ ] `X-XSS-Protection: 1; mode=block`

### 16. Enable Cloudflare Features (Optional)

- [ ] Go to your Pages project → Settings
- [ ] Consider enabling:
  - [ ] Web Analytics (free)
  - [ ] Access Policy (if you need auth)
  - [ ] Custom headers (already have `_headers` file)

## 📊 Monitoring & Analytics

### 17. Set Up Analytics

**Cloudflare Web Analytics (Free):**
- [ ] Go to **Analytics** → **Web Analytics**
- [ ] Add your site
- [ ] Get tracking snippet
- [ ] Add to `frontend/public/index.html` if desired

**Google Analytics (if using):**
- [ ] Verify GA tracking code still works
- [ ] Update GA property settings if domain changed

## 🔄 Migration Finalization

### 18. Update References

- [ ] Update README if it references old Netlify URL
- [ ] Update any hardcoded URLs in social media
- [ ] Update URLs in Google Search Console
- [ ] Update URLs in any advertising campaigns
- [ ] Notify team members of new URL

### 19. Netlify Cleanup (When Ready)

**Don't rush this! Keep Netlify running for a few days as backup.**

After confirming Cloudflare works perfectly:
- [ ] Wait 3-7 days minimum
- [ ] Verify all traffic is working on Cloudflare
- [ ] Redirect Netlify to Cloudflare (optional)
- [ ] Delete Netlify site (or keep as backup)

### 20. DNS Final Switch

If using custom domain:
- [ ] Update DNS to point to Cloudflare
- [ ] Wait for DNS propagation
- [ ] Verify old URL redirects to new
- [ ] Monitor for 24-48 hours

## 🎉 Migration Complete!

### Post-Migration Monitoring

**First 24 hours:**
- [ ] Monitor error rates
- [ ] Check analytics for traffic patterns
- [ ] Test contact form multiple times
- [ ] Monitor backend logs for issues
- [ ] Check database for new entries

**First week:**
- [ ] Monitor uptime
- [ ] Check page load speeds
- [ ] Review any user feedback
- [ ] Verify email notifications working
- [ ] Check all integrations functioning

## 🚨 Troubleshooting

### If something goes wrong:

**Site won't load:**
1. Check build logs in Cloudflare dashboard
2. Verify build command and output directory
3. Check root directory is set to `frontend`

**Blank page:**
1. Check browser console for errors
2. Verify `REACT_APP_BACKEND_URL` is set
3. Check `_redirects` file is in `frontend/public/`

**API calls failing:**
1. Verify backend is running (visit `/api/health`)
2. Check `REACT_APP_BACKEND_URL` is correct
3. Verify backend CORS allows your domain
4. Check browser network tab for API errors

**Need more help?**
- See [CLOUDFLARE_DEPLOYMENT.md](./CLOUDFLARE_DEPLOYMENT.md)
- See [BACKEND_HOSTING.md](./BACKEND_HOSTING.md)
- Cloudflare Docs: https://developers.cloudflare.com/pages/

## 📝 Notes

Record any issues or learnings here:

_______________________________________________

_______________________________________________

_______________________________________________

---

**Migration completed on:** ___________________

**Migrated by:** ___________________

**New site URL:** ___________________

**Downtime:** ___________________

**Issues encountered:** ___________________
