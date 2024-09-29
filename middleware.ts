import { NextRequest, NextResponse } from "next/server";

export function middleware(request: NextRequest) {
  return NextResponse.redirect(new URL("/players", request.url), {
    status: 303,
  });
}

export const config = {
  matcher: "/",
};
