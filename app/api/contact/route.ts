import { NextResponse } from "next/server";
import { siteConfig } from "@/lib/site-config";

function isValidEmail(value: unknown): value is string {
  return typeof value === "string" && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

export async function POST(request: Request) {
  const body = await request.json().catch(() => null);

  const name = typeof body?.name === "string" ? body.name.trim() : "";
  const businessName = typeof body?.businessName === "string" ? body.businessName.trim() : "";
  const email = body?.email;
  const message = typeof body?.message === "string" ? body.message.trim() : "";

  if (!name || !businessName || !isValidEmail(email) || !message) {
    return NextResponse.json({ error: "Missing or invalid fields." }, { status: 400 });
  }

  const resendApiKey = process.env.RESEND_API_KEY;

  if (resendApiKey) {
    const resendResponse = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${resendApiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: `Proper Treat website <notifications@propertreat.com>`,
        to: siteConfig.contactEmail,
        reply_to: email,
        subject: `New contact form message from ${businessName}`,
        text: `Name: ${name}\nBusiness: ${businessName}\nEmail: ${email}\n\n${message}`,
      }),
    });

    if (!resendResponse.ok) {
      return NextResponse.json({ error: "Failed to send message." }, { status: 502 });
    }
  } else {
    console.log("Contact form submission (RESEND_API_KEY not set):", {
      name,
      businessName,
      email,
      message,
    });
  }

  return NextResponse.json({ ok: true });
}
