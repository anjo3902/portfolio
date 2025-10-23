require('dotenv').config();
const nodemailer = require('nodemailer');

async function sendTest() {
  const host = process.env.SMTP_HOST;
  const port = process.env.SMTP_PORT ? parseInt(process.env.SMTP_PORT, 10) : undefined;
  const secure = process.env.SMTP_SECURE === 'true';
  const user = process.env.SMTP_USER;
  const pass = process.env.SMTP_PASS;
  const to = process.env.CONTACT_TO_EMAIL || user;

  if (!host || !port || !user || !pass) {
    console.error('SMTP configuration missing in .env');
    process.exit(1);
  }

  try {
    const transporter = nodemailer.createTransport({ host, port, secure, auth: { user, pass } });
    const info = await transporter.sendMail({
      from: `${user}`,
      to,
      subject: 'Test email from developerFolio',
      text: 'This is a test email sent from developerFolio server using the provided App Password.'
    });
    console.log('Email sent:', info && info.messageId ? info.messageId : info);
    process.exit(0);
  } catch (err) {
    console.error('Failed to send test email:', err);
    process.exit(2);
  }
}

sendTest();
