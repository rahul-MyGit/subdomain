import { NextResponse, type NextRequest } from "next/server";

export async function middleware(request: NextRequest) {
    const hostname = request.headers.get("host") || "";
    // Handle both localhost and production domains
    const subdomain = hostname.includes("localhost") 
        ? hostname.split(":")[0].split(".")[0] 
        : hostname.split(".")[0];
    
    console.log("host:", hostname, "subdomain:", subdomain);

    if (subdomain && subdomain !== "localhost") {
        return NextResponse.rewrite(new URL(`/live/${subdomain}`, request.url));
    }

    return NextResponse.next();
}

export const config = {
    matcher: [
        "/((?!api|_next/static|_next/image|favicon.ico).*)",
    ]
};

