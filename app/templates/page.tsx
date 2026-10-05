import type { Metadata } from "next";
import { PageHeader } from "@/components/page-header";
import { TemplateGrid } from "@/components/template-grid";
import { CtaSection } from "@/components/cta-section";
import { pageMetadata } from "@/lib/metadata";

export const metadata: Metadata = pageMetadata({
  title: "Templates",
  description:
    "Proper Treat voucher templates start with artwork that feels like a gift, not a receipt, with your branding on every design.",
  path: "/templates",
});

export default function TemplatesPage() {
  return (
    <>
      <PageHeader
        eyebrow="Templates"
        title="Vouchers people actually want to receive"
        description="Every voucher starts with artwork that feels like a gift, not a receipt. Your branding sits on top of every template."
      />

      <section className="mx-auto max-w-6xl px-4 py-10 sm:px-6">
        <TemplateGrid />
      </section>

      <CtaSection
        title="Start selling gift vouchers today"
        description="Free to set up. You only pay when you make a sale."
      />
    </>
  );
}
