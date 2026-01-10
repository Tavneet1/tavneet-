import { NextResponse } from "next/server";

// Fixes Vercel build error caused by cookies usage
export const dynamic = "force-dynamic";

export async function GET(request) {
  try {
    // Accessing cookies makes this route dynamic
    const token = request.cookies.get("token")?.value;

    // If no token, user is already logged out
    if (!token) {
      return NextResponse.json(
        { message: "No active session found" },
        { status: 400 }
      );
    }

    const response = NextResponse.json({
      message: "Logout successful",
    });

    // Delete the auth cookie
    response.cookies.set("token", "", {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      maxAge: 0,
      path: "/",
    });

    return response;
  } catch (error) {
    console.error("Error during logout:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
