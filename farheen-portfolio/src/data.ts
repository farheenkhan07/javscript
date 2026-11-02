export type Role = {
  id: string;
  org: string;
  context: string;
  title: string;
  dates: string;
  current?: boolean;
  summary: string;
  points: string[];
  skills: string[];
};

export type SkillGroup = {
  id: string;
  label: string;
  items: string[];
};

export const profile = {
  name: "Farheen Khan",
  title: "Software Engineer",
  years: "About 8 years",
  email: "farheenk3232@gmail.com",
  phone: "+1 (289) 688-9098",
  phoneHref: "tel:+12896889098",
  location: "Toronto",
  linkedin: "https://www.linkedin.com/in/farheenkhan78666",
  github: "https://github.com/farheenkhan07",
  snapshot: `Farheen Khan
Software Engineer
About 8 years of experience with React, TypeScript, JavaScript, and PHP.
Toronto
farheenk3232@gmail.com
+1 (289) 688-9098
https://www.linkedin.com/in/farheenkhan78666

Now: Software Engineer, client Intuit (December 2025–Present)
Previous: HitchLine; IBM, client Arla Foods; FCS Infotech
Education: Bachelor's in Information Technology, Government Women Engineering College Ajmer (2015–2019)`,
};

export const roles: Role[] = [
  {
    id: "intuit",
    org: "Intuit",
    context: "Client",
    title: "Software Engineer",
    dates: "December 2025 – Present",
    current: true,
    summary:
      "Full-stack product work across React and PHP, from reusable interface components to the APIs that feed them.",
    points: [
      "Develop and maintain scalable full-stack applications using React and PHP.",
      "Build reusable UI components and backend services so features can ship end to end.",
      "Design RESTful APIs, including data processing, validation, and frontend integration.",
      "Manage state and the data flow between client and server for reliability and speed.",
      "Collaborate with product, design, backend, and QA on high-impact features.",
      "Improve performance by tightening frontend rendering and backend response times.",
      "Write unit and integration tests with Jest and backend testing.",
      "Review code across the stack and join system design discussions.",
      "Debug production issues and take part in Agile sprint planning.",
    ],
    skills: [
      "React",
      "Redux Toolkit",
      "PHP",
      "Node.js",
      "Express.js",
      "Azure",
      "Material UI",
      "Jest",
      "React Testing Library",
      "Cypress",
      "Figma",
    ],
  },
  {
    id: "hitchline",
    org: "HitchLine",
    context: "Client",
    title: "Software Engineer",
    dates: "December 2024 – December 2025",
    summary:
      "Led front-end development in React and TypeScript, from Figma through accessible UI, data fetching, and release quality.",
    points: [
      "Led development of scalable front-end applications with React, TypeScript, and JavaScript.",
      "Translated Figma designs into responsive interfaces with WCAG accessibility in mind.",
      "Integrated REST and GraphQL APIs with Redux Toolkit and TanStack Query.",
      "Improved Core Web Vitals through code-splitting, lazy loading, and smaller bundles.",
      "Built and maintained tests with Jest, React Testing Library, and Cypress.",
      "Reviewed code, mentored junior developers, and guided technical quality.",
      "Worked with product, UX, QA, and backend through release cycles.",
    ],
    skills: [
      "React",
      "TypeScript",
      "GraphQL",
      "Redux Toolkit",
      "TanStack Query",
      "Node.js",
      "Express.js",
      "Docker",
      "Kubernetes",
      "Azure",
      "Material UI",
      "Jest",
      "Cypress",
      "Figma",
    ],
  },
  {
    id: "ibm",
    org: "IBM",
    context: "Company · India",
    title: "Web Developer",
    dates: "August 2021 – December 2024",
    summary:
      "Front-end development for Arla Foods in Denmark, with responsive interfaces, API integration, and CI/CD delivery.",
    points: [
      "Developed and maintained responsive applications with HTML5, CSS3, JavaScript (ES6+), and Material UI.",
      "Worked with designers, backend developers, and product managers on web solutions.",
      "Implemented RESTful APIs and third-party services.",
      "Led front-end development for key projects, with attention to performance and experience.",
      "Used Git and CI/CD pipelines for version control and deployment.",
      "Partnered with QA to debug issues before release.",
      "Joined sprint planning, stand-ups, and retrospectives.",
      "Built interactive UI components tailored to client requirements.",
    ],
    skills: [
      "React",
      "TypeScript",
      "Next.js",
      "Angular",
      "Vue",
      "Redux",
      "Node.js",
      "Express.js",
      "Material UI",
      "JavaScript",
    ],
  },
  {
    id: "fcs",
    org: "FCS Infotech",
    context: "Company · India",
    title: "Full Stack Engineer",
    dates: "May 2018 – July 2021",
    summary:
      "Full-stack delivery with React on the front end and PHP, MySQL, and MVC on the server.",
    points: [
      "Developed dynamic front-end applications with React, HTML5, CSS3, and JavaScript (ES6+).",
      "Built and enhanced web applications with PHP, MySQL, and MVC frameworks.",
      "Integrated RESTful APIs with backend developers.",
      "Implemented responsive layouts with CSS Grid, Flexbox, and media queries.",
      "Wrote unit tests with Jest and React Testing Library.",
      "Improved page load speed and overall application efficiency.",
      "Used Git and CI/CD pipelines for deployments.",
      "Mentored junior developers and helped debug issues.",
    ],
    skills: [
      "React",
      "PHP",
      "MySQL",
      "SQL",
      "REST",
      "Bootstrap",
      "Jest",
      "React Testing Library",
      "Git",
    ],
  },
];

export const skillGroups: SkillGroup[] = [
  {
    id: "interface",
    label: "Interface",
    items: [
      "React.js",
      "TypeScript",
      "JavaScript (ES6+)",
      "Next.js",
      "Vue",
      "Angular",
      "Redux Toolkit",
      "Redux",
      "Material UI",
      "HTML5",
      "CSS3",
      "SASS",
      "LESS",
      "Bootstrap",
      "CSS Grid",
      "Flexbox",
    ],
  },
  {
    id: "platform",
    label: "Platform",
    items: [
      "PHP",
      "Node.js",
      "Express.js",
      "SQL",
      "MySQL",
      "REST",
      "GraphQL",
      "Axios",
      "Fetch",
      "TanStack Query",
    ],
  },
  {
    id: "delivery",
    label: "Delivery",
    items: [
      "Jest",
      "React Testing Library",
      "Cypress",
      "Enzyme",
      "Git",
      "GitHub",
      "CI/CD",
      "Docker",
      "Kubernetes",
      "Azure",
    ],
  },
  {
    id: "practice",
    label: "Practice",
    items: ["Figma", "Drupal", "WCAG 2.0", "SEO", "Agile"],
  },
];

export const strengths = [
  {
    title: "Interfaces that hold up",
    copy: "Responsive React applications with TypeScript, reusable components, and layouts built with Grid, Flexbox, and Material UI.",
  },
  {
    title: "APIs in the same conversation",
    copy: "REST and GraphQL integration, plus PHP and Node services when the work runs through the full stack.",
  },
  {
    title: "Speed and access",
    copy: "Code-splitting, rendering performance, SEO, and WCAG 2.0 so the product stays fast and usable.",
  },
  {
    title: "A release that can be trusted",
    copy: "Jest, React Testing Library, Cypress, code review, and CI/CD from sprint planning through production fixes.",
  },
];
