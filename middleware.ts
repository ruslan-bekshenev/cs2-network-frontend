import { NextRequest, NextResponse } from "next/server";

export function middleware(request: NextRequest) {
  return NextResponse.redirect("/players");
}

export const config = {
  matcher: "/players",
};
