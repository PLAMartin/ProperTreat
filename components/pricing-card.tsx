import Link from "next/link";
import CheckIcon from "@mui/icons-material/Check";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/lib/site-config";

const included = [
  "No monthly fee",
  "No setup cost",
  "Unlimited voucher campaigns",
  "Payouts via Stripe",
  "QR-code redemption, partial or full",
];

export function PricingCard() {
  return (
    <div className="mx-auto max-w-md rounded-3xl border border-border/70 bg-card p-8 text-center shadow-sm">
      <p className="text-sm font-semibold uppercase tracking-wider text-primary">
        Simple, one plan
      </p>
      <p className="mt-4 font-heading text-5xl font-semibold text-foreground">
        {siteConfig.takeRate}
        <span className="text-lg font-normal text-muted-foreground"> per voucher sold</span>
      </p>
      <p className="mt-2 text-sm text-muted-foreground">
        We only make money when you do.
      </p>
      <ul className="mt-6 flex flex-col gap-3 text-left">
        {included.map((item) => (
          <li key={item} className="flex items-start gap-2 text-sm text-foreground/90">
            <CheckIcon className="mt-0.5 !size-4 shrink-0 text-primary" />
            {item}
          </li>
        ))}
      </ul>
      <Button size="lg" className="mt-8 w-full" render={<Link href="/signup">Sign up</Link>} />
    </div>
  );
}
