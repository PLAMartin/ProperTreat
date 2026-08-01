import type { Metadata } from "next";
import { PageHeader } from "@/components/page-header";
import { PricingCard } from "@/components/pricing-card";
import { FaqAccordion } from "@/components/faq-accordion";

export const metadata: Metadata = { title: "Pricing" };

const faqs = [
  {
    question: "Do I need a Stripe account?",
    answer:
      "Yes — payouts run through Stripe Connect. Setup happens after you sign up and takes a few minutes.",
  },
  {
    question: "When do I get paid?",
    answer:
      "Funds are paid out via Stripe on its standard payout schedule, straight to your bank account.",
  },
  {
    question: "What if a voucher isn't fully redeemed?",
    answer:
      "Customers can redeem in part and come back for the rest. You only ever pay the one-time fee on the original sale.",
  },
  {
    question: "Is there a contract?",
    answer: "No. There's no monthly fee and no lock-in — just a fee per voucher sold.",
  },
];

export default function PricingPage() {
  return (
    <>
      <PageHeader
        eyebrow="Pricing"
        title="One simple plan"
        description="No monthly fee, no setup cost, no surprises."
      />

      <section className="mx-auto max-w-6xl px-4 py-10 sm:px-6">
        <PricingCard />
      </section>

      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <h2 className="text-center font-heading text-2xl font-semibold text-foreground">
          Frequently asked questions
        </h2>
        <div className="mt-8">
          <FaqAccordion items={faqs} />
        </div>
      </section>
    </>
  );
}
