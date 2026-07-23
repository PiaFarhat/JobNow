import Container from "@/components/layout/Container";
import Button from "@/components/ui/Button";

export default function CompanyPromotion() {
  return (
    <section
      id="company-promotion"
      className="bg-[#fbfbfb] py-[50px] lg:py-24"
    >
      <Container>
        <div
          className="
            grid items-center gap-6
            lg:grid-cols-2 lg:gap-20
          "
        >
          {/* Temporary image placeholder */}
          <div
            aria-hidden="true"
            className="
              mx-auto h-[210px] w-full max-w-[285px]
              rounded-[11px] bg-[#c9c9c9]
              lg:mx-0 lg:aspect-[4/3] lg:h-auto
              lg:max-w-[520px] lg:rounded-[14px]
            "
          />

          {/* Section content */}
          <div
            className="
              mx-auto max-w-[285px] text-center
              lg:mx-0 lg:max-w-[590px] lg:text-left
            "
          >
            <h2
              className="
                mx-auto max-w-[247px]
                text-[17px] font-bold leading-[1.35]
                tracking-[-0.02em] text-ink
                lg:mx-0 lg:max-w-none lg:text-[36px]
              "
            >
              We will help you to become an employee in your dream company
            </h2>

            <p
              className="
                mx-auto mt-3 max-w-[248px]
                text-[8px] leading-[1.55] text-body
                lg:mx-0 lg:mt-5 lg:max-w-none
                lg:text-sm lg:leading-7
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
    mx-auto mt-3 bg-white
    lg:mx-0 lg:mt-6
    lg:h-10 lg:min-w-[125px]
    lg:rounded-[7px] lg:px-5
    lg:text-sm
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