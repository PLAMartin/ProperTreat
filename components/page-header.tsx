export function PageHeader({
  eyebrow,
  title,
  description,
}: {
  eyebrow?: string;
  title: string;
  description?: string;
}) {
  return (
    <div className="mx-auto max-w-3xl px-4 pt-14 pb-10 text-center sm:px-6 sm:pt-20">
      {eyebrow && (
        <p className="text-sm font-semibold uppercase tracking-wider text-primary">
          {eyebrow}
        </p>
      )}
      <h1 className="mt-3 text-balance font-heading text-3xl font-semibold text-foreground sm:text-4xl">
        {title}
      </h1>
      {description && (
        <p className="mt-4 text-lg text-muted-foreground">{description}</p>
      )}
    </div>
  );
}
