import { NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";

function isValidEmail(value: unknown): value is string {
  return typeof value === "string" && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

export async function POST(request: Request) {
  const body = await request.json().catch(() => null);

  const email = body?.email;
  const mode = body?.mode === "signup" ? "signup" : "login";
  const businessName = typeof body?.businessName === "string" ? body.businessName.trim() : "";

  if (!isValidEmail(email) || (mode === "signup" && !businessName)) {
    return NextResponse.json({ error: "Missing or invalid fields." }, { status: 400 });
  }

  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

  if (supabaseUrl && supabaseAnonKey) {
    const supabase = createClient(supabaseUrl, supabaseAnonKey);
    const { error } = await supabase.auth.signInWithOtp({
      email,
      options:
        mode === "signup"
          ? { shouldCreateUser: true, data: { business_name: businessName } }
          : { shouldCreateUser: false },
    });

    if (error) {
      return NextResponse.json({ error: error.message }, { status: 400 });
    }
  } else {
    console.log("Magic link requested (Supabase env vars not set):", {
      mode,
      email,
      businessName,
    });
  }

  return NextResponse.json({ ok: true });
}
