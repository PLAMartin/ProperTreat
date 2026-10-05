import type { Metadata } from "next";
import QrCode2Icon from "@mui/icons-material/QrCode2";
import { PageHeader } from "@/components/page-header";
import { StepSequence } from "@/components/step-sequence";
import { CtaSection } from "@/components/cta-section";
import { pageMetadata } from "@/lib/metadata";

export const metadata: Metadata = pageMetadata({
  title: "How it works",
  description:
    "What happens from the moment someone buys a Proper Treat gift voucher to the moment you scan and redeem it in-store.",
  path: "/how-it-works",
});

const steps = [
  {
    title: "Create a campaign",
    description:
      "Set a voucher amount, an expiry date, and choose which artwork templates customers can pick from.",
  },
  {
    title: "Customer buys and personalises",
    description:
      "They pay securely, then choose a template and write a personal message — no account needed.",
  },
  {
    title: "Recipient gets a beautiful voucher",
    description:
      "The recipient receives a digital gift voucher with their message, artwork and a QR code by email or text.",
  },
  {
    title: "You scan and redeem",
    description:
      "When they visit, scan the QR code to redeem in full or in part. Works on any phone — no new hardware.",
  },
];

export default function HowItWorksPage() {
  return (
    <>
      <PageHeader
        eyebrow="How it works"
        title="From sale to redemption, without the admin"
        description="Here's exactly what happens from the moment someone buys a voucher to the moment you redeem it in-store."
      />

      <section className="mx-auto max-w-6xl px-4 py-10 sm:px-6">
        <StepSequence steps={steps} />
      </section>

      <section className="mx-auto max-w-3xl px-4 py-14 sm:px-6">
        <div className="flex flex-col items-center gap-4 rounded-2xl border border-border/70 bg-card p-8 text-center">
          <QrCode2Icon className="!size-9 text-primary" />
          <h2 className="font-heading text-xl font-semibold text-foreground">
            Redemption is built for the counter, not the back office
          </h2>
          <p className="text-muted-foreground">
            Scanning takes seconds and works on any phone — no card reader, no
            extra app for your staff to learn.
          </p>
        </div>
      </section>

      <CtaSection
        title="Ready to set up your first campaign?"
        description="It takes a few minutes, and you only pay when you sell."
      />
    </>
  );
}
