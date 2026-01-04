import { NextResponse } from "next/server";
import User from "@/models/userModel";
import { connect } from "@/dbconfig/dbconfig";

connect();

export async function POST(request) {
    try {
        const reqBody = await request.json();
        const { token } = reqBody;

        const user = await User.findOne({
            verifyToken: token,
        });

        if (!user) {
            return NextResponse.json(
                { error: "Invalid token" },
                { status: 400 }
            );
        }
        
        if (user.verifyTokenExpiry < Date.now()) {
            return NextResponse.json(
                { error: "Token Expired" },
                { status: 400 }
            );
        }
        console.log(user);

        user.isVerified = true;
        user.verifyToken = undefined;
        user.verifyTokenExpiry = undefined;
        await user.save();

        return NextResponse.json({
            message: "Email verified successfully",
            success: true,
        });
    } catch (error) {
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
}
