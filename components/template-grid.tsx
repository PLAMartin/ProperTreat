import Image from "next/image";

export type Template = {
  name: string;
  description: string;
  image: string;
};

export const templates: Template[] = [
  {
    name: "Playful",
    description: "Bright and cheeky, for the friend who loves a laugh.",
    image: "/templates/placeholder-playful.svg",
  },
  {
    name: "Elegant",
    description: "Understated and refined, for a more grown-up gift.",
    image: "/templates/placeholder-elegant.svg",
  },
  {
    name: "Seasonal",
    description: "Warm, festive designs for birthdays and holidays.",
    image: "/templates/placeholder-seasonal.svg",
  },
];

export function TemplateGrid({ items = templates }: { items?: Template[] }) {
  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {items.map((template) => (
        <figure
          key={template.name}
          className="overflow-hidden rounded-2xl border border-border/70 bg-card"
        >
          <Image
            src={template.image}
            alt={`${template.name} voucher template`}
            width={400}
            height={280}
            className="w-full"
          />
          <figcaption className="p-5">
            <h3 className="font-heading text-base font-semibold text-foreground">
              {template.name}
            </h3>
            <p className="mt-1 text-sm text-muted-foreground">{template.description}</p>
          </figcaption>
        </figure>
      ))}
    </div>
  );
}
