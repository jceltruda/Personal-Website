import type { ResumeData } from "@/lib/types";

export const RESUME_DATA: ResumeData = {
  name: "Joseph Celtruda",
  initials: "JC",
  location: "Troy, NY, USA",
  locationLink: "https://www.google.com/maps/place/Troy,+NY",
  about:
    "M.S. Computer Science @ RPI",
  summary: (
    <>
      I am a Computer Science student at Rensselaer Polytechnic Institute, 
      researching sequential recommender systems and AI optimization. I am 
      interested in software engineering and applied AI, with internship 
      experience in AI engineering, full-stack development, and scalable 
      backend systems.
    </>
  ),
  avatarUrl: "https://avatars.githubusercontent.com/u/126628676?v=4",
  resumeUrl: "/resume.pdf",
  contact: {
    email: "jaceltruda@gmail.com",
    social: [
      {
        name: "GitHub",
        url: "https://github.com/jceltruda",
        icon: "github",
      },
      {
        name: "LinkedIn",
        url: "https://linkedin.com/in/joseph-celtruda/",
        icon: "linkedin",
      },
    ],
  },
  education: [
    {
      school: "Rensselaer Polytechnic Institute",
      degree: "M.S. Computer Science",
      start: "2025",
      end: "(Dec 2026)",
    },
    {
      school: "Rensselaer Polytechnic Institute",
      degree: "B.S. Computer Science",
      gpa: "GPA: 3.57 / 4.0",
      start: "2022",
      end: "2025",
    },
  ],
  work: [
    {
      company: "TE Connectivity",
      link: "https://www.te.com/",
      badges: ["Wintson-Salem, NC"],
      title: "Software Engineer Intern",
      start: "May 2025",
      end: "Aug 2025",
      description: (
        <>
          Full stack engineering inside automotive business unit
        </>
      ),
    },
    {
      company: "P1ston",
      link: "https://p1ston.com/",
      badges: ["Remote"],
      title: "AI Engineer Intern (Part-Time)",
      start: "May 2025",
      end: "Aug 2025",
      description: (
        <>
          Prompt and AI engineering for supply chain document processing
        </>
      ),
    },
    {
      company: "Hudson River Community Credit Union",
      link: "https://www.hrccu.org/",
      badges: ["Corinth, NY"],
      title: "Management Information Systems Intern",
      start: "May 2024",
      end: "Aug 2024",
      description: (
        <>
          Data pipeline automation and geospatial data processing
        </>
      ),
    },
  ],
  skills: [
    "Python",
    "Java",
    "C++",
    "C",
    "JavaScript",
    "HTML/CSS",
    "R",
    "SQL",
    "REST APIs",
    "PostgreSQL",
    "Docker",
    "AWS",
    "Git",
    "Linux",
    "NodeJS",
    "Bootstrap",
    "Django",
    "PyTorch",
    "LangChain",
    "Transformers",
    "NumPy",
    "Pandas",
    "OpenCV",
    "Matplotlib",
    "Dart",
    "Flutter",
    "LaTex",
    "Power BI"
  ],
  projects: [
    {
      title: "Rehab Games",
      techStack: ["JavaScript", "Django", "MediaPipe", "Gunicorn"],
      description:
        "Turns rehab exercises into fun retro games",
      link: {
        label: "View Project",
        href: "https://rehab-games.onrender.com/",
      },
    },
    {
      title: "Lung Cancer Detection Using CNN",
      techStack: ["Python", "PyTorch"],
      description:
        "CNN for lung cancer detection from CT scans",
      link: {
        label: "View Project",
        href: "https://github.com/jceltruda/CNN-for-Lung-Cancer-Classification",
      },
    },
    {
      title: "FinGPT - Transformer Prediction",
      techStack: ["Python", "PyTorch", "Transformers"],
      description:
        "Fine-tuning LLMs for stock market prediction",
      link: {
        label: "View Project",
        href: "https://github.com/jceltruda/FinGPT-TransformerPrediction",
      },
    },
  ],
} as const;
