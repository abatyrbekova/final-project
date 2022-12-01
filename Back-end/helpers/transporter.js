import nodemailer from "nodemailer";



const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
    user: 'nea.hotel@gmail.com',
    pass: 'generated password'
}
});

const mailOptions = {
    from: 'hello@example.com',
    to: 'nea.hotel@gmail.com',
    subject: 'Subject',
    text: 'Email content'
};

transporter.sendMail(mailOptions, function(error, info){
    if (error) {
        console.log(error);
    } else {
        console.log('Email sent: ' + info.response);
    // do something useful
    }
});

export default transporter;