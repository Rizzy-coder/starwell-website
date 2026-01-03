# Setup Custom Domain: starwell-hh.com → GitHub Pages

**Domain:** starwell-hh.com (GoDaddy)
**GitHub Repository:** https://github.com/Rizzy-coder/starwell-website
**Status:** Ready to configure

---

## 🎯 Quick Setup (10 minutes)

### Step 1: Configure GitHub Pages (2 minutes)

1. **Go to:** https://github.com/Rizzy-coder/starwell-website/settings/pages

2. **Enable GitHub Pages:**
   - Source: **main** branch
   - Folder: **/ (root)**
   - Click **Save**

3. **Add Custom Domain:**
   - Scroll down to "Custom domain"
   - Enter: **starwell-hh.com** (without www)
   - Click **Save**
   - ✅ Wait for DNS check (will show "DNS check in progress")

---

### Step 2: Update GoDaddy DNS (5 minutes)

1. **Login to GoDaddy:**
   - Go to: https://godaddy.com
   - Login to your account

2. **Navigate to DNS Settings:**
   - My Products → Domains
   - Find **starwell-hh.com**
   - Click **DNS** or **Manage DNS**

3. **Delete Old Records (if any):**
   - Look for existing **A records** pointing to Netlify or other hosts
   - Delete them (you can take a screenshot first as backup)

4. **Add GitHub Pages A Records:**

Click **Add** and create these 4 A records:

**A Record #1:**
```
Type: A
Name: @ (or leave blank)
Value: 185.199.108.153
TTL: 600 (or 1 hour)
```

**A Record #2:**
```
Type: A
Name: @
Value: 185.199.109.153
TTL: 600
```

**A Record #3:**
```
Type: A
Name: @
Value: 185.199.110.153
TTL: 600
```

**A Record #4:**
```
Type: A
Name: @
Value: 185.199.111.153
TTL: 600
```

5. **Add CNAME Record for www:**

```
Type: CNAME
Name: www
Value: rizzy-coder.github.io.
TTL: 600
```

**IMPORTANT:** Note the period (.) at the end of `rizzy-coder.github.io.`

6. **Save All Changes**

---

### Step 3: Wait for DNS Propagation (10-60 minutes)

DNS changes can take time to propagate worldwide:
- **Minimum:** 10 minutes
- **Typical:** 30 minutes
- **Maximum:** 48 hours (rare)

---

### Step 4: Enable HTTPS in GitHub (automatic)

1. After DNS propagates, go back to:
   https://github.com/Rizzy-coder/starwell-website/settings/pages

2. You should see: **"DNS check successful" ✅**

3. Check the box: **"Enforce HTTPS"**
   - If grayed out, wait 10-15 more minutes for SSL certificate

4. Once enabled, your site is secure! 🔒

---

## ✅ Verification Checklist

After setup, verify these:

- [ ] GitHub Pages enabled (Settings → Pages)
- [ ] Custom domain added: starwell-hh.com
- [ ] DNS check shows "successful" in GitHub
- [ ] 4 A records added in GoDaddy
- [ ] 1 CNAME record added in GoDaddy (www)
- [ ] Wait 30+ minutes for DNS propagation
- [ ] Test: http://starwell-hh.com loads
- [ ] Test: http://www.starwell-hh.com loads
- [ ] HTTPS enabled in GitHub Pages
- [ ] Test: https://starwell-hh.com loads with padlock 🔒
- [ ] Reports section displays correctly
- [ ] All pages work (privacy, terms, support)
- [ ] Mobile responsive check

---

## 🔍 Check DNS Propagation Status

**Use this tool to check if DNS has updated:**
https://www.whatsmydns.net/

1. Enter: **starwell-hh.com**
2. Type: **A**
3. Click **Search**

You should see the 4 GitHub IPs (185.199.108.153, etc.) around the world.

**For www subdomain:**
1. Enter: **www.starwell-hh.com**
2. Type: **CNAME**
3. Should show: **rizzy-coder.github.io**

---

## 🎯 Your GoDaddy DNS Configuration

**Final DNS setup should look like this:**

| Type | Name | Value | TTL |
|------|------|-------|-----|
| A | @ | 185.199.108.153 | 600 |
| A | @ | 185.199.109.153 | 600 |
| A | @ | 185.199.110.153 | 600 |
| A | @ | 185.199.111.153 | 600 |
| CNAME | www | rizzy-coder.github.io. | 600 |

**Delete any old records pointing to:**
- Netlify IPs
- Old hosting IPs
- Other CNAME records

---

## 🐛 Troubleshooting

### "DNS check failed" in GitHub

**Wait longer:**
- DNS can take up to 48 hours
- Usually works within 30 minutes

**Verify A records:**
- All 4 A records must be present
- Values must be exactly: 185.199.108.153, 109.153, 110.153, 111.153
- Name must be "@" or blank

**Verify CNAME:**
- Must have trailing period: `rizzy-coder.github.io.`
- Name must be "www"

---

### "Site not loading after 24 hours"

**Check DNS with tool:**
- Go to https://www.whatsmydns.net/
- Check if IPs are GitHub's IPs worldwide

**Try forcing DNS:**
```bash
# On Mac terminal
sudo dscacheutil -flushcache; sudo killall -HUP mDNSResponder
```

**Try different browser:**
- Chrome (Incognito mode)
- Safari (Private window)
- Clears local DNS cache

---

### "HTTPS won't enable"

**Wait longer:**
- SSL certificate can take up to 24 hours
- Usually provisions within 1 hour

**Try removing and re-adding domain:**
1. GitHub Pages → Custom domain
2. Delete the domain
3. Wait 10 minutes
4. Re-add starwell-hh.com
5. Save

---

### "404 error"

**Check CNAME file:**
```bash
cd /Users/ryangreen/Cosmic/StarWell-Website
cat CNAME
# Should show: starwell-hh.com
```

**If wrong, fix it:**
```bash
echo "starwell-hh.com" > CNAME
git add CNAME
git commit -m "Fix CNAME"
git push origin main
```

---

### "www subdomain not working"

**Check CNAME record in GoDaddy:**
- Type: CNAME
- Name: www
- Value: rizzy-coder.github.io. (with trailing period!)

**Wait for DNS:**
- CNAME records can take longer to propagate
- Check with: https://www.whatsmydns.net/

---

## 📞 Support Resources

### GitHub Pages Documentation:
- https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site

### GoDaddy Support:
- **Phone:** 1-480-505-8877
- **Chat:** Available 24/7 in dashboard
- **Help:** https://www.godaddy.com/help/dns-management-38696

### DNS Checker:
- https://www.whatsmydns.net/

---

## 🎉 What Happens When It's Live

**Your site will be accessible at:**
- ✅ https://starwell-hh.com
- ✅ https://www.starwell-hh.com
- ✅ http://starwell-hh.com (redirects to HTTPS)
- ✅ http://www.starwell-hh.com (redirects to HTTPS)

**Features:**
- ✅ Premium Reports section
- ✅ Cosmic design with glass morphism
- ✅ Fast loading (GitHub CDN)
- ✅ Free SSL/HTTPS
- ✅ 100% free hosting forever
- ✅ Automatic backups (Git)

---

## 🔄 Timeline

**Immediate (0-5 minutes):**
- GitHub Pages enabled
- CNAME file pushed
- DNS records added in GoDaddy

**Soon (10-30 minutes):**
- DNS starts propagating
- DNS check in GitHub shows "successful"
- Site accessible via starwell-hh.com

**Within 1 hour:**
- DNS fully propagated worldwide
- HTTPS certificate provisioned
- Site fully secure with padlock

**Worst case (up to 48 hours):**
- DNS propagation complete globally
- All features working perfectly

---

## 💰 Cost Summary

**What you're paying:**
- GoDaddy domain: ~$12-20/year (you already have this)
- GitHub Pages hosting: **$0/year** ✅
- SSL certificate: **$0/year** ✅
- CDN/bandwidth: **$0/year** ✅

**Total annual cost: ~$12-20** (just the domain!)

**vs. Netlify/other hosting:**
- Hosting: $0 (free tier) → $300+/year (paid)
- SSL: $0 (included)
- Total: $12-320+/year

**You're saving:** Up to $300/year! 💰

---

## 📋 Quick Reference Commands

**Check CNAME file:**
```bash
cat /Users/ryangreen/Cosmic/StarWell-Website/CNAME
```

**Update CNAME file:**
```bash
echo "starwell-hh.com" > /Users/ryangreen/Cosmic/StarWell-Website/CNAME
cd /Users/ryangreen/Cosmic/StarWell-Website
git add CNAME
git commit -m "Update CNAME"
git push origin main
```

**Check DNS from terminal:**
```bash
# Check A records
dig starwell-hh.com

# Check CNAME
dig www.starwell-hh.com

# Check specific DNS server
dig @8.8.8.8 starwell-hh.com
```

---

## ✅ Next Steps

1. **Now:** Configure GitHub Pages (link above)
2. **Now:** Update GoDaddy DNS (instructions above)
3. **Wait:** 30 minutes for DNS propagation
4. **Then:** Enable HTTPS in GitHub
5. **Test:** Visit https://starwell-hh.com
6. **Celebrate:** Your site is live! 🎉

---

**Status:** CNAME file created and pushed ✅
**Next:** Follow Step 1 & Step 2 above

*Updated: November 23, 2025*
