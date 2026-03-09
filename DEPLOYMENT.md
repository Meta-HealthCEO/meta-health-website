# Meta Health Website - Deployment Guide

## 🚀 Quick Deploy to Vercel

### Option 1: Vercel Dashboard (Recommended)

1. **Push to GitHub**
   ```bash
   # Create a new repository on GitHub first, then:
   git remote add origin https://github.com/YOUR_USERNAME/meta-health-website.git
   git branch -M main
   git push -u origin main
   ```

2. **Import to Vercel**
   - Go to [vercel.com](https://vercel.com)
   - Click "Import Project"
   - Select your GitHub repository
   - Vercel will auto-detect Vite settings
   - Click "Deploy"
   - Done! Your site will be live in ~1 minute

3. **Custom Domain**
   - In Vercel project settings, go to "Domains"
   - Add `meta-health.co.za`
   - Follow DNS configuration instructions
   - Add these DNS records at your domain provider:
     ```
     Type: A
     Name: @
     Value: 76.76.21.21
     
     Type: CNAME
     Name: www
     Value: cname.vercel-dns.com
     ```

### Option 2: Vercel CLI

```bash
# Install Vercel CLI globally
npm install -g vercel

# Deploy from project directory
cd C:\Users\corpo\clawd\meta-health-website
vercel

# For production deployment
vercel --prod
```

## 🏗️ Build Commands

```bash
# Development server
npm run dev

# Production build
npm run build

# Preview production build locally
npm run preview
```

## 🔧 Environment Variables

Currently, no environment variables are required. The site is static.

If you add form submissions or API calls later:
- Add `.env` file (already in `.gitignore`)
- In Vercel: Settings → Environment Variables

## 📦 Project Structure

```
meta-health-website/
├── src/
│   ├── components/
│   │   ├── Hero.tsx              # Main hero section
│   │   ├── Features.tsx          # 6 core features
│   │   ├── AIAutomation.tsx      # AI capabilities showcase
│   │   ├── ForWho.tsx            # Target audiences
│   │   ├── Modules.tsx           # 25+ modules grid
│   │   ├── HowItWorks.tsx        # 4-step process
│   │   ├── Pricing.tsx           # Enterprise pricing
│   │   ├── CTA.tsx               # Final call-to-action
│   │   └── Footer.tsx            # Footer with links
│   ├── App.tsx                   # Main app component
│   ├── main.tsx                  # Entry point
│   └── index.css                 # Global styles + Tailwind
├── public/                       # Static assets
├── index.html                    # HTML template
├── tailwind.config.js            # Tailwind configuration
├── vite.config.ts                # Vite configuration
└── vercel.json                   # Vercel deployment config
```

## 🎨 Customization

### Colors
Edit `tailwind.config.js` to change the color scheme:
```js
colors: {
  primary: { /* blue shades */ },
  teal: { /* teal shades */ }
}
```

### Content
Each component is in `src/components/`. Edit the content directly in the component files.

### Contact Information
Update contact info in:
- `Footer.tsx` (email, phone)
- `Pricing.tsx` (demo request email)
- `CTA.tsx` (demo request email)

## 🔍 SEO

Already configured:
- ✅ Meta title and description
- ✅ Open Graph tags
- ✅ Semantic HTML structure
- ✅ Mobile responsive
- ✅ Fast load times (Vite + Tailwind)

To improve SEO further:
1. Add Google Analytics (create account, add tracking code)
2. Submit sitemap to Google Search Console
3. Add structured data (JSON-LD) for organization info
4. Create a blog for content marketing

## 📊 Analytics (Optional)

To add Google Analytics:

1. Create GA4 property at [analytics.google.com](https://analytics.google.com)
2. Get your Measurement ID (G-XXXXXXXXXX)
3. Add to `index.html` in `<head>`:
   ```html
   <script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
   <script>
     window.dataLayer = window.dataLayer || [];
     function gtag(){dataLayer.push(arguments);}
     gtag('js', new Date());
     gtag('config', 'G-XXXXXXXXXX');
   </script>
   ```

## 🐛 Troubleshooting

### Build fails on Vercel
- Check build logs in Vercel dashboard
- Ensure Node version is 18+ (set in Vercel settings if needed)
- Try building locally first: `npm run build`

### Styles not loading
- Clear browser cache
- Check that Tailwind CSS is properly configured
- Verify `tailwind.config.js` content paths

### Custom domain not working
- Wait 24-48 hours for DNS propagation
- Verify DNS records are correct
- Use `nslookup meta-health.co.za` to check

## 📞 Support

Need help? Contact:
- Email: info@meta-health.co.za
- GitHub Issues: (create issues in your repo)

## ✅ Pre-Launch Checklist

Before going live:

- [ ] Update all contact information (email, phone)
- [ ] Test all links and buttons
- [ ] Test on mobile devices
- [ ] Test on different browsers (Chrome, Safari, Firefox)
- [ ] Add Google Analytics
- [ ] Configure custom domain
- [ ] Test email links work
- [ ] Review all content for accuracy
- [ ] Test page load speed
- [ ] Configure SSL (automatic with Vercel)

## 🎯 Next Steps After Launch

1. **Monitor Performance**
   - Use Vercel Analytics
   - Set up Google Search Console
   - Track conversion rates

2. **Content Marketing**
   - Start a blog (consider adding blog section)
   - Create case studies
   - Share on social media

3. **Conversion Optimization**
   - A/B test CTAs
   - Add live chat widget
   - Create demo video

4. **Lead Capture**
   - Add form to capture leads
   - Integrate with CRM
   - Set up email autoresponder

## 📝 Notes

- The site is 100% static (no backend required)
- All animations are CSS-based (no JavaScript libraries)
- Optimized for performance (fast load times)
- Mobile-first responsive design
- Accessible (semantic HTML, proper contrast ratios)

---

Built with ❤️ for Meta Health
