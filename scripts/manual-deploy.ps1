$ErrorActionPreference = "Stop"

$outDir = Join-Path $PSScriptRoot "..\out"
$tempDir = Join-Path $env:TEMP "clapsa-clean-deploy"

# Clean temp dir
if (Test-Path $tempDir) { Remove-Item $tempDir -Recurse -Force }

# Clone gh-pages
Push-Location $env:TEMP
git clone --branch gh-pages --single-branch --depth 1 "https://github.com/salesio/clapsa.git" "clapsa-clean-deploy"
Pop-Location

Push-Location $tempDir

# Config git
git config user.email "deploy@clapsa.co.za"
git config user.name "CLAPSA Deploy"

# Remove all files except .git
Get-ChildItem . -Exclude '.git' -Force | Remove-Item -Recurse -Force

# Copy new build output
Copy-Item -Path "$outDir\*" -Destination . -Recurse -Force
New-Item -Path ".nojekyll" -ItemType File -Force | Out-Null

# Commit and push
git add -A
git commit -m "Deploy: multi-language support (EN/PT/AF), IP geolocation, refined navbar, and upgraded admin portal"
git push origin gh-pages --force

Pop-Location

# Cleanup
Remove-Item $tempDir -Recurse -Force -ErrorAction SilentlyContinue

Write-Host "Successfully deployed to gh-pages!" -ForegroundColor Green
