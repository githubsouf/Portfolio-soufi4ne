import {
  mobile,
  backend,
  creator,
  web,
  novec,
  ensa,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  dotnet,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Full-Stack Developer",
    icon: web,
  },
  {
    title: "React & React Native Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer (ASP.NET, Node.js)",
    icon: backend,
  },
  {
    title: "Web Scraping Specialist",
    icon: creator,
  },
];

const technologies = [
  
  {
    name: "ASP.NET CORE",
    icon: dotnet,
  },
  {
    name: "HTML 5",
    icon: html,
  },
  
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Web Development Intern",
    company_name: "NOVEC Technopolis",
    icon: novec, // Replace with NOVEC logo if available
    iconBg: "#383E56",
    date: "June 2024 - August 2024",
    points: [
      "Developed complex dashboards using ASP.NET and Angular.",
      "Worked on backend integration with SQL Server and applied Agile methodologies.",
      "Collaborated with the engineering team to deploy solutions in a Scrum environment.",
    ],
  },
  {
    title: "Freelance Developer",
    company_name: "Various Clients",
    icon: backend, // Replace with appropriate icon or logo
    iconBg: "#383E56",
    date: "2021 - Present",
    points: [
      "Developed and deployed scalable web applications using Vue.js, Laravel, and PostgreSQL.",
      "Created web-based medical management systems using ASP.NET and Angular.",
      "Implemented data scraping projects using Python, Selenium, and pandas.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Medical Management Dashboard",
    description:
      "Developed an application for medical professionals to manage medications, schedules, and radiology data using ASP.NET Core and Angular.",
    tags: [
      {
        name: "asp.net",
        color: "blue-text-gradient",
      },
      {
        name: "angular",
        color: "red-text-gradient",
      },
      {
        name: "sqlserver",
        color: "green-text-gradient",
      },
    ],
    image: carrent, // Replace with appropriate project image
    source_code_link: "https://github.com/", // Update with project repo link
  },
  {
    name: "Child Activity Management Platform",
    description:
      "A web platform enabling parents to enroll children in activities and make payments using Vue.js, Laravel, and PostgreSQL.",
    tags: [
      {
        name: "vuejs",
        color: "green-text-gradient",
      },
      {
        name: "laravel",
        color: "blue-text-gradient",
      },
      {
        name: "docker",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide, // Replace with appropriate project image
    source_code_link: "https://github.com/", // Update with project repo link
  },
  {
    name: "YouTube Data Scraper & Analyzer",
    description:
      "Scraped and analyzed YouTube channel data using Python, Selenium, and Pandas, providing insights with data visualizations using matplotlib.",
    tags: [
      {
        name: "python",
        color: "yellow-text-gradient",
      },
      {
        name: "selenium",
        color: "blue-text-gradient",
      },
      {
        name: "matplotlib",
        color: "red-text-gradient",
      },
    ],
    image: jobit, // Replace with appropriate project image
    source_code_link: "https://github.com/", // Update with project repo link
  },
];
const studies = [
  {
    title: "Engineering Student, Computer Science",
    institution_name: "National School of Applied Sciences, Tangier",
    icon: ensa, // Replace with the ENSA logo if available
    iconBg: "#383E56",
    date: "2021 - Present",
    points: [
      "Pursuing a degree in Computer Science and Engineering.",
      "Worked on various projects involving software development and system integration.",
    ],
  },
  {
    title: "Baccalaureate, Mathematical Sciences",
    institution_name: "Lycée Moulay Youssef",
    icon: backend, 
    iconBg: "#383E56",
    date: "June 2020",
    points: [
      "Achieved a Baccalaureate with a specialization in Mathematical Sciences.",
      "Developed a strong foundation in mathematics and analytical thinking.",
    ],
  },
];




export { services, technologies, experiences, testimonials, projects, studies };
