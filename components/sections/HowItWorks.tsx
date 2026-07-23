import Container from "@/components/layout/Container";
import Button from "@/components/ui/Button";
import HowItWorksCard from "@/components/ui/HowItWorksCard";

const stepDescription =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed quis lacus non orci euismod vestibulum vitae ut ex.";

const steps = [
  {
    title: "Register",
    description: stepDescription,
    icon: (
      <svg
        viewBox="0 0 32 32"
        fill="none"
        className="h-8 w-8"
      >
        <path
          d="M13 7H24V25H13"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />

        <path
          d="M17 16H5"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
        />

        <path
          d="M9 12L5 16L9 20"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    title: "Create a Resume",
    description: stepDescription,
    icon: (
      <svg
        viewBox="0 0 32 32"
        fill="none"
        className="h-8 w-8"
      >
        <path
          d="M9 4H20L25 9V27H9V4Z"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinejoin="round"
        />

        <path
          d="M20 4V9H25"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinejoin="round"
        />

        <path
          d="M13 15H21M13 19H21M13 23H18"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
        />
      </svg>
    ),
  },
  {
    title: "Find Job",
    description: stepDescription,
    icon: (
      <svg
        viewBox="0 0 32 32"
        fill="none"
        className="h-8 w-8"
      >
        <path
          d="M8 7H24V24H8V7Z"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinejoin="round"
        />

        <path
          d="M13 7V5H19V7"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />

        <circle
          cx="22"
          cy="22"
          r="4"
          fill="white"
          stroke="currentColor"
          strokeWidth="2"
        />

        <path
          d="M25 25L28 28"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
        />
      </svg>
    ),
  },
  {
    title: "Apply Job",
    description: stepDescription,
    icon: (
      <svg
        viewBox="0 0 32 32"
        fill="none"
        className="h-8 w-8"
      >
        <circle
          cx="16"
          cy="16"
          r="10"
          stroke="currentColor"
          strokeWidth="2"
        />

        <path
          d="M16 22V10"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
        />

        <path
          d="M11 15L16 10L21 15"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
];

export default function HowItWorks() {
  return (
    <section
      id="how-it-works"
      className="bg-[#fbfbfb] py-16 lg:py-24"
    >
      <Container>
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between md:gap-8">
          <div className="max-w-[720px]">
            <h2 className="text-[28px] font-bold leading-tight text-ink lg:text-[32px]">
              How it works
            </h2>

            <p className="mt-5 max-w-[680px] text-sm leading-7 text-body">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed quis
              lacus non orci euismod vestibulum vitae ut ex. Quisque ut arcu at
              lectus tristique auctor sit amet at turpis.
            </p>
          </div>

          {/* Desktop and tablet button */}
          <div className="hidden md:block">
  <Button
    variant="outline"
    className="min-w-[145px] rounded-[8px] bg-white"
  >
    Learn More
  </Button>
</div>
        </div>

        <div
          className="
            mx-auto mt-8 grid w-full max-w-[278px]
            grid-cols-2 gap-x-[15px] gap-y-4
            sm:max-w-none sm:gap-5
            lg:mt-12 lg:grid-cols-4
          "
        >
          {steps.map((step) => (
            <HowItWorksCard
              key={step.title}
              icon={step.icon}
              title={step.title}
              description={step.description}
            />
          ))}
        </div>

        {/* Mobile button */}
      <div className="mt-6 flex justify-center md:hidden">
  <Button variant="outline" size="compact" className="bg-white">
    Learn More
  </Button>
</div>

      </Container>
    </section>
  );
}