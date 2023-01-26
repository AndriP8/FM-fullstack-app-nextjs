import { NextResponse } from "next/server";

export const signedinPages = ["/", "/playlist", "/library"];

export default function middleware(req: any) {
  if (signedinPages.find((v) => v === req.nextUrl.pathname)) {
    const token = req.cookies.get("TRAX_ACCESS_TOKEN")?.value;

    if (!token) {
      return NextResponse.rewrite(new URL("/signin", req.url));
    }
  }
}
