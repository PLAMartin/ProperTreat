import type { Metadata } from "next";
import { PageHeader } from "@/components/page-header";
import { ContactForm } from "@/components/contact-form";
import { siteConfig } from "@/lib/site-config";
import { pageMetadata } from "@/lib/metadata";

export const metadata: Metadata = pageMetadata({
  title: "Contact",
  description:
    "Questions before you sign up, or need a hand with something? Get in touch with Proper Treat.",
  path: "/contact",
});

export default function ContactPage() {
  return (
    <>
      <PageHeader
        eyebrow="Contact"
        title="Get in touch"
        description="Questions before you sign up, or need a hand with something? We're a small team and read every message."
      />

      <section className="mx-auto max-w-xl px-4 py-10 sm:px-6">
        <ContactForm />
        <p className="mt-6 text-center text-sm text-muted-foreground">
          Prefer email? Reach us directly at{" "}
          <a href={`mailto:${siteConfig.contactEmail}`} className="font-medium text-primary hover:underline">
            {siteConfig.contactEmail}
          </a>
          . We usually reply within a day or two.
        </p>
      </section>
    </>
  );
}
