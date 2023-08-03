import  { NextResponse } from "next/server";export function middleware(request) {
  const path = request.nextUrl.pathname;

  //for login path
  const isPublicPath = path === "/login";

  const token = request.cookies.get("token")?.value;

  if (isPublicPath && token) {
    return NextResponse.redirect(new URL("/", request.nextUrl)); //if logged in
  }

  if (!isPublicPath && !token) {
    return NextResponse.redirect(new URL("/login", request.nextUrl)); //if not logged in
  }





}

export const config = {
  matcher: [ "/profile", "/profile/:path*", "/login"],
};
 