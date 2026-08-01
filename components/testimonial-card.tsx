import Image from "next/image";

export function TestimonialCard({
  quote,
  name,
  role,
}: {
  quote: string;
  name: string;
  role: string;
}) {
  return (
    <figure className="mx-auto flex max-w-xl flex-col items-center gap-4 text-center">
      <Image src="/logo/proper-treat-icon.svg" alt="" width={32} height={34} />
      <blockquote className="font-heading text-xl font-medium text-foreground sm:text-2xl">
        &ldquo;{quote}&rdquo;
      </blockquote>
      <figcaption className="text-sm text-muted-foreground">
        {name} &middot; {role}
      </figcaption>
    </figure>
  );
}
