export type Achievement = {
  value: number;
  suffix: string;
  label: string;
};

export const achievements: Achievement[] = [
  { value: 40, suffix: "+", label: "Products & websites shipped" },
  { value: 98, suffix: "", label: "Avg. Lighthouse performance score" },
  { value: 12, suffix: "", label: "Countries served" },
  { value: 4.9, suffix: "/5", label: "Average client rating" },
];
