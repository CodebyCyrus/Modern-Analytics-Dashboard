import { NextRequest } from "next/server";

export default async function midlleware(req: NextRequest) {
  if (req.nextUrl.pathname === "/") {
    // Track analytics events
    console.log("Track!");
  }
}

export const matcher = {
  matcher: ["/"],
};
