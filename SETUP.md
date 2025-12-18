# 🚀 Portfolio Website - Setup Guide

## Quick Start

Follow these steps to get your portfolio up and running:

### 1. Install Dependencies

```bash
npm install
```

This will install all required packages:
- React & React DOM
- Vite (build tool)
- Tailwind CSS (styling)
- Framer Motion (animations)
- React Icons (icon library)
- React Router DOM (navigation)

### 2. Customize Your Content

Edit the file `src/data/portfolio.js` to add your personal information:

- **Personal Info**: Name, role, email, phone, location
- **Social Links**: GitHub, LinkedIn, Twitter
- **About**: Description, education, interests
- **Skills**: Frontend, backend, and tools (with proficiency levels)
- **Projects**: Your portfolio projects with descriptions and links
- **Experience**: Work history, education, internships

### 3. Add Your Images

Create a folder `public/images/` and add:
- `avatar.jpg` - Your profile picture (500x500px recommended)
- `project1.jpg` to `project4.jpg` - Project screenshots (1200x800px recommended)

See `public/images/README.md` for detailed image requirements.

### 4. Run Development Server

```bash
npm run dev
```

Your portfolio will open at `http://localhost:3000`

### 5. Build for Production

```bash
npm run build
```

This creates an optimized build in the `dist/` folder.

### 6. Preview Production Build

```bash
npm run preview
```

## 🎨 Customization Guide

### Colors

Edit `tailwind.config.js` to change the color scheme:
```js
colors: {
  primary: {
    // Your custom colors
  }
}
```

### Fonts

The default font is Inter. To change it:
1. Update the Google Fonts import in `src/index.css`
2. Update `fontFamily` in `tailwind.config.js`

### Sections

To add/remove sections:
1. Create a new component in `src/components/sections/`
2. Import and add it to `src/App.jsx`
3. Add navigation link in `src/components/layout/Navbar.jsx`

### Animations

Customize animations in:
- Individual component files
- `src/utils/animations.js` for reusable variants
- `tailwind.config.js` for keyframe animations

## 📱 Features

✅ Fully responsive design (mobile, tablet, desktop)
✅ Dark/Light mode toggle
✅ Smooth scroll navigation
✅ Advanced Framer Motion animations
✅ Custom cursor (desktop only)
✅ Floating contact button
✅ Scroll-to-top button
✅ Animated gradient backgrounds
✅ Glassmorphism effects
✅ SEO-friendly structure
✅ Accessible HTML

## 🛠️ Tech Stack

- **React 18** - UI library
- **Vite** - Build tool & dev server
- **Tailwind CSS** - Utility-first CSS
- **Framer Motion** - Animation library
- **React Icons** - Icon components
- **React Router** - Client-side routing

## 📦 Project Structure

```
portfolio/
├── public/               # Static files
│   └── images/          # Your images
├── src/
│   ├── components/
│   │   ├── common/      # Reusable UI components
│   │   ├── layout/      # Layout components
│   │   └── sections/    # Page sections
│   ├── context/         # React Context (theme)
│   ├── data/           # Portfolio content
│   ├── utils/          # Utility functions
│   ├── App.jsx         # Main app
│   ├── main.jsx        # Entry point
│   └── index.css       # Global styles
├── index.html
├── package.json
├── tailwind.config.js
├── vite.config.js
└── README.md
```

## 🚀 Deployment

### Deploy to Vercel (Recommended)

1. Push your code to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Import your repository
4. Vercel will automatically detect Vite and deploy

### Deploy to Netlify

1. Build the project: `npm run build`
2. Drag the `dist/` folder to [netlify.com/drop](https://app.netlify.com/drop)

### Deploy to GitHub Pages

1. Install gh-pages: `npm install -D gh-pages`
2. Add to package.json:
   ```json
   "scripts": {
     "predeploy": "npm run build",
     "deploy": "gh-pages -d dist"
   }
   ```
3. Update `vite.config.js`:
   ```js
   base: '/your-repo-name/'
   ```
4. Run: `npm run deploy`

## 📝 Tips

1. **Performance**: Images are the biggest impact on load time. Optimize them!
2. **SEO**: Update meta tags in `index.html` with your information
3. **Testing**: Test on different devices and browsers
4. **Contact Form**: The form currently shows a success message. Integrate with:
   - [EmailJS](https://www.emailjs.com/) for email functionality
   - [Formspree](https://formspree.io/) for form backend
   - Your own API endpoint

## 🆘 Troubleshooting

**Issue**: Styles not loading
- **Fix**: Make sure Tailwind is properly configured and CSS is imported in main.jsx

**Issue**: Animations not working
- **Fix**: Check that Framer Motion is installed: `npm install framer-motion`

**Issue**: Dark mode not working
- **Fix**: Verify ThemeContext is wrapping the App in main.jsx

## 📄 License

MIT - Feel free to use this template for your portfolio!

## 🤝 Contributing

Found a bug or want to improve something? Feel free to open an issue or submit a pull request!

---

Made with ❤️ using React, Vite, and Tailwind CSS
