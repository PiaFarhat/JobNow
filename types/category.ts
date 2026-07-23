export type CategoryIcon =
  | "design"
  | "finance"
  | "bank"
  | "product"
  | "support"
  | "marketing";

export type JobCategory = {
  id: number;
  title: string;
  vacancies: number;
  icon: CategoryIcon;
};