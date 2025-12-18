# 🗺️ Visual Project Map

```
📦 PORTFOLIO WEBSITE
│
├── 🎯 ENTRY POINTS
│   ├── index.html ─────────► HTML entry point with meta tags
│   └── src/main.jsx ───────► React root with ThemeProvider
│
├── 🎨 MAIN APPLICATION
│   └── src/App.jsx ────────► Main component with all sections
│
├── 📝 CONTENT DATA (EDIT THIS!)
│   └── src/data/portfolio.js ──► All your personal information
│       ├── Personal Info
│       ├── Social Links
│       ├── About
│       ├── Skills
│       ├── Projects
│       └── Experience
│
├── 🧩 REUSABLE COMPONENTS
│   └── src/components/common/
│       ├── Button.jsx ─────► Buttons with variants
│       ├── Card.jsx ───────► Cards with glass effect
│       ├── Badge.jsx ──────► Tech badges/tags
│       └── SectionTitle.jsx ► Section headers
│
├── 🎭 LAYOUT COMPONENTS
│   └── src/components/layout/
│       ├── Navbar.jsx ─────────────► Sticky navigation
│       ├── Footer.jsx ─────────────► Site footer
│       ├── AnimatedBackground.jsx ─► Gradient blobs
│       ├── CustomCursor.jsx ───────► Custom cursor
│       ├── FloatingContact.jsx ────► Contact FAB
│       └── ScrollToTop.jsx ────────► Back to top button
│
├── 📄 MAIN SECTIONS (IN ORDER)
│   └── src/components/sections/
│       ├── 1. Hero.jsx ────────► Landing/Welcome
│       ├── 2. About.jsx ───────► About Me
│       ├── 3. Skills.jsx ──────► Technologies
│       ├── 4. Projects.jsx ────► Portfolio
│       ├── 5. Experience.jsx ──► Timeline
│       └── 6. Contact.jsx ─────► Contact Form
│
├── ⚙️ CONFIGURATION
│   ├── Theme Management
│   │   └── src/context/ThemeContext.jsx ──► Dark/Light mode
│   │
│   ├── Utilities
│   │   ├── src/utils/helpers.js ──────────► Helper functions
│   │   └── src/utils/animations.js ───────► Motion variants
│   │
│   ├── Styling
│   │   ├── src/index.css ─────────────────► Global styles
│   │   ├── tailwind.config.js ────────────► Tailwind setup
│   │   └── postcss.config.js ─────────────► PostCSS
│   │
│   └── Build Tools
│       ├── vite.config.js ────────────────► Vite config
│       ├── package.json ──────────────────► Dependencies
│       └── .prettierrc.js ────────────────► Code formatting
│
├── 🖼️ STATIC ASSETS
│   └── public/images/ (ADD YOUR IMAGES HERE!)
│       ├── avatar.jpg ─────► Your photo
│       ├── project1.jpg ───► Project 1 screenshot
│       ├── project2.jpg ───► Project 2 screenshot
│       ├── project3.jpg ───► Project 3 screenshot
│       └── project4.jpg ───► Project 4 screenshot
│
└── 📚 DOCUMENTATION
    ├── GET_STARTED.md ───────────────► Quick start guide
    ├── README.md ────────────────────► Project overview
    ├── SETUP.md ─────────────────────► Detailed setup
    ├── PROJECT_OVERVIEW.md ──────────► Complete docs
    ├── QUICK_REFERENCE.md ───────────► Quick tips
    ├── CUSTOMIZATION_CHECKLIST.md ───► What to edit
    └── EMAIL_INTEGRATION.md ─────────► Form setup
```

---

## 🔄 Data Flow

```
User Visits Site
       │
       ▼
   index.html
       │
       ▼
   main.jsx
       │
       ├──► ThemeProvider (Dark/Light Mode)
       │
       ▼
    App.jsx
       │
       ├──► AnimatedBackground
       ├──► CustomCursor
       ├──► Navbar
       │
       ├──► SECTIONS
       │    ├──► Hero ────────────► portfolio.js data
       │    ├──► About ───────────► portfolio.js data
       │    ├──► Skills ──────────► portfolio.js data
       │    ├──► Projects ────────► portfolio.js data
       │    ├──► Experience ──────► portfolio.js data
       │    └──► Contact ─────────► portfolio.js data
       │
       ├──► Footer
       ├──► FloatingContact
       └──► ScrollToTop
```

---

## 🎨 Component Hierarchy

```
App
├── AnimatedBackground
├── CustomCursor (Desktop only)
├── Navbar
│   ├── Logo
│   ├── NavLinks (Desktop)
│   ├── ThemeToggle
│   └── MobileMenu
│
├── Hero
│   ├── Greeting Badge
│   ├── Name & Role
│   ├── Tagline
│   ├── CTA Buttons
│   │   ├── View Projects Button
│   │   └── Contact Me Button
│   └── Scroll Indicator
│
├── About
│   ├── SectionTitle
│   ├── Profile Image
│   ├── Description
│   ├── Education Cards
│   └── Interest Tags
│
├── Skills
│   ├── SectionTitle
│   └── Skill Categories (3 columns)
│       ├── Frontend Skills
│       ├── Backend Skills
│       └── Tools & Platforms
│           └── Each Skill
│               ├── Icon
│               ├── Name
│               └── Progress Bar
│
├── Projects
│   ├── SectionTitle
│   └── Project Grid (2 columns)
│       └── Project Card
│           ├── Image
│           ├── Title
│           ├── Description
│           ├── Tech Badges
│           └── Action Buttons
│               ├── GitHub Link
│               └── Demo Link
│
├── Experience
│   ├── SectionTitle
│   └── Timeline
│       └── Timeline Item
│           ├── Icon
│           ├── Period Badge
│           ├── Title
│           ├── Company
│           ├── Location
│           └── Description Points
│
├── Contact
│   ├── SectionTitle
│   ├── Contact Info
│   │   ├── Email Card
│   │   ├── Phone Card
│   │   └── Location Card
│   ├── Social Links
│   │   ├── GitHub
│   │   ├── LinkedIn
│   │   └── Twitter
│   └── Contact Form
│       ├── Name Input
│       ├── Email Input
│       ├── Message Textarea
│       └── Submit Button
│
├── Footer
│   ├── Copyright
│   └── Social Icons
│
├── FloatingContact (Appears on scroll)
└── ScrollToTop (Appears on scroll)
```

---

## 🎬 Animation Timeline

```
Page Load
│
├── Navbar slides down (0.3s)
├── Hero content fades in (0.5s)
│   ├── Greeting (0s delay)
│   ├── Name (0.1s delay)
│   ├── Role (0.2s delay)
│   ├── Tagline (0.3s delay)
│   └── Buttons (0.4s delay)
│
└── Background blobs start moving (continuous)

User Scrolls Down
│
├── Sections fade in on viewport entry
├── About image slides from left
├── About content slides from right
├── Skills animate in sequence
├── Project cards stagger in
├── Experience items alternate sides
└── Contact form fades in

After 300px Scroll
│
└── Floating Contact button appears

After 500px Scroll
│
└── Scroll to Top button appears
```

---

## 🎯 File Importance Guide

### 🔴 CRITICAL - Must Edit
```
src/data/portfolio.js ─────► Your content (name, projects, etc.)
public/images/ ────────────► Your photos and screenshots
```

### 🟡 IMPORTANT - Should Configure
```
index.html ────────────────► SEO meta tags
tailwind.config.js ────────► Colors (optional)
```

### 🟢 OPTIONAL - Advanced Customization
```
src/index.css ─────────────► Global styles
src/components/* ──────────► Component customization
vite.config.js ────────────► Build settings
```

### ⚪ READ-ONLY - Don't Modify
```
package.json ──────────────► Dependencies (auto-managed)
node_modules/ ─────────────► Installed packages
.gitignore ────────────────► Git settings
```

---

## 🚀 Quick Action Items

1. ✏️ Edit: `src/data/portfolio.js`
2. 📸 Add: Images to `public/images/`
3. ⚙️ Customize: Colors in `tailwind.config.js` (optional)
4. 🏃 Run: `npm install` then `npm run dev`
5. 🌐 Deploy: Build and host online
6. 📢 Share: Show the world your awesome portfolio!

---

**This visual map should help you understand the project structure! 🗺️**
