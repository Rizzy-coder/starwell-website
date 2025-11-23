# 🚀 Deploy StarWell to GitHub Pages - 100% FREE (20 Minutes)

**Cost:** $0 - COMPLETELY FREE FOREVER
**Difficulty:** ⭐⭐ Easy (requires basic Git knowledge)
**Time:** 20-30 minutes to go live

---

## ✨ WHY GITHUB PAGES?

- ✅ **100% FREE** - No limits, free forever
- ✅ **Unlimited bandwidth** - No visitor limits
- ✅ **Auto SSL/HTTPS** - Secure connection automatically
- ✅ **Fast global CDN** - GitHub's infrastructure
- ✅ **Custom domain** - Use starwell-hh.com
- ✅ **Version control** - Track all changes with Git
- ✅ **Professional** - Used by millions of developers
- ✅ **Easy updates** - Push changes with Git

**Used by:** Microsoft, Google, Facebook for documentation sites, and millions of developers

---

## 📋 BEFORE YOU START

Make sure you have:
- [x] StarWell-Website folder ready on your Desktop
- [x] App Store badge downloaded to images/ folder
- [x] Favicons generated and in images/ folder
- [ ] GitHub account (we'll create this)
- [ ] Git installed on your Mac (we'll check/install)

---

## 🎯 STEP 1: CREATE GITHUB ACCOUNT (3 minutes)

1. Go to: **https://github.com/**
2. Click **"Sign up"** (top right)
3. Enter your details:
   - **Email:** Use your real email
   - **Password:** Create strong password
   - **Username:** Pick a professional username (e.g., hermeshorizon, starwell-app)
4. Verify you're human (solve puzzle)
5. Click **"Create account"**
6. Verify your email address
7. You're now on GitHub! ✅

---

## 🔧 STEP 2: INSTALL GIT (5 minutes - if needed)

Check if Git is already installed:

1. Open **Terminal** on your Mac (⌘+Space, type "Terminal")
2. Type: `git --version` and press Enter
3. If you see a version number (e.g., "git version 2.39.0"), **Git is installed! Skip to Step 3**
4. If not, you'll get a popup asking to install Developer Tools
5. Click **"Install"**
6. Wait for installation to complete (~5 minutes)
7. Type `git --version` again to verify

---

## 📁 STEP 3: CREATE GITHUB REPOSITORY (3 minutes)

1. Log in to **GitHub.com**
2. Click the **"+"** icon (top right) → **"New repository"**
3. Repository settings:
   - **Repository name:** `starwell-website` (must be lowercase)
   - **Description:** "StarWell cosmic wellness app website"
   - **Public** (must be public for free GitHub Pages)
   - **DON'T** check "Add a README file"
   - **DON'T** add .gitignore
   - **DON'T** choose a license yet
4. Click **"Create repository"**
5. You'll see setup instructions - **keep this page open**

---

## 💻 STEP 4: UPLOAD YOUR WEBSITE FILES (5 minutes)

### Option A: Using GitHub Web Interface (Easiest)

1. On your repository page, click **"uploading an existing file"**
2. Open Finder → Navigate to `StarWell-Website/` folder
3. **Select ALL files**:
   - index.html
   - styles.css
   - script.js
   - privacy.html
   - terms.html
   - support.html
   - sitemap.xml
   - robots.txt
   - images/ folder (entire folder)
   - ALL other files EXCEPT .htaccess (GitHub Pages doesn't need it)
4. **Drag all files** into the GitHub upload area
5. Wait for upload to complete
6. Scroll down, add commit message: "Initial commit - StarWell website"
7. Click **"Commit changes"**
8. All files are now in your repository! ✅

### Option B: Using Git Command Line (Advanced)

If you prefer using Terminal:

```bash
# Navigate to your website folder
cd /Users/ryangreen/Cosmic/StarWell-Website

# Initialize git repository
git init

# Add all files
git add .

# Commit files
git commit -m "Initial commit - StarWell website"

# Add GitHub as remote (replace YOUR-USERNAME)
git remote add origin https://github.com/YOUR-USERNAME/starwell-website.git

# Push to GitHub
git branch -M main
git push -u origin main
```

Enter your GitHub username and password (or personal access token) when prompted.

---

## 🌐 STEP 5: ENABLE GITHUB PAGES (2 minutes)

1. In your GitHub repository, click **"Settings"** tab
2. Scroll down to **"Pages"** in the left sidebar (under "Code and automation")
3. Under "Source," select **"Deploy from a branch"**
4. Under "Branch":
   - Select: **main** (or master)
   - Folder: **/ (root)**
5. Click **"Save"**
6. Wait ~1 minute
7. **Refresh the page**
8. You'll see: "Your site is live at https://YOUR-USERNAME.github.io/starwell-website/"
9. Click the link to see your website LIVE! 🎉

---

## 🔗 STEP 6: ADD YOUR CUSTOM DOMAIN (5 minutes)

Now let's connect **starwell-hh.com**:

### In GitHub:

1. Still on the **Settings → Pages** page
2. Under "Custom domain," enter: **starwell-hh.com**
3. Click **"Save"**
4. GitHub will check DNS (will say "DNS check in progress")
5. Keep this page open

### In GoDaddy:

6. Open new tab → Log in to **GoDaddy.com**
7. Go to **My Products** → **Domains**
8. Find **starwell-hh.com** → Click **"DNS"** or **"Manage DNS"**

### Add DNS Records:

9. Look for existing **A records** for "@" - delete them if they exist
10. Add **4 new A records** (GitHub requires all 4):

**A Record 1:**
- **Type:** A
- **Name:** @ (or leave blank)
- **Value:** `185.199.108.153`
- **TTL:** 600

**A Record 2:**
- **Type:** A
- **Name:** @
- **Value:** `185.199.109.153`
- **TTL:** 600

**A Record 3:**
- **Type:** A
- **Name:** @
- **Value:** `185.199.110.153`
- **TTL:** 600

**A Record 4:**
- **Type:** A
- **Name:** @
- **Value:** `185.199.111.153`
- **TTL:** 600

11. Add **CNAME record** for www:
- **Type:** CNAME
- **Name:** www
- **Value:** `YOUR-USERNAME.github.io.` (note the period at the end!)
- **TTL:** 600

12. Click **"Save"** in GoDaddy

### Verify in GitHub:

13. Go back to GitHub → Settings → Pages
14. Wait 5-10 minutes for DNS to propagate
15. Refresh the page
16. You should see: **"DNS check successful"** ✅

---

## 🔒 STEP 7: ENABLE HTTPS (Automatic!)

1. Still on GitHub → Settings → Pages
2. Wait ~10-15 minutes after DNS verification
3. Check the box: **"Enforce HTTPS"**
4. If it's grayed out, wait a bit longer for certificate to provision
5. Once enabled, your site is secure! 🔒

Test: Go to **https://starwell-hh.com** - you should see the padlock!

---

## ✅ STEP 8: POST-DEPLOYMENT CHECKLIST

Test everything:

- [ ] Visit https://starwell-hh.com - loads correctly
- [ ] SSL padlock appears
- [ ] All pages work: /privacy.html, /terms.html, /support.html
- [ ] Images load correctly
- [ ] Navigation functions properly
- [ ] Mobile responsive (test on phone)
- [ ] No console errors (F12 → Console)

---

## 🔄 HOW TO UPDATE YOUR WEBSITE

When you need to make changes:

### Option A: GitHub Web Interface (Easy)

1. Go to your repository on GitHub
2. Navigate to the file you want to edit
3. Click the **pencil icon** (Edit)
4. Make your changes
5. Scroll down → Add commit message
6. Click **"Commit changes"**
7. Wait ~1 minute → changes are live! ✅

### Option B: Upload New Files

1. Edit files locally on your Mac
2. Go to repository on GitHub
3. Click **"Add file"** → **"Upload files"**
4. Drag updated files
5. Commit changes
6. Wait ~1 minute → live!

### Option C: Git Command Line (Professional)

```bash
# Make changes to your files locally

# Stage changes
git add .

# Commit changes
git commit -m "Update website content"

# Push to GitHub
git push origin main

# Wait ~1 minute - changes are live!
```

---

## 📊 GITHUB PAGES LIMITS

What you get FREE forever:

- ✅ **Bandwidth:** Soft limit of 100GB/month (plenty!)
- ✅ **Repository size:** 1GB recommended (your site is ~10MB)
- ✅ **File size:** 100MB max per file
- ✅ **Sites:** Unlimited (one per repository)
- ✅ **Builds:** 10 per hour
- ✅ **SSL:** Free automatic HTTPS
- ✅ **Custom domains:** Supported

**Your StarWell site is well within limits!**

---

## 🐛 TROUBLESHOOTING

### "Site Not Loading After 24 Hours"
- **Check:** DNS records in GoDaddy (must have all 4 A records)
- **Verify:** CNAME record has trailing period: `username.github.io.`
- **Test:** https://username.github.io/starwell-website/ (should work)
- **Tool:** Use https://www.whatsmydns.net/ to check DNS propagation

### "HTTPS Won't Enable"
- **Wait:** Can take up to 24 hours after DNS verification
- **Check:** "Enforce HTTPS" checkbox might be grayed out initially
- **Fix:** Un-save and re-save custom domain in GitHub Pages settings
- **Last resort:** Remove domain, wait 10 minutes, re-add domain

### "404 Error"
- **Check:** Repository is public (not private)
- **Verify:** Branch is set to "main" in Pages settings
- **Ensure:** index.html is in root folder (not in subfolder)
- **Wait:** Can take a few minutes after enabling Pages

### "Images Not Loading"
- **Check:** Case-sensitive file paths (images/ not Images/)
- **Verify:** All image files uploaded to GitHub
- **Test:** View raw file on GitHub to confirm upload

### "Changes Not Showing"
- **Wait:** GitHub Pages can take 1-5 minutes to rebuild
- **Clear:** Browser cache (⌘+Shift+R)
- **Check:** Commit actually went through on GitHub
- **Verify:** Check repository "Actions" tab for build status

---

## 💡 PRO TIPS

### 1. Use Git Branches for Testing
```bash
# Create a test branch
git checkout -b test-changes

# Make changes, commit, push
git add .
git commit -m "Testing new feature"
git push origin test-changes

# Merge to main when ready
git checkout main
git merge test-changes
git push origin main
```

### 2. Add a CNAME File
Create a file named `CNAME` (no extension) in your repository root with content:
```
starwell-hh.com
```
This ensures custom domain persists after rebuilds.

### 3. Create a .nojekyll File
GitHub Pages uses Jekyll by default. To disable:
```bash
# In your repository root
touch .nojekyll
git add .nojekyll
git commit -m "Disable Jekyll"
git push
```

### 4. Use GitHub Desktop (GUI Alternative)
- Download: https://desktop.github.com/
- Easier than command line
- Visual interface for Git operations

### 5. Set Up GitHub Actions (Advanced)
- Automate builds
- Run tests before deployment
- Minify CSS/JS automatically

---

## 🎯 RECOMMENDED: CREATE README

Add a README.md to your repository:

```markdown
# StarWell Website

Premium website for StarWell cosmic wellness app.

**Live at:** https://starwell-hh.com

## Technologies
- Pure HTML/CSS/JavaScript
- Responsive design
- Glass morphism effects
- Cosmic animations

## Deployment
Hosted on GitHub Pages

## License
© 2025 Hermes Horizon T/A StarWell
```

Save as `README.md` in repository root.

---

## 📚 LEARN MORE

### Git Basics:
- **Tutorial:** https://try.github.io/
- **Docs:** https://git-scm.com/doc
- **Book:** https://git-scm.com/book/en/v2 (free)

### GitHub Pages:
- **Docs:** https://docs.github.com/en/pages
- **Troubleshooting:** https://docs.github.com/en/pages/getting-started-with-github-pages/troubleshooting-404-errors-for-github-pages-sites

---

## 🎉 YOU'RE DONE!

Your StarWell website is now:
- ✅ Live at https://starwell-hh.com
- ✅ Free forever (GitHub Pages costs $0!)
- ✅ Version controlled (track all changes)
- ✅ Secure HTTPS/SSL
- ✅ Professional hosting
- ✅ Easy to update with Git
- ✅ Unlimited bandwidth

**Total cost: $0 (vs $72+/year with GoDaddy!)**

---

## 🔄 NEXT STEPS

1. **Learn basic Git** - Very useful skill for development
2. **Set up automatic backups** - Git is already backing up every version!
3. **Create development branch** - Test changes before going live
4. **Add GitHub Actions** - Automate testing/deployment
5. **Update App Store link** - When app publishes, update URL

---

**Congratulations! Your premium StarWell website is version-controlled, professionally hosted, and costing you $0/month! 🎉✨**

*Deployed on GitHub Pages - The developer's choice for static sites!*
