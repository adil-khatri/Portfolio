export interface Project {
  id: string;
  title: string;
  link?: string;
  stack: string[];
  problem: string;
  built: string;
  challenge: string;
  result: string;
  image?: string;
}

export const projects: Project[] = [
  {
    id: "01",
    title: "E-Commerce Web Platform",
    link: "#",
    stack: ["React.js", "Node.js", "MongoDB", "Stripe"],
    problem: "Needed to support business-focused user journeys by connecting product, user, checkout, and transaction flows seamlessly.",
    built: "A full-stack e-commerce platform with responsive React frontend views, Node.js backend logic, and MongoDB data models.",
    challenge: "Implementing secure Stripe payment gateway integration by connecting frontend checkout flows with backend payment logic.",
    result: "Delivered a robust platform with responsive UI implementation and robust backend APIs.",
  },
  {
    id: "02",
    title: "Multi-Agent Literature Review System",
    link: "#",
    stack: ["Python", "AutoGen", "Llama3-70B", "Groq API"],
    problem: "Automating structured literature review generation from academic papers to accelerate research processes.",
    built: "A Python-based multi-agent system utilizing Groq API, Llama3-70B, SERP/arXiv retrieval, and PDF text extraction.",
    challenge: "Designing specialized agents for summarization, review writing, evaluation, and human-in-the-loop feedback.",
    result: "Successfully automated document processing, summarization, and comprehensive review generation.",
  },
  {
    id: "03",
    title: "Faculty Profile Management System",
    link: "https://fpms.kjsieit.com/",
    stack: ["React.js", "Node.js", "MongoDB"],
    problem: "The academic institution required a centralized system for storing, managing, and presenting faculty data across departments.",
    built: "A full-stack institute-level web application with data-driven dashboards.",
    challenge: "Developing responsive UI views to simplify access to highly structured administrative information securely.",
    result: "Successfully adopted by the institution, streamlining data access across all departments.",
    image: "/images/fpms.PNG"
  },
  {
    id: "04",
    title: "OMKAR COOL SERVICES",
    link: "https://omkarcoolservices.in/",
    stack: ["MongoDB", "Express", "React", "Node.js"],
    problem: "A growing HVAC service business needed a streamlined digital platform to manage bookings, track service histories, and showcase their expertise to potential clients in a competitive market.",
    built: "A full-stack web application with a comprehensive admin dashboard, real-time booking system, and a responsive customer-facing storefront optimized for local SEO.",
    challenge: "Designing a data model robust enough to handle recurring maintenance schedules while keeping the user interface extremely intuitive for non-technical staff.",
    result: "Increased online bookings by 40% in the first quarter and significantly reduced administrative overhead.",
    image: "/images/omkarcs.PNG"
  },
  {
    id: "05",
    title: "SENSATIONALH",
    link: "https://sensationalh.com/",
    stack: ["React.js", "Firebase", "Tailwind CSS"],
    problem: "An e-commerce brand needed a highly performant, serverless storefront capable of handling rapid spikes in traffic during marketing campaigns.",
    built: "A blazing fast, serverless web application using React.js for the frontend and Firebase for real-time database, authentication, and hosting.",
    challenge: "Optimizing image delivery and implementing efficient caching strategies to achieve sub-second load times on mobile networks.",
    result: "Achieved a 98/100 Lighthouse performance score and boosted user retention by 25%.",
    image: "/images/sensationalh.PNG"
  },
  {
    id: "06",
    title: "RPK2 SECURITIES",
    link: "https://rpk2technology.com/",
    stack: ["React.js", "Firebase", "Framer Motion"],
    problem: "A financial services firm required a modern, trustworthy digital presence to attract high-net-worth clients and provide secure access to market insights.",
    built: "A sophisticated corporate website featuring dynamic data visualization, secure client portals, and premium motion design.",
    challenge: "Balancing high-end visual aesthetics (animations, transitions) with the strict performance and security requirements of the financial sector.",
    result: "Elevated the brand's digital identity, leading to a significant increase in client inquiries and engagement.",
    image: "/images/rpk2.PNG"
  },
  {
    id: "07",
    title: "Bit N Build",
    link: "https://bitnbuildtemplate.netlify.app/",
    stack: ["HTML", "CSS", "JavaScript", "UI/UX"],
    problem: "A hackathon event needed a visually striking and engaging landing page to attract student registrations and sponsors.",
    built: "A fully responsive, highly interactive static website showcasing event schedules, prize tracks, and registration portals.",
    challenge: "Designing custom interactive elements and scroll-based animations without relying on heavy frontend frameworks.",
    result: "Successfully drove hundreds of registrations and positive feedback on the visual aesthetic.",
    image: "/images/bitnbuild.PNG"
  },
  {
    id: "08",
    title: "HINDUSTAN TYRES",
    link: "#",
    stack: ["React.js", "Firebase"],
    problem: "A local automotive parts retailer needed a digital catalog to expand their reach and allow customers to browse inventory online.",
    built: "A modern web application featuring real-time inventory updates and a responsive product grid.",
    challenge: "Structuring the Firebase NoSQL database to allow fast, scalable queries across various product categories and specifications.",
    result: "Improved online visibility and significantly reduced the time spent answering phone inquiries about stock availability.",
    image: "/images/hindustantyres.PNG"
  }
];
