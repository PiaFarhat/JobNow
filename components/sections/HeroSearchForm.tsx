import Button from "@/components/ui/Button";
import Dropdown from "@/components/ui/Dropdown";

const locationOptions = [
  { label: "New York", value: "new-york" },
  { label: "London", value: "london" },
  { label: "Remote", value: "remote" },
];

export default function HeroSearchForm() {
  return (
    <form
      role="search"
      className="
        mx-auto mt-[31px] grid w-full max-w-[335px]
        grid-cols-[minmax(0,132px)_104px_55px]
        items-center justify-center gap-2
        rounded-[10px] bg-white px-[10px] py-[10px]
        shadow-none

        lg:mx-0 lg:mt-8 lg:max-w-[650px]
        lg:grid-cols-[1fr_1fr_auto]
        lg:gap-3 lg:rounded-xl lg:p-3
        lg:shadow-[0_12px_35px_rgba(16,34,29,0.08)]
      "
    >
      {/* Keyword field */}
      <div
        className="
          flex h-[23px] min-w-0 items-center
          gap-1.5 rounded-[4px]
          bg-[#f9f9f9] px-[9px]

          lg:h-11 lg:gap-2.5
          lg:rounded-[10px] lg:px-3
        "
      >
        <svg
          aria-hidden="true"
          viewBox="0 0 24 24"
          fill="none"
          className="h-3 w-3 shrink-0 text-heading lg:h-4 lg:w-4"
        >
          <circle
            cx="11"
            cy="11"
            r="6.5"
            stroke="currentColor"
            strokeWidth="1.8"
          />

          <path
            d="m16 16 4 4"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
          />
        </svg>

        <label htmlFor="job-keyword" className="sr-only">
          Job title or keyword
        </label>

        <input
          id="job-keyword"
          name="keyword"
          type="search"
          placeholder="Job title or Keyword"
          className="
            min-w-0 flex-1 bg-transparent
            text-[6px] font-medium text-heading
            outline-none placeholder:text-heading

            lg:text-xs
          "
        />
      </div>

      {/* Location field */}
      <div className="min-w-0">
        <Dropdown
          id="job-location"
          name="location"
          label="Job location"
          hideLabel
          variant="filled"
          placeholder="Location"
          options={locationOptions}
          className="
            h-[23px] rounded-[4px]
            pl-6 pr-5 text-[6px]

            lg:h-11 lg:rounded-[10px]
            lg:pl-10 lg:pr-9 lg:text-xs
          "
          icon={
            <svg
              aria-hidden="true"
              viewBox="0 0 24 24"
              fill="none"
              className="h-3 w-3 lg:h-4 lg:w-4"
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
          }
        />
      </div>

      {/* Search button */}
      <Button
        type="submit"
        className="
          h-[24px] min-w-[55px]
          rounded-[5px] px-2
          text-[7px]

          lg:h-11 lg:min-w-[100px]
          lg:rounded-[10px] lg:px-7
          lg:text-sm
        "
      >
        Search
      </Button>
    </form>
  );
}
