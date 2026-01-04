import { connect } from "@/dbconfig/dbconfig";
import getUserFromToken from "@/helpers/getUserFromToken";
import Users from "@/models/userModel";
import { NextResponse } from "next/server";

connect();

export async function PUT(request) {
    try {
        const token = request.cookies.get("token")?.value;

        if (!token) {
            return NextResponse.json(
                { error: "No token found!" },
                { status: 400 }
            );
        }

        const reqBody = await request.json();
        const user = await Users.findByIdAndUpdate(reqBody._id, reqBody, {
            new: true,
        });

        return NextResponse.json({
            message: "User updated successfully",
            user: user,
        });
    } catch (error) {
        console.log("Error during update!: " + error);
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
}
