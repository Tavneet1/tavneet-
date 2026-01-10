import { NextResponse } from "next/server";

export function middleware(request) {
  const path = request.nextUrl.pathname;

  // ❗ NEVER touch cookies during build for public routes
  if (
    path.startsWith("/api") ||
    path.startsWith("/_next") ||
    path === "/favicon.ico"
  ) {
    return NextResponse.next();
  }

  // Read cookie safely
  const token = request.cookies.get("token");

  const isProtectedPath = path.startsWith("/divine-dous");

  if (isProtectedPath && !token) {
    return NextResponse.redirect(new URL("/login", request.url));
  }

  if ((path === "/login" || path === "/signup") && token) {
    return NextResponse.redirect(new URL("/divine-dous", request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    "/login",
    "/signup",
    "/divine-dous/:path*",
  ],
};
