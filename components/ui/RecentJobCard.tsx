import type { Job, JobLogo } from "@/types/job";

type RecentJobCardProps = {
  job: Job;
};

function CompanyLogo({ logo }: { logo: JobLogo }) {
  if (logo === "dimension") {
    return (
      <svg
        aria-hidden="true"
        viewBox="129 3087 110 93"
        className="h-9 w-[43px] lg:h-[93px] lg:w-[110px]"
      >
        <circle
          cx="46.5"
          cy="46.5"
          r="46.5"
          transform="matrix(1 0 0 1 138 3087)"
          fill="#D60B0B"
        />

        <path
          d="M129 3140.25C129 3135.67 129.96 3131.67 131.881 3128.25C133.863 3124.83 136.558 3122.19 139.966 3120.35C143.373 3118.51 147.152 3117.59 151.303 3117.59C154.649 3117.59 157.622 3118.19 160.224 3119.4C162.888 3120.56 164.964 3122.17 166.451 3124.22V3104H184.758V3162.45H166.451V3156.29C165.026 3158.34 163.012 3159.97 160.41 3161.18C157.808 3162.39 154.742 3163 151.21 3163C147.059 3163 143.28 3162.08 139.873 3160.24C136.527 3158.39 133.863 3155.76 131.881 3152.34C129.96 3148.86 129 3144.83 129 3140.25ZM166.544 3140.25C166.544 3137.41 165.614 3135.17 163.756 3133.54C161.959 3131.91 159.729 3131.09 157.065 3131.09C154.339 3131.09 152.078 3131.91 150.281 3133.54C148.484 3135.12 147.586 3137.36 147.586 3140.25C147.586 3143.1 148.484 3145.36 150.281 3147.05C152.078 3148.68 154.339 3149.49 157.065 3149.49C159.729 3149.49 161.959 3148.68 163.756 3147.05C165.614 3145.41 166.544 3143.15 166.544 3140.25Z"
          fill="white"
        />

        <path
          d="M217.347 3163C212.639 3163 208.426 3162.34 204.709 3161.03C201.054 3159.66 198.142 3157.81 195.973 3155.5C193.867 3153.13 192.69 3150.47 192.442 3147.52H210.099C210.347 3148.94 211.121 3150.05 212.422 3150.84C213.723 3151.63 215.334 3152.02 217.254 3152.02C218.741 3152.02 219.918 3151.76 220.786 3151.23C221.653 3150.71 222.087 3150.02 222.087 3149.18C222.087 3148.07 221.374 3147.26 219.949 3146.73C218.524 3146.2 216.17 3145.62 212.887 3144.99C209.169 3144.36 206.072 3143.65 203.594 3142.86C201.116 3142.07 198.947 3140.78 197.089 3138.99C195.292 3137.2 194.394 3134.78 194.394 3131.72C194.394 3129.09 195.23 3126.72 196.903 3124.61C198.575 3122.46 201.023 3120.74 204.244 3119.48C207.528 3118.22 211.462 3117.59 216.046 3117.59C222.861 3117.59 228.22 3119.01 232.123 3121.85C236.026 3124.69 238.288 3128.43 238.907 3133.07H222.458C222.149 3131.64 221.405 3130.56 220.228 3129.83C219.113 3129.04 217.595 3128.64 215.675 3128.64C214.188 3128.64 213.042 3128.88 212.236 3129.35C211.493 3129.83 211.121 3130.49 211.121 3131.33C211.121 3132.38 211.833 3133.2 213.258 3133.78C214.683 3134.3 216.976 3134.86 220.135 3135.44C223.914 3136.12 227.043 3136.88 229.521 3137.73C232.061 3138.57 234.261 3139.94 236.119 3141.83C238.04 3143.68 239 3146.2 239 3149.41C239 3152 238.102 3154.31 236.305 3156.37C234.57 3158.42 232.061 3160.05 228.778 3161.26C225.556 3162.42 221.746 3163 217.347 3163Z"
          fill="white"
        />
      </svg>
    );
  }

  if (logo === "alpander") {
    return (
      <svg
        aria-hidden="true"
        viewBox="634 3087 93 93"
        className="h-9 w-9 lg:h-[93px] lg:w-[93px]"
      >
        <circle
          cx="46.5"
          cy="46.5"
          r="46.5"
          transform="matrix(1 0 0 1 634 3087)"
          fill="#4663CA"
        />

        <path
          d="M675.113 3133.5H685.885L680.499 3122.16L675.113 3133.5Z"
          fill="white"
        />

        <path
          d="M680.5 3105.06L652.062 3115.22L657.918 3149.75L680.5 3161.94L703.066 3149.75L708.938 3115.22L680.5 3105.06ZM691.672 3145.69L688.296 3138.58H672.703L669.328 3145.69H664.25L680.5 3110.14L696.75 3145.69H691.672Z"
          fill="white"
        />
      </svg>
    );
  }

  return (
    <svg
      aria-hidden="true"
      viewBox="1130 3087 93 93"
      className="h-9 w-9 lg:h-[93px] lg:w-[93px]"
    >
      <circle
        cx="46.5"
        cy="46.5"
        r="46.5"
        transform="matrix(1 0 0 1 1130 3087)"
        fill="#328B7B"
      />

      <path
        d="M1215.44 3106.57L1196.73 3125.28L1215.3 3143.89L1203.26 3155.94L1154.03 3106.7L1166.07 3094.66L1184.68 3113.24L1203.39 3094.56L1215.44 3106.57Z"
        fill="white"
      />

      <path
        d="M1137.66 3123.07L1149.7 3111.02L1198.94 3160.26L1186.89 3172.3L1168.29 3153.73L1149.57 3172.44L1137.56 3160.39L1156.24 3141.68L1137.66 3123.07Z"
        fill="white"
      />
    </svg>
  );
}

function LocationIcon() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      fill="none"
      className="h-2.5 w-2.5 lg:h-4 lg:w-4"
    >
      <path
        d="M12 21s6-5.1 6-11a6 6 0 1 0-12 0c0 5.9 6 11 6 11Z"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinejoin="round"
      />

      <circle
        cx="12"
        cy="10"
        r="2"
        stroke="currentColor"
        strokeWidth="1.8"
      />
    </svg>
  );
}

function BriefcaseIcon() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      fill="none"
      className="h-2.5 w-2.5 lg:h-4 lg:w-4"
    >
      <rect
        x="4"
        y="7"
        width="16"
        height="12"
        rx="2"
        stroke="currentColor"
        strokeWidth="1.8"
      />

      <path
        d="M9 7V5h6v2M4 12h16"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
    </svg>
  );
}

export default function RecentJobCard({
  job,
}: RecentJobCardProps) {
  return (
    <article
      className="
        flex h-full min-h-[250px] w-full min-w-0 flex-col
        rounded-[10px] bg-white p-4

        sm:min-h-[300px]
        lg:h-[460px]
        lg:rounded-[16px] lg:p-8
      "
    >
      <CompanyLogo logo={job.logo} />

      <h3
        className="
          mt-3 min-w-0 text-[14px] font-semibold
          leading-tight text-ink

          lg:mt-6 lg:text-[20px]
        "
      >
        {job.title}
      </h3>

      <p className="mt-1 min-w-0 text-xs text-body lg:mt-2 lg:text-sm">
        {job.company}
      </p>

      <p
        className="
          mt-3 line-clamp-3
          text-[11px] leading-[1.55] text-body

          lg:mt-6 lg:max-w-[330px]
          lg:text-[12px] lg:leading-6
        "
      >
        {job.description}
      </p>

      <div className="mt-3 flex min-w-0 flex-wrap items-center gap-1.5 lg:mt-6 lg:gap-3">
        <span
          className="
            inline-flex h-6 min-w-0 items-center gap-1
            rounded-full bg-[#f9f9f9]
            px-1.5 text-[10px] text-ink

            lg:h-8 lg:px-3 lg:text-[11px]
          "
        >
          <LocationIcon />
          {job.location}
        </span>

        <span
          className="
            inline-flex h-6 min-w-0 items-center gap-1
            rounded-full bg-[#f9f9f9]
            px-1.5 text-[10px] text-ink

            lg:h-8 lg:px-3 lg:text-[11px]
          "
        >
          <BriefcaseIcon />
          {job.employmentType}
        </span>
      </div>

      <button
        type="button"
        onPointerDown={(event) => event.stopPropagation()}
        className="
          group mt-6 inline-flex w-fit
          cursor-pointer items-center gap-1.5
          text-xs font-semibold
          text-brand-500
          transition-colors duration-300
          hover:text-brand-700

          lg:mt-auto lg:gap-2 lg:text-base
        "
      >
        Apply Now
        <span
          aria-hidden="true"
          className="
            transition-transform duration-300
            group-hover:translate-x-0.5
          "
        >
          &gt;
        </span>
      </button>
    </article>
  );
}
