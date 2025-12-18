# Email Setup Instructions

## 📧 Setting up Gmail App Password

To enable email functionality, you need to generate a Gmail App Password:

### Step 1: Enable 2-Factor Authentication
1. Go to your Google Account: https://myaccount.google.com/
2. Navigate to **Security**
3. Enable **2-Step Verification** if not already enabled

### Step 2: Generate App Password
1. Go to https://myaccount.google.com/apppasswords
2. Sign in if prompted
3. Select app: **Mail**
4. Select device: **Other (Custom name)**
5. Enter name: "Portfolio Contact Form"
6. Click **Generate**
7. Copy the 16-character password (it will look like: `xxxx xxxx xxxx xxxx`)

### Step 3: Configure Environment Variables
1. Open the `.env` file in the portfolio root directory
2. Replace `your-gmail-app-password-here` with your generated App Password
3. Make sure `EMAIL_USER` is set to `solairaj495@gmail.com`

Example `.env` file:
```env
EMAIL_USER=solairaj495@gmail.com
EMAIL_PASSWORD=abcd efgh ijkl mnop
PORT=5000
```

**Note:** Remove spaces from the App Password when pasting.

## 🚀 Running the Server

### Install Dependencies
```bash
cd server
npm install
```

### Start the Server
```bash
npm start
```

Or for development with auto-reload:
```bash
npm run dev
```

The server will run on: http://localhost:5000

## ✅ Testing

1. Make sure both frontend and backend are running:
   - Frontend: `npm run dev` (from root directory)
   - Backend: `npm start` (from server directory)

2. Fill out the contact form on your portfolio
3. Click "Send Message"
4. Check solairaj495@gmail.com inbox

## 🔒 Security Notes

- **Never commit `.env` file to Git** (already added to .gitignore)
- App Password is different from your Gmail password
- App Password only works with 2FA enabled
- Keep your App Password secure

## 🐛 Troubleshooting

**Error: "Invalid login credentials"**
- Verify App Password is correct (no spaces)
- Ensure 2FA is enabled on Gmail account

**Error: "Connection timeout"**
- Check if server is running on port 5000
- Verify firewall isn't blocking the connection

**Error: "CORS error"**
- Make sure backend server is running
- Check frontend is calling correct API URL

**Email not received:**
- Check spam/junk folder
- Verify EMAIL_USER matches solairaj495@gmail.com
- Check server logs for errors

## 📦 Production Deployment

For production, update the API URL in Contact.jsx:
```javascript
const response = await fetch('https://your-domain.com/api/send-email', {
  // ...
});
```

Consider deploying backend to:
- Vercel
- Heroku
- Railway
- DigitalOcean

Set environment variables in your hosting platform's dashboard.
