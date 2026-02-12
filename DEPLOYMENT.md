# Portfolio Setup & Deployment Guide

## 📋 Pre-Deployment Checklist

Before deploying your portfolio, make sure to complete these steps:

### 1. Update Personal Information
- [ ] Edit `portfolio.config.ts` with your actual data
- [ ] Replace all placeholder text with your real information
- [ ] Update contact details (email, phone, location)
- [ ] Add your social media links

### 2. Add Images
- [ ] Add your profile photo to `public/profile.jpg`
- [ ] Add your resume PDF to `public/resume.pdf`
- [ ] Add company logos to `public/logos/`
- [ ] Add project screenshots to `public/projects/`
- [ ] Add certification badges to `public/certs/`

### 3. Customize Design (Optional)
- [ ] Adjust colors in `tailwind.config.ts` if desired
- [ ] Modify animation timings
- [ ] Update fonts if needed

### 4. Test Locally
- [ ] Run `npm run dev` and check all sections
- [ ] Test all links (social media, projects, resume download)
- [ ] Test on mobile devices
- [ ] Verify email copy functionality works
- [ ] Check cursor animations

### 5. SEO & Metadata
- [ ] Update metadata in `app/layout.tsx`
- [ ] Add a favicon (`public/favicon.ico`)
- [ ] Create Open Graph image for social sharing

## 🚀 Deployment Options

### Option 1: Vercel (Recommended)

1. **Create a GitHub repository**
   ```bash
   git init
   git add .
   git commit -m "Initial portfolio commit"
   git branch -M main
   git remote add origin YOUR_GITHUB_REPO_URL
   git push -u origin main
   ```

2. **Deploy to Vercel**
   - Go to [vercel.com](https://vercel.com)
   - Click "New Project"
   - Import your GitHub repository
   - Vercel auto-detects Next.js settings
   - Click "Deploy"

3. **Custom Domain (Optional)**
   - Add your domain in Vercel project settings
   - Update DNS records as instructed
   - SSL certificate is automatic

### Option 2: Netlify

1. **Build the project**
   ```bash
   npm run build
   ```

2. **Deploy to Netlify**
   - Install Netlify CLI: `npm install -g netlify-cli`
   - Run: `netlify deploy`
   - Follow the prompts
   - For production: `netlify deploy --prod`

### Option 3: Self-Hosted (VPS/Cloud)

1. **Build the project**
   ```bash
   npm run build
   ```

2. **Start production server**
   ```bash
   npm run start
   ```

3. **Use PM2 for process management**
   ```bash
   npm install -g pm2
   pm2 start npm --name "portfolio" -- start
   pm2 startup
   pm2 save
   ```

4. **Setup Nginx as reverse proxy**
   ```nginx
   server {
       listen 80;
       server_name yourdomain.com;

       location / {
           proxy_pass http://localhost:3000;
           proxy_http_version 1.1;
           proxy_set_header Upgrade $http_upgrade;
           proxy_set_header Connection 'upgrade';
           proxy_set_header Host $host;
           proxy_cache_bypass $http_upgrade;
       }
   }
   ```

## 🔧 Environment Variables

If you plan to add contact form functionality or analytics:

Create a `.env.local` file:
```env
# Google Analytics
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX

# Email Service (if using EmailJS or similar)
NEXT_PUBLIC_EMAILJS_SERVICE_ID=your_service_id
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=your_template_id
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=your_public_key
```

## 📊 Adding Analytics

### Google Analytics

1. Create a GA4 property at [analytics.google.com](https://analytics.google.com)
2. Get your Measurement ID (e.g., G-XXXXXXXXXX)
3. Install the package:
   ```bash
   npm install @next/third-parties
   ```
4. Add to `app/layout.tsx`:
   ```typescript
   import { GoogleAnalytics } from '@next/third-parties/google'
   
   // In the component
   <GoogleAnalytics gaId="G-XXXXXXXXXX" />
   ```

## 🎯 Post-Deployment Tasks

- [ ] Test the live site on multiple devices
- [ ] Submit to Google Search Console
- [ ] Add sitemap (Next.js can generate automatically)
- [ ] Share on LinkedIn with a post about your new portfolio
- [ ] Add portfolio link to your resume
- [ ] Update GitHub profile README with portfolio link
- [ ] Test loading speed with [PageSpeed Insights](https://pagespeed.web.dev/)

## 🐛 Troubleshooting

### Build Errors
```bash
# Clear cache and reinstall
rm -rf node_modules .next
npm install
npm run build
```

### Images Not Loading
- Ensure images are in the `public` folder
- Use paths starting with `/` (e.g., `/profile.jpg`)
- Check file names match exactly (case-sensitive)

### Animations Not Working
- Check Framer Motion is installed: `npm install framer-motion`
- Clear browser cache
- Test in incognito mode

### Cursor Not Showing
- Cursor requires JavaScript enabled
- Test on different browsers
- Check console for errors

## 📈 Performance Tips

1. **Optimize Images**
   - Use WebP format for better compression
   - Compress images before uploading
   - Use appropriate sizes (profile: 400x400, projects: 800x600)

2. **Lazy Load Components**
   - Already implemented with Framer Motion viewport triggers
   - Consider lazy loading heavy components

3. **Minimize JavaScript**
   - Remove unused dependencies
   - Use dynamic imports for large libraries

4. **Enable Caching**
   - Vercel handles this automatically
   - For self-hosted, configure proper cache headers

## 🔒 Security Best Practices

- [ ] Don't commit `.env` files
- [ ] Use environment variables for sensitive data
- [ ] Keep dependencies updated: `npm audit fix`
- [ ] Enable HTTPS (automatic on Vercel)
- [ ] Add security headers in `next.config.js`

## 📞 Support

If you encounter issues:
1. Check the [Next.js documentation](https://nextjs.org/docs)
2. Search [Stack Overflow](https://stackoverflow.com/questions/tagged/next.js)
3. Review [Vercel deployment docs](https://vercel.com/docs)

---

**Ready to launch? You've got this! 🚀**
