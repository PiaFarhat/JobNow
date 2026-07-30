import type { Testimonial } from "@/types/testimonial";

const testimonialQuote =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed quis lacus non orci euismod vestibulum vitae ut ex. Quisque ut arcu at lectus tristique auctor sit amet at turpis.";

export const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Brown Garcia",
    role: "Full Stack Developer",
    company: "XReact Tech",
    quote: testimonialQuote,
    image: "/images/testimonials/brown-garcia.jpg",
  },
  {
    id: 2,
    name: "Sophia Martinez",
    role: "UI/UX Designer",
    company: "Dimension Studio",
    quote: testimonialQuote,
    image: "/images/testimonials/sophia-martinez.jpg",
  },
  {
    id: 3,
    name: "Daniel Wilson",
    role: "Product Designer",
    company: "XReact Tech",
    quote: testimonialQuote,
    image: "/images/testimonials/daniel-wilson.jpg",
  },
];
