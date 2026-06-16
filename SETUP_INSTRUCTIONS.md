# IskoMate Showcase - Setup Instructions

## 📋 Step-by-Step Setup Guide

### Step 1: Create Project Folder
```bash
mkdir iskomate-showcase
cd iskomate-showcase
```

### Step 2: Copy All Files
Copy these files into your `iskomate-showcase` folder:
- `IskoMateShowcase.jsx`
- `App.jsx`
- `main.jsx`
- `index.html`
- `index.css`
- `package.json`
- `tailwind.config.js`
- `postcss.config.js`
- `vite.config.js`
- `README.md`
- `.gitignore`

### Step 3: Install Dependencies
```bash
npm install
```

This will install:
- React 18.2.0
- Vite 5.0.8
- Tailwind CSS 3.3.6
- Lucide React (icons)
- PostCSS & Autoprefixer

### Step 4: Run Development Server
```bash
npm run dev
```

Your site will be live at: **http://localhost:5173**

## 🎨 Preview What You Get

The showcase includes:
- ✅ Professional landing page
- ✅ Hero section with CTA buttons
- ✅ Features showcase (Solo & Classroom modes)
- ✅ How it works section with 3 steps
- ✅ Engagement levels visualization
- ✅ Team member cards
- ✅ Call-to-action section
- ✅ Responsive design (mobile, tablet, desktop)
- ✅ Dark theme with red accents
- ✅ Smooth animations

## 🚀 Deploy to Vercel

### Quick Deploy Method (Recommended)

```bash
npm install -g vercel
vercel
```

Then follow the prompts to deploy.

### Or Deploy via GitHub

1. Initialize git:
```bash
git init
git add .
git commit -m "IskoMate showcase website"
git remote add origin https://github.com/YOUR_USERNAME/iskomate-showcase.git
git push -u origin main
```

2. Go to [vercel.com](https://vercel.com)
3. Click "New Project"
4. Import your GitHub repo
5. Click "Deploy"

## 🎯 Customization Quick Tips

### 1. Update Team Names
Open `IskoMateShowcase.jsx` and find:
```jsx
{['Austria', 'Camota', 'Lee', 'Lincallo'].map((name, idx) => (
```
Replace with your actual team members.

### 2. Add Download Links
Update the Download button:
```jsx
<button onClick={() => window.location.href = 'https://your-app-store-link.com'}>
```

### 3. Update GitHub Link
Change the GitHub URL in the buttons to your repo.

### 4. Add Your Images/Logo
Place images in a `public` folder and reference them:
```jsx
<img src="/your-image.png" />
```

## 📱 Mobile Optimization

The site is fully responsive:
- Mobile: Single column layout
- Tablet: 2 column grid
- Desktop: Multi-column layouts

Test on mobile with:
```bash
npm run dev
```
Then open DevTools (F12) and select device emulation.

## 🔧 Common Issues & Solutions

### Issue: Port 5173 already in use
```bash
npm run dev -- --port 3000
```

### Issue: Dependencies not installing
```bash
rm -rf node_modules package-lock.json
npm install
```

### Issue: Build fails
Check `package.json` has:
```json
"scripts": {
  "build": "vite build"
}
```

## 📊 Project Files Breakdown

| File | Purpose |
|------|---------|
| `IskoMateShowcase.jsx` | Main component with all sections |
| `App.jsx` | Component wrapper |
| `main.jsx` | React entry point |
| `index.html` | HTML template |
| `index.css` | Tailwind + custom styles |
| `package.json` | Dependencies |
| `vite.config.js` | Vite bundler settings |
| `tailwind.config.js` | Tailwind theme |
| `postcss.config.js` | CSS processing |

## 🎓 Learning Resources

If you want to customize further:
- [React Docs](https://react.dev)
- [Vite Documentation](https://vitejs.dev)
- [Tailwind CSS](https://tailwindcss.com)
- [Vercel Deployment](https://vercel.com/docs)

## ✅ Final Checklist

Before deploying:
- [ ] Installed dependencies (`npm install`)
- [ ] Ran development server successfully (`npm run dev`)
- [ ] Visited site at localhost and verified it looks good
- [ ] Updated team names
- [ ] Updated download links
- [ ] Updated GitHub links
- [ ] Added your logo/images (optional)
- [ ] Built for production (`npm run build`)
- [ ] Tested production build (`npm run preview`)
- [ ] Deployed to Vercel

## 🎉 You're All Set!

Your IskoMate showcase website is ready to go live!

**Next Steps:**
1. Deploy to Vercel
2. Share your site URL
3. Add to your portfolio
4. Link from your GitHub profile

---

For questions or issues, refer to the full README.md file.
