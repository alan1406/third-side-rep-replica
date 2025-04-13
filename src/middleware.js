import { NextResponse } from "next/server";

export async function middleware(request) {
    const userAgent = request.headers.get("user-agent") || "";
    const platformHeader = request.headers.get("sec-ch-ua-platform");

    // Return a 406 Not Acceptable if:
    // 1. The "sec-ch-ua-platform" header does not exist
    // 2. The User-Agent does not contain "curl"
    if (!platformHeader && !userAgent.includes("curl")) {
        return new NextResponse("try using curl instead.", {
            status: 406,
        });
    }

    // Fetch the requested URL
    const response = await fetch(request.url);

    // Get the HTML content of the response
    let html = await response.text();

    // Add line breaks after tags (naive approach)
    html = html.replace(/></g, ">\n<");

    // Return the modified HTML
    return new Response(html, {
        status: 200,
        headers: {
            "Content-Type": "text/html",
        },
    });
}
