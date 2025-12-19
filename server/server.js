import express from 'express';
import nodemailer from 'nodemailer';
import cors from 'cors';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import { nanoid } from 'nanoid';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';
import Message from './models/Message.js';

// Get directory name for ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Load .env from parent directory
dotenv.config({ path: join(__dirname, '..', '.env') });

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// MongoDB Connection
const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log('✅ MongoDB connected successfully');
  } catch (error) {
    console.error('❌ MongoDB connection error:', error);
    process.exit(1);
  }
};

connectDB();

// Email configuration - Using port 465 (SSL) for better compatibility with Render
const transporter = nodemailer.createTransport({
  host: 'smtp.gmail.com',
  port: 465,
  secure: true, // Use SSL
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASSWORD, // Gmail App Password
  },
  tls: {
    rejectUnauthorized: false
  },
  connectionTimeout: 10000, // 10 seconds
  greetingTimeout: 10000,
  socketTimeout: 10000
});

// Verify email configuration (don't block server startup)
transporter.verify((error, success) => {
  if (error) {
    console.log('⚠️  Email verification failed (will retry on send):', error.message);
  } else {
    console.log('✅ Email server is ready to send messages');
  }
});

// Email endpoint
app.post('/api/send-email', async (req, res) => {
  const { name, email, message } = req.body;

  // Validation
  if (!name || !email || !message) {
    return res.status(400).json({ 
      success: false, 
      message: 'All fields are required' 
    });
  }

  // Email format validation
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return res.status(400).json({ 
      success: false, 
      message: 'Invalid email format' 
    });
  }

  // Generate unique token ID
  const tokenId = `MSG-${nanoid(10)}`;

  try {
    // Save to MongoDB
    const newMessage = new Message({
      tokenId,
      name,
      email,
      message,
      emailSent: false
    });

    await newMessage.save();
    console.log(`📝 Message saved with Token ID: ${tokenId}`);

    // Send response immediately
    res.status(200).json({ 
      success: true, 
      message: 'Message sent successfully!',
      tokenId: tokenId
    });

    // Try to send email asynchronously
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: 'solairaj495@gmail.com',
      replyTo: email,
      subject: `Portfolio Contact from ${name} [${tokenId}]`,
      html: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; background-color: #f9fafb; border-radius: 10px;">
        <div style="background: linear-gradient(135deg, #1e40af 0%, #06b6d4 100%); padding: 30px; border-radius: 10px 10px 0 0; text-align: center;">
          <h1 style="color: white; margin: 0; font-size: 24px;">New Portfolio Message</h1>
          <p style="color: #e0f2fe; margin: 10px 0 0 0; font-size: 14px;">Token ID: ${tokenId}</p>
        </div>
        
        <div style="background: white; padding: 30px; border-radius: 0 0 10px 10px; box-shadow: 0 2px 10px rgba(0,0,0,0.1);">
          <div style="margin-bottom: 20px; padding: 15px; background: #dbeafe; border-radius: 8px; border-left: 4px solid #1e40af;">
            <p style="margin: 0; color: #1e3a8a; font-weight: bold; font-size: 14px;">🔖 Reference ID</p>
            <p style="margin: 5px 0 0 0; color: #1e40af; font-size: 18px; font-weight: bold; letter-spacing: 1px;">${tokenId}</p>
          </div>

          <div style="margin-bottom: 20px; padding-bottom: 20px; border-bottom: 2px solid #e5e7eb;">
            <p style="margin: 0 0 5px 0; color: #6b7280; font-size: 14px;">From:</p>
            <p style="margin: 0; color: #111827; font-size: 18px; font-weight: bold;">${name}</p>
          </div>
          
          <div style="margin-bottom: 20px; padding-bottom: 20px; border-bottom: 2px solid #e5e7eb;">
            <p style="margin: 0 0 5px 0; color: #6b7280; font-size: 14px;">Email:</p>
            <p style="margin: 0;">
              <a href="mailto:${email}" style="color: #1e40af; text-decoration: none; font-size: 16px;">${email}</a>
            </p>
          </div>
          
          <div style="margin-bottom: 20px;">
            <p style="margin: 0 0 10px 0; color: #6b7280; font-size: 14px;">Message:</p>
            <div style="background: #f3f4f6; padding: 15px; border-radius: 8px; border-left: 4px solid #1e40af;">
              <p style="margin: 0; color: #111827; line-height: 1.6; white-space: pre-wrap;">${message}</p>
            </div>
          </div>
          
          <div style="margin-top: 30px; padding-top: 20px; border-top: 2px solid #e5e7eb; text-align: center;">
            <a href="mailto:${email}?subject=Re: Portfolio Contact [${tokenId}]" 
               style="display: inline-block; background: linear-gradient(135deg, #1e40af 0%, #06b6d4 100%); 
                      color: white; padding: 12px 30px; text-decoration: none; border-radius: 8px; 
                      font-weight: bold; font-size: 14px;">
              Reply to ${name}
            </a>
          </div>
        </div>
        
        <div style="text-align: center; margin-top: 20px; color: #6b7280; font-size: 12px;">
          <p>This message was sent from your portfolio contact form</p>
          <p>Reference: ${tokenId}</p>
        </div>
      </div>
    `,
      text: `
New Portfolio Message
Token ID: ${tokenId}

From: ${name}
Email: ${email}

Message:
${message}

---
Reply to this email to respond to ${name}
Reference: ${tokenId}
    `,
    };

    // Send email with proper error handling and logging
    try {
      console.log(`📧 Attempting to send email for ${tokenId}...`);
      const info = await transporter.sendMail(mailOptions);
      
      // Update database to mark email as sent
      newMessage.emailSent = true;
      await newMessage.save();
      
      console.log(`✅ Email sent successfully for ${tokenId}`);
      console.log(`📬 Email response: ${info.response}`);
      console.log(`📨 Message ID: ${info.messageId}`);
    } catch (emailError) {
      console.error(`❌ Email sending failed for ${tokenId}:`, emailError.message);
      console.error(`📋 Error details:`, {
        code: emailError.code,
        command: emailError.command,
        response: emailError.response,
        responseCode: emailError.responseCode
      });
      // Don't throw - message is already saved, email failure shouldn't break the response
    }

  } catch (error) {
    console.error('❌ Database error:', error);
    res.status(500).json({ 
      success: false, 
      message: 'Failed to save message. Please try again later.' 
    });
  }
});

// Cleanup endpoint - remove status field from all messages
app.post('/api/cleanup/remove-status', async (req, res) => {
  try {
    const result = await Message.updateMany(
      {},
      { $unset: { status: "" } }
    );
    
    res.json({ 
      success: true, 
      message: 'Status field removed from all messages',
      modifiedCount: result.modifiedCount
    });
  } catch (error) {
    console.error('Cleanup error:', error);
    res.status(500).json({ 
      success: false, 
      message: 'Cleanup failed' 
    });
  }
});

// Health check endpoint
app.get('/api/health', (req, res) => {
  res.json({ status: 'ok', message: 'Server is running' });
});

app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});
