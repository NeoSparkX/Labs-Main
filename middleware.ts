import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(req: NextRequest) {
  const accept = req.headers.get("accept") ?? "";

  // If the client explicitly requests text/markdown, rewrite to /api/md
  if (accept.includes("text/markdown")) {
    const url = req.nextUrl.clone();
    url.pathname = "/api/md";
    return NextResponse.rewrite(url);
  }

  return NextResponse.next();
}

export const config = {
  // Apply to all non-API, non-static routes
  matcher: ["/((?!_next/static|_next/image|favicon.ico|api/).*)"],
};
