import type { Metadata } from "next";
import { siteConfig } from "@/lib/site-config";
import { pageMetadata } from "@/lib/metadata";

export const metadata: Metadata = pageMetadata({
  title: "Terms of Service",
  description:
    "The terms that apply when you use Proper Treat.",
  path: "/terms",
});

export default function TermsPage() {
  return (
    <section className="mx-auto max-w-2xl px-4 py-14 sm:px-6">
      <h1 className="font-heading text-3xl font-semibold text-foreground">Terms of Service</h1>
      <p className="mt-3 rounded-lg bg-secondary px-4 py-3 text-sm text-secondary-foreground">
        Draft placeholder — this page needs review by a lawyer before launch and is not yet a
        binding agreement.
      </p>

      <div className="prose-sm mt-8 flex flex-col gap-6 text-foreground/90">
        <div>
          <h2 className="font-heading text-lg font-semibold text-foreground">Using Proper Treat</h2>
          <p className="mt-2 text-muted-foreground">
            Proper Treat lets merchants create and sell digital gift vouchers, and lets customers
            purchase, personalise and redeem them. By using the platform you agree to use it
            honestly and lawfully.
          </p>
        </div>
        <div>
          <h2 className="font-heading text-lg font-semibold text-foreground">Fees</h2>
          <p className="mt-2 text-muted-foreground">
            Merchants pay {siteConfig.takeRate} per voucher sold, with no monthly fee. Payouts are
            processed via Stripe Connect.
          </p>
        </div>
        <div>
          <h2 className="font-heading text-lg font-semibold text-foreground">Contact us</h2>
          <p className="mt-2 text-muted-foreground">
            Questions about these terms can be sent to{" "}
            <a href={`mailto:${siteConfig.contactEmail}`} className="text-primary hover:underline">
              {siteConfig.contactEmail}
            </a>
            .
          </p>
        </div>
      </div>
    </section>
  );
}
