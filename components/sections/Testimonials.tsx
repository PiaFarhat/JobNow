"use client";

import { useRef } from "react";
import type { Swiper as SwiperInstance } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import Container from "@/components/layout/Container";
import TestimonialSlide from "@/components/ui/TestimonialSlide";
import { testimonials } from "@/data/testimonials";

export default function Testimonials() {
  const swiperRef = useRef<SwiperInstance | null>(null);

  const showPreviousTestimonial = () => {
    swiperRef.current?.slidePrev();
  };

  const showNextTestimonial = () => {
    swiperRef.current?.slideNext();
  };

  return (
    <section
      id="testimonials"
      className="overflow-hidden bg-[#fbfbfb] py-16 lg:py-24"
    >
      <Container>
        {/* Section heading */}
        <div className="text-center lg:text-left">
          <h2
            className="
              text-[22px] font-bold leading-tight text-ink
              lg:text-[32px]
            "
          >
            People’s Feedback about JobNow!
          </h2>

          <p
            className="
              mx-auto mt-3 max-w-[285px]
              text-xs leading-[1.6] text-body

              lg:mx-0 lg:mt-5 lg:max-w-[620px]
              lg:text-sm lg:leading-7
            "
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed quis
            lacus non orci euismod vestibulum vitae ut ex.
          </p>
        </div>

        {/* Testimonial carousel */}
        <div className="relative mt-8 lg:mt-12">
          <Swiper
            slidesPerView={1}
            spaceBetween={24}
            speed={600}
            loop={testimonials.length > 1}
            onSwiper={(swiper) => {
              swiperRef.current = swiper;
            }}
            aria-label="JobNow customer testimonials"
          >
            {testimonials.map((testimonial) => (
              <SwiperSlide key={testimonial.id}>
                <TestimonialSlide testimonial={testimonial} />
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Navigation controls */}
          <div
            className="
              mt-5 flex items-center justify-center gap-3

              lg:absolute lg:bottom-[22px]
              lg:left-0 lg:z-10 lg:mt-0
              lg:justify-start
            "
          >
            <button
              type="button"
              aria-label="Previous testimonial"
              onClick={showPreviousTestimonial}
              className="
                inline-flex h-7 w-7 cursor-pointer
                items-center justify-center
                rounded-full bg-[#d9d9d9] text-white
                transition-all duration-300
                hover:-translate-y-0.5 hover:bg-[#c8c8c8]

                lg:h-12 lg:w-12
              "
            >
              <svg
                aria-hidden="true"
                viewBox="0 0 24 24"
                fill="none"
                className="h-3.5 w-3.5 lg:h-6 lg:w-6"
              >
                <path
                  d="m15 5-7 7 7 7"
                  stroke="currentColor"
                  strokeWidth="2.4"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>

            <button
              type="button"
              aria-label="Next testimonial"
              onClick={showNextTestimonial}
              className="
                inline-flex h-7 w-7 cursor-pointer
                items-center justify-center
                rounded-full bg-brand-500 text-white
                transition-all duration-300
                hover:-translate-y-0.5 hover:bg-brand-600

                lg:h-12 lg:w-12
              "
            >
              <svg
                aria-hidden="true"
                viewBox="0 0 24 24"
                fill="none"
                className="h-3.5 w-3.5 lg:h-6 lg:w-6"
              >
                <path
                  d="m9 5 7 7-7 7"
                  stroke="currentColor"
                  strokeWidth="2.4"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </div>
        </div>
      </Container>
    </section>
  );
}
