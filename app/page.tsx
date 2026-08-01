import Link from "next/link";
import QrCode2Icon from "@mui/icons-material/QrCode2";
import PaletteIcon from "@mui/icons-material/Palette";
import SmartphoneIcon from "@mui/icons-material/Smartphone";
import SavingsIcon from "@mui/icons-material/Savings";
import { Hero } from "@/components/hero";
import { StepSequence } from "@/components/step-sequence";
import { FeatureGrid } from "@/components/feature-grid";
import { TemplateGrid } from "@/components/template-grid";
import { TestimonialCard } from "@/components/testimonial-card";
import { CtaSection } from "@/components/cta-section";
import { siteConfig } from "@/lib/site-config";

const steps = [
  {
    title: "Create a campaign",
    description: "Set an amount, an expiry, and pick your templates.",
  },
  {
    title: "Customer buys & personalises",
    description: "They choose artwork and write a message in minutes.",
  },
  {
    title: "Recipient gets a gift",
    description: "A beautiful digital voucher lands by email or text.",
  },
  {
    title: "You redeem in-store",
    description: "Scan the QR code, redeem in full or in part.",
  },
];

const features = [
  {
    icon: QrCode2Icon,
    title: "QR redemption",
    description: "Scan and go — no new hardware, works on any phone.",
  },
  {
    icon: SavingsIcon,
    title: "Partial redemption",
    description: "Customers can spend a little now, save the rest for later.",
  },
  {
    icon: PaletteIcon,
    title: "Artistic templates",
    description: "Vouchers that look like a gift, not a receipt.",
  },
  {
    icon: SmartphoneIcon,
    title: "Mobile-first",
    description: "Fast, simple flows for you and your customers.",
  },
];

export default function Home() {
  return (
    <>
      <Hero />

      <section className="mx-auto max-w-3xl px-4 py-4 text-center sm:px-6">
        <p className="text-lg text-muted-foreground">
          Most gift vouchers are functional but forgettable. Proper Treat brings
          back the feeling of giving a proper gift — without the printing, the
          plastic, or the spreadsheet.
        </p>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <h2 className="text-center font-heading text-2xl font-semibold text-foreground sm:text-3xl">
          How it works
        </h2>
        <div className="mt-10">
          <StepSequence steps={steps} />
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-4 sm:px-6">
        <FeatureGrid features={features} />
      </section>

      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <h2 className="font-heading text-2xl font-semibold text-foreground sm:text-3xl">
            Vouchers people actually want to receive
          </h2>
          <Link href="/templates" className="text-sm font-medium text-primary hover:underline">
            See all templates →
          </Link>
        </div>
        <div className="mt-8">
          <TemplateGrid />
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <TestimonialCard
          quote="Built in Bath for independent businesses that care about the details."
          name="Phil"
          role="Founder, Proper Treat"
        />
      </section>

      <section className="mx-auto max-w-6xl px-4 py-4 text-center sm:px-6">
        <p className="text-lg text-foreground">
          One simple plan:{" "}
          <span className="font-semibold text-primary">
            {siteConfig.takeRate} per voucher sold
          </span>
          , no monthly fee.{" "}
          <Link href="/pricing" className="font-medium text-primary hover:underline">
            See pricing →
          </Link>
        </p>
      </section>

      <CtaSection
        title="Start selling gift vouchers today"
        description="Free to set up. You only pay when you make a sale."
      />
    </>
  );
}
