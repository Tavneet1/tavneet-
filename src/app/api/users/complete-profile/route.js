import { connect } from "@/dbconfig/dbconfig";
import getUserFromToken from "@/helpers/getUserFromToken";
import Users from "@/models/userModel";
import { NextResponse } from "next/server";

connect();

export async function PATCH(request) {
    try {
        const reqBody = request.json();
        const data = await reqBody;
        // console.log("data", data);
        const user = await Users.findOneAndUpdate(
            { email: data.email },
            { profileData: data },
            {
                new: true,
            }
        );

        return NextResponse.json({
            message: "User updated successfully",
            user: user,
        });
    } catch (error) {
        console.log("Error during update!: " + error);
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
}
