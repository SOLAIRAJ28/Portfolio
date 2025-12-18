// Portfolio data - Update with your personal information

export const personalInfo = {
  name: "Solairaj R",
  role: "Web Developer",
  tagline: "Computer Science fresher with a strong passion for coding and software development. Interested in creating meaningful projects and contributing effectively in a professional environment.",
  email: "solairaj495@gmail.com",
  phone: "+91 8056453211",
  location: "Theni, Tamil Nadu",
  avatar: "/images/avatar.jpg", // Your photo will be placed here
};

export const socialLinks = {
  github: "https://github.com/SOLAIRAJ28",
  linkedin: "https://linkedin.com/in/solairaj-r-254529247",
  leetcode: "https://leetcode.com/u/SOLAIRAJ28",
  email: "mailto:solairaj495@gmail.com",
};

export const about = {
  description: `Computer Science fresher with a strong passion for coding and software development. Experienced in UI/UX Design using Figma and completed Java Foundation course from Oracle. Interested in creating meaningful projects and contributing effectively in a professional environment.`,
  
  education: [
    {
      degree: "Bachelor of Computer Science",
      institution: "Kongu Engineering College | Perundurai",
      year: "2023 - 2027",
      description: "CGPA: 7.72"
    },
    {
      degree: "Higher Secondary Certificate",
      institution: "Velavakunan Maha Matric Hr Sec School | Theni",
      year: "2022 - 2023",
      description: "Percentage: 84.83%"
    }
  ],
  
  interests: [
    "MERN Stack Development",
    "UI/UX Design (Figma)",
    "Full Stack Web Development",
    "Database Management",
    "Java Programming"
  ],
  
  softSkills: [
    "Teamwork",
    "Time Management",
    "Creativity",
    "Responsibility"
  ]
};

export const skills = {
  frontend: [
    { name: "HTML", level: 90 },
    { name: "CSS", level: 90 },
    { name: "JavaScript", level: 85 },
    { name: "React.js", level: 85 },
    { name: "Tailwind CSS", level: 90 },
    { name: "Bootstrap", level: 80 },
  ],
  backend: [
    { name: "Node.js", level: 85 },
    { name: "Express.js", level: 80 },
    { name: "MySQL", level: 75 },
    { name: "MongoDB", level: 85 },
    { name: "REST APIs", level: 80 },
    { name: "Java", level: 75 },
  ],
  tools: [
    { name: "Git", level: 85 },
    { name: "GitHub", level: 85 },
    { name: "VS Code", level: 95 },
    { name: "Postman", level: 80 },
    { name: "Figma", level: 85 },
  ]
};

export const projects = [
  {
    id: 1,
    title: "Weather App",
    description: "Built a weather app with real-time weather and interactive map search. Added trip planning features with dates, hotels, favourites, and history. Developed secure dual-login for tourists and operators. Enhanced user experience by integrating weather planning and reviews.",
    image: "/images/weather-app.svg",
    technologies: ["React", "Tailwind CSS", "Node.js", "MongoDB", "Express", "OpenStreetMap API", "Open-Meteo API"],
    github: "https://github.com/SOLAIRAJ28/weather-app",
    demo: "#",
    featured: true,
  },
  {
    id: 2,
    title: "Inventory Management System",
    description: "Built a full-stack Inventory Management System with secure authentication and role-based access. Implemented stock tracking, notifications, sales analytics, and reporting features for better decision-making.",
    image: "/images/inventory.svg",
    technologies: ["React.js", "Node.js", "MySQL", "Express", "JWT", "REST API"],
    github: "https://github.com/SOLAIRAJ28/inventory-management",
    demo: "#",
    featured: true,
  },
  {
    id: 3,
    title: "Student Performance Analysis Tool",
    description: "Comprehensive student performance tracking and analysis system. Features include grade tracking, performance metrics, attendance monitoring, and data visualization with detailed reports for educators.",
    image: "/images/student-performance.svg",
    technologies: ["HTML", "CSS", "Python", "SQL", "Flask", "Data Analysis"],
    github: "https://github.com/SOLAIRAJ28/student-performance-analysis-tool",
    demo: "#",
    featured: true,
    stars: 1,
  },
  {
    id: 4,
    title: "Netflix Clone",
    description: "Full-featured Netflix clone with modern UI/UX. Implements video streaming interface, user authentication, content browsing, and responsive design using TypeScript and modern web technologies.",
    image: "/images/netflix.svg",
    technologies: ["TypeScript", "React", "CSS", "API Integration"],
    github: "https://github.com/SOLAIRAJ28/Netflix_clone",
    demo: "#",
    featured: true,
  },
  {
    id: 5,
    title: "Music App",
    description: "Interactive music streaming application with playlist management, search functionality, and audio controls. Built with modern web technologies for seamless music playback experience.",
    image: "/images/music-app.svg",
    technologies: ["React", "JavaScript", "HTML", "CSS", "Web Audio API"],
    github: "https://github.com/SOLAIRAJ28/music-app",
    demo: "#",
    featured: true,
  },
  {
    id: 6,
    title: "House Price Prediction",
    description: "Machine learning-based house price prediction system. Analyzes various property features to provide accurate price estimates using HTML interface and predictive algorithms.",
    image: "/images/house-price.svg",
    technologies: ["HTML", "Python", "Machine Learning", "Data Science"],
    github: "https://github.com/SOLAIRAJ28/house_price",
    demo: "#",
    featured: true,
  },
  {
    id: 7,
    title: "Password Manager",
    description: "Secure password management application with encryption. Features include password generation, secure storage, easy retrieval, and organized password categorization with modern security practices.",
    image: "/images/project1.svg",
    technologies: ["JavaScript", "Node.js", "Encryption", "Security"],
    github: "https://github.com/SOLAIRAJ28/Password_Manager",
    demo: "#",
    featured: false,
    stars: 1,
  },
];

export const experience = [
  {
    id: 1,
    title: "Bachelor of Computer Science",
    company: "Kongu Engineering College",
    location: "Perundurai, Tamil Nadu",
    period: "2023 - 2027",
    type: "education",
    description: [
      "CGPA: 7.72",
      "Focused on Web Development and MERN Stack",
      "Building full-stack applications with modern technologies"
    ]
  },
  {
    id: 2,
    title: "Higher Secondary Certificate",
    company: "Velavakunan Maha Matric Hr Sec School",
    location: "Theni, Tamil Nadu",
    period: "2022 - 2023",
    type: "education",
    description: [
      "Percentage: 84.83%",
      "Strong foundation in Mathematics and Computer Science",
      "Developed interest in programming and web technologies"
    ]
  },
];

export const achievements = [
  {
    title: "MongoDB Associate Developer",
    description: "MongoDB Global Certification",
    year: "2024"
  },
  {
    title: "APEX Cloud Developer Professional",
    description: "Oracle Global Certification",
    year: "2024"
  },
  {
    title: "Java Foundation Course",
    description: "Oracle Certified Java Foundation",
    year: "2024"
  },
];
