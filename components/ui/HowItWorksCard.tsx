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
        group h-full w-full min-w-0 cursor-default
        rounded-[10px] border border-transparent
        bg-white p-4

        transition-[transform,box-shadow,border-color,background-color]
        duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]

        hover:-translate-y-0.5
        hover:border-brand-500/15
        hover:bg-brand-500/[0.025]
        hover:shadow-[0_10px_24px_rgba(0,68,56,0.06)]

        lg:min-h-[220px]
        lg:rounded-[12px]
        lg:p-8
      "
    >
      <div
        className="
          inline-flex text-brand-500
          transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]
          group-hover:-translate-y-px
        "
      >
        {icon}
      </div>

      <h3
        className="
          mt-3 text-[12px] font-semibold
          leading-tight text-ink

          sm:text-sm
          lg:mt-6
          lg:text-[17px]
        "
      >
        {title}
      </h3>

      <p
        className="
          mt-2 text-[10px]
          leading-[1.55] text-body

          sm:text-[12px]
          lg:mt-3
          lg:text-sm
          lg:leading-6
        "
      >
        {description}
      </p>
    </article>
  );
}
