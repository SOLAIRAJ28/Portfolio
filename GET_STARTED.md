# 🚀 GET STARTED - Complete Installation Guide

## Prerequisites

Before you begin, ensure you have:
- **Node.js** (version 16 or higher)
- **npm** (comes with Node.js)
- A code editor (VS Code recommended)

### Check if you have Node.js installed:
```bash
node --version
npm --version
```

If not installed, download from [nodejs.org](https://nodejs.org/)

---

## 🎯 Step-by-Step Setup

### Step 1: Install Dependencies

Open your terminal in the portfolio folder and run:

```bash
npm install
```

This will install all required packages (React, Vite, Tailwind CSS, Framer Motion, etc.)

**Wait for installation to complete** (this may take 1-2 minutes)

---

### Step 2: Customize Your Content

Open `src/data/portfolio.js` and update with your information:

```javascript
export const personalInfo = {
  name: "Your Name",              // ← Your name
  role: "Your Job Title",         // ← Your role
  tagline: "Your tagline",        // ← Short description
  email: "your@email.com",        // ← Your email
  phone: "+1 (123) 456-7890",     // ← Your phone
  location: "Your City, Country", // ← Your location
};
```

Update all sections:
- Social links (GitHub, LinkedIn, Twitter)
- About section (bio, education, interests)
- Skills (add your technologies and proficiency levels)
- Projects (your portfolio projects)
- Experience (work history, education)

---

### Step 3: Add Your Images

Create images folder if it doesn't exist and add your images:

1. Profile picture: `public/images/avatar.jpg` (500x500px recommended)
2. Project screenshots: `public/images/project1.jpg` through `project4.jpg` (1200x800px)

**Note**: The site will work with placeholder emojis if you skip this step initially

---

### Step 4: Start Development Server

```bash
npm run dev
```

Your portfolio will open at **http://localhost:3000**

The page will auto-reload when you make changes! 🔄

---

### Step 5: Customize (Optional)

#### Change Colors
Edit `tailwind.config.js`:
```javascript
colors: {
  primary: {
    500: '#0ea5e9',  // Change to your brand color
  }
}
```

#### Update Meta Tags (SEO)
Edit `index.html`:
```html
<title>Your Name | Portfolio</title>
<meta name="description" content="Your description" />
<meta name="author" content="Your Name" />
```

---

## 🎨 Testing Your Portfolio

### Test Checklist:
- [ ] All sections load correctly
- [ ] Navigation works (click nav items)
- [ ] Dark/Light mode toggle works
- [ ] Mobile menu works (resize browser)
- [ ] All links work (projects, social)
- [ ] Contact form shows success message
- [ ] Scroll animations trigger
- [ ] No console errors (press F12)

---

## 📦 Building for Production

When ready to deploy:

```bash
npm run build
```

This creates an optimized build in the `dist/` folder.

To preview the production build locally:

```bash
npm run preview
```

---

## 🌐 Deployment

### Option 1: Vercel (Recommended - Easiest)

1. Create account at [vercel.com](https://vercel.com)
2. Click "New Project"
3. Import your repository (or upload files)
4. Vercel auto-detects Vite and deploys
5. Get your live URL! 🎉

### Option 2: Netlify

1. Go to [netlify.com](https://netlify.com)
2. Drag the `dist/` folder to Netlify Drop
3. Or connect your Git repository
4. Get your live URL! 🎉

### Option 3: GitHub Pages

1. Install gh-pages:
   ```bash
   npm install -D gh-pages
   ```

2. Add to `package.json` scripts:
   ```json
   "deploy": "npm run build && gh-pages -d dist"
   ```

3. Update `vite.config.js`:
   ```javascript
   base: '/your-repo-name/'
   ```

4. Deploy:
   ```bash
   npm run deploy
   ```

---

## 🎯 Next Steps

### Make It Functional

1. **Contact Form**: Follow `EMAIL_INTEGRATION.md` to integrate EmailJS
2. **Analytics**: Add Google Analytics or Vercel Analytics
3. **Custom Domain**: Configure your custom domain in hosting settings

### Enhance Your Portfolio

1. Add more projects as you build them
2. Keep experience section updated
3. Optimize images for faster loading
4. Get feedback from friends/colleagues
5. Share on LinkedIn and Twitter! 📢

---

## 🆘 Common Issues

### Issue: Port already in use
**Solution**: Change port in `vite.config.js`:
```javascript
server: {
  port: 3001,  // Use different port
}
```

### Issue: Styles not loading
**Solution**: 
1. Stop the server (Ctrl+C)
2. Delete `node_modules` and `package-lock.json`
3. Run `npm install` again
4. Run `npm run dev`

### Issue: Build fails
**Solution**: Check console for errors, ensure all imports are correct

### Issue: Dark mode not working
**Solution**: Ensure ThemeProvider wraps App in `src/main.jsx`

---

## 📚 Documentation

- **SETUP.md** - Detailed setup instructions
- **CUSTOMIZATION_CHECKLIST.md** - What to customize
- **PROJECT_OVERVIEW.md** - Complete project documentation
- **QUICK_REFERENCE.md** - Quick commands and tips
- **EMAIL_INTEGRATION.md** - Contact form setup

---

## 🎓 Learning Resources

- React: https://react.dev
- Tailwind CSS: https://tailwindcss.com
- Framer Motion: https://www.framer.com/motion
- Vite: https://vitejs.dev

---

## 🤝 Need Help?

If you encounter issues:
1. Check the documentation files
2. Review console errors (F12 in browser)
3. Ensure all dependencies are installed
4. Try clearing cache and reinstalling

---

## ✅ Success Checklist

- [x] Created project structure
- [x] Installed dependencies
- [x] Customized content
- [x] Added images
- [x] Tested locally
- [x] Built for production
- [ ] Deployed online
- [ ] Shared with the world! 🌟

---

**Congratulations! Your portfolio is ready! 🎉**

Remember to:
- Update it regularly with new projects
- Keep your content fresh and relevant
- Share it on social media and job applications
- Use it to showcase your skills and land opportunities

**Good luck with your portfolio! 🚀**
