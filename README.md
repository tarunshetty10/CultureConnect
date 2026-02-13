# CultureConnect

CultureConnect is a comprehensive platform designed to bridge the gap between devotees and religious institutions, offering seamless booking of services (Poojas/Services) across multiple faiths including Hinduism, Islam, Christianity, and Sikhism.

## 🚀 GitHub Deployment Guide

If you are having trouble pushing your code to GitHub, please follow these steps carefully.

### 1. Basic Setup
Run these commands in your project's root terminal:

```bash
# Initialize the repository
git init

# Add all files to staging
git add .

# Create your first commit
git commit -m "Initial commit: CultureConnect full features"

# Link your local repo to GitHub
# (If you get an error saying 'origin' exists, run: git remote remove origin first)
git remote add origin https://github.com/tarunshetty10/CultureConnect.git

# Push to the main branch
git push -u origin main
```

### 2. Troubleshooting Common Issues

#### Issue: "Authentication failed"
**Solution:** 
- If you are using HTTPS, GitHub now requires a **Personal Access Token (PAT)** instead of your password. 
- Go to GitHub Settings -> Developer Settings -> Personal access tokens -> Tokens (classic) -> Generate new token.
- Use this token as your password when prompted in the terminal.

#### Issue: "failed to push some refs" or "updates were rejected"
**Solution:** This usually happens if the GitHub repo has files (like a README or License) that your local machine doesn't have.
```bash
git pull origin main --rebase
git push -u origin main
```

#### Issue: "remote origin already exists"
**Solution:**
```bash
git remote set-url origin https://github.com/tarunshetty10/CultureConnect.git
```

### 3. Verification
Once pushed, you can visit [https://github.com/tarunshetty10/CultureConnect](https://github.com/tarunshetty10/CultureConnect) to see your code.

## 🛠 Features
- **Multi-Faith Support**: Specialized activities for Hinduism, Islam, Christianity, and Sikhism.
- **WhatsApp Integration**: Book services directly via WhatsApp for a personal touch.
- **Contact System**: Built-in messaging system saved to Firestore.
- **Modern UI**: Glowing interactive buttons, smooth scrolling, and responsive layouts.
- **Secure Authentication**: Email and Phone number login supported via Firebase.
