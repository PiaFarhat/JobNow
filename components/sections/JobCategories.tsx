"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import Container from "@/components/layout/Container";
import Button from "@/components/ui/Button";
import JobCategoryCard from "@/components/ui/JobCategoryCard";
import { jobCategories } from "@/data/categories";

export default function JobCategories() {
  return (
    <section
      id="job-categories"
      className="overflow-hidden bg-[#effaf7] py-7 lg:py-24"
    >
      {/* Section heading */}
      <Container>
        <div className="mx-auto text-center">
          <h2 className="whitespace-nowrap text-[16px] font-bold leading-tight text-ink lg:text-[32px]">
            Popular Job Categories
          </h2>

          <p className="mx-auto mt-3 max-w-[285px] text-[7px] leading-[1.55] text-body lg:mt-4 lg:max-w-[680px] lg:text-sm lg:leading-7">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed quis
            lacus non orci euismod vitae ut ex. Quisque ut arcu at lectus
            tristique auctor sit amet at turpis.
          </p>
        </div>
      </Container>

      {/* Categories carousel */}
      <div className="mt-7 pl-[37px] lg:mt-10 lg:pl-[7%]">
        <Swiper
          slidesPerView="auto"
          spaceBetween={14}
          breakpoints={{
            1024: {
              spaceBetween: 20,
            },
          }}
          grabCursor
          aria-label="Popular job categories"
          className="overflow-visible"
        >
          {jobCategories.map((category, index) => (
            <SwiperSlide
              key={category.id}
              className="!w-[106px] lg:!w-[285px]"
            >
              <JobCategoryCard
                title={category.title}
                vacancies={category.vacancies}
                icon={category.icon}
                active={index === 0}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* View more button */}
      <Container>
        <div className="mt-5 flex justify-center lg:mt-8">
         <Button
  variant="outline"
  size="compact"
  className="
    bg-transparent
    lg:h-10 lg:min-w-[130px]
    lg:rounded-[7px] lg:px-5
    lg:text-sm
  "
>
  View More
</Button>
        </div>
      </Container>
    </section>
  );
}