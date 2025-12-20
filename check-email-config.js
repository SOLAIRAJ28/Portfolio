import dotenv from 'dotenv';

dotenv.config();

console.log('\n🔍 Email Configuration Check\n');
console.log('=' .repeat(50));

// Check Brevo SMTP
console.log('\n📧 Brevo SMTP:');
if (process.env.BREVO_SMTP_KEY) {
  console.log('  ✅ BREVO_SMTP_KEY is set');
  console.log('  ✅ User:', process.env.BREVO_SMTP_USER || process.env.EMAIL_USER || 'Not set');
  console.log('  ✅ This will be used for sending emails');
} else {
  console.log('  ❌ BREVO_SMTP_KEY is NOT set');
}

// Check Gmail SMTP
console.log('\n📧 Gmail SMTP:');
if (process.env.EMAIL_USER && process.env.EMAIL_PASSWORD) {
  console.log('  ✅ EMAIL_USER:', process.env.EMAIL_USER);
  console.log('  ✅ EMAIL_PASSWORD is set');
  if (!process.env.BREVO_SMTP_KEY) {
    console.log('  ✅ This will be used for sending emails');
  } else {
    console.log('  ⚠️  Will be ignored (Brevo has priority)');
  }
} else {
  console.log('  ❌ EMAIL_USER or EMAIL_PASSWORD is NOT set');
}

// Check recipient
console.log('\n📬 Email Recipient:');
console.log('  To:', process.env.EMAIL_TO || 'solairaj495@gmail.com (default)');
console.log('  From:', process.env.EMAIL_FROM || process.env.EMAIL_USER || 'solairaj495@gmail.com (default)');

// Final verdict
console.log('\n' + '='.repeat(50));
console.log('\n🎯 VERDICT:\n');

if (process.env.BREVO_SMTP_KEY) {
  console.log('✅ Email is configured with BREVO SMTP');
  console.log('   This will work both locally and on Render!\n');
} else if (process.env.EMAIL_USER && process.env.EMAIL_PASSWORD) {
  console.log('⚠️  Email is configured with Gmail SMTP');
  console.log('   This works LOCALLY but will TIMEOUT on Render!');
  console.log('   Consider switching to Brevo for Render deployment.\n');
} else {
  console.log('❌ Email is NOT configured!');
  console.log('\n📝 To fix this, add to your .env file:\n');
  console.log('Option 1 - Brevo SMTP (Recommended):');
  console.log('  BREVO_SMTP_USER=your-email@gmail.com');
  console.log('  BREVO_SMTP_KEY=your_brevo_smtp_key');
  console.log('  EMAIL_TO=solairaj495@gmail.com\n');
  console.log('Option 2 - Gmail (Local only):');
  console.log('  EMAIL_USER=your-email@gmail.com');
  console.log('  EMAIL_PASSWORD=your_gmail_app_password');
  console.log('  EMAIL_TO=solairaj495@gmail.com\n');
}

console.log('=' .repeat(50) + '\n');
