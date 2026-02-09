# MakeMyDukaan - Digital Solutions for Indian Businesses

A modern, full-stack web application helping Indian SMBs establish their digital presence with professional websites, performance marketing, and SEO services.

## 🚀 Tech Stack

### Frontend
- **React 18** - Modern UI framework
- **React Router** - Client-side routing
- **Tailwind CSS** - Utility-first styling
- **Framer Motion** - Smooth animations
- **Lucide Icons** - Beautiful icon library

### Backend
- **FastAPI** - High-performance Python API
- **MongoDB** - NoSQL database
- **Resend** - Transactional emails
- **Pydantic** - Data validation

## 📁 Project Structure

```
makemyDukaan/
├── frontend/              # React application
│   ├── public/
│   │   ├── _redirects    # SPA routing (Cloudflare/Netlify compatible)
│   │   └── _headers      # Security headers
│   ├── src/
│   │   ├── components/   # Reusable components
│   │   ├── pages/        # Page components
│   │   ├── App.js        # Main app component
│   │   └── index.js      # Entry point
│   └── package.json
├── backend/              # FastAPI application
│   ├── server.py         # API routes
│   ├── requirements.txt  # Python dependencies
│   └── .env              # Environment variables
├── CLOUDFLARE_DEPLOYMENT.md  # Cloudflare Pages guide
├── BACKEND_HOSTING.md        # Backend hosting options
└── netlify.toml              # Netlify config (legacy)
```

## 🎯 Features

- **Responsive Design** - Mobile-first, works on all devices
- **Modern UI/UX** - Smooth animations and transitions
- **Contact Form** - Lead capture with email notifications
- **Newsletter Subscription** - Build your mailing list
- **SEO Optimized** - Proper meta tags and structure
- **Fast Performance** - Optimized for speed
- **Secure** - Security headers and best practices

## 🛠️ Local Development

### Prerequisites
- Node.js 18+ and Yarn
- Python 3.9+
- MongoDB (local or Atlas)

### Frontend Setup

```bash
cd frontend
yarn install
cp .env.example .env  # Create and configure .env
yarn start
```

Frontend runs on http://localhost:3000

### Backend Setup

```bash
cd backend
pip install -r requirements.txt
cp .env.example .env  # Create and configure .env
python server.py
```

Backend runs on http://localhost:8001

### Environment Variables

#### Frontend (.env)
```
REACT_APP_BACKEND_URL=http://localhost:8001
```

#### Backend (.env)
```
MONGO_URL=mongodb://localhost:27017
DB_NAME=makemydukaan
RESEND_API_KEY=your_resend_api_key
SENDER_EMAIL=your_email@domain.com
```

## 🌐 Deployment

### Cloudflare Pages (Recommended)

This project is optimized for **Cloudflare Pages** deployment.

**Quick Start:**
1. Push code to GitHub
2. Connect repository to Cloudflare Pages
3. Configure build settings:
   - Build command: `yarn build`
   - Build output: `build`
   - Root directory: `frontend`
4. Add environment variable: `REACT_APP_BACKEND_URL`
5. Deploy!

📖 **[Complete Cloudflare Deployment Guide](./CLOUDFLARE_DEPLOYMENT.md)**

### Backend Hosting

The backend (FastAPI) needs separate hosting:
- **Railway** (Recommended) - 5-minute setup, free tier
- **Render** - Free tier available
- **Fly.io** - Global deployment
- **DigitalOcean** - Traditional hosting

📖 **[Backend Hosting Guide](./BACKEND_HOSTING.md)**

### Netlify (Legacy)

The project was originally configured for Netlify and still works:
- Build command: `yarn build`
- Publish directory: `frontend/build`
- Root directory: `frontend`

Configuration file: `netlify.toml`

## 🔒 Security

Security headers are automatically applied via `frontend/public/_headers`:
- X-Frame-Options: DENY
- X-Content-Type-Options: nosniff
- X-XSS-Protection: enabled
- Referrer-Policy: strict-origin-when-cross-origin
- Permissions-Policy: restrictive

## 📊 Performance

- **Lighthouse Score:** 90+ across all metrics
- **Bundle Size:** Optimized with code splitting
- **CDN:** Global distribution via Cloudflare
- **Caching:** Smart cache headers for static assets

## 🧪 Testing

```bash
# Frontend tests
cd frontend
yarn test

# Backend tests
cd backend
pytest
```

## 📱 Browser Support

- Chrome (last 2 versions)
- Firefox (last 2 versions)
- Safari (last 2 versions)
- Edge (last 2 versions)
- Mobile browsers (iOS Safari, Chrome Mobile)

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is private and proprietary.

## 📞 Contact

- **Website:** [makemydukaan.in](https://makemydukaan.in)
- **Email:** hello@makemydukaan.in
- **Phone:** +91 96631 12394
- **WhatsApp:** [Chat with us](https://wa.me/9663112394)

## 🙏 Acknowledgments

- React team for the amazing framework
- Tailwind CSS for the utility-first approach
- FastAPI for the blazing-fast backend
- Cloudflare for the global CDN

---

Made with ❤️ for Indian Businesses