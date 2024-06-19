const express = require('express');
const nodemailer = require('nodemailer');
const cors = require('cors');
const dotenv = require('dotenv');

dotenv.config();

const app = express();
const port = process.env.PORT || 5000;

app.use(express.json());
app.use(cors());

app.post('/subscribe', (req, res) => {
  const { email, firstName } = req.body;

  // Check if email and first name are provided
  if (!email || !firstName) {
    return res.status(400).send('Email and first name are required');
  }

  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.ZOHO_USER, // Email ID from .env
      pass: process.env.ZOHO_PASS  // Password from .env
    }
  });

  // Setup email data for admin notification
  const mailOptions = {
    from: process.env.ZOHO_USER,
    to: 'support@ardracloud.com',
    subject: 'New Subscription',
    text: `New subscriber: ${email} (${firstName})`
  };

  // Setup email data for thank you message
  const thankYouMailOptions = {
    from: 'support@ardracloud.com',
    to: email,
    subject: 'Thank You for Subscribing',
    text: `Dear ${firstName},\n\nThank you for subscribing to ArdraAI . We appreciate your interest.\n\nBest regards,\n ArdraAI Team`
  };

  // Send mail to admin
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      return res.status(500).send(error.toString());
    }

    // Send thank you mail to the subscriber
    transporter.sendMail(thankYouMailOptions, (error, info) => {
      if (error) {
        return res.status(500).send(error.toString());
      }
      res.status(200).send('Subscription successful');
    });
  });
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
