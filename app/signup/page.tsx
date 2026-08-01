import type { Metadata } from "next";
import Link from "next/link";
import { PageHeader } from "@/components/page-header";
import { AuthForm } from "@/components/auth-form";

export const metadata: Metadata = { title: "Sign up" };

export default function SignupPage() {
  return (
    <>
      <PageHeader
        title="Start selling gift vouchers"
        description="Tell us your business name and email — everything else happens after you log in."
      />
      <section className="mx-auto max-w-sm px-4 py-10 sm:px-6">
        <AuthForm mode="signup" />
        <p className="mt-6 text-center text-sm text-muted-foreground">
          Already have an account?{" "}
          <Link href="/login" className="font-medium text-primary hover:underline">
            Login
          </Link>
        </p>
      </section>
    </>
  );
}
