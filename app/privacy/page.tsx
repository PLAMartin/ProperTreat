import type { Metadata } from "next";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = { title: "Privacy Policy" };

export default function PrivacyPage() {
  return (
    <section className="mx-auto max-w-2xl px-4 py-14 sm:px-6">
      <h1 className="font-heading text-3xl font-semibold text-foreground">Privacy Policy</h1>
      <p className="mt-3 rounded-lg bg-secondary px-4 py-3 text-sm text-secondary-foreground">
        Draft placeholder — this page needs review by a lawyer before launch and is not yet a
        binding privacy policy.
      </p>

      <div className="prose-sm mt-8 flex flex-col gap-6 text-foreground/90">
        <div>
          <h2 className="font-heading text-lg font-semibold text-foreground">
            Information we collect
          </h2>
          <p className="mt-2 text-muted-foreground">
            When you sign up as a merchant, we collect your name, business name, email address,
            and information needed to process payouts via Stripe. When customers purchase or
            personalise a voucher, we collect the details needed to deliver and redeem it.
          </p>
        </div>
        <div>
          <h2 className="font-heading text-lg font-semibold text-foreground">
            How we use it
          </h2>
          <p className="mt-2 text-muted-foreground">
            We use this information to operate the Proper Treat platform: processing payments,
            delivering vouchers, enabling redemption, and providing support.
          </p>
        </div>
        <div>
          <h2 className="font-heading text-lg font-semibold text-foreground">
            Contact us
          </h2>
          <p className="mt-2 text-muted-foreground">
            Questions about this policy can be sent to{" "}
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
