export type JobLogo = "dimension" | "alpander" | "xreact";

export type Job = {
  id: number;
  title: string;
  company: string;
  description: string;
  location: string;
  employmentType: string;
  logo: JobLogo;
};