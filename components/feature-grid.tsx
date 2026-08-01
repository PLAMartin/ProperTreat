import type { ComponentType } from "react";
import type { SvgIconProps } from "@mui/material/SvgIcon";

export type Feature = {
  icon: ComponentType<SvgIconProps>;
  title: string;
  description: string;
};

export function FeatureGrid({ features }: { features: Feature[] }) {
  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
      {features.map((feature) => (
        <div
          key={feature.title}
          className="rounded-2xl border border-border/70 bg-card p-6"
        >
          <feature.icon className="!size-6 text-primary" />
          <h3 className="mt-4 font-heading text-base font-semibold text-foreground">
            {feature.title}
          </h3>
          <p className="mt-2 text-sm text-muted-foreground">{feature.description}</p>
        </div>
      ))}
    </div>
  );
}
