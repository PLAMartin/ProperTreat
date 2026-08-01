export type Step = {
  title: string;
  description: string;
};

export function StepSequence({ steps }: { steps: Step[] }) {
  return (
    <ol className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
      {steps.map((step, index) => (
        <li key={step.title} className="relative">
          <div className="flex size-10 items-center justify-center rounded-full bg-primary font-heading text-lg font-semibold text-primary-foreground">
            {index + 1}
          </div>
          <h3 className="mt-4 font-heading text-lg font-semibold text-foreground">
            {step.title}
          </h3>
          <p className="mt-2 text-sm text-muted-foreground">{step.description}</p>
        </li>
      ))}
    </ol>
  );
}
