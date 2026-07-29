import Button from "@/components/ui/Button";
import Container from "@/components/layout/Container";

export default function RegisterCta() {
  return (
    <section className="relative bg-[#fbfbfb] pt-16 lg:pt-24">
      {/* Green footer overlap behind the CTA */}
      <div
        aria-hidden="true"
        className="
          absolute inset-x-0 bottom-0
          h-[54px] bg-brand-500
          lg:h-[141px]
        "
      />

      <Container className="relative z-10">
        <div
          className="
            mx-auto flex min-h-[148px] w-full
            max-w-[420px] flex-col
            items-center justify-center
            rounded-[6px] bg-[#004438]
            px-5 py-6 text-center

            lg:min-h-[280px]
            lg:max-w-[1240px]
            lg:rounded-[18px]
            lg:px-12 lg:py-12
            xl:min-h-[322px]
          "
        >
          <h2
            className="
              text-[18px] font-semibold
              leading-tight text-white

              lg:text-[34px]
              xl:text-[38px]
            "
          >
            Register your CV now!
          </h2>

          <p
            className="
              mt-3 max-w-[265px]
              text-[11px] leading-[1.45]
              text-white/65

              lg:mt-7
              lg:max-w-[690px]
              lg:text-[17px]
              lg:leading-[1.45]
              xl:text-[19px]
            "
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed quis
            lacus non orci euismod vestibulum vitae ut ex.
          </p>

          <Button
            variant="outline"
            size="tiny"
            className="
              mt-3
              border-white/70
              bg-transparent
              text-white
              shadow-none

              hover:border-white
              hover:bg-white/10
              hover:text-white
              hover:shadow-[0_4px_14px_rgba(255,255,255,0.12)]

              lg:mt-7
              lg:h-[62px]
              lg:min-w-[190px]
              lg:rounded-[8px]
              lg:px-7
              lg:text-[18px]
            "
          >
            Register Now
          </Button>
        </div>
      </Container>
    </section>
  );
}
