import { NextResponse } from "next/server";

export async function middleware(request) {
    const userAgent = request.headers.get("user-agent") || "";
    const platformHeader = request.headers.get("sec-ch-ua-platform");

    // Return a 406 Not Acceptable if:
    // 1. The "sec-ch-ua-platform" header does not exist
    // 2. The User-Agent does not contain "curl"
    if (!platformHeader) {
        return new NextResponse(
            "keep the url instead of reimplementing it yourself",
            {
                status: 406,
            }
        );
    }

    if (!userAgent.includes("curl")) {
        return NextResponse.next();
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
