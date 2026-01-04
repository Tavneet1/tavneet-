import { NextResponse } from "next/server";

export function middleware(request) {
    const path = request.nextUrl.pathname;
    const isProtectedPath = path.startsWith("/divine-dous");

    const token = request.cookies.get("token")?.value || "";

    if (isProtectedPath && !token) {
        return NextResponse.redirect(new URL("/login", request.nextUrl));
    }

    if ((path === "/login" || path === "/signup") && token) {
        return NextResponse.redirect(new URL("/divine-dous", request.nextUrl));
    }
}

// See "Matching Paths" below to learn more
export const config = {
    matcher: ["/login", "/signup", "/my-profile", "/complete-profile", "/divine-dous/:path*"],
};
