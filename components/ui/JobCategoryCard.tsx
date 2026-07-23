import type { CategoryIcon } from "@/types/category";

type JobCategoryCardProps = {
  title: string;
  vacancies: number;
  icon: CategoryIcon;
  active?: boolean;
};

function CategoryIconGraphic({ icon }: { icon: CategoryIcon }) {
  const iconClassName = "h-6 w-6 lg:h-10 lg:w-10";

  switch (icon) {
    case "design":
      return (
        <svg
          aria-hidden="true"
          viewBox="0 0 40 40"
          fill="none"
          className={iconClassName}
        >
          <path
            d="M16 7.5a4.5 4.5 0 0 0-4.4 5.4A5 5 0 0 0 9 22a4.8 4.8 0 0 0 4.6 6.1A4.5 4.5 0 0 0 18 33V7.5h-2Z"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M24 7.5a4.5 4.5 0 0 1 4.4 5.4A5 5 0 0 1 31 22a4.8 4.8 0 0 1-4.6 6.1A4.5 4.5 0 0 1 22 33V7.5h2Z"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M13.5 15H18M22 15h4.5M13 24h5M22 24h5"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
          />
          <circle cx="12" cy="19.5" r="1.5" fill="currentColor" />
          <circle cx="28" cy="19.5" r="1.5" fill="currentColor" />
        </svg>
      );

    case "finance":
      return (
        <svg
          aria-hidden="true"
          viewBox="0 0 40 40"
          fill="none"
          className={iconClassName}
        >
          <path
            d="M8 7v25h25"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
          />
          <path
            d="m12 16 6 6 5-4 9 8"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <circle cx="12" cy="16" r="1.8" fill="currentColor" />
          <circle cx="18" cy="22" r="1.8" fill="currentColor" />
          <circle cx="23" cy="18" r="1.8" fill="currentColor" />
          <circle cx="32" cy="26" r="1.8" fill="currentColor" />
        </svg>
      );

    case "bank":
      return (
        <svg
          aria-hidden="true"
          viewBox="0 0 40 40"
          fill="none"
          className={iconClassName}
        >
          <path
            d="M5 15 20 6l15 9H5Z"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinejoin="round"
          />
          <path
            d="M8 18h24M7 32h26M5 35h30"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
          />
          <path
            d="M10 18v14M16.5 18v14M23.5 18v14M30 18v14"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
          />
        </svg>
      );

    case "product":
      return (
        <svg
          aria-hidden="true"
          viewBox="0 0 40 40"
          fill="none"
          className={iconClassName}
        >
          <circle
            cx="18"
            cy="20"
            r="12"
            stroke="currentColor"
            strokeWidth="2.5"
          />
          <path
            d="M18 11v9h8"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M31 13h5M32 19h5M31 25h5"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
          />
        </svg>
      );

    case "support":
      return (
        <svg
          aria-hidden="true"
          viewBox="0 0 40 40"
          fill="none"
          className={iconClassName}
        >
          <path
            d="M8 21v-2a12 12 0 0 1 24 0v2"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
          />
          <path
            d="M8 20h5v10H9.5A2.5 2.5 0 0 1 7 27.5v-5A2.5 2.5 0 0 1 9.5 20ZM32 20h-5v10h3.5a2.5 2.5 0 0 0 2.5-2.5v-5a2.5 2.5 0 0 0-2.5-2.5Z"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinejoin="round"
          />
          <path
            d="M27 30c-1.5 3-4 4-8 4"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
          />
        </svg>
      );

    case "marketing":
      return (
        <svg
          aria-hidden="true"
          viewBox="0 0 40 40"
          fill="none"
          className={iconClassName}
        >
          <path
            d="M7 18v8h7l14 6V12l-14 6H7Z"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinejoin="round"
          />
          <path
            d="m14 26 3 8h6l-4-10M32 15l4-3M33 21h4M32 27l4 3"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      );

    default:
      return null;
  }
}

export default function JobCategoryCard({
  title,
  vacancies,
  icon,
  active = false,
}: JobCategoryCardProps) {
  return (
    <article
      className={`
        flex h-[140px] w-full flex-col overflow-hidden
        rounded-[10px] px-4 py-4
        transition-colors duration-200
        lg:h-[210px] lg:rounded-[14px]
        lg:px-6 lg:py-6
        ${
          active
            ? "bg-brand-500 text-white"
            : "bg-white text-ink"
        }
      `}
    >
      <div className={active ? "text-white" : "text-brand-500"}>
        <CategoryIconGraphic icon={icon} />
      </div>

      <h3
        className="
          mt-4 max-w-[90px]
          text-[10px] font-semibold leading-[1.4]
          lg:mt-5 lg:max-w-[180px]
          lg:text-base lg:leading-[1.45]
        "
      >
        {title}
      </h3>

      <p
        className={`
          mt-auto text-[7px] leading-tight
          lg:text-[10px]
          ${active ? "text-white/85" : "text-body"}
        `}
      >
        {vacancies} Job Vacancy
      </p>
    </article>
  );
}