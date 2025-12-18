# 🚀 Modern Portfolio Website

> A production-ready, professional portfolio website built with React, Vite, Tailwind CSS, and Framer Motion.

[![React](https://img.shields.io/badge/React-18.2.0-blue.svg)](https://reactjs.org/)
[![Vite](https://img.shields.io/badge/Vite-5.0.8-646CFF.svg)](https://vitejs.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.4.0-38B2AC.svg)](https://tailwindcss.com/)
[![Framer Motion](https://img.shields.io/badge/Framer_Motion-10.16.16-FF0055.svg)](https://www.framer.com/motion/)

## ✨ Features

### Design & UX
- 🎨 **Modern UI** - Clean, Apple/Stripe/Vercel-inspired design
- 🌓 **Dark/Light Mode** - Persistent theme with smooth transitions
- 📱 **Fully Responsive** - Perfect on mobile, tablet, and desktop
- ✨ **Glassmorphism** - Beautiful blur effects and transparency
- 🎭 **Gradient Blobs** - Animated background elements

### Interactions & Animations
- 🎬 **Framer Motion** - Smooth, professional animations throughout
- 🔄 **Scroll Animations** - Elements animate as you scroll
- 🖱️ **Custom Cursor** - Desktop-only enhanced cursor
- 📍 **Smooth Scroll** - Buttery smooth navigation between sections
- 💫 **Micro-interactions** - Hover effects and button animations

### Sections Included
- 🏠 **Hero** - Eye-catching landing with CTA buttons
- 👤 **About** - Professional introduction and education
- 🛠️ **Skills** - Technology showcase with progress bars
- 💼 **Projects** - Portfolio with live demos and GitHub links
- 📊 **Experience** - Professional timeline
- 📧 **Contact** - Working contact form and social links

## Tech Stack

- **React** - UI library
- **Vite** - Build tool
- **Tailwind CSS** - Styling
- **Framer Motion** - Animations
- **React Router** - Navigation
- **React Icons** - Icon library

## 🚀 Quick Start

```bash
# 1. Install dependencies
npm install

# 2. Start development server
npm run dev

# 3. Open http://localhost:3000
```

## 📝 Customization (3 Easy Steps)

### 1. Update Your Content
Edit `src/data/portfolio.js` with your information

### 2. Add Your Images
Place your images in `public/images/`:
- `avatar.jpg` - Your profile photo
- `project1.jpg` - `project4.jpg` - Project screenshots

### 3. Customize Colors (Optional)
Edit `tailwind.config.js` to change the color scheme

**That's it!** 🎉 Your portfolio is ready!

## 📚 Complete Documentation

| Document | Description |
|----------|-------------|
| **[GET_STARTED.md](GET_STARTED.md)** ⭐ | Complete setup guide - **START HERE!** |
| [QUICK_REFERENCE.md](QUICK_REFERENCE.md) | Common commands and quick tips |
| [PROJECT_OVERVIEW.md](PROJECT_OVERVIEW.md) | Complete project documentation |
| [CUSTOMIZATION_CHECKLIST.md](CUSTOMIZATION_CHECKLIST.md) | What to customize |
| [PROJECT_SUMMARY.md](PROJECT_SUMMARY.md) | What's included |

## Project Structure

```
portfolio/
├── src/
│   ├── components/
│   │   ├── common/        # Reusable components
│   │   ├── sections/      # Page sections
│   │   └── layout/        # Layout components
│   ├── context/           # React context (theme)
│   ├── utils/             # Utility functions
│   ├── data/              # Static data
│   ├── App.jsx            # Main app component
│   ├── main.jsx           # Entry point
│   └── index.css          # Global styles
├── public/                # Static assets
└── package.json
```

## Customization

1. Update personal information in `src/data/portfolio.js`
2. Replace placeholder images in `public/images/`
3. Modify color scheme in `tailwind.config.js`
4. Adjust animations in component files

## License

MIT
