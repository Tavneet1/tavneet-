import { connect } from "@/dbconfig/dbconfig"; // Ensure this is your lib/mongodb style path
import Users from "@/models/userModel";
import { NextResponse } from "next/server";
import bcryptjs from "bcryptjs";
import jwt from "jsonwebtoken";

export async function POST(request) {
    try {
        // 1. Database connection ko function ke andar call karein
        await connect();

        // 2. Request body ko properly await karein
        const { email, password } = await request.json();

        // 3. User ko find karein
        const oldUser = await Users.findOne({ email });
        if (!oldUser) {
            return NextResponse.json(
                { error: "User doesn't exist!" },
                { status: 401 }
            );
        }

        // 4. Password match check karein
        const match = await bcryptjs.compare(password, oldUser.password);
        if (!match) {
            return NextResponse.json(
                { error: "Wrong Password" },
                { status: 401 }
            );
        }

        // 5. Token create karein
        const tokenData = {
            email: oldUser.email,
            userId: oldUser._id,
        };

        const token = jwt.sign(tokenData, process.env.TOKEN_SECRET, { 
            expiresIn: "30d" 
        });

        // 6. Response banayein aur cookie set karein
        const response = NextResponse.json({
            message: "Login successful",
            success: true,
        });

        response.cookies.set("token", token, {
            httpOnly: true,
            secure: process.env.NODE_ENV === "production", // Production mein secure ON
            sameSite: "strict",
            maxAge: 60 * 60 * 24 * 30, // 30 days
        });

        return response;

    } catch (error) {
        console.error("Login Error:", error.message);
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
}

// import { connect } from "@/dbconfig/dbconfig";
// import Users from "@/models/userModel";
// import { NextRequest, NextResponse } from "next/server";
// import bcryptjs from "bcryptjs";
// import jwt from "jsonwebtoken";

// connect();

// export async function POST(request) {
//     try {
//         const reqBody = request.json();
//         const { email, password } = await reqBody;

//         const oldUser = await Users.findOne({ email });
//         if (!oldUser) {
//             return NextResponse.json(
//                 { error: "User doesn't exists!" },
//                 { status: 401 }
//             );
//         }

//         const match = await bcryptjs.compare(password, oldUser.password);
//         if (!match) {
//             return NextResponse.json(
//                 { error: "Wrong Password" },
//                 { status: 401 }
//             );
//         }

//         const token = jwt.sign(
//             {
//                 email: oldUser.email,
//                 userId: oldUser._id,
//             },
//             process.env.TOKEN_SECRET,
//             { expiresIn: "30d" }
//         );

//         const response = NextResponse.json({
//             message: "Login successful",
//         });

//         response.cookies.set("token", token, {
//             httpOnly: true,
//             maxAge: 60 * 60 * 24 * 30,
//         });
//         return response;
//     } catch (error) {
//         return NextResponse.json({ error: error.message }, { status: 500 });
//     }
// }
