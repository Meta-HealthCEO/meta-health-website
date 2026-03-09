# Meta Health Marketing Website

A modern, comprehensive marketing website for Meta Health - a complete healthcare technology ecosystem.

## 🚀 What is Meta Health?

Meta Health is a **complete healthcare ecosystem** consisting of three integrated components:

### 1. **Practice Management Platform** (Web)
- Full practice management for medical practices, clinics, and hospitals
- Hospital management system
- Medical aid billing (South African market - GoodX integration)
- 25+ integrated modules
- **AI-powered throughout** - clinical notes, billing, scheduling, insights

### 2. **Meta Health One Mobile App** (iOS + Android)
- **Medical device integration** - Bluetooth connectivity to Linktop devices
- **AI voice chatbot** - 24/7 health assistant
- **Telehealth consultations** - HD video calls with doctors
- **Health metrics tracking** - Vitals, clinical data, trends
- **AI meal tracker** - Nutrition tracking
- **GetFit wellness** - Fitness programs
- **Medication management** - Prescriptions and reminders
- **Medical history** - Complete records access
- **Appointments & booking**
- **Document storage**
- **In-app payments**
- **Wellness feed**

### 3. **Medical Device Integration** (Hardware)
Linktop medical devices via Bluetooth:
- Blood pressure monitors
- Digital thermometers
- Pulse oximeters (SpO2, heart rate)
- Real-time sync to platform

## 🎯 What Makes Meta Health Unique

Unlike other healthcare software, Meta Health is a **complete connected ecosystem**:
- **Practice Management** (doctors) + **Mobile App** (patients) + **Device Integration** (hardware)
- Real-time data flow from patient's home → device → app → cloud → doctor's system
- AI automation throughout the entire platform
- Built specifically for the South African market

## 🎨 Website Design

- **Healthcare color palette**: Professional blues, teals, and greens
- **Dark/light sections**: Visual variety with gradients
- **Mobile responsive**: Works perfectly on all devices
- **Modern SaaS design**: Clean, professional, conversion-focused
- **No placeholder text**: Every word is real, relevant content

## 🛠️ Tech Stack

- **Framework**: React + Vite + TypeScript
- **Styling**: Tailwind CSS v3
- **Build**: Vite (fast HMR, optimized builds)
- **Deployment**: Vercel-ready

## 📦 Installation

```bash
npm install
```

## 🏃‍♂️ Development

```bash
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

## 🏗️ Build

```bash
npm run build
```

## 🚀 Deploy to Vercel

### Quick Deploy

1. Push to GitHub
2. Import in Vercel dashboard
3. Deploy (auto-detected settings)

### Vercel CLI

```bash
npm install -g vercel
vercel --prod
```

See **DEPLOYMENT.md** for detailed deployment instructions.

## 📄 Website Sections

1. **Hero** - Main value proposition: "Complete Healthcare Platform Powered by AI"
2. **Features** - 6 core products (Practice Management, Hospital, Telemedicine, Monitoring, Billing, AI)
3. **Ecosystem** - Explains the 3-in-1 platform (Web + Mobile + Devices)
4. **Mobile App** - Meta Health One app features and screenshots
5. **Device Integration** - Linktop medical devices and how they work
6. **AI Automation** - AI capabilities throughout the platform
7. **For Who** - Target audiences (Practices, Clinics, Hospitals)
8. **Modules** - 25+ integrated modules showcase
9. **How It Works** - 4-step onboarding process
10. **Pricing** - Enterprise contact form
11. **CTA** - Final conversion section
12. **Footer** - Links and contact info

## 🎯 Key Messaging

The website makes it **crystal clear** that Meta Health is:
- A **complete healthcare ecosystem** (not just software)
- **Practice Management** + **Mobile App** + **Device Integration**
- **Fully AI-automated** (clinical notes, billing, scheduling, insights)
- For **practices, clinics, and hospitals**
- Built for the **South African market** (medical aid integration)
- **Enterprise-grade** with professional tone

## 📝 Components

```
src/components/
├── Hero.tsx                  # Hero section with value prop
├── Features.tsx              # 6 core features
├── Ecosystem.tsx             # 3-in-1 platform explanation
├── MobileApp.tsx             # Meta Health One mobile app
├── DeviceIntegration.tsx     # Linktop device integration
├── AIAutomation.tsx          # AI capabilities showcase
├── ForWho.tsx                # Target audiences
├── Modules.tsx               # 25+ modules grid
├── HowItWorks.tsx            # 4-step process
├── Pricing.tsx               # Enterprise pricing
├── CTA.tsx                   # Final call-to-action
└── Footer.tsx                # Footer with links
```

## 📞 Contact Information

Update contact details in:
- `src/components/Footer.tsx`
- `src/components/Pricing.tsx`
- `src/components/CTA.tsx`

Current contact:
- Email: info@meta-health.co.za
- Phone: +27 12 345 6789 (update as needed)

## 🔍 SEO Optimization

Already configured:
- ✅ Meta title and description
- ✅ Open Graph tags
- ✅ Semantic HTML structure
- ✅ Mobile responsive
- ✅ Fast load times (Vite + Tailwind)

## 📊 Performance

- Fast build times with Vite
- Optimized production bundles
- Minimal JavaScript (React + Tailwind only)
- CSS-based animations (no heavy libraries)

## 🎨 Customization

### Update Colors

Edit `tailwind.config.js`:
```js
colors: {
  primary: { /* blue shades */ },
  teal: { /* teal shades */ }
}
```

### Update Content

All content is in component files - no CMS needed. Just edit the `.tsx` files directly.

## 📝 Next Steps After Deployment

1. **Add Google Analytics** - Track visitors and conversions
2. **Set up Google Search Console** - Monitor SEO performance
3. **Add live chat** - Help visitors get answers instantly
4. **Create demo video** - Show the platform in action
5. **Add case studies** - Real customer success stories
6. **Blog section** - Content marketing for SEO

## 🐛 Troubleshooting

See **DEPLOYMENT.md** for detailed troubleshooting steps.

Common issues:
- **Build fails**: Check Node version (18+)
- **Styles not loading**: Clear cache, check Tailwind config
- **Dev server won't start**: Check port 5173 availability

## 📞 Support

Need help? Contact:
- Email: info@meta-health.co.za
- GitHub Issues: Create issues in your repo

## ✅ Production Checklist

Before deploying to meta-health.co.za:

- [ ] Update all contact information (email, phone)
- [ ] Test all sections on desktop
- [ ] Test all sections on mobile
- [ ] Test on Chrome, Safari, Firefox, Edge
- [ ] Verify all links work
- [ ] Test email CTAs
- [ ] Check page load speed
- [ ] Configure custom domain in Vercel
- [ ] Add Google Analytics
- [ ] Set up Google Search Console

## 📝 License

© 2024 Meta Health. All rights reserved.

---

**Built with ❤️ for Meta Health - The Complete Healthcare Ecosystem**
