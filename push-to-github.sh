#!/bin/bash
# Push StarWell Website to GitHub
# Run this script after creating your repository on GitHub

echo "🚀 StarWell Website - GitHub Push Setup"
echo ""

# Check if we're in the right directory
if [ ! -f "index.html" ]; then
    echo "❌ Error: Not in StarWell-Website directory"
    exit 1
fi

# Prompt for GitHub username
read -p "Enter your GitHub username: " username

if [ -z "$username" ]; then
    echo "❌ Error: Username cannot be empty"
    exit 1
fi

# Set the remote URL
REPO_URL="https://github.com/$username/starwell-website.git"

echo ""
echo "📡 Setting up remote repository..."
echo "Repository: $REPO_URL"

# Remove existing remote if any
git remote remove origin 2>/dev/null

# Add new remote
git remote add origin "$REPO_URL"

# Rename branch to main (if needed)
git branch -M main

echo ""
echo "🚀 Pushing to GitHub..."
echo ""
echo "You'll be prompted for your GitHub credentials:"
echo "  Username: $username"
echo "  Password: Use a Personal Access Token (not your password!)"
echo ""
echo "Don't have a token? Get one at:"
echo "https://github.com/settings/tokens/new"
echo ""

# Push to GitHub
git push -u origin main

if [ $? -eq 0 ]; then
    echo ""
    echo "✅ SUCCESS! Your website is now on GitHub!"
    echo ""
    echo "🌐 View your repository:"
    echo "   https://github.com/$username/starwell-website"
    echo ""
    echo "📋 Next steps:"
    echo "   1. Go to repository Settings → Pages"
    echo "   2. Source: main branch, / (root)"
    echo "   3. Add custom domain: starwell-hh.com"
    echo "   4. Update GoDaddy DNS (see DEPLOY-GITHUB-PAGES-FREE.md)"
    echo ""
else
    echo ""
    echo "❌ Push failed. Common issues:"
    echo ""
    echo "1. Repository doesn't exist yet?"
    echo "   Create it at: https://github.com/new"
    echo "   Name: starwell-website"
    echo "   Don't initialize with README"
    echo ""
    echo "2. Wrong credentials?"
    echo "   Use Personal Access Token, not password"
    echo "   Get token: https://github.com/settings/tokens/new"
    echo ""
    echo "3. Repository already has content?"
    echo "   Try: git pull origin main --allow-unrelated-histories"
    echo "   Then: git push -u origin main"
    echo ""
fi
