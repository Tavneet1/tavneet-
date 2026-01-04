import nodemailer from "nodemailer";
import User from "@/models/userModel";
import bcryptjs from "bcryptjs";

function getHtmlTemplate(emailSubject, url, hashedToken) {
    return `<head>
    <title>${emailSubject}</title>
    <style>
        body {
            min-height: 100vh;
            background-color: #f5f5f5;
            display: flex;
            justify-content: center;
            align-items: center;
            margin: 0;
            font-family: sans-serif;
        }

        .container {
            background-color: #fff;
            padding: 3rem 4rem;
            border-radius: 5px;
            box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
            max-width: 500px;
            margin: 0 auto;
        }

        h2 {
            margin-bottom: 2rem;
            text-align: center;
        }

        button {
            width: 100%;
            background-color: #F87171;
            /* Adjust to your preferred red color */
            color: #fff;
            padding: 1rem 2rem;
            border: none;
            border-radius: 5px;
            cursor: pointer;
            font-weight: bold;
            transition: background-color 0.2s ease-in-out;
        }

        button:hover {
            background-color: #EF4444;
        }

        p {
            margin-top: 1rem;
        }
    </style>
</head>

<body>
    <div class="container">
        <h2>Click here to ${emailSubject}:</h2>
        <a href="${process.env.DOMAIN}/${url}?token=${hashedToken}">
        <button>${emailSubject}</button>
        </a>
        <p>Or paste this link in your browser:</p>
        <p>${process.env.DOMAIN}/${url}?token=${hashedToken}</p>
    </div>
</body>`;
}

export const sendEmail2 = async ({ email, emailType, userId }) => {
    try {
        const smtpConfigKeys = [
            "SMTP_HOST",
            "SMTP_PORT",
            "SMTP_USER",
            "SMTP_PASSWORD",
            "DOMAIN",
        ];
        const isSmtpConfigValid = smtpConfigKeys.every(
            (key) => process.env[key]
        );

        if (isSmtpConfigValid) {
            const hashedToken = await bcryptjs.hash(userId.toString(), 10);
            let emailSubject = "";
            let url = "";

            switch (emailType) {
                case "VERIFY":
                    await User.findByIdAndUpdate(userId, {
                        verifyToken: hashedToken,
                        verifyTokenExpiry: Date.now() + 3600000,
                    });
                    emailSubject = "Verify your email";
                    url = "verify";
                    break;
                case "RESET":
                    await User.findByIdAndUpdate(userId, {
                        forgotPasswordToken: hashedToken,
                        forgotPasswordTokenExpiry: Date.now() + 3600000,
                    });
                    emailSubject = "Reset your password";
                    url = "change-pass";
                    break;
            }

            const transporter = nodemailer.createTransport({
                host: process.env.SMTP_HOST,
                port: process.env.SMTP_PORT,
                auth: {
                    user: process.env.SMTP_USER,
                    pass: process.env.SMTP_PASSWORD,
                },
            });

            const mailOptions = {
                from: "admin@info.divineduos.com",
                to: email,
                subject: emailSubject,
                html: getHtmlTemplate(emailSubject, url, hashedToken),
                // html: `<p>Click <a href="${process.env.DOMAIN}/${url}?token=${hashedToken}">here</a> to ${emailSubject}
                // or copy and paste the link below in your browser. <br> ${process.env.DOMAIN}/${url}?token=${hashedToken}
                // </p>`,
            };

            const mailresponse = await transporter.sendMail(mailOptions);
            return mailresponse;
        } else {
            console.log("Didn't send mail as SMTP details not available!");
        }
    } catch (error) {
        throw new Error(error.message);
    }
};
