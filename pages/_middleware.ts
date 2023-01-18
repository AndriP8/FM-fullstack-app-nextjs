import { NextResponse } from "next/server";

export const signedinPages = ["/", "/playlist", "/library"];

export default function middleware(req: any) {
  if (signedinPages.find((v) => v === req.nextUrl.pathname)) {
    const token = req.cookies.TRAX_ACCESS_TOKEN;

    if (!token) {
      return NextResponse.redirect("/signin");
    }
  }
}
