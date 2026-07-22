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
        mt-8 flex w-full max-w-[650px]
        flex-col gap-3 rounded-xl bg-white p-3
        shadow-[0_12px_35px_rgba(16,34,29,0.08)]
        sm:flex-row sm:items-center
      "
    >
      <div className="flex h-11 flex-1 items-center gap-2.5 rounded-[10px] bg-[#f9f9f9] px-3">
        <svg
          aria-hidden="true"
          viewBox="0 0 24 24"
          fill="none"
          className="h-4 w-4 shrink-0 text-heading"
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
            text-xs font-medium text-heading
            outline-none placeholder:text-heading
          "
        />
      </div>

      <div className="min-w-0 flex-1">
        <Dropdown
          id="job-location"
          name="location"
          label="Job location"
          hideLabel
          variant="filled"
          placeholder="Location"
          options={locationOptions}
          icon={
            <svg
              aria-hidden="true"
              viewBox="0 0 24 24"
              fill="none"
              className="h-4 w-4"
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

      <Button
        type="submit"
        className="h-11 shrink-0 rounded-[10px] px-7"
      >
        Search
      </Button>
    </form>
  );
}