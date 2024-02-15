import { NextRequest, NextResponse } from "next/server";
import { analytics } from "./utils/analytics";

export default async function midlleware(req: NextRequest) {
  if (req.nextUrl.pathname === "/") {
    // Track analytics events
    // console.log("Track!");

    try {
      // this is the part you should use to track analytics and this is an api from src/utils/analytics.ts
      analytics.track("pageview", {
        page: "/",
        conttry: req.geo?.country,
      });
    } catch (err) {
      // fail midlleware
      console.error(err);
    }
  }
  return NextResponse.next();
}

export const matcher = {
  matcher: ["/"],
};
