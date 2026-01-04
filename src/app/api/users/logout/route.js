import { NextResponse } from "next/server";

// 1. THIS LINE FIXES THE VERCEL BUILD ERROR
export const dynamic = 'force-dynamic'; 

export async function GET(request) {
    try {
        // Accessing cookies makes this a dynamic route
        const token = request.cookies.get("token")?.value || "";

        if (token) {
            const response = NextResponse.json({
                message: "Logout successful",
            });

            // Expiring the cookie immediately
            response.cookies.set("token", "", {
                httpOnly: true,
                secure: process.env.NODE_ENV === "production", // Only over HTTPS in prod
                maxAge: 0, // Standard way to delete a cookie
                path: "/", // Ensure it clears for the whole site
            });
            return response;
        }

        // 2. Fixed the logic: if no token, user is already logged out
        return NextResponse.json(
            { error: "No active session found" }, 
            { status: 400 }
        );
    } catch (error) {
        console.error("Error during logout:", error);
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
}










// import { NextResponse } from "next/server";

// export async function GET(request) {
//     try {
//         const token = request.cookies.get("token")?.value || "";

//         if (token) {
//             const response = NextResponse.json({
//                 message: "Logout successful",
//             });

//             response.cookies.set("token", "", {
//                 httpOnly: true,
//                 maxAge: 0,
//             });
//             return response;
//         }
//         return NextResponse.json(
//             { error: "User token found!" },
//             { status: 400 }
//         );
//     } catch (error) {
//         console.log("Error during logout!: " + error);
//         return NextResponse.json({ error: error.message }, { status: 500 });
//     }
// }
