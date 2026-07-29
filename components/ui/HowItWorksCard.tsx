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
        group h-full cursor-default
        rounded-[10px] border border-transparent
        bg-white p-3

        transition-[transform,box-shadow,border-color,background-color]
        duration-300 ease-out

        hover:-translate-y-1
        hover:border-brand-500/20
        hover:bg-brand-500/[0.025]
        hover:shadow-[0_12px_30px_rgba(0,68,56,0.08)]

        sm:p-5
        lg:min-h-[220px]
        lg:rounded-[12px]
        lg:p-8
      "
    >
      <div
        className="
          inline-flex text-brand-500
          transition-transform duration-300 ease-out
          group-hover:-translate-y-0.5
        "
      >
        {icon}
      </div>

      <h3
        className="
          mt-4 text-[12px] font-semibold
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
