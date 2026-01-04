import { NextResponse } from "next/server";
import User from "@/models/userModel";
import { connect } from "@/dbconfig/dbconfig";
import { sendEmail2 } from "@/helpers/mailHelper";

connect();

export async function POST(request) {
    try {
        const reqBody = await request.json();
        const { email } = reqBody;

        const user = await User.findOne({ email });
        if (!user) {
            return NextResponse.json(
                {
                    error: "User not found",
                },
                { status: 400 }
            );
        }
        await sendEmail2({ email, emailType: "RESET", userId: user._id });

        return NextResponse.json({
            message: "Password reset email sent!",
        });
    } catch (error) {
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
}
