import { connect } from "@/dbconfig/dbconfig";
import Users from "@/models/userModel";
import { NextRequest, NextResponse } from "next/server";
import bcryptjs from "bcryptjs";
import jwt from "jsonwebtoken";

connect();

export async function POST(request) {
    try {
        const reqBody = request.json();
        const { email, password } = await reqBody;

        const oldUser = await Users.findOne({ email });
        if (!oldUser) {
            return NextResponse.json(
                { error: "User doesn't exists!" },
                { status: 401 }
            );
        }

        const match = await bcryptjs.compare(password, oldUser.password);
        if (!match) {
            return NextResponse.json(
                { error: "Wrong Password" },
                { status: 401 }
            );
        }

        const token = jwt.sign(
            {
                email: oldUser.email,
                userId: oldUser._id,
            },
            process.env.TOKEN_SECRET,
            { expiresIn: "30d" }
        );

        const response = NextResponse.json({
            message: "Login successful",
        });

        response.cookies.set("token", token, {
            httpOnly: true,
            maxAge: 60 * 60 * 24 * 30,
        });
        return response;
    } catch (error) {
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
}
