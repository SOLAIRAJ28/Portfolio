# ⚡ Quick Reference Guide

## Common Commands

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## File Locations Quick Reference

### To Customize Content
📄 `src/data/portfolio.js` - All your personal content

### To Add Images
📁 `public/images/` - Put your images here

### To Change Colors
⚙️ `tailwind.config.js` - Color scheme configuration

### To Modify Styles
🎨 `src/index.css` - Global CSS and Tailwind imports

### To Update Meta Tags
📝 `index.html` - SEO and page metadata

## Common Customization Tasks

### Change Primary Color
```js
// tailwind.config.js
colors: {
  primary: {
    500: '#YOUR_COLOR',  // Change this
  }
}
```

### Update Personal Info
```js
// src/data/portfolio.js
export const personalInfo = {
  name: "Your Name",        // ← Change
  role: "Your Role",        // ← Change
  email: "your@email.com",  // ← Change
  // ...
}
```

### Add New Project
```js
// src/data/portfolio.js - projects array
{
  id: 5,
  title: "New Project",
  description: "Project description",
  technologies: ["React", "Node.js"],
  github: "https://github.com/...",
  demo: "https://...",
  featured: true,
}
```

### Change Font
```css
/* src/index.css */
@import url('https://fonts.googleapis.com/css2?family=YourFont&display=swap');

/* tailwind.config.js */
fontFamily: {
  sans: ['YourFont', 'sans-serif'],
}
```

## Component Props Quick Reference

### Button
```jsx
<Button
  variant="primary|secondary|outline|ghost"
  size="sm|md|lg"
  onClick={() => {}}
  href="url"
  icon={<Icon />}
>
  Text
</Button>
```

### Card
```jsx
<Card
  className="extra-classes"
  hover={true|false}
  glass={true|false}
>
  Content
</Card>
```

### Badge
```jsx
<Badge variant="default|success|warning|tech">
  Text
</Badge>
```

### SectionTitle
```jsx
<SectionTitle
  title="Section Title"
  subtitle="Optional subtitle"
  centered={true|false}
  gradient={true|false}
/>
```

## Framer Motion Common Patterns

### Fade In on Scroll
```jsx
<motion.div
  initial={{ opacity: 0, y: 20 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 0.5 }}
>
  Content
</motion.div>
```

### Hover Effect
```jsx
<motion.div
  whileHover={{ scale: 1.05 }}
  whileTap={{ scale: 0.95 }}
>
  Content
</motion.div>
```

### Stagger Children
```jsx
<motion.div
  initial="hidden"
  whileInView="visible"
  viewport={{ once: true }}
  variants={{
    visible: {
      transition: { staggerChildren: 0.1 }
    }
  }}
>
  {items.map(item => (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 }
      }}
    />
  ))}
</motion.div>
```

## Tailwind Classes Quick Reference

### Colors
- Text: `text-gray-900 dark:text-white`
- Background: `bg-white dark:bg-gray-900`
- Border: `border-gray-200 dark:border-gray-700`

### Spacing
- Padding: `p-4` `px-6` `py-8`
- Margin: `m-4` `mx-auto` `mt-8`
- Gap: `gap-4` `gap-x-6` `gap-y-8`

### Layout
- Flex: `flex flex-col items-center justify-between`
- Grid: `grid grid-cols-2 md:grid-cols-3 gap-4`

### Typography
- Size: `text-sm` `text-base` `text-lg` `text-xl` `text-2xl`
- Weight: `font-normal` `font-medium` `font-semibold` `font-bold`
- Align: `text-left` `text-center` `text-right`

### Effects
- Shadow: `shadow-sm` `shadow-md` `shadow-lg` `shadow-xl`
- Rounded: `rounded` `rounded-lg` `rounded-xl` `rounded-full`
- Opacity: `opacity-0` `opacity-50` `opacity-100`

### Responsive
- Small: `sm:text-lg`
- Medium: `md:grid-cols-2`
- Large: `lg:px-8`
- Extra Large: `xl:text-4xl`

## Troubleshooting Quick Fixes

### Styles not applying
```bash
# Restart dev server
npm run dev
```

### Build errors
```bash
# Clear cache and reinstall
rm -rf node_modules package-lock.json
npm install
```

### Dark mode not working
```jsx
// Check ThemeContext is wrapping App in main.jsx
<ThemeProvider>
  <App />
</ThemeProvider>
```

### Animations not working
```bash
# Ensure Framer Motion is installed
npm install framer-motion
```

## Git Commands (Optional)

```bash
# Initialize git
git init

# Add all files
git add .

# Commit
git commit -m "Initial commit"

# Add remote
git remote add origin YOUR_REPO_URL

# Push
git push -u origin main
```

## Deployment Commands

### Vercel
```bash
npm install -g vercel
vercel
```

### Netlify
```bash
npm install -g netlify-cli
netlify deploy --prod
```

## Environment Variables (.env)

```env
# Create .env file for sensitive data
VITE_EMAILJS_SERVICE_ID=your_service_id
VITE_EMAILJS_TEMPLATE_ID=your_template_id
VITE_EMAILJS_PUBLIC_KEY=your_public_key

# Access in code
const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID
```

## Performance Tips

1. **Optimize Images**: Use WebP format, compress before upload
2. **Lazy Load**: Components automatically lazy loaded
3. **Minimize Animations**: Don't overuse on slower devices
4. **Code Split**: Vite does this automatically
5. **CDN**: Use for large assets

## Useful Links

- 📚 [React Docs](https://react.dev)
- ⚡ [Vite Docs](https://vitejs.dev)
- 🎨 [Tailwind Docs](https://tailwindcss.com)
- 🎬 [Framer Motion Docs](https://www.framer.com/motion)
- 🎯 [React Icons](https://react-icons.github.io/react-icons)

---

**Quick Start Reminder:**
1. `npm install`
2. Edit `src/data/portfolio.js`
3. Add images to `public/images/`
4. `npm run dev`
5. Customize and enjoy! 🚀
