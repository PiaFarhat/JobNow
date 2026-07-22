import Container from "@/components/layout/Container";
import HeroDecorations from "@/components/sections/HeroDecorations";
import HeroSearchForm from "@/components/sections/HeroSearchForm";
import HeroMobileDecorations from "@/components/sections/HeroMobileDecorations";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-white lg:min-h-[693px] lg:bg-hero">
      {/* Desktop green side panel */}
      <div
        aria-hidden="true"
        className="absolute inset-y-0 right-0 hidden w-[42%] rounded-bl-[64px] bg-brand-500 lg:block"
      >
        <HeroDecorations />
      </div>

      {/* Hero text and search content */}
      <Container className="relative">
        <div className="lg:grid lg:min-h-[693px] lg:grid-cols-[58%_42%] lg:items-start">
          <div className="pb-12 pt-[116px] text-center lg:pb-0 lg:pt-[195px] lg:text-left">
            <h1 className="mx-auto max-w-[320px] text-[24px] font-bold leading-[1.25] tracking-[-0.03em] text-ink lg:mx-0 lg:max-w-[560px] lg:text-[54px] lg:leading-[1.15]">
  Search, Find, &amp; Apply
</h1>

           <p className="mx-auto mt-4 max-w-[305px] text-[11px] leading-[1.65] text-body lg:mx-0 lg:mt-6 lg:max-w-[580px] lg:text-base lg:leading-7">
  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed quis
  lacus non orci euismod vestibulum vitae ut ex. Quisque ut arcu at
  lectus tristique auctor sit amet at turpis.
</p>

            <HeroSearchForm />
          </div>

          <div
            aria-hidden="true"
            className="hidden min-h-[693px] lg:block"
          />
        </div>
      </Container>

      {/* Full-width mobile green panel */}
     <div className="relative h-[405px] w-full bg-brand-500 lg:hidden">
  <HeroMobileDecorations />
</div>
    </section>
  );
}