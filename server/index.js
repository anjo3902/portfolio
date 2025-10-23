const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const nodemailer = require("nodemailer");
require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(bodyParser.json());

app.get("/", (req, res) => res.json({ ok: true }));

app.post("/api/contact", async (req, res) => {
  const { name, email, message } = req.body || {};
  if (!name || !email || !message) {
    return res.status(400).json({ error: "Missing required fields" });
  }

  // Read SMTP config from env
  const host = process.env.SMTP_HOST;
  const port = process.env.SMTP_PORT ? parseInt(process.env.SMTP_PORT, 10) : undefined;
  const secure = process.env.SMTP_SECURE === "true";
  const user = process.env.SMTP_USER;
  const pass = process.env.SMTP_PASS;
  const to = process.env.CONTACT_TO_EMAIL || process.env.SMTP_USER;

  if (!host || !port || !user || !pass || !to) {
    // SMTP not configured — fallback: write to local log file for testing
    const fs = require("fs");
    const path = require("path");
    const logDir = path.join(__dirname, "logs");
    if (!fs.existsSync(logDir)) fs.mkdirSync(logDir, { recursive: true });
    const logFile = path.join(logDir, "messages.log");
    const entry = `${new Date().toISOString()}\nFrom: ${name} <${email}>\n${message}\n---\n`;
    try {
      fs.appendFileSync(logFile, entry, "utf8");
      return res.json({ success: true, note: "Saved to local log (SMTP not configured)" });
    } catch (err) {
      console.error("Failed to write local log:", err);
      return res.status(500).json({ error: "Server not configured and failed to write local log" });
    }
  }

  try {
    const transporter = nodemailer.createTransport({
      host,
      port,
      secure,
      auth: { user, pass }
    });

    const mailOptions = {
      from: `${name} <${email}>`,
      to,
      subject: `Website contact form: ${name}`,
      text: `Message from: ${name} <${email}>\n\n${message}`,
      html: `<p><strong>From:</strong> ${name} &lt;${email}&gt;</p><p>${message.replace(/\n/g, "<br/>")}</p>`
    };

    await transporter.sendMail(mailOptions);

    return res.json({ success: true });
  } catch (err) {
    console.error("Error sending email:", err);
    return res.status(500).json({ error: "Failed to send email" });
  }
});

app.listen(PORT, () => {
  console.log(`Contact server listening on port ${PORT}`);
});
