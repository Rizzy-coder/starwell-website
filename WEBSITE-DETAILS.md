# 🌟 StarWell Website - Complete Configuration Details

**Last Updated:** November 2, 2025
**Version:** 1.0.0

---

## 🌐 DOMAIN & HOSTING

### Domain Information

| Detail | Value |
|--------|-------|
| **Primary Domain** | starwell-hh.com |
| **WWW Domain** | www.starwell-hh.com |
| **Domain Registrar** | GoDaddy |
| **Registration Date** | 2025 |
| **Auto-Renew** | Check GoDaddy settings |

### Hosting Information

| Detail | Value |
|--------|-------|
| **Hosting Provider** | Netlify |
| **Plan** | Free (Starter) |
| **Site Name** | starwell-hh |
| **Netlify URL** | https://starwell-hh.netlify.app |
| **Production URL** | https://starwell-hh.com |
| **Deployment Method** | Manual (Drag & Drop) |
| **Account Email** | hermescloudhorizon@gmail.com |

### Netlify Site ID

Check in Netlify dashboard under Site Settings → General

---

## 🔧 DNS CONFIGURATION

### DNS Records (Configured in GoDaddy)

#### A Record (Root Domain)
```
Type: A
Name: @
Value: 75.2.60.5
TTL: 600 seconds
Purpose: Points starwell-hh.com to Netlify
```

#### CNAME Record (WWW Subdomain)
```
Type: CNAME
Name: www
Value: starwell-hh.netlify.app
TTL: 600 seconds
Purpose: Points www.starwell-hh.com to Netlify
```

#### Nameservers (GoDaddy Default)
```
Primary: ns23.domaincontrol.com
Secondary: ns24.domaincontrol.com
```

### DNS Propagation

- **Expected Time:** 10-30 minutes
- **Maximum Time:** 24-48 hours
- **Check Tool:** https://www.whatsmydns.net/

---

## 🔒 SSL/HTTPS CONFIGURATION

### SSL Certificate

| Detail | Value |
|--------|-------|
| **Provider** | Netlify (Let's Encrypt) |
| **Type** | Free SSL/TLS Certificate |
| **Auto-Renewal** | Yes (automatic) |
| **Force HTTPS** | Enabled |
| **Certificate Status** | Check in Netlify → Domain Settings |

### HTTPS URLs

- **Production:** https://starwell-hh.com
- **WWW:** https://www.starwell-hh.com
- **Netlify:** https://starwell-hh.netlify.app

All HTTP traffic automatically redirects to HTTPS.

---

## 🏢 COMPANY INFORMATION

### Legal Entity

```
Company Name: Hermes Horizon T/A StarWell by Hermes Horizon
ABN: 12273187245
Address: SUITE 329/98-100 ELIZABETH STREET
         MELBOURNE, VIC 3000
         AUSTRALIA
```

### Contact Information

| Type | Email |
|------|-------|
| **General Contact** | hermescloudhorizon@gmail.com |
| **Support** | hermescloudhorizon@gmail.com |
| **Privacy Inquiries** | hermescloudhorizon@gmail.com |
| **Legal** | hermescloudhorizon@gmail.com |

**Note:** Consider setting up dedicated email addresses:
- support@starwell-hh.com
- privacy@starwell-hh.com
- legal@starwell-hh.com

---

## 📱 APP INFORMATION

### App Store Listing

| Detail | Value |
|--------|-------|
| **App Name** | StarWell |
| **Developer** | Hermes Horizon |
| **Platform** | iOS (iPhone & iPad) |
| **Minimum iOS** | 15.0+ |
| **Category** | Health & Fitness / Lifestyle |
| **Price Model** | Free with Premium Subscription |

### App Store URL

**Current (Placeholder):** https://apps.apple.com/app/starwell

**UPDATE THIS when app is published!**

To update:
1. Get actual App Store URL from App Store Connect
2. Update in `index.html` (search for "apps.apple.com")
3. Upload updated index.html to Netlify

### Premium Pricing

- **Monthly:** $9.99 USD
- **Annual:** $79.99 USD (if offered)
- **Payment Processor:** Apple In-App Purchase
- **Subscription Manager:** RevenueCat

---

## 🎨 BRAND ASSETS

### Brand Colors

```css
Starwell Gold:   #D4AF37  (Primary accents, CTAs)
Cosmic Purple:   #7B2CBF  (Primary brand color)
Starwell Teal:   #14B8A6  (Accent highlights)
Deep Space Navy: #0F172A  (Dark backgrounds)
```

### Typography

- **Display/Headings:** Playfair Display (serif)
- **Body Text:** Inter (sans-serif)
- **Loading:** Google Fonts

### Logo

Currently using: ✨ emoji placeholder

**Future:** Replace with sacred geometry mandala SVG
- Location to add: `/images/logo.svg`
- Update in: `index.html` (search for "logo-icon")

---

## 📄 WEBSITE PAGES

### Live Pages

| Page | URL | File |
|------|-----|------|
| **Home** | / | index.html |
| **Privacy Policy** | /privacy.html | privacy.html |
| **Terms of Service** | /terms.html | terms.html |
| **Support Center** | /support.html | support.html |

### SEO Files

| File | Purpose |
|------|---------|
| **sitemap.xml** | Search engine sitemap |
| **robots.txt** | Crawler instructions |

### Assets

All images stored in: `/images/`

**Current screenshots:**
- screenshot-hero.png
- step-1.png
- step-2.png
- step-3.png
- step-4.png

**Still needed:**
- app-store-badge.svg (Download from Apple)
- favicon-32x32.png (Generate from app icon)
- favicon-16x16.png (Generate from app icon)
- apple-touch-icon.png (Generate from app icon)

---

## 🌍 SOCIAL MEDIA

### Accounts to Create

| Platform | Suggested Handle | URL Format |
|----------|-----------------|------------|
| **Twitter/X** | @starwellapp | https://twitter.com/starwellapp |
| **Instagram** | @starwellapp | https://instagram.com/starwellapp |
| **TikTok** | @starwellapp | https://tiktok.com/@starwellapp |
| **Facebook** | starwellapp | https://facebook.com/starwellapp |

**To Update on Website:**
1. Create social media accounts
2. Edit footer in `index.html`
3. Update social media links
4. Upload to Netlify

---

## 📊 ANALYTICS (Optional)

### Google Analytics 4

**Not yet configured**

**To set up:**
1. Go to: https://analytics.google.com/
2. Create account and property
3. Get Measurement ID (G-XXXXXXXXXX)
4. Add tracking code to `index.html` before `</head>`
5. Re-upload to Netlify

### Netlify Analytics

**Available (Paid):** $9/month
- Page views
- Unique visitors
- Top pages
- Bandwidth usage

**Not required** - Google Analytics is free and sufficient.

---

## 🔄 HOW TO UPDATE THE WEBSITE

### Method 1: Drag & Drop (Current)

1. Edit files locally on your Mac
2. Go to Netlify dashboard
3. Click **"Deploys"** tab
4. Drag updated files/folder to drop zone
5. Wait ~1 minute for deployment
6. Changes are live!

### Method 2: Git Integration (Recommended for Future)

**Setup:**
1. Create GitHub repository
2. Push website files to GitHub
3. Connect Netlify to GitHub repo
4. Enable automatic deployments

**Benefits:**
- Version control
- Automatic deployments on push
- Rollback capability
- Collaboration support

---

## 🛠️ NETLIFY CONFIGURATION

### Build Settings

**Not applicable** - Using manual deployment (no build process)

### Environment Variables

None currently needed (static site)

### Deploy Settings

| Setting | Value |
|---------|-------|
| **Auto-publish** | Yes (when manually deployed) |
| **Branch deploys** | Not applicable (manual) |
| **Deploy previews** | Not applicable (manual) |

### Form Handling

**Not currently enabled**

To enable contact forms:
1. Add `data-netlify="true"` to form tag
2. Forms will be captured by Netlify
3. View submissions in Netlify dashboard

### Bandwidth & Limits

**Free tier includes:**
- 100 GB bandwidth/month
- 300 build minutes/month (not applicable)
- Unlimited sites
- Unlimited serverless function invocations (125k requests/month)

**Current usage:** Well within free tier limits

---

## 🎯 SEO CONFIGURATION

### Meta Tags

All pages include:
- Title tags
- Meta descriptions
- Open Graph tags (Facebook/LinkedIn)
- Twitter Card tags
- Viewport meta tag (mobile)

### Sitemap

**Location:** https://starwell-hh.com/sitemap.xml

**Pages included:**
- Homepage
- Privacy Policy
- Terms of Service
- Support Center

### Robots.txt

**Location:** https://starwell-hh.com/robots.txt

**Configuration:** Allows all crawlers, references sitemap

### Google Search Console

**Not yet configured**

**To set up:**
1. Go to: https://search.google.com/search-console
2. Add property: starwell-hh.com
3. Verify ownership (HTML tag method)
4. Submit sitemap
5. Monitor indexing

---

## ✅ POST-LAUNCH CHECKLIST

### Immediate (After DNS Propagates)

- [ ] Verify https://starwell-hh.com loads correctly
- [ ] Check SSL certificate (padlock in browser)
- [ ] Test all navigation links
- [ ] Test on mobile devices
- [ ] Verify all images load
- [ ] Check all pages (privacy, terms, support)
- [ ] Test contact email links
- [ ] Check browser console for errors (F12)

### Soon After Launch

- [ ] Update App Store link (when app publishes)
- [ ] Add App Store badge image
- [ ] Generate and add favicons
- [ ] Set up Google Analytics
- [ ] Submit to Google Search Console
- [ ] Create social media accounts
- [ ] Update social links in footer
- [ ] Consider setting up branded email addresses

### Ongoing Maintenance

- [ ] Monitor Netlify bandwidth usage
- [ ] Check analytics monthly
- [ ] Update screenshots when app updates
- [ ] Keep legal pages current
- [ ] Respond to support inquiries
- [ ] Renew domain yearly (GoDaddy)

---

## 🔐 SECURITY

### SSL/TLS

- ✅ HTTPS enforced
- ✅ Automatic certificate renewal
- ✅ Modern TLS protocols

### Headers

Configured in `.htaccess`:
- X-Content-Type-Options: nosniff
- X-Frame-Options: SAMEORIGIN
- X-XSS-Protection: 1; mode=block
- Referrer-Policy: strict-origin-when-cross-origin

### Best Practices

- No sensitive data stored on website
- All forms should use HTTPS
- No inline JavaScript execution
- External resources loaded securely

---

## 💰 COSTS BREAKDOWN

### Monthly Costs

| Item | Cost |
|------|------|
| **Domain (GoDaddy)** | ~$1.25/month ($15/year) |
| **Hosting (Netlify)** | $0 (Free tier) |
| **SSL Certificate** | $0 (Included) |
| **CDN** | $0 (Included) |
| **Total** | ~$1.25/month |

### Annual Costs

| Item | Cost |
|------|------|
| **Domain Registration** | ~$15-20/year |
| **Hosting** | $0/year |
| **Total** | ~$15-20/year |

**Savings vs GoDaddy Web Hosting:** ~$72-120/year

---

## 📞 SUPPORT CONTACTS

### Netlify Support

- **Documentation:** https://docs.netlify.com/
- **Community:** https://answers.netlify.com/
- **Status:** https://www.netlifystatus.com/
- **Support:** Available in dashboard (free tier has community support)

### GoDaddy Support

- **Phone:** 1-480-505-8877
- **Chat:** Available 24/7 in dashboard
- **Help Center:** https://www.godaddy.com/help

### Emergency Contacts

| Issue | Contact |
|-------|---------|
| **Domain issues** | GoDaddy support |
| **Hosting/SSL issues** | Netlify support |
| **Website code issues** | Developer (you!) |
| **DNS issues** | GoDaddy DNS support |

---

## 📝 VERSION HISTORY

### Version 1.0.0 (November 2, 2025)

**Initial Launch**
- ✅ Complete website design
- ✅ Privacy policy page
- ✅ Terms of service page
- ✅ Support center page
- ✅ Deployed to Netlify
- ✅ Custom domain configured
- ✅ SSL/HTTPS enabled
- ✅ Responsive design
- ✅ SEO optimized

**Pending:**
- ⏳ App Store badge
- ⏳ Favicons
- ⏳ Real App Store link
- ⏳ Social media integration
- ⏳ Analytics setup

---

## 🚀 FUTURE ENHANCEMENTS

### Short-term (Next 1-3 months)

- Add actual App Store link
- Create social media accounts
- Set up Google Analytics
- Add blog section (optional)
- Create email newsletter signup (optional)

### Medium-term (3-6 months)

- Add testimonials from real users
- Create video demo embed
- Add press/media kit section
- Implement contact form
- Add FAQ expansion

### Long-term (6-12 months)

- Blog with breathwork/astrology content
- User community features
- Integration with app features
- Multilingual support (if expanding internationally)
- A/B testing for conversion optimization

---

## 📚 IMPORTANT FILES & LOCATIONS

### On Your Mac

```
/Users/ryangreen/Desktop/StarWell-Website/
├── index.html
├── privacy.html
├── terms.html
├── support.html
├── styles.css
├── script.js
├── sitemap.xml
├── robots.txt
├── .htaccess
├── images/
├── .env.example (this configuration)
├── WEBSITE-DETAILS.md (this file)
├── README.md
├── DEPLOY-NETLIFY-FREE.md
├── DEPLOY-GITHUB-PAGES-FREE.md
└── DEPLOY-TO-GODADDY.md
```

### On Netlify

All files deployed to Netlify root directory.

### On GoDaddy

DNS records only (no website files hosted there).

---

## ✨ QUICK REFERENCE

### Website URLs

- **Production:** https://starwell-hh.com
- **Netlify:** https://starwell-hh.netlify.app
- **Admin:** https://app.netlify.com/

### Key Accounts

- **Netlify:** hermescloudhorizon@gmail.com
- **GoDaddy:** hermescloudhorizon@gmail.com
- **GitHub:** (if you set up Git deployment)

### Important Settings

- **Domain:** starwell-hh.com (GoDaddy)
- **Hosting:** Netlify (Free)
- **SSL:** Auto-enabled
- **DNS:** Configured in GoDaddy

---

**Last Updated:** November 2, 2025 at 10:15 PM
**Maintained By:** Hermes Horizon
**Status:** ✅ Live and Operational (pending DNS propagation)
