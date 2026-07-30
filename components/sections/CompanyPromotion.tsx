import Container from "@/components/layout/Container";
import Button from "@/components/ui/Button";

export default function CompanyPromotion() {
  return (
    <section
      id="company-promotion"
      className="bg-[#fbfbfb] pb-10 pt-0 lg:py-24"
    >
      <Container>
        <div
          className="
            grid grid-cols-1 items-center gap-5
            min-[900px]:grid-cols-[minmax(0,460px)_minmax(0,1fr)]
            min-[900px]:justify-between min-[900px]:gap-10
            lg:grid-cols-[minmax(0,520px)_minmax(0,590px)] lg:gap-12
          "
        >
          {/* Temporary image placeholder */}
          <div
            aria-hidden="true"
            className="
              mx-auto aspect-[4/3] w-full
              max-w-[420px] rounded-[11px]
              bg-[#c9c9c9]

              min-[900px]:mx-0 min-[900px]:max-w-[460px]
              lg:max-w-[520px] lg:aspect-[4/3]
              lg:rounded-[14px]
            "
          />

          {/* Content */}
          <div
            className="
              mx-auto w-full min-w-0
              text-center

              min-[900px]:mx-0 min-[900px]:max-w-none
              min-[900px]:text-left
              lg:max-w-[590px]
              lg:text-left
            "
          >
            <h2
              className="
                mx-auto max-w-[430px]
                text-[22px] font-bold
                leading-[1.3]
                tracking-[-0.02em] text-ink

                min-[900px]:mx-0 min-[900px]:max-w-none
                lg:text-[36px] lg:leading-[1.35]
              "
            >
              We will help you to become an employee in your dream company
            </h2>

            <p
              className="
                mx-auto mt-3 max-w-[430px]
                text-xs leading-[1.6]
                text-body

                min-[900px]:mx-0 min-[900px]:max-w-none
                lg:mt-5
                lg:max-w-none lg:text-sm
                lg:leading-7
              "
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed quis
              lacus non orci euismod vestibulum vitae ut ex. Quisque ut arcu at
              lectus tristique auctor sit amet at turpis.
            </p>

            <Button
              variant="outline"
              size="compact"
              className="
                mx-auto mt-4

                min-[900px]:mx-0
                lg:mt-6
                lg:h-10 lg:min-w-[125px]
                lg:rounded-[7px]
                lg:px-5 lg:text-sm
              "
            >
              Learn More
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}
