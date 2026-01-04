import { NextResponse } from "next/server";
import User from "@/models/userModel";
import { connect } from "@/dbconfig/dbconfig";
import bcryptjs from "bcryptjs";

connect();

export async function POST(request) {
    try {
        const reqBody = await request.json();
        const { token, password } = reqBody;
        console.log("token", token);

        // const user = await User.findOne({forgotPasswordToken: token, forgotPasswordTokenExpriy: {$gt: Date.now()}});
        const user = await User.findOne({ forgotPasswordToken: token });

        if (!user) {
            return NextResponse.json(
                { error: "Invalid token" },
                { status: 400 }
            );
        }

        console.log(user);
        const salt = await bcryptjs.genSalt(10);
        const hashpassward = await bcryptjs.hash(password, salt);

        user.password = hashpassward;
        user.forgotPasswordToken = undefined;
        user.forgotPasswordTokenExpriy = undefined;
        await user.save();

        return NextResponse.json({
            message: "Password changed successfully!",
        });
    } catch (error) {
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
}
