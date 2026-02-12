# 🚀 Complete GitHub + Netlify Setup Guide

## ✅ What's Already Done
- ✓ Git initialized
- ✓ All files committed
- ✓ Branch renamed to `main`
- ✓ GitHub CLI installed

## 📋 Next Steps (Takes 5 Minutes)

### Step 1: Create GitHub Repository

**Option A: Use GitHub CLI (Fastest)**
```powershell
# Open a NEW PowerShell window and run:
gh auth login
# Follow the prompts to authenticate (opens browser)

# Then create the repository:
gh repo create Portfolio_Puspita --public --source=. --remote=origin --push
```

**Option B: Manual (If CLI doesn't work)**
1. Go to https://github.com/new
2. Repository name: `Portfolio_Puspita`
3. Make it **Public**
4. Click **Create repository**
5. Run these commands in your terminal:
```powershell
git remote add origin https://github.com/YOUR_USERNAME/Portfolio_Puspita.git
git push -u origin main
```

### Step 2: Connect to Netlify

1. Go to https://app.netlify.com/
2. Click **"Add new site"** → **"Import an existing project"**
3. Choose **"Deploy with GitHub"**
4. Authorize Netlify to access your GitHub
5. Select the **`Portfolio_Puspita`** repository
6. Netlify auto-detects settings:
   - Build command: `npm run build`
   - Publish directory: `.next`
7. Click **"Deploy site"**

### Step 3: Done! 🎉

Now whenever you update your portfolio:

```powershell
# 1. Edit portfolio.config.ts with your changes

# 2. Commit and push
git add portfolio.config.ts
git commit -m "Updated my experience and projects"
git push

# 3. Netlify automatically rebuilds! (Check your site in 1-2 minutes)
```

## 🔧 Quick Update Commands

Save these for future updates:

```powershell
# After editing portfolio.config.ts:
git add .
git commit -m "Updated portfolio content"
git push

# That's it! Netlify handles the rest.
```

## 🎯 Pro Tips

1. **Check Build Status**: Go to Netlify dashboard → Deploys
2. **Instant Rollback**: If something breaks, click "Publish deploy" on any previous successful deploy
3. **Custom Domain**: In Netlify → Domain settings → Add custom domain
4. **Environment Variables**: Netlify → Site configuration → Environment variables

## 🆘 Troubleshooting

**If `gh` command not found:**
- Close and reopen PowerShell
- Or use Option B (Manual method)

**If push is rejected:**
```powershell
git pull origin main --rebase
git push
```

**If build fails on Netlify:**
- Check the build logs in Netlify dashboard
- Usually it's a missing dependency - add it to package.json

---

**You're all set for professional continuous deployment! 🚀**
