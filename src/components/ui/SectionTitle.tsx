import { cn } from "@/lib/cn";

export function SectionTitle({
  eyebrow,
  title,
  className,
  align = "center",
}: {
  eyebrow?: string;
  title: string;
  className?: string;
  align?: "center" | "left";
}) {
  return (
    <div
      className={cn(
        "mb-16 space-y-4",
        align === "center" && "text-center",
        className,
      )}
    >
      {eyebrow ? (
        <span className="font-label-caps text-label-caps text-primary tracking-[0.2em] uppercase block">
          {eyebrow}
        </span>
      ) : null}
      <h2 className="font-headline-lg text-headline-lg-mobile text-on-surface md:text-headline-lg">
        {title}
      </h2>
      <div
        className={cn(
          "mt-6 h-px w-24 bg-primary/40",
          align === "center" && "mx-auto",
        )}
      />
    </div>
  );
}
