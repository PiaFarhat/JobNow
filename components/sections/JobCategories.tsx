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
          <h2 className="text-[22px] font-bold leading-tight text-ink lg:text-[32px]">
            Popular Job Categories
          </h2>

          <p className="mx-auto mt-3 max-w-[285px] text-xs leading-[1.55] text-body lg:mt-4 lg:max-w-[680px] lg:text-sm lg:leading-7">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed quis
            lacus non orci euismod vitae ut ex. Quisque ut arcu at lectus
            tristique auctor sit amet at turpis.
          </p>
        </div>
      </Container>

      {/* Categories carousel */}
<Container className="mt-7 lg:mt-10">
  <div className="w-[calc(100vw-1.25rem)] sm:w-[calc(100vw-2rem)] lg:w-[calc(100vw-2.5rem)] xl:w-[calc(100vw-((100vw-1240px)/2))]">
  <Swiper
  slidesPerView="auto"
  spaceBetween={12}
  slidesOffsetAfter={40}
  grabCursor
  breakpoints={{
    640: {
      spaceBetween: 18,
      slidesOffsetAfter: 56,
    },
    1024: {
      spaceBetween: 24,
      slidesOffsetAfter: 96,
    },
    1536: {
      spaceBetween: 24,
      slidesOffsetAfter: 160,
    },
  }}
  className="!overflow-visible"
>
    {jobCategories.map((category, index) => (
      <SwiperSlide
        key={category.id}
        className="!w-[clamp(132px,42vw,168px)] sm:!w-[190px] md:!w-[220px] lg:!w-[250px] xl:!w-[285px]"
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
</Container>

      {/* View more button */}
      <Container>
        <div className="mt-5 flex justify-center lg:mt-8">
          <Button
            variant="outline"
            size="compact"
            className="
              lg:h-10 lg:min-w-[130px]
              lg:rounded-[7px]
              lg:px-5 lg:text-sm
            "
          >
            View More
          </Button>
        </div>
      </Container>
    </section>
  );
}
