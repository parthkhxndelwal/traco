import { NextResponse } from "next/server";

export async function GET() {
  const script = `importScripts('https://cdn.webpushr.com/sw-server.min.js');`;
  
  return new NextResponse(script, {
    headers: {
      "Content-Type": "application/javascript",
      "Service-Worker-Allowed": "/",
    },
  });
}
