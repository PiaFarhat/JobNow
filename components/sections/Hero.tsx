import Container from "@/components/layout/Container";
import HeroDecorations from "@/components/sections/HeroDecorations";
import HeroMobileDecorations from "@/components/sections/HeroMobileDecorations";
import HeroSearchForm from "@/components/sections/HeroSearchForm";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-hero lg:min-h-[660px] xl:min-h-[693px]">
      {/* Desktop green side panel */}
      <div
        aria-hidden="true"
        className="
          absolute inset-y-0 right-0
          hidden w-[42%]
          rounded-bl-[64px]
          bg-brand-500
          lg:block
        "
      >
        <HeroDecorations />
      </div>

      {/* Hero text and search content */}
      <Container className="relative">
        <div className="lg:grid lg:min-h-[660px] lg:grid-cols-[58%_42%] lg:items-start xl:min-h-[693px]">
          <div className="pb-10 pt-[94px] text-center lg:pb-0 lg:pt-[180px] lg:text-left xl:pt-[195px]">
            <h1
              className="
                mx-auto max-w-[330px]
                text-[24px] font-bold
                leading-[1.2] tracking-[-0.03em]
                text-ink

                lg:mx-0
                lg:max-w-[560px]
                lg:text-[48px]
                lg:leading-[1.15]
                xl:text-[54px]
              "
            >
              Search, Find, &amp; Apply
            </h1>

            <p
              className="
                mx-auto mt-[18px]
                max-w-[310px]
                text-[12px] leading-[1.6]
                text-body

                lg:mx-0
                lg:mt-6
                lg:max-w-[580px]
                lg:text-base
                lg:leading-7
              "
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed quis
              lacus non orci euismod vestibulum vitae ut ex. Quisque ut arcu at
              lectus tristique auctor sit amet at turpis.
            </p>

            <HeroSearchForm />
          </div>

          {/* Empty desktop column occupied visually by green panel */}
          <div aria-hidden="true" className="hidden min-h-[660px] xl:min-h-[693px] lg:block" />
        </div>
      </Container>

      {/* Mobile green animation panel */}
      <div
        className="
          relative h-[230px] w-full
          overflow-hidden
          rounded-t-[28px]
          bg-brand-500
          lg:hidden
        "
      >
        <HeroMobileDecorations />
      </div>
    </section>
  );
}
