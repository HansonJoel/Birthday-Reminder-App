const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  host: process.env.BREVO_SMTP_HOST,
  port: process.env.BREVO_SMTP_PORT,
  secure: false,
  auth: {
    user: process.env.BREVO_SMTP_USER,
    pass: process.env.BREVO_SMTP_PASS,
  },
});

const sendBirthdayEmail = async (user) => {
  const mailOptions = {
    from: `Hanson Development Team <${process.env.FROM_EMAIL}>`,
    to: user.email,
    subject: "Happy Birthday!",
    html: `
      <div style="font-family: Arial; padding: 20px;">
        <h2>Happy Birthday ${user.username}! </h2>
        <p>Wishing you joy, success, and good health today and always.</p>
        <p>Enjoy your special day!</p>
      </div>
    `,
  };

  await transporter.sendMail(mailOptions);
};

module.exports = sendBirthdayEmail;
