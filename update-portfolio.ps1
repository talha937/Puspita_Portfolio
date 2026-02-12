# Quick Update Script - Run this after editing portfolio.config.ts
# Usage: .\update-portfolio.ps1 "Your update message"

param(
    [string]$message = "Updated portfolio content"
)

Write-Host ""
Write-Host "======================================" -ForegroundColor Cyan
Write-Host "  Updating Portfolio..." -ForegroundColor Cyan
Write-Host "======================================" -ForegroundColor Cyan
Write-Host ""

# Step 1: Add all changes
Write-Host "Step 1: Adding changes..." -ForegroundColor Yellow
git add .
if ($LASTEXITCODE -eq 0) {
    Write-Host "SUCCESS: Changes staged" -ForegroundColor Green
} else {
    Write-Host "ERROR: Failed to stage changes" -ForegroundColor Red
    exit 1
}
Write-Host ""

# Step 2: Commit changes
Write-Host "Step 2: Committing changes..." -ForegroundColor Yellow
git commit -m $message
if ($LASTEXITCODE -eq 0) {
    Write-Host "SUCCESS: Changes committed" -ForegroundColor Green
} else {
    Write-Host "NOTE: Nothing to commit (no changes detected)" -ForegroundColor Yellow
}
Write-Host ""

# Step 3: Push to GitHub
Write-Host "Step 3: Pushing to GitHub..." -ForegroundColor Yellow
git push
if ($LASTEXITCODE -eq 0) {
    Write-Host "SUCCESS: Pushed to GitHub" -ForegroundColor Green
} else {
    Write-Host "ERROR: Failed to push to GitHub" -ForegroundColor Red
    exit 1
}
Write-Host ""

Write-Host "======================================" -ForegroundColor Cyan
Write-Host "  DONE! Portfolio Updated" -ForegroundColor Green
Write-Host "======================================" -ForegroundColor Cyan
Write-Host ""
Write-Host "Your site will update on Netlify in 1-2 minutes." -ForegroundColor White
Write-Host "Check: https://app.netlify.com/" -ForegroundColor Cyan
Write-Host ""
