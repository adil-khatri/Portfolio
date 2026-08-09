export interface Experience {
  id: string;
  year: string;
  company: string;
  role: string;
  description: string;
  technologies: string[];
}

export const experiences: Experience[] = [
  {
    id: "exp-01",
    year: "06/2025 - 08/2026",
    company: "DAS Innovations UG",
    role: "Software Development Working Student",
    description: "Developed frontend features for ExoPaper, a business SaaS platform. Built React.js and TypeScript interfaces focused on usability and responsive behavior. Integrated frontend modules with backend REST APIs and delivered client-facing WordPress/Divi websites.",
    technologies: ["React.js", "TypeScript", "JavaScript", "HTML", "CSS", "REST APIs", "WordPress"]
  },
  {
    id: "exp-02",
    year: "04/2024 - 06/2024",
    company: "Astraea Solutions Private Limited",
    role: "Software Development Intern",
    description: "Developed AstraMiner, AstraPOS, and AstraHack, blockchain-inspired educational platforms to explain Web3 concepts using interactive Web2 applications. Built frontend features for miner/student interactions and improved product usability via Firebase-backed data handling.",
    technologies: ["React.js", "Firebase", "Web3 concepts"]
  },
  {
    id: "exp-03",
    year: "09/2023 - 12/2023",
    company: "Byteiva Tech Solutions Pvt. Ltd.",
    role: "Software Developer",
    description: "Built a full-stack e-commerce platform from scratch covering product, user, checkout, and transaction workflows. Implemented Stripe payment gateway integration by connecting frontend checkout flows with backend payment logic.",
    technologies: ["React.js", "Node.js", "MongoDB", "Stripe"]
  },
  {
    id: "exp-04",
    year: "05/2023 - 08/2023",
    company: "Network People Services Technologies Ltd.",
    role: "Full Stack Web Developer",
    description: "Collaborated with cross-functional teams to translate requirements into efficient, user-friendly interfaces. Developed and maintained feature-rich web applications using TypeScript, AngularJS, NestJS, and Neo4j. Built secure role-based login systems with intricate schema designs and optimized backend logic.",
    technologies: ["TypeScript", "AngularJS", "NestJS", "Neo4j"]
  }
];
