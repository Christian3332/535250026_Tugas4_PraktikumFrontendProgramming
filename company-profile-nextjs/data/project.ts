export type Project = {
  slug: string;
  name: string;
  title: string;
  category: string;
  description: string;
  color: string;
  shape: string;
  year: string;
  services: string[];
};

export const projects: Project[] = [
  {
    slug: "aurelia-brand-identity",
    name: "Aurelia",
    title: "A new identity for modern living.",
    category: "Brand Identity",
    description:
      "A refined visual identity created for a modern lifestyle brand.",
    color: "project-aurelia",
    shape: "A",
    year: "2026",
    services: ["Brand Strategy", "Visual Identity"],
  },
  {
    slug: "nuvora-website",
    name: "Nuvora",
    title: "Digital experience for the next generation.",
    category: "Web Design",
    description:
      "A contemporary digital experience designed to connect a brand with its audience.",
    color: "project-nuvora",
    shape: "N",
    year: "2026",
    services: ["UI/UX Design", "Web Development"],
  },
];
