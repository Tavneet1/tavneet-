import { connect } from "@/dbconfig/dbconfig";
import getUserFromToken from "@/helpers/getUserFromToken";
import Users from "@/models/userModel";
import { NextResponse } from "next/server";

connect();

export async function GET(request) {
    try {
        const token = request.cookies.get("token")?.value;

        if (!token) {
            return NextResponse.json(
                { error: "No token found!" },
                { status: 400 }
            );
        }

        const email = getUserFromToken(token);
        const user = await Users.findOne({ email });

        return NextResponse.json({
            message: "User fetched successfully",
            user: user,
        });
    } catch (error) {
        console.log("Error during logout!: " + error);
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
}
