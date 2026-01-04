import { NextResponse } from "next/server";

export async function GET(request) {
    try {
        const token = request.cookies.get("token")?.value || "";

        if (token) {
            const response = NextResponse.json({
                message: "Logout successful",
            });

            response.cookies.set("token", "", {
                httpOnly: true,
                maxAge: 0,
            });
            return response;
        }
        return NextResponse.json(
            { error: "User token found!" },
            { status: 400 }
        );
    } catch (error) {
        console.log("Error during logout!: " + error);
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
}
