const express = require('express');
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
app.use(bodyParser.json());
app.use(cors());

// Set up the Nodemailer transport
const transporter = nodemailer.createTransport({
    service: 'gmail', // Use your email service (Gmail is just an example)
    auth: {
        user: 'your-email@gmail.com',
        pass: 'your-email-password'
    }
});

// Handle form submission
app.post('/send-message', (req, res) => {
    const { name, email, message } = req.body;

    // Email options
    const mailOptions = {
        from: email,
        to: 'your-email@gmail.com', 
        subject: `New Contact Form Submission from ${name}`,
        text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`
    };

    // Send the email
    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.error('Error sending email: ', error);
            res.status(500).send('Error sending message.');
        } else {
            console.log('Email sent: ' + info.response);
            res.status(200).send('Message sent successfully!');
        }
    });
});

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});
