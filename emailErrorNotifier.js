const nodemailer = require('nodemailer');

// Configure email transporter
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'contact.me.online00@gmail.com',
    pass: 'YOUR_APP_PASSWORD_HERE' // TODO: Replace with your Gmail App Password
  }
});

// Function to send error notification email
function sendErrorMail(error, req) {
  const mailOptions = {
    from: 'contact.me.online00@gmail.com',
    to: 'contact.me.online00@gmail.com',
    subject: 'AeroHealth Backend Error Alert',
    text: `An error occurred in the AeroHealth application:\n\n
    Error Message: ${error.message}\n
    Stack Trace: ${error.stack}\n
    Request URL: ${req ? req.url : 'N/A'}\n
    Request Method: ${req ? req.method : 'N/A'}\n
    Timestamp: ${new Date().toISOString()}`
  };

  transporter.sendMail(mailOptions, (err, info) => {
    if (err) {
      console.error('Failed to send error notification email:', err);
    } else {
      console.log('Error notification email sent:', info.response);
    }
  });
}

module.exports = { sendErrorMail };
