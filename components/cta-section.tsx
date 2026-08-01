import Link from "next/link";
import { Button } from "@/components/ui/button";

export function CtaSection({
  title,
  description,
  href = "/signup",
  cta = "Sign up",
}: {
  title: string;
  description?: string;
  href?: string;
  cta?: string;
}) {
  return (
    <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
      <div className="rounded-3xl bg-primary px-6 py-14 text-center text-primary-foreground sm:px-12">
        <h2 className="text-balance font-heading text-3xl font-semibold sm:text-4xl">
          {title}
        </h2>
        {description && (
          <p className="mx-auto mt-3 max-w-xl text-primary-foreground/90">
            {description}
          </p>
        )}
        <Button
          size="lg"
          variant="secondary"
          className="mt-7"
          render={<Link href={href}>{cta}</Link>}
        />
      </div>
    </section>
  );
}
