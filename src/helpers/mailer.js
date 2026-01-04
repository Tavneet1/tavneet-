import Users from '@/models/userModel';
import nodemailer from 'nodemailer'
import bcryptjs from "bcryptjs";


export const sendEmail = async ({ email, emailType, userId }) => {
    try {
        const hashToken = await bcryptjs.hash(userId.toString(), 10)

        if (emailType === "VERIFY") {
            await Users.findByIdAndUpdate(userId, { verifyToken: hashToken, verifyTokenExpiry: Date.now() + 3600000 })
        } else if (emailType === "RESET") {
            await Users.findByIdAndUpdate(userId, { forgotPasswordToken: hashToken, forgotPasswordTokenExpriy: Date.now() + 3600000 })
        }

        var transport = nodemailer.createTransport({
            host: "sandbox.smtp.mailtrap.io",
            port: 2525,
            secure: true,
            auth: {
                user: "d7c622d421037a",
                pass: "sandesh@123"
            }
        })

        const mailOptions = {
            from: 'sandesh27deshmukh@gmail.com', // sender address
            to: email, // list of receivers
            subject: emailType === 'VERIFY' ? 'VERIFY your email' : 'Reset your ',
            text: "Hello world?", // plain text body
            html: `<p> Click <a href="${process.env.DOMIN}/verifyemail?token=${hashToken}">here</a> to ${emailType === 'VERIFY' ? 'VERIFY your email' : 'Reset your Psssword'} or copy pate the link below in yout brower</p> <br/> ${process.env.DOMIN}/verifyemail?token=${hashToken}`, // html body
        }

        const mailResponse = await transport.sendMail(mailOptions)
        return mailResponse, 'mail is working '


    } catch (error) {
        throw new Error(error.massage, 'mail is not working ')
    }
}