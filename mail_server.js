// Load Node modules
require("dotenv").config();
const express = require('express');
const nodemailer = require('nodemailer');
const cors = require('cors');
const bodyParser = require('body-parser');

// Initialise Express
const app = express();

app.use(express.json());

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
app.use(cors());

// Port website will run on
app.listen(9090);
console.log("Mail server listening on port 9090!");

// send email endpoint for contact form
const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.GMAIL_ACCOUNT,
        pass: process.env.GMAIL_PASSWORD
    }
});

app.post('/mail', async(req, res)=>{
    const {name, companyName, email, message} = req.body;
    // const {name, companyName, email, message} = req.query;

    console.log(name, companyName, email, message)

    const mailOptionsForVistor = {
        from: 'tomohiroyoshida10@gmail.com',
        to: email,
        subject: 'Thank you for your inquiry',
        text: `Dear ${name},\n\nThis is an automated message.\nThank you for contacting me on my website.\nI am going to reply to your message in a couple of days.\n\nYour message:\n${message}\n\nTomohiro Yoshida(TOMO'S Portfolio)`
    }

    const mailOptionsForHost = {
        from: 'tomohiroyoshida10@gmail.com',
        to: 'tomohiroyoshida10@gmail.com',
        subject: 'Inquiry from a visitor of my portfolio site',
        text: `name: ${name}\ncompanyName: ${companyName}\nemail: ${email}\nmessage: ${message}`
    }

    let sendEmailPromise = new Promise((resolve, reject)=>{

        // transporter.sendMail(mailOptionsForVistor, (error, info) => {
        //     if (error) {
        //         console.log(error)
        //     } else {
        //         console.log('Email sent: ' + info.response)
        //     }
        // })

        transporter.sendMail(mailOptionsForHost, (error_1, info_1) => {
            const emailSendResult = {host: null, vistor: null}

            if (error_1) {
                console.log(error_1)
                emailSendResult.host = false
                reject(emailSendResult)
            } else {
                console.log('Email sent: ' + info_1.response)
                emailSendResult.host = true
                transporter.sendMail(mailOptionsForVistor, (error_2, info_2) => {
                    if (error_2) {
                        console.log(error_2)
                        emailSendResult.vistor = false
                        reject(emailSendResult)
                    } else {
                        console.log('Email sent: ' + info_2.response)
                        emailSendResult.vistor = true
                        resolve(emailSendResult)
                    }
                })

            }
        })
    })

    const resultOfEmail = await sendEmailPromise.then(response => response).catch(error => error);

    // console.log(resultOfEmail);
    if (resultOfEmail.host && resultOfEmail.vistor) {
        res.status(200).send({ success: true });
    } else {
        res.status(400).send({ success: false });
    }
});