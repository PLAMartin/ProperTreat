import type { Metadata } from "next";
import { PageHeader } from "@/components/page-header";
import { CtaSection } from "@/components/cta-section";
import { pageMetadata } from "@/lib/metadata";

export const metadata: Metadata = pageMetadata({
  title: "About",
  description:
    "Proper Treat is built in Bath for independent cafés, restaurants, salons and experience businesses that want gift vouchers to feel like a real gift.",
  path: "/about",
});

export default function AboutPage() {
  return (
    <>
      <PageHeader eyebrow="About" title="Built in Bath, for independent businesses" />

      <section className="mx-auto max-w-2xl px-4 py-10 sm:px-6">
        <div className="flex flex-col gap-6 text-lg text-foreground/90">
          <p>
            Most gift voucher systems are functional but emotionally flat — a
            code, a balance, a receipt. Proper Treat exists because giving
            (and receiving) a gift should feel like more than that.
          </p>
          <p>
            We&apos;re starting with independent cafés, restaurants, salons and
            experience businesses in Bath, before expanding across the UK.
            These are the businesses that care most about how their brand
            feels — and deserve gifting tools that match.
          </p>
          <p>
            Proper Treat is built to be simple to set up, easy for your
            customers to use, and something you never have to think twice
            about at the counter.
          </p>
        </div>
      </section>

      <CtaSection title="Come and see it for yourself" cta="Sign up" href="/signup" />
    </>
  );
}
