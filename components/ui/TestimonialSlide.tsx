import type { Testimonial } from "@/types/testimonial";

type TestimonialSlideProps = {
  testimonial: Testimonial;
};

export default function TestimonialSlide({
  testimonial,
}: TestimonialSlideProps) {
  return (
    <article
      className="
        grid items-center gap-6
        lg:grid-cols-[minmax(0,600px)_minmax(320px,420px)]
        lg:justify-between lg:gap-12
      "
    >
      {/* Using contents changes the mobile element order */}
      <div className="contents lg:block">
        <blockquote
          className="
            order-1 mx-auto max-w-[360px]
            text-center text-[12px] font-semibold
            leading-[1.55] text-ink

            lg:mx-0 lg:max-w-[600px]
            lg:text-left lg:text-[20px]
            lg:leading-[1.45]
          "
        >
          “{testimonial.quote}”
        </blockquote>

        <div
          className="
            order-3 text-center
            lg:mt-10 lg:text-left
          "
        >
          <h3
            className="
              text-sm font-semibold text-ink
              lg:text-[20px]
            "
          >
            {testimonial.name}
          </h3>

          <p
            className="
              mt-1 text-[11px] text-body
              lg:mt-2 lg:text-sm
            "
          >
            {testimonial.role} in {testimonial.company}
          </p>
        </div>
      </div>

      {/* Temporary XD image placeholder */}
      <div
        aria-hidden="true"
        className="
          order-2 mx-auto
          aspect-[188/185] w-full max-w-[188px]
          rounded-[8px] bg-brand-500

          lg:order-none lg:aspect-[420/410]
          lg:w-full lg:max-w-[420px]
          lg:rounded-[16px]
        "
      />
    </article>
  );
}
