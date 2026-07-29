"use client";

import { FreeMode, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

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
      {/* Section heading */}
      <Container>
        <div className="mx-auto max-w-[760px] text-center">
          <h2 className="text-[22px] font-bold leading-tight text-ink lg:text-[32px]">
            Recently Added Jobs
          </h2>

          <p
            className="
              mx-auto mt-3 max-w-[285px]
              text-xs leading-[1.6] text-body

              lg:mt-4
              lg:max-w-[680px]
              lg:text-sm
              lg:leading-7
            "
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed quis
            lacus non orci euismod vestibulum vitae ut ex. Quisque ut arcu at
            lectus tristique auctor sit amet at turpis.
          </p>
        </div>
      </Container>

      {/* Mobile interaction hint */}
      <p className="mt-5 text-center text-[11px] text-body sm:hidden">
        Swipe to explore more jobs
      </p>

      <Container className="mt-3 sm:mt-8 lg:mt-12">
        <div className="w-[calc(100vw-1.25rem)] sm:w-[calc(100vw-2rem)] lg:w-[calc(100vw-2.5rem)] xl:w-[calc(100vw-((100vw-1240px)/2))]">
          <Swiper
            modules={[FreeMode, Pagination]}
            slidesPerView="auto"
            spaceBetween={14}
            slidesOffsetAfter={40}
            grabCursor
            watchOverflow={false}
            freeMode={{
              enabled: true,
              momentum: true,
              momentumRatio: 0.8,
            }}
            pagination={{
              clickable: true,
              dynamicBullets: true,
            }}
            breakpoints={{
              640: {
                spaceBetween: 18,
                slidesOffsetAfter: 56,
              },
              1024: {
                spaceBetween: 28,
                slidesOffsetAfter: 96,
              },
              1536: {
                spaceBetween: 28,
                slidesOffsetAfter: 160,
              },
            }}
            aria-label="Recently added jobs"
            className="recent-jobs-swiper !overflow-visible !pb-10"
          >
            {recentlyAddedJobs.map((job) => (
              <SwiperSlide
                key={job.id}
                className="!h-auto !w-[min(76vw,270px)] sm:!w-[300px] md:!w-[340px] lg:!w-[360px] xl:!w-[390px] 2xl:!w-[410px]"
              >
                <RecentJobCard job={job} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </Container>

      {/* View More button */}
      <Container>
        <div className="mt-6 flex justify-center lg:mt-10">
          <Button
            variant="outline"
            size="compact"
            className="
              bg-transparent

              lg:h-10
              lg:min-w-[130px]
              lg:rounded-[7px]
              lg:px-5
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
