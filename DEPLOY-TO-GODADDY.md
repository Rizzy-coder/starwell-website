# 🚀 Deploy StarWell to GoDaddy - Complete Guide

**Domain:** starwell-hh.com

This guide provides step-by-step instructions to deploy your StarWell website to GoDaddy hosting.

---

## 📋 Pre-Deployment Checklist

Before you begin, ensure you have:

- [x] All website files ready (index.html, styles.css, script.js, etc.)
- [x] Privacy policy page created
- [x] Terms of service page created
- [x] Support page created
- [x] Screenshots organized in images folder
- [x] .htaccess file for SSL redirect
- [ ] App Store badge downloaded (see images/README.md)
- [ ] Favicons generated (see images/README.md)
- [ ] GoDaddy account access
- [ ] FTP credentials from GoDaddy

---

## 🔑 Step 1: Get Your GoDaddy FTP Credentials

### Option A: Via GoDaddy Dashboard

1. Go to https://godaddy.com and log in
2. Click **"My Products"** in the top menu
3. Find your **Web Hosting** plan for starwell-hh.com
4. Click **"Manage"** next to the hosting plan
5. Look for **"FTP/SFTP"** section (might be under Settings or Advanced)
6. Click **"Show"** or **"Create FTP User"**

### Information You'll Need:

Write down these details:
- **FTP Hostname:** _________________ (e.g., ftp.starwell-hh.com or just starwell-hh.com)
- **FTP Username:** _________________ (e.g., starwell@starwell-hh.com)
- **FTP Password:** _________________ (you may need to reset it)
- **FTP Port:** 21 (or 22 for SFTP - more secure)
- **Root Directory:** /public_html

### Option B: Contact GoDaddy Support

If you can't find FTP settings:
- Call: 1-480-505-8877
- Chat: Available 24/7 in GoDaddy dashboard
- Ask for: "FTP credentials for my web hosting"

---

## 💻 Step 2: Choose Your Upload Method

### Method 1: FileZilla (Recommended - Free & Easy)

**Download FileZilla:**
1. Visit: https://filezilla-project.org/download.php?type=client
2. Download FileZilla Client for Mac
3. Install and open FileZilla

**Connect to GoDaddy:**
1. Open FileZilla
2. Enter at the top:
   - **Host:** Your FTP hostname (e.g., starwell-hh.com)
   - **Username:** Your FTP username
   - **Password:** Your FTP password
   - **Port:** 21 (or 22 for SFTP)
3. Click **"Quickconnect"**
4. You should see your server files on the right side

**Navigate to Website Root:**
- On the right side (Remote Site), find and open `/public_html/` folder
- This is where your website files will go

### Method 2: Mac Finder (Built-in)

1. Open **Finder**
2. Press **⌘K** (or Go → Connect to Server)
3. Enter: `ftp://yourusername@starwell-hh.com`
4. Click **Connect**
5. Enter your FTP password
6. Navigate to the `public_html` folder

### Method 3: GoDaddy File Manager (No FTP Client Needed)

1. Log in to GoDaddy
2. Go to My Products → Web Hosting → Manage
3. Click **"File Manager"** (usually under "Files" section)
4. Navigate to `/public_html/`
5. Click **"Upload"** button
6. Select files to upload

---

## 📦 Step 3: Prepare Files for Upload

### Complete What's Missing:

Before uploading, you need to:

#### 1. Download App Store Badge
- Visit: https://developer.apple.com/app-store/marketing/guidelines/
- Download "Download on the App Store" SVG badge
- Save as: `images/app-store-badge.svg`

#### 2. Generate Favicons
- Visit: https://realfavicongenerator.net/
- Upload your StarWell app icon (1024x1024)
- Download generated favicons
- Place in `images/` folder:
  - favicon-32x32.png
  - favicon-16x16.png
  - apple-touch-icon.png

### Your File Structure Should Look Like:

```
StarWell-Website/
├── index.html ✅
├── styles.css ✅
├── script.js ✅
├── privacy.html ✅
├── terms.html ✅
├── support.html ✅
├── .htaccess ✅
├── sitemap.xml ✅
├── robots.txt ✅
└── images/
    ├── screenshot-hero.png ✅
    ├── step-1.png ✅
    ├── step-2.png ✅
    ├── step-3.png ✅
    ├── step-4.png ✅
    ├── app-store-badge.svg ⏳
    ├── favicon-32x32.png ⏳
    ├── favicon-16x16.png ⏳
    └── apple-touch-icon.png ⏳
```

---

## 🚀 Step 4: Upload Files to GoDaddy

### Using FileZilla:

1. **Left side (Local Site):** Navigate to `/Users/ryangreen/Desktop/StarWell-Website/`
2. **Right side (Remote Site):** Make sure you're in `/public_html/`
3. **IMPORTANT:** Delete any existing files in `/public_html/` that came with GoDaddy (like "coming soon" pages)
4. **Select ALL files** from the left side:
   - index.html
   - styles.css
   - script.js
   - privacy.html
   - terms.html
   - support.html
   - .htaccess
   - sitemap.xml
   - robots.txt
   - images/ (entire folder)
5. **Drag and drop** to the right side
6. **Wait** for upload to complete (watch progress at bottom)
7. **Verify** all files uploaded successfully

### Using Mac Finder:

1. Copy all files from `StarWell-Website/` folder
2. Paste into the `public_html` folder on the FTP server
3. Wait for upload to complete

### Using GoDaddy File Manager:

1. Click **"Upload"** button in File Manager
2. Select all files from `StarWell-Website/` folder
3. Upload in batches if needed (HTML files first, then CSS/JS, then images)
4. Click **"Refresh"** to see uploaded files

### Critical Checks:

After upload, verify in `/public_html/`:
- [ ] Files are DIRECTLY in public_html, NOT in a subfolder
- [ ] Correct structure: `/public_html/index.html` (NOT `/public_html/StarWell-Website/index.html`)
- [ ] images folder exists at `/public_html/images/`
- [ ] .htaccess file is present (may be hidden)

---

## 🌐 Step 5: Test Your Website

### Initial Test:

1. Open your browser
2. Go to: **http://starwell-hh.com**
3. You should see your StarWell website! 🎉

### If You See "Coming Soon" or Old Content:

**Problem:** Files are in the wrong location
**Solution:**
- Make sure files are in `/public_html/` NOT `/public_html/StarWell-Website/`
- Delete any default GoDaddy files first

### If Images Don't Load:

**Problem:** Image paths are incorrect
**Solution:**
- Verify images folder is at `/public_html/images/`
- Check that filenames match exactly (case-sensitive)

### If Styles Don't Load:

**Problem:** CSS file not found
**Solution:**
- Clear browser cache (⌘+Shift+R on Mac)
- Verify styles.css is in `/public_html/`

---

## 🔒 Step 6: Enable SSL (HTTPS)

### Why SSL is Critical:

- ✅ Secure connection (HTTPS vs HTTP)
- ✅ Better Google SEO ranking
- ✅ Trust indicator for users
- ✅ Required for App Store policies
- ✅ Protects user data

### Enable SSL on GoDaddy:

1. Log in to GoDaddy
2. Go to My Products → Web Hosting → Manage
3. Find **"SSL Certificate"** section
4. Most GoDaddy plans include **FREE SSL**
5. Click **"Setup"** or **"Activate"** or **"Manage"**
6. Follow prompts to install certificate
7. **Wait 10-30 minutes** for SSL to propagate

### Verify SSL is Working:

1. Go to: **https://starwell-hh.com** (note the "https")
2. You should see a padlock icon in the browser
3. Your .htaccess file will automatically redirect HTTP to HTTPS

### If SSL Doesn't Work After 24 Hours:

- Contact GoDaddy support to activate SSL certificate
- Verify your hosting plan includes SSL
- Check that domain DNS is pointing correctly

---

## ✅ Step 7: Post-Deployment Verification

### Test All Pages:

- [ ] Homepage: https://starwell-hh.com
- [ ] Privacy Policy: https://starwell-hh.com/privacy.html
- [ ] Terms of Service: https://starwell-hh.com/terms.html
- [ ] Support Center: https://starwell-hh.com/support.html

### Test All Links:

- [ ] Navigation menu links work
- [ ] "Download App" buttons work (will need real App Store link later)
- [ ] Footer links work
- [ ] All internal page links function
- [ ] Email links open email client

### Test Responsive Design:

- [ ] Desktop: Chrome, Safari, Firefox
- [ ] Mobile: iPhone Safari
- [ ] Mobile: Android Chrome
- [ ] Tablet: iPad Safari

### Test Performance:

- [ ] Page loads in under 3 seconds
- [ ] Images load properly
- [ ] Animations are smooth
- [ ] No console errors (F12 → Console)

### Check SEO:

- [ ] Sitemap accessible: https://starwell-hh.com/sitemap.xml
- [ ] Robots.txt accessible: https://starwell-hh.com/robots.txt
- [ ] Meta descriptions present (view page source)
- [ ] Open Graph tags for social sharing

---

## 🔧 Step 8: Update App Store Link (When Ready)

Once your app is published on the App Store:

### Get Your App Store URL:

1. Go to App Store Connect
2. Find StarWell app
3. Copy the App Store URL (e.g., https://apps.apple.com/app/id123456789)

### Update Website:

1. Open `index.html` in a text editor
2. Find all instances of: `href="https://apps.apple.com/app/starwell"`
3. Replace with your actual App Store URL
4. Save file
5. Re-upload to GoDaddy (just the index.html file)

---

## 📊 Step 9: Set Up Analytics (Optional but Recommended)

### Google Analytics 4:

1. Go to: https://analytics.google.com/
2. Create account and property for starwell-hh.com
3. Get your Measurement ID (G-XXXXXXXXXX)
4. Add to `index.html` before `</head>`:

```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-XXXXXXXXXX');
</script>
```

5. Re-upload index.html to GoDaddy

### What Analytics Tracks:

- Page views
- Button clicks
- Download attempts
- User behavior
- Traffic sources
- Geographic data

---

## 🔍 Step 10: Submit to Google Search Console

### Set Up Search Console:

1. Go to: https://search.google.com/search-console
2. Click **"Add Property"**
3. Enter: https://starwell-hh.com
4. **Verify ownership** (choose HTML tag method):
   - Copy the verification meta tag
   - Add to `<head>` of index.html
   - Re-upload index.html
   - Click "Verify" in Search Console

### Submit Sitemap:

1. In Search Console, go to **"Sitemaps"**
2. Enter: https://starwell-hh.com/sitemap.xml
3. Click **"Submit"**
4. Google will start indexing your site

### Benefits:

- Appear in Google search results
- Monitor search performance
- Fix crawling errors
- Submit URL updates

---

## 🎉 Step 11: Launch Announcement

### Your Website is Live!

Once everything is tested and working:

1. **Share on social media:**
   - "🌟 Excited to announce the StarWell website is now live!"
   - Include screenshot
   - Link to: https://starwell-hh.com

2. **Update app store listing:**
   - Add website URL to App Store metadata
   - Link from app description

3. **Email notification:**
   - If you have email subscribers
   - Announce website launch

---

## 🐛 Troubleshooting Guide

### Website Shows 404 Error
- **Cause:** Files not in correct location
- **Fix:** Move files to `/public_html/` not a subfolder
- **Check:** File permissions should be 644 for files, 755 for folders

### HTTPS Not Working
- **Cause:** SSL not activated or not propagated
- **Fix:** Wait 24-48 hours or contact GoDaddy support
- **Check:** Verify .htaccess redirect is in place

### Images Not Displaying
- **Cause:** Incorrect file paths or case sensitivity
- **Fix:** Verify `/public_html/images/` exists
- **Check:** Filenames match exactly (case-sensitive)

### Slow Load Times
- **Cause:** Large image file sizes
- **Fix:** Optimize images at https://tinypng.com/
- **Target:** 200-300KB per screenshot

### Mobile Menu Not Working
- **Cause:** JavaScript not loading
- **Fix:** Verify script.js uploaded correctly
- **Check:** Browser console (F12) for errors

### Email Links Not Working
- **Cause:** Email not configured
- **Fix:** Links work but you need actual email account
- **Note:** Set up hermescloudhorizon@gmail.com or support@starwell-hh.com

---

## 📞 Getting Help

### GoDaddy Support:
- **Phone:** 1-480-505-8877
- **Chat:** Available 24/7 in dashboard
- **Email:** Through dashboard support center

### Website Issues:
- All code is documented and commented
- Refer to this guide
- Check browser console for errors (F12)

---

## 🎯 Final Checklist

Before considering deployment complete:

- [ ] All files uploaded to `/public_html/`
- [ ] Website accessible at https://starwell-hh.com
- [ ] SSL certificate activated (HTTPS working)
- [ ] All pages tested (index, privacy, terms, support)
- [ ] All links working correctly
- [ ] Images loading properly
- [ ] Mobile responsive working
- [ ] No console errors
- [ ] App Store badge present
- [ ] Favicons displaying correctly
- [ ] Google Analytics installed (optional)
- [ ] Search Console submitted (optional)
- [ ] Sitemap accessible
- [ ] Robots.txt accessible

---

## 📁 Quick Reference: File Locations

### On Your Computer:
```
/Users/ryangreen/Desktop/StarWell-Website/
```

### On GoDaddy Server:
```
/public_html/
```

### Upload Mapping:
```
Local: /StarWell-Website/index.html
GoDaddy: /public_html/index.html

Local: /StarWell-Website/images/screenshot-hero.png
GoDaddy: /public_html/images/screenshot-hero.png
```

---

## 🚀 You're Done!

**Your StarWell website is now live at: https://starwell-hh.com**

Congratulations! You've successfully deployed a premium, professional website for your app.

### What's Next:

1. Monitor analytics to see visitor behavior
2. Update content as needed
3. Add blog posts or news updates (future enhancement)
4. Keep legal pages updated
5. Refresh screenshots when app updates

---

**Need to update the website?**
Just edit the files locally and re-upload to GoDaddy using the same FTP method.

**Questions?**
Refer to this guide or contact GoDaddy support.

---

*Last updated: November 2, 2025*
*Website version: 1.0*
