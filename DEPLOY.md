# Deploy StarWell Website to Netlify

## What Changed

✅ **14-day trial** (was incorrectly 7 days)
✅ **No emojis** - clean, professional design
✅ **Helvetica/System fonts** - matches iOS app
✅ **Accurate features** - all claims verified against database
✅ **Professional copy** - from brand documentation
✅ **All images ready** - background images in /images/ folder

## Deploy to Netlify (2 Minutes)

### Step 1: Login to Netlify
Go to: https://app.netlify.com

### Step 2: Drag & Drop Deploy
1. Drag the entire folder `/Users/ryangreen/Desktop/StarWell-Website/` into Netlify
2. Wait 30-60 seconds for deployment
3. Netlify will give you a temporary URL like: `random-name-123.netlify.app`

### Step 3: Connect Your Domain
1. In Netlify, go to Site Settings → Domain Management
2. Add custom domain: `starwell-hh.com`
3. Follow Netlify's DNS instructions (should already be configured from previous deployment)

### Step 4: Verify Everything Works
Visit https://starwell-hh.com and check:

- ✅ Logo loads (top left)
- ✅ Background images show on hero section
- ✅ All text is clean (no emojis)
- ✅ "Try 14 Days Free" button shows correct trial period
- ✅ 25 protocols listed (not 42)
- ✅ Fonts look clean and professional
- ✅ Mobile responsive (check on phone)

## Files Included

```
StarWell-Website/
├── index.html                 ← Main website (UPDATED)
├── styles.css                 ← Shared styles
├── script.js                  ← Interactions
├── privacy.html               ← Privacy policy
├── terms.html                 ← Terms of service
├── support.html               ← Support page
├── robots.txt                 ← SEO
├── sitemap.xml                ← SEO
└── images/
    ├── logo.png               ← App icon
    ├── hero-background.png    ← Hero section
    ├── features-background.png
    ├── tech-background.png
    ├── journey-background.png
    ├── cosmic-background.png
    └── screenshot-*.png       ← App screenshots
```

## What's Different from Before

**Before:**
- Used Inter font (web font)
- Had emojis everywhere
- Said "7 days free"
- Generic marketing copy

**Now:**
- System fonts (Helvetica Neue/San Francisco)
- Clean numbers and symbols (7, 25, ★, ∞)
- Correct "14 days free"
- Professional copy from brand docs
- Accurate feature descriptions

## Troubleshooting

**Images not loading?**
- Make sure you dragged the ENTIRE folder (including /images/)
- Check browser console for 404 errors
- Try hard refresh: Cmd+Shift+R (Mac) or Ctrl+Shift+R (Windows)

**Domain not working?**
- DNS can take up to 48 hours to propagate
- Check DNS settings in GoDaddy match Netlify's instructions
- Try visiting the Netlify temporary URL first

**Mobile looks weird?**
- Website is responsive and should work on all devices
- Test on actual phone, not just browser dev tools

## Need Help?

Netlify Support: https://answers.netlify.com
