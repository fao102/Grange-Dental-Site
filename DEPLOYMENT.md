# Deployment Guide - The Grange Dental Surgery Website

Your website is now production-ready! The `build` folder contains all files needed for deployment.

## Quick Deployment (Choose One)

### ⚡ Option 1: Netlify (Recommended - Fastest)

1. **Push to GitHub** (if not already done)
   ```bash
   git init
   git add .
   git commit -m "Initial commit: Grange Dental Surgery website"
   git remote add origin https://github.com/YOUR_USERNAME/grange-dental-surgery
   git push -u origin main
   ```

2. **Deploy to Netlify**
   - Go to https://netlify.com
   - Click "New site from Git"
   - Connect your GitHub account and select the repo
   - Build settings should auto-fill:
     - Base directory: (leave empty)
     - Build command: `npm run build`
     - Publish directory: `build`
   - Click "Deploy"
   - **Your site is live!** Netlify will give you a URL like `https://[random].netlify.app`

3. **Set Custom Domain** (Optional)
   - In Netlify Settings → Domain Management → Add Custom Domain
   - Update DNS records with your registrar

---

### 🔥 Option 2: Vercel (Very Fast)

1. **Push to GitHub** (same as above)

2. **Deploy to Vercel**
   - Go to https://vercel.com
   - Click "Import Project"
   - Select your GitHub repo
   - Vercel auto-detects it's React
   - Click "Deploy"
   - **Done!** You get a live URL instantly

---

### 📦 Option 3: Traditional Web Host (FTP/cPanel)

1. **Prepare files:**
   - The `build` folder contains everything you need
   - Upload contents of `build/` to your server's `public_html` folder

2. **If using subdirectory:**
   - Update `package.json`:
     ```json
     "homepage": "/subdirectory"
     ```
   - Rebuild: `npm run build`
   - Upload `build/` contents

---

### 🐳 Option 4: Docker (For Advanced Users)

Create a `Dockerfile` in root:

```dockerfile
FROM node:18-alpine as build
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

FROM node:18-alpine
RUN npm install -g serve
WORKDIR /app
COPY --from=build /app/build ./build
EXPOSE 3000
CMD ["serve", "-s", "build", "-l", "3000"]
```

Then:
```bash
docker build -t grange-dental .
docker run -p 3000:3000 grange-dental
```

---

## Post-Deployment Checklist

- [ ] Test all links work
- [ ] Test phone number click-to-call works
- [ ] Test Google Maps button opens correctly
- [ ] Test responsive design on mobile (use browser DevTools)
- [ ] Check site loads fast (https://pagespeed.web.dev)
- [ ] Add Google Analytics (optional)
- [ ] Submit to Google Search Console
- [ ] Verify contact info is correct

---

## SEO Improvements (After Deployment)

1. **Google Search Console**
   - Go to https://search.google.com/search-console
   - Add your domain
   - Submit sitemap

2. **Google Business Profile**
   - Go to https://business.google.com
   - Claim/verify "The Grange Dental Surgery"
   - Add website URL

3. **Schema Markup** (Optional but recommended)
   - Add this to your HTML `<head>` for better Google listings

---

## Testing Before Going Live

To test the build locally:

```bash
npm install -g serve
serve -s build
```

Then visit `http://localhost:3000` to preview exactly how it will look live.

---

## Updating Content After Launch

**To make changes:**
1. Edit files in `src/`
2. Run `npm run build`
3. Re-upload the `build/` folder

Or use Git → Netlify/Vercel will auto-rebuild.

---

## Support Resources

- **React:** https://react.dev
- **Bootstrap:** https://getbootstrap.com
- **Netlify Docs:** https://docs.netlify.com
- **Vercel Docs:** https://vercel.com/docs

---

## Summary

✅ **Website Status:** Ready for production  
📂 **Files to Deploy:** Everything in the `build/` folder  
⚡ **Recommended:** Use Netlify (easiest & free)  
🚀 **Time to Live:** < 5 minutes with Netlify

**Questions? Contact The Grange Dental Surgery: 020 7394 1593**
