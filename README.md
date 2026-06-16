# IskoMate Showcase Website

A beautiful, modern showcase website for the IskoMate student engagement monitoring app built with React, Vite, and Tailwind CSS.

## 🚀 Quick Start

### Prerequisites
- Node.js 16+ and npm
- Git
- Vercel account (for deployment)

### Installation

1. **Create a new directory and clone the files:**
```bash
mkdir iskomate-showcase
cd iskomate-showcase
```

2. **Initialize as a git repository:**
```bash
git init
```

3. **Copy all the files we created:**
- IskoMateShowcase.jsx
- App.jsx
- main.jsx
- index.html
- index.css
- package.json
- tailwind.config.js
- postcss.config.js
- vite.config.js

4. **Install dependencies:**
```bash
npm install
```

5. **Start the development server:**
```bash
npm run dev
```

The site will be available at `http://localhost:5173`

## 📁 Project Structure

```
iskomate-showcase/
├── IskoMateShowcase.jsx      # Main landing page component
├── App.jsx                    # App wrapper
├── main.jsx                   # React entry point
├── index.html                 # HTML template
├── index.css                  # Global styles + Tailwind
├── vite.config.js            # Vite configuration
├── tailwind.config.js        # Tailwind configuration
├── postcss.config.js         # PostCSS configuration
├── package.json              # Dependencies
└── README.md                 # This file
```

## 🎨 Features

✅ **Responsive Design** - Works on mobile, tablet, and desktop  
✅ **Dark Theme** - Red and white color scheme matching IskoMate app  
✅ **Interactive Components** - Smooth animations and transitions  
✅ **Feature Showcase** - Solo mode, Classroom mode, AI detection  
✅ **Team Section** - Display your team members  
✅ **CTA Buttons** - Links to app download and GitHub  
✅ **SEO Ready** - Meta tags and semantic HTML  

## 🎯 Customization

### Change Team Members
Edit the team section in `IskoMateShowcase.jsx`:
```jsx
{['Austria', 'Camota', 'Lee', 'Lincallo'].map((name, idx) => (
  // Update with your actual team members
))}
```

### Update Download Links
Replace the download button URLs:
```jsx
<button onClick={() => window.location.href = 'YOUR_DOWNLOAD_LINK'}>
  Download App
</button>
```

### Modify Colors
Edit `tailwind.config.js` to customize the color scheme:
```js
colors: {
  red: {
    500: '#B71C1C',  // Your primary red
    600: '#B71C1C',
    // ...
  }
}
```

### Add More Sections
Add new sections in `IskoMateShowcase.jsx` before the footer.

## 🚀 Deployment to Vercel

### Option 1: Using Vercel CLI

1. **Install Vercel CLI:**
```bash
npm install -g vercel
```

2. **Deploy:**
```bash
vercel
```

3. **Follow the prompts:**
   - Select the project directory
   - Confirm project settings
   - Deploy!

### Option 2: Using GitHub Integration

1. **Push to GitHub:**
```bash
git add .
git commit -m "Initial IskoMate showcase"
git remote add origin https://github.com/YOUR_USERNAME/iskomate-showcase.git
git push -u origin main
```

2. **Import to Vercel:**
   - Go to [vercel.com](https://vercel.com)
   - Click "New Project"
   - Select your GitHub repo
   - Vercel auto-detects Vite settings
   - Click "Deploy"

### Option 3: Using package.json script

```bash
npm run deploy
```

(Make sure you're logged in with `vercel login` first)

## 🔧 Build for Production

```bash
npm run build
```

This creates a `dist` folder with optimized production files.

## 📊 Engagement Levels Reference

| Level | Color | Description |
|-------|-------|-------------|
| Highly Engaged | #B71C1C (Red) | Active focus, strong participation |
| Engaged | #EBE0D2 (Beige) | Attentive, generally on-task |
| Barely Engaged | #8B3A3A (Dark Red) | Distracted, periodic attention lapses |
| Not Engaged | White | Disengaged, needs intervention |

## 📱 Responsive Breakpoints

- **Mobile**: < 768px (md breakpoint)
- **Tablet**: 768px - 1024px
- **Desktop**: > 1024px

## 🔐 Environment Variables

Create a `.env` file if you need any API endpoints:
```env
VITE_API_URL=https://your-api.com
VITE_GITHUB_REPO=https://github.com/Isaac06272/iskomate-app
```

## 📝 License

This project is part of PUP College of Engineering coursework.

## 👥 Team

- Austria
- Camota
- Lee
- Lincallo

**Institution:** PUP College of Engineering  
**Course:** Neural Networks & Machine Learning  
**Instructor:** Engr. Mon Arjay Malbog

## 🤝 Contributing

To customize or add features:

1. Edit `IskoMateShowcase.jsx` for content/structure
2. Modify `index.css` for styling
3. Update `tailwind.config.js` for theme changes
4. Test with `npm run dev`
5. Build and deploy with `npm run build`

## 🐛 Troubleshooting

**Port already in use:**
```bash
npm run dev -- --port 3000
```

**Build errors:**
```bash
rm -rf node_modules package-lock.json
npm install
npm run build
```

**Vercel deployment fails:**
- Check `package.json` has correct build script
- Ensure all dependencies are listed
- Check for environment variables needed

## 📞 Support

For issues with the showcase website, refer to:
- [Vite Docs](https://vitejs.dev)
- [Tailwind CSS Docs](https://tailwindcss.com)
- [Vercel Docs](https://vercel.com/docs)
- [React Docs](https://react.dev)

---

Built with ❤️ for IskoMate
