import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(request) {
    try {
        const reqBody = request.json();
        const { email } = await reqBody;

        const transporter = nodemailer.createTransport({
            host: "smtp.ethereal.email",
            port: 587,
            auth: {
                user: "godfrey56@ethereal.email",
                pass: "JVeWtxyjPNqRM3hDXM",
            },
        });

        const info = await transporter.sendMail({
            from: "<sandesh27deshmukh@gmail.com>", // sender address
            to: email,
            subject: "Hello ✔", // Subject line
            text: "Hello world?", // plain text body
            html: "<b>Hello world?</b>", // html body
        });

        return NextResponse.json({ message: "Email Sent" }, { status: 200 });
    } catch (error) {
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
}
