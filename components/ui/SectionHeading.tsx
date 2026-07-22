type SectionHeadingProps = {
  title: string;
  description?: string;
  eyebrow?: string;
  align?: "left" | "center";
  className?: string;
};

export default function SectionHeading({
  title,
  description,
  eyebrow,
  align = "center",
  className = "",
}: SectionHeadingProps) {
  const alignmentStyles =
    align === "center"
      ? "mx-auto items-center text-center"
      : "items-start text-left";

  return (
    <div
      className={`flex max-w-2xl flex-col ${alignmentStyles} ${className}`}
    >
      {eyebrow && (
        <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-brand-500">
          {eyebrow}
        </p>
      )}

      <h2 className="text-3xl font-bold leading-tight text-heading sm:text-4xl">
        {title}
      </h2>

      {description && (
        <p className="mt-4 text-base leading-7 text-body">
          {description}
        </p>
      )}
    </div>
  );
}