# Local Email Setup Guide

## Current Status
✅ Frontend: Running on http://localhost:3000
✅ Backend: Running on http://localhost:5000
⚠️ Email: Needs configuration

## Quick Fix - Choose ONE Option:

### Option 1: Gmail SMTP (Easiest for Local Development)

1. **Get Gmail App Password:**
   - Go to: https://myaccount.google.com/apppasswords
   - Sign in with your Gmail account (solairaj495@gmail.com)
   - Create a new app password for "Portfolio"
   - Copy the 16-character password

2. **Update your `.env` file:**
   ```env
   # Email Configuration (Gmail)
   EMAIL_USER=solairaj495@gmail.com
   EMAIL_PASSWORD=your_16_character_app_password_here
   EMAIL_TO=solairaj495@gmail.com
   
   # MongoDB
   MONGODB_URI=your_mongodb_uri_here
   
   # Server
   PORT=5000
   ```

3. **Restart the backend server:**
   - Stop the current backend (Ctrl+C in the terminal)
   - Run: `npm run dev` in the `server` folder

### Option 2: Brevo SMTP (Works Everywhere)

1. **Create Brevo Account:**
   - Go to: https://www.brevo.com/
   - Sign up for FREE (300 emails/day)
   - Verify your email

2. **Get SMTP Credentials:**
   - Login to Brevo Dashboard
   - Click your name → "SMTP & API"
   - Click "Create a new SMTP key"
   - Name it: "Portfolio Local"
   - Copy the SMTP key

3. **Update your `.env` file:**
   ```env
   # Email Configuration (Brevo)
   BREVO_SMTP_USER=solairaj495@gmail.com
   BREVO_SMTP_KEY=your_brevo_smtp_key_here
   EMAIL_TO=solairaj495@gmail.com
   
   # MongoDB
   MONGODB_URI=your_mongodb_uri_here
   
   # Server
   PORT=5000
   ```

4. **Restart the backend server:**
   - Stop the current backend (Ctrl+C in the terminal)
   - Run: `npm run dev` in the `server` folder

## Testing

After setting up email:

1. Go to http://localhost:3000
2. Scroll to the Contact section
3. Fill out the form with test data
4. Click "Send Message"
5. Check your email at solairaj495@gmail.com

## Troubleshooting

### "Email not sending"
- Check that you added the correct credentials to `.env`
- Make sure you restarted the backend server after updating `.env`
- Check the backend terminal for error messages

### "Connection timeout"
- If using Gmail, make sure you're using an App Password, not your regular password
- Try Brevo SMTP instead (more reliable)

### "Invalid credentials"
- Double-check your email and password/key
- Make sure there are no extra spaces
- For Gmail, the app password should be 16 characters

## Current Backend Configuration

The backend automatically detects which email service to use:

1. **Priority 1:** Brevo SMTP (if `BREVO_SMTP_KEY` exists)
2. **Priority 2:** Gmail SMTP (if `EMAIL_USER` and `EMAIL_PASSWORD` exist)
3. **Fallback:** Email disabled (messages still saved to MongoDB)

## Recommendation

For **local development**: Use Gmail (easier setup)
For **Render deployment**: Use Brevo (Gmail doesn't work on Render)

---

**Need help?** Check the backend terminal logs for specific error messages!
