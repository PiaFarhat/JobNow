import type { Job } from "@/types/job";

const jobDescription =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed quis lacus non orci euismod vestibulum vitae ut ex. Quisque ut arcu at lectus tristique auctor sit amet at turpis.";

export const recentlyAddedJobs: Job[] = [
  {
    id: 1,
    title: "UI/UX Designer",
    company: "Dimension Studio",
    description: jobDescription,
    location: "San Fransisco, CA",
    employmentType: "Full Time",
    logo: "dimension",
  },
  {
    id: 2,
    title: "Full Stack Developer",
    company: "Alpander",
    description: jobDescription,
    location: "San Fransisco, CA",
    employmentType: "Full Time",
    logo: "alpander",
  },
  {
    id: 3,
    title: "Product Designer",
    company: "XReact Tech",
    description: jobDescription,
    location: "San Fransisco, CA",
    employmentType: "Full Time",
    logo: "xreact",
  },
];