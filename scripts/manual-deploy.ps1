$ErrorActionPreference = "Stop"

$outDir = Join-Path $PSScriptRoot "..\out"
$tempDir = Join-Path $env:TEMP "clapsa-clean-deploy"

# Clean temp dir
if (Test-Path $tempDir) { Remove-Item $tempDir -Recurse -Force }

$repoRoot = (Resolve-Path "$PSScriptRoot\..").Path
$latestMsg = git -C $repoRoot log -1 --pretty=%s
if (-not $latestMsg) { $latestMsg = "Update static export" }

# Clone gh-pages from local repo
Push-Location $env:TEMP
git clone --branch gh-pages --single-branch "$repoRoot" "clapsa-clean-deploy"
Pop-Location

Push-Location $tempDir
git remote set-url origin "https://github.com/salesio/clapsa.git"

# Config git
git config user.email "deploy@clapsa.co.za"
git config user.name "CLAPSA Deploy"
git config http.postBuffer 524288000
git config http.lowSpeedLimit 0
git config http.lowSpeedTime 999999

# Remove all files except .git
Get-ChildItem . -Exclude '.git' -Force | Remove-Item -Recurse -Force

# Copy new build output
Copy-Item -Path "$outDir\*" -Destination . -Recurse -Force
New-Item -Path ".nojekyll" -ItemType File -Force | Out-Null

# Commit and push
git add -A
git commit -m "Deploy to gh-pages: $latestMsg"
git push origin gh-pages

Pop-Location

# Fast forward local gh-pages branch as well
Push-Location $repoRoot
git fetch origin gh-pages:gh-pages
Pop-Location

# Cleanup
Remove-Item $tempDir -Recurse -Force -ErrorAction SilentlyContinue

Write-Host "Successfully deployed to gh-pages!" -ForegroundColor Green
