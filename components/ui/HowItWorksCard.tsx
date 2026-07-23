import type { ReactNode } from "react";

type HowItWorksCardProps = {
  icon: ReactNode;
  title: string;
  description: string;
};

export default function HowItWorksCard({
  icon,
  title,
  description,
}: HowItWorksCardProps) {
  return (
    <article
      className="
        h-[145px] rounded-[10px] bg-white
        px-4 py-4
        sm:h-auto sm:min-h-[175px]
        sm:rounded-[12px] sm:px-6 sm:py-6
      "
    >
      <div
        aria-hidden="true"
        className="
          flex h-6 w-6 items-center justify-center
          text-brand-500
          [&_svg]:h-6 [&_svg]:w-6
          sm:h-10 sm:w-10
          sm:[&_svg]:h-8 sm:[&_svg]:w-8
        "
      >
        {icon}
      </div>

      <h3
        className="
          mt-3 text-[11px] font-semibold
          leading-tight text-ink
          sm:mt-4 sm:text-base
        "
      >
        {title}
      </h3>

      <p
        className="
          mt-2 line-clamp-3
          text-[7px] leading-[1.55] text-body
          sm:mt-3 sm:line-clamp-none
          sm:text-[11px] sm:leading-[1.6]
        "
      >
        {description}
      </p>
    </article>
  );
}