
const nodemailer = require('nodemailer')
const dotenv = require('dotenv')
dotenv.config()


const contact = (req, res) => {
    console.log(req.body)
    var transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 465,
    secure: true,
    auth: {
      user: process.env.USERMAIL,
      pass: process.env.PASS
    },
    tls: {
        rejectUnauthorized: false,
    }
  });
  
  var mailOptions = {
    from: req.body.email,
    to: 'Okunade288@gmail.com',
    subject: `${req.body.fullName} checked your portfolio.`,
    text: `Message from ${req.body.fullName}: ${req.body.message} and my email is ${req.body.email}
    `
  };
  
  transporter.sendMail(mailOptions, function(error, info){
    if (error) {
      console.log(error);
      // res.status(500).json({ message: 'Error occur while sending email', status: false });
    } else {
      console.log('Email sent: ' + info.response);
      res.send({status:true, message: "Mail sent Successfully"})
    }
  });;
}


module.exports = {contact}