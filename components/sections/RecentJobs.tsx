"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import Container from "@/components/layout/Container";
import Button from "@/components/ui/Button";
import RecentJobCard from "@/components/ui/RecentJobCard";
import { recentlyAddedJobs } from "@/data/jobs";

export default function RecentJobs() {
  return (
    <section
      id="jobs"
      className="overflow-hidden bg-[#fbfbfb] py-14 lg:py-24"
    >
      {/* Heading */}
      <Container>
        <div className="mx-auto max-w-[760px] text-center">
          <h2 className="text-[22px] font-bold leading-tight text-ink lg:text-[32px]">
            Recently Added Jobs
          </h2>

          <p
            className="
              mx-auto mt-3 max-w-[285px]
              text-xs leading-[1.6] text-body

              lg:mt-4 lg:max-w-[680px]
              lg:text-sm lg:leading-7
            "
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed quis
            lacus non orci euismod vestibulum vitae ut ex. Quisque ut arcu at
            lectus tristique auctor sit amet at turpis.
          </p>
        </div>
      </Container>

      {/* Carousel */}
      <div className="mt-8 pl-5 sm:pl-8 lg:mt-12 lg:pl-[7%]">
        <Swiper
          slidesPerView="auto"
          spaceBetween={14}
          grabCursor
          breakpoints={{
            1024: {
              spaceBetween: 28,
            },
          }}
          aria-label="Recently added jobs"
          className="!overflow-visible"
        >
          {recentlyAddedJobs.map((job) => (
            <SwiperSlide
              key={job.id}
              className="!w-[168px] lg:!w-[446px]"
            >
              <RecentJobCard job={job} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* View More */}
      <Container>
        <div className="mt-6 flex justify-center lg:mt-10">
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
