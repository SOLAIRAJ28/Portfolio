# Render Environment Variables Setup

## ❌ Current Error
```
MongoDB connection error: connect ECONNREFUSED ::1:27017
```

**Cause:** Missing `MONGODB_URI` environment variable in Render

## ✅ Fix: Add Environment Variables to Render

### Step-by-Step Instructions:

1. **Go to Render Dashboard**
   - URL: https://dashboard.render.com
   - Select your backend service: `portfolio-backend-hy1n`

2. **Navigate to Environment Tab**
   - Click "Environment" in the left sidebar
   - Click "Add Environment Variable"

3. **Add Required Variables**

#### MongoDB (REQUIRED):
```
MONGODB_URI=mongodb+srv://solairaj495:0987654321@cluster0.tr9nu5q.mongodb.net/?appName=Cluster0
```

#### Email Configuration (Choose ONE option):

**Option A - Brevo SMTP (Recommended - Works on Render):**
```
BREVO_SMTP_USER=solairaj495@gmail.com
BREVO_SMTP_KEY=your_brevo_smtp_key_here
EMAIL_TO=solairaj495@gmail.com
```

To get Brevo SMTP key:
- Go to https://www.brevo.com/
- Sign up for free (300 emails/day)
- Go to Settings → SMTP & API
- Create new SMTP key
- Copy the key

**Option B - Gmail SMTP (May timeout on Render):**
```
EMAIL_USER=solairaj495@gmail.com
EMAIL_PASSWORD=fpdgcyethuitsewc
EMAIL_TO=solairaj495@gmail.com
```

⚠️ **Note:** Gmail SMTP often times out on Render due to port restrictions. Use Brevo for better reliability.

4. **Save and Deploy**
   - Click "Save Changes"
   - Render will automatically redeploy (takes 2-3 minutes)
   - Check the logs to verify MongoDB connects successfully

## Expected Success Logs:

After adding the environment variables, you should see:
```
🚀 Server running on port 5000
✅ MongoDB connected successfully
✅ Email server is ready to send messages
```

## Complete Environment Variables List:

Your Render backend should have these variables:

```env
# MongoDB (REQUIRED)
MONGODB_URI=mongodb+srv://solairaj495:0987654321@cluster0.tr9nu5q.mongodb.net/?appName=Cluster0

# Email - Brevo (Recommended)
BREVO_SMTP_USER=solairaj495@gmail.com
BREVO_SMTP_KEY=your_brevo_smtp_key
EMAIL_TO=solairaj495@gmail.com

# OR Email - Gmail (Alternative)
EMAIL_USER=solairaj495@gmail.com
EMAIL_PASSWORD=fpdgcyethuitsewc
EMAIL_TO=solairaj495@gmail.com
```

## Troubleshooting:

### "Still getting connection refused"
- Make sure you saved the environment variables
- Check that Render redeployed after saving
- Verify the MongoDB URI is correct (no extra spaces)

### "Email not sending"
- Use Brevo SMTP instead of Gmail
- Check that all email variables are set
- View Render logs for specific errors

### "How to view logs"
- In Render Dashboard → Select your service
- Click "Logs" tab
- Look for error messages

## Security Note:

⚠️ **Never commit `.env` file to GitHub!**

The `.env` file is already in `.gitignore` to protect your credentials.
Only add environment variables through Render's dashboard for production.

---

**After fixing, your backend will be live at:**
https://portfolio-backend-hy1n.onrender.com
