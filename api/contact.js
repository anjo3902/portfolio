const nodemailer = require('nodemailer');

module.exports = async (req, res) => {
  if (req.method !== 'POST') {
    res.status(405).json({ error: 'Method not allowed' });
    return;
  }

  const { name, email, message } = req.body || {};
  if (!name || !email || !message) {
    res.status(400).json({ error: 'Missing name, email or message' });
    return;
  }

  // Read SMTP config from environment variables set in Vercel
  const SMTP_HOST = process.env.SMTP_HOST;
  const SMTP_PORT = process.env.SMTP_PORT || 587;
  const SMTP_SECURE = (process.env.SMTP_SECURE || 'false') === 'true';
  const SMTP_USER = process.env.SMTP_USER;
  const SMTP_PASS = process.env.SMTP_PASS;
  const CONTACT_TO_EMAIL = process.env.CONTACT_TO_EMAIL || SMTP_USER;

  if (!SMTP_USER || !SMTP_PASS) {
    // If SMTP not configured, respond with an error so frontend can show useful message
    console.error('SMTP not configured. Set SMTP_USER and SMTP_PASS in environment.');
    res.status(500).json({ error: 'SMTP not configured on server' });
    return;
  }

  try {
    const transporter = nodemailer.createTransport({
      host: SMTP_HOST || 'smtp.gmail.com',
      port: Number(SMTP_PORT) || 587,
      secure: SMTP_SECURE,
      auth: {
        user: SMTP_USER,
        pass: SMTP_PASS,
      },
    });

    const mailOptions = {
      from: `${name} <${email}>`,
      to: CONTACT_TO_EMAIL,
      subject: `New message from portfolio contact form: ${name}`,
      text: `${message}\n\nFrom: ${name} <${email}>`,
      html: `<p>${message.replace(/\n/g, '<br/>')}</p><hr/><p>From: ${name} &lt;${email}&gt;</p>`,
    };

    const info = await transporter.sendMail(mailOptions);
    console.log('Message sent: %s', info.messageId);
    res.status(200).json({ success: true });
  } catch (err) {
    console.error('Error sending email', err);
    res.status(500).json({ error: 'Failed to send email' });
  }
};
