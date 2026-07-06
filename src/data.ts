export interface PortfolioMeta {
  full_name: string;
  headline: string;
  email: string;
  mobile_no: string;
  linkedin_link: string;
  github_link: string;
  bio_description: string;
  city: string;
  profile_photo: string;
  resume_link: string;
  year_of_birth: string;
}

export interface Project {
  project_id: number;
  project_name: string;
  project_description: string;
  project_tech_stack: string;
  github_link: string;
  live_link: string | null;
}

export interface Education {
  edu_id: number;
  institution_name: string;
  degree: string;
  edu_description: string;
  cgpa: string;
  year_of_completion: number;
  duration: string;
}

export interface Certification {
  certification_id: number;
  certificate_name: string;
  issuing_organization: string;
  issued_date: string;
  credential_id: string | null;
  link_of_certificate: string;
}

export interface Achievement {
  achievement_id: number;
  title: string;
  issuer: string;
  achievement_date: string;
  achievement_description: string;
  certificate_link: string;
}

export interface Skill {
  name: string;
  category: string;
  level: string;
  score: number; // out of 100
}

export interface PortfolioData {
  meta: PortfolioMeta;
  projects: Project[];
  education: Education[];
  certifications: Certification[];
  achievements: Achievement[];
  skills: Skill[];
}

export const staticPortfolioData: PortfolioData = {
  meta: {
    full_name: "Kanishka Goyal",
    headline: "Developer | Product Builder | Problem Solver",
    email: "kanishka.goyal_cs.h25@gla.ac.in",
    mobile_no: "7906827233",
    linkedin_link: "https://www.linkedin.com/in/kanishka-goyal-47ba95376/",
    github_link: "https://github.com/kanishka12-tech",
    bio_description: "Python enthusiast exploring technology, development, and product building. Eager to solve real-world problems and build amazing user experiences.",
    city: "Agra",
    profile_photo: "/profile.png",
    resume_link: "https://drive.google.com/file/d/1a20AyPk_tT6m3ZDtiJjWYz6Lr0DulGDX/view?usp=sharing",
    year_of_birth: "2006"
  },
  projects: [
    {
      project_id: 1,
      project_name: "EmotiCam",
      project_description: "EmotiCam is a real-time communication platform that leverages computer vision to detect facial emotions and hand gestures. Built using Python and OpenCV, it enhances digital interactions by enabling users to express emotions and communicate more naturally through visual cues.",
      project_tech_stack: "Python, OpenCV, Flask, NumPy, MediaPipe, HTML, CSS, JavaScript",
      github_link: "https://github.com/kanishka12-tech/TINYPROJECT",
      live_link: "https://emoticam.onrender.com/login"
    },
    {
      project_id: 2,
      project_name: "PyClimaExplorer",
      project_description: "PyClimaExplorer is a Python-based application that provides weather and climate insights by fetching, processing, and visualizing environmental data. It enables users to explore weather conditions through an interactive and user-friendly interface.",
      project_tech_stack: "Python, Streamlit, Pandas, NumPy, Plotly, Weather API",
      github_link: "https://github.com/kanishka12-tech/pyclimateexplorer",
      live_link: null
    }
  ],
  education: [
    {
      edu_id: 1,
      institution_name: "St. George's College",
      degree: "High School (Class 10)",
      edu_description: "Successfully completed Class 10, developing core skills in mathematics, science, and problem-solving.",
      cgpa: "90.2%",
      year_of_completion: 2023,
      duration: "2 Years"
    },
    {
      edu_id: 2,
      institution_name: "St. George's College",
      degree: "Intermediate (Class 12)",
      edu_description: "Built strong analytical and problem-solving skills through the rigorous study of PCM (Physics, Chemistry, Mathematics).",
      cgpa: "83.8%",
      year_of_completion: 2025,
      duration: "2 Years"
    },
    {
      edu_id: 3,
      institution_name: "GLA University",
      degree: "B.Tech (Computer Science with Specializations in AI and Data Analytics)",
      edu_description: "Building a strong foundation in computer science, software programming, artificial intelligence, and emerging analytical technologies.",
      cgpa: "8.37/10",
      year_of_completion: 2029,
      duration: "4 Years"
    }
  ],
  certifications: [
    {
      certification_id: 1,
      certificate_name: "Microsoft Azure Fundamentals",
      issuing_organization: "Certiport",
      issued_date: "2026-05-21",
      credential_id: "hq3A-4TVd",
      link_of_certificate: "https://drive.google.com/file/d/1B57CifS5J5zHvcc4bYGE2MbTSqebEaXq/view?usp=sharing"
    },
    {
      certification_id: 2,
      certificate_name: "Workshop on AI Workflows and Automation",
      issuing_organization: "MAIT, Delhi",
      issued_date: "2025-10-29",
      credential_id: null,
      link_of_certificate: "https://d8it4huxumps7.cloudfront.net/lambda-pdfs/certificate-images/94cfb27e-6404-4a6f-989e-6331c08ded8f.jpg"
    },
    {
      certification_id: 3,
      certificate_name: "ShowHackIPEC",
      issuing_organization: "HackShastra",
      issued_date: "2026-02-02",
      credential_id: null,
      link_of_certificate: "https://d8it4huxumps7.cloudfront.net/lambda-pdfs/certificate-images/0ebe8be4-4b0a-4ab4-a6e8-57f5a52abb74.jpg"
    },
    {
      certification_id: 4,
      certificate_name: "Covolve 4.0 A Pan IIT AI-ML Hackathon",
      issuing_organization: "IIT GUWAHATI",
      issued_date: "2026-02-26",
      credential_id: null,
      link_of_certificate: "https://d8it4huxumps7.cloudfront.net/lambda-pdfs/certificate-images/25a6f0fa-5262-4ac0-bf4b-a7e386ec4c3e.jpg"
    },
    {
      certification_id: 5,
      certificate_name: "Hack It Out",
      issuing_organization: "IIT BHU",
      issued_date: "2026-05-19",
      credential_id: null,
      link_of_certificate: "https://drive.google.com/file/d/1P3cKjMCn4g8vwwvCk95wju8DHYHAspjF/view?usp=sharing"
    }
  ],
  achievements: [
    {
      achievement_id: 1,
      title: "Python Problem Solving",
      issuer: "HackerRank",
      achievement_date: "2025-12-01",
      achievement_description: "Solved fundamental Python challenges on HackerRank to gain mastery over coding logic, data structures, and standard algorithms.",
      certificate_link: "https://www.hackerrank.com/certificates/b803094727eb"
    }
  ],
  skills: [
    { name: "Python", category: "Languages", level: "Advanced", score: 95 },
    { name: "OpenCV", category: "AI & Computer Vision", level: "Intermediate", score: 85 },
    { name: "Flask", category: "Web Development", level: "Intermediate", score: 80 },
    { name: "NumPy", category: "Data Science", level: "Advanced", score: 90 },
    { name: "Pandas", category: "Data Science", level: "Advanced", score: 85 },
    { name: "Streamlit", category: "UI & Presentation", level: "Advanced", score: 90 },
    { name: "MediaPipe", category: "AI & Computer Vision", level: "Intermediate", score: 75 },
    { name: "HTML & CSS", category: "Web Development", level: "Intermediate", score: 80 },
    { name: "JavaScript", category: "Web Development", level: "Intermediate", score: 75 },
    { name: "SQL", category: "Databases", level: "Intermediate", score: 80 },
    { name: "Azure Fundamentals", category: "Cloud Systems", level: "Beginner", score: 70 }
  ]
};
