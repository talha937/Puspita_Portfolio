# Quick Update Script - Run this after editing portfolio.config.ts
# Usage: .\update-portfolio.ps1 "Your update message"

param(
    [string]$message = "Updated portfolio content"
)

Write-Host "`n🚀 Updating Portfolio..." -ForegroundColor Cyan
Write-Host "========================================`n" -ForegroundColor Cyan

# Step 1: Add all changes
Write-Host "📦 Step 1: Adding changes..." -ForegroundColor Yellow
git add .
Write-Host "✓ Changes staged`n" -ForegroundColor Green

# Step 2: Commit changes
Write-Host "💾 Step 2: Committing changes..." -ForegroundColor Yellow
git commit -m $message
Write-Host "✓ Changes committed`n" -ForegroundColor Green

# Step 3: Push to GitHub
Write-Host "🌐 Step 3: Pushing to GitHub..." -ForegroundColor Yellow
git push
Write-Host "✓ Pushed to GitHub`n" -ForegroundColor Green

Write-Host "========================================" -ForegroundColor Cyan
Write-Host "✨ Done! Your portfolio will update on Netlify in 1-2 minutes." -ForegroundColor Green
Write-Host "Check your Netlify dashboard: https://app.netlify.com/`n" -ForegroundColor Cyan
