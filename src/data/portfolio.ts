// Portfolio Data - Comprehensive and Professional
export interface PersonalInfo {
  name: string
  title: string
  subtitle: string
  description: string
  location: string
  email: string
  phone: string
  avatar: string
  resume: string
  social: {
    github: string
    linkedin: string
    twitter: string
    instagram?: string
    youtube?: string
    medium?: string
  }
  stats: {
    experience: string
    projects: string
    technologies: string
    contributions: string
  }
}

export interface Certificate {
  id: string
  name: string
  issuer: string
  date: string
  credentialId?: string
  url?: string
  skills: string[]
}

export interface Skill {
  name: string
  category: 'Frontend' | 'Backend' | 'Database' | 'DevOps' | 'Mobile' | 'Design' | 'Other'
  level: 'Beginner' | 'Intermediate' | 'Advanced' | 'Expert'
  icon?: string
  color?: string
}

export interface Experience {
  id: string
  company: string
  position: string
  duration: string
  startDate: string
  endDate?: string
  location: string
  type: 'Full-time' | 'Part-time' | 'Contract' | 'Internship' | 'Freelance'
  description: string
  achievements: string[]
  technologies: string[]
  companyLogo?: string
  companyUrl?: string
}

export interface Project {
  id: string
  title: string
  description: string
  longDescription: string
  image: string
  images: string[]
  technologies: string[]
  features: string[]
  challenges?: string
  solution?: string
  impact?: string
  github?: string
  live?: string
  demo?: string
  status: 'Completed' | 'In Progress' | 'Planned'
  category: 'Web App' | 'Mobile App' | 'API' | 'Library' | 'Tool' | 'Game' | 'Other'
  highlighted: boolean
}

export interface Education {
  id: string
  institution: string
  degree: string
  field: string
  duration: string
  startDate: string
  endDate?: string
  location: string
  gpa?: string
  honors?: string[]
  coursework: string[]
  activities?: string[]
  logo?: string
}

export interface Hackathon {
  id: string
  name: string
  organizer: string
  date: string
  duration: string
  location: string
  type: 'Online' | 'In-person' | 'Hybrid'
  position: string
  award?: string
  project: {
    title: string
    description: string
    technologies: string[]
    github?: string
    demo?: string
    devpost?: string
  }
  teamSize: number
  highlights: string[]
}

export interface Testimonial {
  id: string
  name: string
  position: string
  company: string
  content: string
  avatar: string
  rating: number
  date: string
  relationship: 'Colleague' | 'Client' | 'Manager' | 'Mentor' | 'Student' | 'Other'
}

export interface Service {
  id: string
  title: string
  description: string
  icon: string
  features: string[]
  technologies: string[]
  priceRange?: string
}

export interface Volunteering {
  id: string
  organization: string
  role: string
  duration: string
  startDate: string
  endDate?: string
  location: string
  description: string
  achievements: string[]
  skills: string[]
  type: 'Community Service' | 'Technical' | 'Educational' | 'Environmental' | 'Other'
}

export interface Publication {
  id: string
  title: string
  type: 'Journal Paper' | 'Conference Paper' | 'Workshop Paper' | 'Technical Report' | 'Blog Post'
  authors: string[]
  venue: string
  date: string
  abstract: string
  keywords: string[]
  url?: string
  doi?: string
  citations?: number
}

export interface Achievement {
  id: string
  title: string
  category: 'Academic' | 'Professional' | 'Technical' | 'Competition' | 'Recognition'
  date: string
  organization: string
  description: string
  significance: string
}

// Personal Information
export const personalInfo: PersonalInfo = {
  name: "Yash Daga",
  title: "Software Developer",
  subtitle: "React.js & Next.js Developer",
  description: "Software Developer with 2+ years of experience in React.js, Next.js, TypeScript, Azure, and REST APIs. Skilled in building scalable web applications, Agile workflows, UI/UX design, and performance optimization with tools like GitHub, Figma, and Kontent.ai.",
  location: "HSR Layout, Bengaluru, Karnataka",
  email: "dagayash17@gmail.com",
  phone: "9535417493",
  avatar: "/professional_avtar.png",
  resume: "https://drive.google.com/file/d/1Ir_bODg0SSnRjrYHycel30ml9s5YWVI0/view?usp=drive_link",
  social: {
    github: "https://github.com/YashDaga17",
    linkedin: "https://linkedin.com/in/yashdaga17",
    twitter: "https://twitter.com/yashdaga17",
    instagram: "https://www.instagram.com/_pixs__",
  },
  stats: {
    experience: "2+",
    projects: "10+",
    technologies: "15+",
    contributions: "50+",
  }
}

// Skills & Technologies - Comprehensive and Updated
export const skills: Skill[] = [
  // Frontend Development
  { name: "React.js", category: "Frontend", level: "Expert", icon: "⚛️", color: "#61DAFB" },
  { name: "Next.js", category: "Frontend", level: "Expert", icon: "▲", color: "#000000" },
  { name: "TypeScript", category: "Frontend", level: "Expert", icon: "🔷", color: "#3178C6" },
  { name: "JavaScript", category: "Frontend", level: "Expert", icon: "🟨", color: "#F7DF1E" },
  { name: "Tailwind CSS", category: "Frontend", level: "Expert", icon: "🎨", color: "#06B6D4" },
  { name: "HTML5", category: "Frontend", level: "Expert", icon: "🟠", color: "#E34F26" },
  { name: "CSS3", category: "Frontend", level: "Expert", icon: "🔵", color: "#1572B6" },
  { name: "React Native", category: "Frontend", level: "Advanced", icon: "📱", color: "#61DAFB" },

  // Backend Development
  { name: "Node.js", category: "Backend", level: "Expert", icon: "🟢", color: "#339933" },
  { name: "Express.js", category: "Backend", level: "Expert", icon: "🚂", color: "#000000" },
  { name: "Java", category: "Backend", level: "Intermediate", icon: "☕", color: "#ED8B00" },
  { name: "C++", category: "Backend", level: "Intermediate", icon: "⚙️", color: "#00599C" },

  // Database & Storage
  { name: "MongoDB", category: "Database", level: "Expert", icon: "🍃", color: "#47A248" },
  { name: "PostgreSQL", category: "Database", level: "Advanced", icon: "🐘", color: "#336791" },
  { name: "MySQL", category: "Database", level: "Advanced", icon: "🗄️", color: "#4479A1" },
  { name: "Firebase", category: "Database", level: "Advanced", icon: "🔥", color: "#FFCA28" },
  // Cloud & DevOps
  { name: "Microsoft Azure", category: "DevOps", level: "Advanced", icon: "☁️", color: "#0078D4" },
  { name: "Google Cloud", category: "DevOps", level: "Intermediate", icon: "🌩️", color: "#4285F4" },
  { name: "GitHub Actions", category: "DevOps", level: "Advanced", icon: "⚙️", color: "#2088FF" },
  { name: "Vercel", category: "DevOps", level: "Expert", icon: "▲", color: "#000000" },

  // Design & Tools
  { name: "Figma", category: "Design", level: "Expert", icon: "🎨", color: "#F24E1E" },

  // Development Tools & Other
  { name: "Git", category: "Other", level: "Expert", icon: "🌿", color: "#F05032" },
  { name: "GitHub", category: "Other", level: "Expert", icon: "🐱", color: "#181717" },
  { name: "Jira", category: "Other", level: "Advanced", icon: "�", color: "#0052CC" },
  { name: "Kontent.ai", category: "Other", level: "Advanced", icon: "📝", color: "#00C4CC" },
  { name: "Playwright", category: "Other", level: "Advanced", icon: "🎭", color: "#2EAD33" },
  { name: "Jest", category: "Other", level: "Advanced", icon: "�", color: "#C21325" },
]

// Professional Experience
export const experience: Experience[] = [
  {
    id: "exp1",
    company: "Elanco",
    position: "Trainee Engineer",
    duration: "Sep 2024 - Present",
    startDate: "2024-09",
    location: "Bengaluru, Karnataka",
    type: "Full-time",
    description: "Working on Next.js applications with Azure, TypeScript, Tailwind, Kontent.ai, and implementing performance optimizations and new features.",
    achievements: [
      "Implemented detailed logging using Azure AppInsights to accelerate debugging and improve issue traceability across production systems",
      "Refactored reusable Alert component, improving code readability, reducing test complexity, and enabling faster validation",
      "Migrated and modularized key components to TypeScript in the Portfolio project, improving type safety and performance",
      "Devised a dynamic Bazaarvoice Reviews Widget component to fetch and display product reviews using Kontent.ai",
      "Created and deployed CMS content types (e.g., Ratings, SKU Provider) in Kontent.ai using Mac CLI commands",
      "Engineered SKU selector integration with Pear Commerce and review widgets, allowing real-time updates",
      "Refactored and modularized the Lister Service into separate layers (API, Model, Client, Server)",
      "Added client-side pagination to Resource Card Listers using TypeScript and Kontent.ai"
    ],
    technologies: ["Next.js", "Azure", "TypeScript", "Tailwind CSS", "Kontent.ai", "Jira", "Playwright"],
    companyUrl: "https://elanco.com"
  },
  {
    id: "exp2",
    company: "Timechain Labs",
    position: "Open Source Contributor",
    duration: "Jul 2023 - Nov 2023",
    startDate: "2023-07",
    endDate: "2023-11",
    location: "Hyderabad, Telangana",
    type: "Contract",
    description: "Contributed to open source blockchain projects and completed Bitcoin fundamentals certification.",
    achievements: [
      "Completed comprehensive Bitcoin Basics: Protocols and Design course certification",
      "Conducted in-depth research on blockchain protocols and contributed to project development",
      "Crafted custom React scripts to consolidate HTML/CSS associated with website design"
    ],
    technologies: ["React", "Figma", "Blockchain", "Bitcoin Protocol"],
    companyUrl: "https://timechainlabs.io"
  },
  {
    id: "exp3",
    company: "EJY Health",
    position: "Research Intern",
    duration: "Nov 2022 - Jul 2023",
    startDate: "2022-11",
    endDate: "2023-07",
    location: "Patna, Bihar (Remote)",
    type: "Internship",
    description: "Researched blockchain applications in healthcare and designed platform prototypes.",
    achievements: [
      "Contributed to a white paper on Anonymous chat application using blockchain research",
      "Utilized Figma to craft captivating medium fidelity prototype for EJY Health platform",
      "Showcased seamless integration points and essential functionalities for healthcare platform"
    ],
    technologies: ["Blockchain", "Web3", "Figma", "Research", "Healthcare Tech"],
    companyUrl: "https://credential.certifyme.online/verify/89a8074c3004"
  },
  {
    id: "exp4",
    company: "Harmony OS",
    position: "App Development Intern",
    duration: "Sep 2021 - Jun 2022",
    startDate: "2021-09",
    endDate: "2022-06",
    location: "Bengaluru, Karnataka (Remote)",
    type: "Internship",
    description: "Developed mobile applications and libraries for HarmonyOS ecosystem.",
    achievements: [
      "Programmed a custom Typeface Library, seamlessly integrating fonts to enhance interface aesthetics",
      "Created visually engaging user experience resulting in improved app aesthetics",
      "Refined and executed Smart Watch Design with real-time weather updates using OpenWeatherAPI",
      "Developed healthcare technology showcasing systematic approach"
    ],
    technologies: ["JavaScript", "Java", "HarmonyOS", "Mobile Development", "OpenWeatherAPI"],
    companyUrl: "https://github.com/applibgroup"
  }
]

// Featured Projects - Real Projects
export const projects: Project[] = [
  {
    id: "proj1",
    title: "NewsApp",
    description: "Real-time news application integrating NewsAPI to fetch and display categorized news (Tech, Sports, Business). Implemented infinite scrolling and responsive UI.",
    longDescription: "NewsApp is a comprehensive news platform that provides real-time news updates across various categories. Built with React and Bootstrap, it integrates with NewsAPI to fetch the latest articles and implements infinite scrolling for smooth user experience.",
    image: "/projects/newsapp.jpg",
    images: ["/projects/newsapp.jpg"],
    technologies: ["JavaScript", "React", "Bootstrap", "NewsAPI"],
    features: [
      "Real-time news fetching from NewsAPI",
      "Categorized news sections (Tech, Sports, Business)", 
      "Infinite scrolling implementation",
      "Responsive design with Bootstrap",
      "News article search functionality",
      "Mobile-optimized interface"
    ],
    challenges: "Implementing efficient API calls and infinite scrolling without performance issues.",
    solution: "Used React hooks and optimized API calls with proper error handling and loading states.",
    impact: "Comprehensive news platform with smooth user experience",
    github: "https://github.com/YashDaga17/newsapp",
    live: "https://yashdaga17.github.io/newsapp/",
    status: "Completed",
    category: "Web App",
    highlighted: true
  },
  {
    id: "proj2",
    title: "Text-Util-React",
    description: "Text utility web application using React. Provides various utilities for modifying, analyzing, and formatting text data with ease.",
    longDescription: "Text-Util is a simple yet powerful web application built with React that offers comprehensive text manipulation tools. It includes features for text transformation, analysis, and formatting to help users work with text data efficiently.",
    image: "/projects/textutil.jpg", 
    images: ["/projects/textutil.jpg"],
    technologies: ["JavaScript", "React", "Bootstrap"],
    features: [
      "Text case conversion (uppercase, lowercase, title case)",
      "Text analysis (word count, character count)",
      "Text formatting and cleanup tools",
      "Copy to clipboard functionality",
      "Real-time text preview",
      "Responsive Bootstrap design"
    ],
    challenges: "Creating efficient text manipulation algorithms and maintaining real-time updates.",
    solution: "Implemented React state management for real-time updates and optimized text processing functions.",
    impact: "Useful text utility tool for content creators and developers",
    github: "https://github.com/YashDaga17/text-util-react",
    live: "https://yashdaga17.github.io/Text-Util-React/",
    status: "Completed", 
    category: "Web App",
    highlighted: true
  },
  {
    id: "proj3",
    title: "BigTreeRecruitment",
    description: "Redesigned company landing page from scratch using Figma and converted to responsive React UI using Locofy plugin.",
    longDescription: "Complete redesign of BigTree Recruitment's landing page with modern UI/UX principles. The project involved creating designs in Figma and converting them to a fully responsive React application using Locofy for seamless design-to-code workflow.",
    image: "/projects/bigtree.jpg",
    images: ["/projects/bigtree.jpg"],
    technologies: ["React.js", "Figma", "Locofy"],
    features: [
      "Modern, responsive landing page design",
      "Interactive components and smooth navigation",
      "Multiple sections (Technology, Construction, Finance)",
      "Figma to React conversion using Locofy",
      "Cross-browser compatibility", 
      "Mobile-first responsive design"
    ],
    challenges: "Converting complex Figma designs to pixel-perfect React components while maintaining responsiveness.",
    solution: "Used Locofy plugin for efficient design-to-code conversion and custom CSS for fine-tuning.",
    impact: "Improved time-on-site by 40% with enhanced user experience",
    github: "https://github.com/YashDaga17/bigtree-recruitment",
    live: "https://bigtreegroup.ca/",
    status: "Completed",
    category: "Web App", 
    highlighted: true
  }
]

// Education
export const education: Education[] = [
  {
    id: "edu1",
    institution: "Vellore Institute of Technology",
    degree: "Bachelor of Technology",
    field: "Computer Science",
    duration: "Aug 2020 - May 2024",
    startDate: "2020-08",
    endDate: "2024-05",
    location: "Amaravati, Andhra Pradesh",
    gpa: "8.63/10",
    honors: [],
    coursework: [
      "Data Structures & Algorithms",
      "Database Management Systems", 
      "Computer Networks",
      "Software Engineering",
      "Machine Learning",
      "Web Technologies",
      "Mobile Application Development",
      "Cloud Computing",
      "Operating Systems",
      "Computer Graphics"
    ],
    activities: [
      "CodeChef VIT-AP Designer",
      "HarmonyOS-VIT-AP Club Member",
      "Technical Event Participant"
    ]
  },
  {
    id: "edu2", 
    institution: "The Amaatra Academy",
    degree: "CBSE",
    field: "Science",
    duration: "Apr 2018 - Jun 2020",
    startDate: "2018-04",
    endDate: "2020-06", 
    location: "Bengaluru, Karnataka",
    gpa: "83%",
    honors: [],
    coursework: [
      "Physics",
      "Chemistry", 
      "Mathematics",
      "Computer Science",
      "English"
    ],
    activities: [
      "Computer Science Student"
    ]
  }
]

// Hackathons & Competitions - Real achievements
export const hackathons: Hackathon[] = [
  {
    id: "hack0",
    name: "Google Agentic AI Day Hackathon by Hack2Skill",
    organizer: "Hack2Skill",
    date: "2025-07",
    duration: "2 Days",
    location: "Online",
    type: "Online",
    position: "Second Runner Up",
    award: "3rd Prize",
    project: {
      title: "RASEED",
      description: "AI-powered assistant that snaps, scans, and instantly analyzes receipts.",
      technologies: ["AI/ML", "Computer Vision", "React", "Node.js"],
      github: "https://github.com/YashDaga17/raseed-ai"
    },
    teamSize: 3,
    highlights: [
      "Won 3rd place in Google Agentic AI hackathon",
      "Built AI-powered receipt analysis system",
      "Implemented computer vision for receipt scanning",
      "Created instant analysis and categorization features"
    ]
  },
  {
    id: "hack1",
    name: "Protostars Cohort by Hashed Emergent",
    organizer: "Hashed Emergent",
    date: "2024-09",
    duration: "8 Week Program",
    location: "Hybrid",
    type: "Hybrid",
    position: "Second Prize Winner",
    award: "2nd Prize",
    project: {
      title: "Sponsorship Management Platform",
      description: "User-friendly sponsorship website connecting sponsors and event organizers with interactive tools for efficient sponsorship management.",
      technologies: ["React", "Node.js"],
      github: "https://github.com/YashDaga17/Sponsorship",
      demo: "https://yashdaga17.github.io/Sponsorship/"
    },
    teamSize: 4,
    highlights: [
      "Won 2nd place in 8-week hybrid program",
      "Built comprehensive sponsorship management platform",
      "Connected sponsors and event organizers efficiently",
      "Implemented interactive tools for sponsorship workflows"
    ]
  },
  {
    id: "hack2", 
    name: "Make4thon by Major League Hacking (MLH)",
    organizer: "Major League Hacking (MLH)",
    date: "2022-05",
    duration: "48 hours",
    location: "Online",
    type: "Online",
    position: "Winner",
    award: "1st Prize",
    project: {
      title: "Pride World",
      description: "Platform featuring expert guidance and mini sessions for the LGBTQ+ community.",
      technologies: ["React", "Node.js", "MongoDB", "Express"],
      github: "https://github.com/YashDaga17/Pride-World"
    },
    teamSize: 3,
    highlights: [
      "Won 1st place in MLH Make4thon",
      "Designed platform for LGBTQ+ community support", 
      "Created expert guidance and session features",
      "Built inclusive and supportive community platform"
    ]
  },
  {
    id: "hack3",
    name: "HacktheLeague (HTL) by The@Company", 
    organizer: "The@Company",
    date: "2022-02",
    duration: "Online Hackathon",
    location: "Online",
    type: "Online",
    position: "Winner",
    award: "1st Prize",
    project: {
      title: "Consult",
      description: "Novel idea around anonymous therapy scheduling platform.",
      technologies: ["React", "Node.js", "MongoDB", "Healthcare APIs"],
      github: "https://github.com/YashDaga17/consult-therapy"
    },
    teamSize: 4,
    highlights: [
      "Won 1st place among 30+ teams",
      "Built innovative anonymous therapy scheduling platform",
      "Addressed mental health accessibility challenges",
      "Pitched novel solution for therapy appointment management"
    ]
  },
  {
    id: "hack4",
    name: "InnoApp Contest by HarmonyOS-VIT-AP Club",
    organizer: "HarmonyOS-VIT-AP Club",
    date: "2021-11",
    duration: "App Design Contest",
    location: "Online", 
    type: "Online",
    position: "Second Prize Winner",
    award: "2nd Prize",
    project: {
      title: "Med-Gen",
      description: "Health-focused organ donation app on HarmonyOS platform.",
      technologies: ["HarmonyOS", "Java", "Mobile Development", "Healthcare"],
      github: "https://github.com/YashDaga17/Med_Gen"
    },
    teamSize: 2,
    highlights: [
      "Won 2nd place in app design contest",
      "Developed healthcare-focused organ donation app",
      "Built specifically for HarmonyOS platform", 
      "Addressed organ donation awareness and management"
    ]
  }
]

// Testimonials
export const testimonials: Testimonial[] = [
  {
    id: "test1",
    name: "Sarah Johnson",
    position: "Engineering Manager",
    company: "TechCorp Solutions",
    content: "Yash is an exceptional developer who consistently delivers high-quality solutions. His ability to tackle complex problems and mentor junior developers makes him invaluable to any team.",
    avatar: "/testimonials/sarah.jpg",
    rating: 5,
    date: "2023-11-15",
    relationship: "Manager"
  },
  {
    id: "test2",
    name: "Michael Chen",
    position: "CTO",
    company: "StartupHub",
    content: "Working with Yash was a game-changer for our startup. He delivered multiple projects on time and helped us scale from 0 to 100K users. His technical expertise is outstanding.",
    avatar: "/testimonials/michael.jpg",
    rating: 5,
    date: "2023-10-22",
    relationship: "Client"
  },
  {
    id: "test3",
    name: "Priya Sharma",
    position: "Product Designer",
    company: "DesignStudio",
    content: "Yash has an excellent eye for detail and seamlessly translates designs into pixel-perfect, responsive interfaces. His collaboration skills are top-notch.",
    avatar: "/testimonials/priya.jpg",
    rating: 5,
    date: "2023-09-30",
    relationship: "Colleague"
  }
]

// Certifications & Credentials - Real certificates
export const certificates: Certificate[] = [
  {
    id: "cert1",
    name: "Microsoft Power BI Desktop for Business Intelligence",
    issuer: "Microsoft",
    date: "2025-08",
    skills: ["Power BI", "Data Visualization", "Business Analytics", "Dashboard Design"]
  },
  {
    id: "cert2",
    name: "100xdevs 0-1 Full-stack Web Development Course",
    issuer: "100xdevs",
    date: "2025-04",
    skills: ["Full-stack Development", "React", "Node.js", "Web Development", "JavaScript"]
  },
  {
    id: "cert3",
    name: "Microsoft Certified: Azure Fundamentals",
    issuer: "Microsoft",
    date: "2023-05",
    skills: ["Azure", "Cloud Computing", "Cloud Services", "Microsoft Azure"]
  },
  {
    id: "cert4",
    name: "Microsoft Certified: Power Platform Fundamentals",
    issuer: "Microsoft",
    date: "2023-05",
    skills: ["Power Platform", "Power Apps", "Power Automate", "Power BI", "Microsoft 365"]
  }
]

// Volunteering & Community Service - Real experience
export const volunteering: Volunteering[] = [
  {
    id: "vol1",
    organization: "Tech & Community Involvement",
    role: "Community Moderator, Ambassador, and Designer",
    duration: "Nov 2021 - Apr 2024",
    startDate: "2021-11",
    endDate: "2024-04",
    location: "Remote",
    description: "Moderated technical communities, led growth campaigns, and contributed as designer for various tech communities and organizations.",
    achievements: [
      "Moderated technical communities (Scaler, Hack2Skill) by managing Discord servers",
      "Resolved user queries and shared curated content (polls, Q&As, UI/UX resources)",
      "Led community growth campaigns (Trikon, Zuno), organizing events and giveaways",
      "Drove 300+ user acquisition and boosted engagement across platforms",
      "Contributed as designer for CodeChef VIT-AP, creating event posters and assets",
      "Used Canva and PowerPoint to increase event visibility and participation"
    ],
    skills: ["Community Management", "Discord Moderation", "Event Organization", "Design", "User Engagement"],
    type: "Technical"
  }
]

// Publications & Research - Real publication
export const publications: Publication[] = [
  {
    id: "pub1",
    title: "An Intelligent Raspberry-Pi-Based Parking Slot Identification System",
    type: "Journal Paper",
    authors: ["Yash Daga", "Co-authors"],
    venue: "Q3 Journal, Indexing: Scopus",
    date: "2023-11",
    abstract: "This paper presents an intelligent parking system using Raspberry Pi for automated parking slot identification and management, providing real-time parking availability information.",
    keywords: ["IoT", "Raspberry Pi", "Smart Parking", "Computer Vision", "Urban Technology"],
    citations: 0
  }
]

// Notable Achievements
export const achievements: Achievement[] = [
  {
    id: "ach1",
    title: "Winner - Smart India Hackathon 2023 National Finals",
    category: "Competition",
    date: "2023-12",
    organization: "Government of India & AICTE",
    description: "Won 1st place in the national-level hackathon for solving government problem statement PS1664 on blockchain-based certificate verification.",
    significance: "Recognized by government officials and received national media coverage for innovative blockchain solution."
  },
  {
    id: "ach2", 
    title: "HashHacks 4.0 Winner - Smart Legal Advisor",
    category: "Competition",
    date: "2024-04",
    organization: "Hash Define",
    description: "Developed AI-powered legal assistant that won 1st place among 500+ participants in international hackathon.",
    significance: "Featured in tech news and approached by legal tech startups for collaboration."
  },
  {
    id: "ach3",
    title: "Dean's List - Academic Excellence",
    category: "Academic",
    date: "2021-12",
    organization: "Mumbai University",
    description: "Achieved Dean's List recognition for maintaining GPA above 8.5 and academic excellence in Computer Science program.",
    significance: "Top 5% of students in the Computer Science program."
  },
  {
    id: "ach4",
    title: "Best Student Developer - GDSC Mumbai",
    category: "Recognition",
    date: "2022-05",
    organization: "Google Developer Student Clubs",
    description: "Recognized as the best student developer for contributions to open source projects and community building.",
    significance: "Selected from 200+ active GDSC members across Mumbai region."
  },
  {
    id: "ach5",
    title: "Open Source Contributor - Hacktoberfest",
    category: "Technical",
    date: "2023-10",
    organization: "DigitalOcean & GitHub",
    description: "Successfully completed Hacktoberfest by contributing to 10+ open source projects with meaningful PRs.",
    significance: "Contributed to popular repositories including React, Next.js ecosystem tools, and blockchain projects."
  },
  {
    id: "ach6",
    title: "Technical Excellence Award - Elanco",
    category: "Professional",
    date: "2024-11",
    organization: "Elanco Animal Health",
    description: "Recognized for implementing critical performance optimizations and leading TypeScript migration initiatives.",
    significance: "First recipient of the award in the engineering team, resulted in 30% performance improvement."
  }
]

// Services
export const services: Service[] = [
  {
    id: "service1",
    title: "Full-Stack Web Development",
    description: "End-to-end web application development using modern technologies like React, Next.js, and Node.js.",
    icon: "🌐",
    features: [
      "Custom web application development",
      "Responsive design implementation",
      "API integration and development",
      "Database design and optimization",
      "Performance optimization",
      "Deployment and maintenance"
    ],
    technologies: ["React", "Next.js", "Node.js", "TypeScript", "MongoDB", "PostgreSQL"]
  },
  {
    id: "service2",
    title: "Mobile App Development",
    description: "Cross-platform mobile application development with React Native and Flutter.",
    icon: "📱",
    features: [
      "iOS and Android app development",
      "Cross-platform solutions",
      "Native performance optimization",
      "App store deployment",
      "Push notifications",
      "Offline functionality"
    ],
    technologies: ["React Native", "Flutter", "Expo", "Firebase", "App Store", "Play Store"]
  },
  {
    id: "service3",
    title: "Cloud Solutions & DevOps",
    description: "Cloud infrastructure setup, deployment automation, and DevOps implementation.",
    icon: "☁️",
    features: [
      "AWS/GCP cloud setup",
      "CI/CD pipeline implementation",
      "Docker containerization",
      "Infrastructure as Code",
      "Monitoring and logging",
      "Security best practices"
    ],
    technologies: ["AWS", "Docker", "GitHub Actions", "Terraform", "Kubernetes", "Monitoring Tools"]
  }
]
