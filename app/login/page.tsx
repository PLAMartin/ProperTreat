import type { Metadata } from "next";
import Link from "next/link";
import { PageHeader } from "@/components/page-header";
import { AuthForm } from "@/components/auth-form";
import { NO_INDEX } from "@/lib/metadata";

export const metadata: Metadata = { title: "Login", robots: NO_INDEX };

export default function LoginPage() {
  return (
    <>
      <PageHeader
        title="Welcome back"
        description="Enter your email and we'll send you a link to log in — no password needed."
      />
      <section className="mx-auto max-w-sm px-4 py-10 sm:px-6">
        <AuthForm mode="login" />
        <p className="mt-6 text-center text-sm text-muted-foreground">
          New to Proper Treat?{" "}
          <Link href="/signup" className="font-medium text-primary hover:underline">
            Sign up
          </Link>
        </p>
      </section>
    </>
  );
}
