import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  next,
  html,
  css,
  reactjs,
  wp,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  adobe,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
  fm,
  ps,
  on,
  prisma,
  orn,
  ana,
  krypt,
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
    title: "Full Stack Web Developer",
    icon: web,
  },
  {
    title: "MERN/Nextjs",
    icon: mobile,
  },
  {
    title: "Wordpress Developer",
    icon: backend,
  },
  {
    title: "Graphic Designer",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML",
    icon: html,
  },
  {
    name: "CSS",
    icon: css,
  },

  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "nextjs",
    icon: next,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "wordpress",
    icon: wp,
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
    name: "prisma",
    icon: prisma,
  },
  {
    name: "Three JS",
    icon: threejs,
  },

  {
    name: "fm",
    icon: fm,
  },

  {
    name: "figma",
    icon: figma,
  },
];

const experiences = [
  {
    title: "Web Developer Internee",
    company_name: "Fillinx Solutions",
    icon: starbucks,
    iconBg: "#ffffff",
    date: "July 2021 - September 2021",
    points: [
      "Developed and deployed a diverse range of websites for international clients, specializing in e-commerce, business, and blog websites on various frameworks, including the WordPress platform. ",

      "Leveraged expertise in Elementor Pro and other premium plugins to create visually stunning and highly functional websites.",
    ],
  },
  {
    title: "Web Developer",
    company_name: "PrismaGrid",
    icon: tesla,
    iconBg: "#ffffff",
    date: "March 2023 - June 2023",
    points: [
      "Created modern, fully-functional two Prisma's websites, integrating contemporary design elements for an enhanced user experience.",
      "Successfully handled seamless transition of domain and server infrastructure, ensuring uninterrupted online presence.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Designed all website graphics, establishing a distinct visual identity aligned with the company's brand.",
    ],
  },

  {
    title: "Web Developer Team Member",
    company_name: "Nust Orientation'23",
    icon: on,
    iconBg: "#ffffff",
    date: "july 2023 - September 2023",
    points: [
      "As a team member for NUST Orientation, I co-developed a captivating website using Next.js.",
      "The site was enriched with dynamic animations using Framer Motion, adding a layer of interactivity to enhance the user experience.",
      "The sleek design was achieved through the implementation of Tailwind CSS, showcasing my full-stack skills and collaborative approach to delivering an impactful digital presence for the university event.",
    ],
  },

  {
    title: "Web Developer",
    company_name: "Personal Brand",
    icon: shopify,
    iconBg: "#ffffff",
    date: "july 2022 - currently",
    points: [
      "Transforming visions into remarkable online experiences. Crafted captivating websites infused with striking graphics and visuals.",
      "Delivered tailored solutions that fused aesthetics and functionality, exceeding client expectations.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Uzair proved me wrong.",
    name: "Rehan Ijaz",
    designation: "IT Manager",
    company: "Invicta Counseling",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Uzair does.",
    name: "Muiz Tariq",
    designation: "Owner",
    company: "Axesell",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "Uzair's dedication to his clients' success sets him apart in the world of web development. Exceptional!",
    name: "Umair Shafi",
    designation: "Co Founder",
    company: "PrismaGrid",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Business Website",
    description:
      "Cutting-edge business website crafted with React and Tailwind CSS, featuring a sleek, modern design with an elegant dark theme.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },

      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link:
      "https://github.com/uzair-shafi/Dark-Themed-React-Business-Website.git",
  },
  {
    name: "Metaverse",
    description:
      "Next.js powered website showcasing a modern aesthetic with captivating animations.",
    tags: [
      {
        name: "Nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "Tailwind",
        color: "green-text-gradient",
      },
      {
        name: "Framer Motion",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link:
      "https://github.com/uzair-shafi/NEXTJS-Metaverse-page.git",
  },

  {
    name: "Krypt",
    description:
      "It is a modern web3.0 application where a user can send digital currencies to anyone around the world.",
    tags: [
      {
        name: "React",
        color: "blue-text-gradient",
      },
      {
        name: "ether",
        color: "green-text-gradient",
      },
      {
        name: "smart contract",
        color: "pink-text-gradient",
      },
    ],
    image: krypt,
    source_code_link: "https://github.com/uzair-shafi/web3.0-Application.git",
  },
  {
    name: "Blog Website",
    description:
      "Dynamic blog website with dual light/dark mode, integrated Google authentication, user registration for an enriched user experience.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "next-auth",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link:
      "https://github.com/uzair-shafi/NEXTJS-Blog-Website-CRUD.git",
  },

  {
    name: "Nust Orientation Website",
    description:
      "Crafted a website using Next.js and Framer Motion resulting in a visually captivating platform for the event.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "Framer Motion",
        color: "green-text-gradient",
      },
      {
        name: "Tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: orn,
    source_code_link: "https://github.com/uzair-shafi/Orientation-Nust.git",
  },

  {
    name: "Ana Blogs",
    description:
      "A complete blog website with Light/Dark Mode, Google Sign In, Text Editor, categories based pages, comments functionality. ",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "Prisma",
        color: "green-text-gradient",
      },
      {
        name: "Mongo",
        color: "pink-text-gradient",
      },
    ],
    image: ana,
    source_code_link:
      "https://github.com/uzair-shafi/Next-js-full-stack-blog-website-Prisma.git",
  },
];

export { services, technologies, experiences, testimonials, projects };
