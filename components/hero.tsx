import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";

export function Hero() {
  return (
    <section className="mx-auto max-w-6xl px-4 pt-14 pb-16 sm:px-6 sm:pt-20 sm:pb-24">
      <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
        <div>
          <h1 className="text-balance font-heading text-4xl font-semibold leading-tight text-foreground sm:text-5xl">
            The gift voucher your customers will actually want to give.
          </h1>
          <p className="mt-5 max-w-lg text-lg text-muted-foreground">
            Proper Treat turns your gift vouchers into a beautifully designed,
            personal experience &mdash; sold, personalised and redeemed in a few
            taps, with a QR code that just works.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <Button size="lg" render={<Link href="/signup">Sign up</Link>} />
            <Button
              size="lg"
              variant="outline"
              render={<Link href="/how-it-works">See how it works</Link>}
            />
          </div>
        </div>

        <div className="mx-auto w-full max-w-md lg:max-w-none">
          <Image
            src="/hero-voucher-placeholder.svg"
            alt="Example Proper Treat gift voucher"
            width={600}
            height={380}
            className="w-full rounded-2xl shadow-xl shadow-primary/10"
            priority
          />
        </div>
      </div>
    </section>
  );
}
