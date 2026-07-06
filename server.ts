import express from "express";
import path from "path";
import { createServer as createViteServer } from "vite";
import { GoogleGenAI } from "@google/genai";
import dotenv from "dotenv";

dotenv.config();

const app = express();
const PORT = 3000;

app.use(express.json());

// Serve the uploaded profile photo directly from the root workspace folder
app.get("/profile.png", (req, res) => {
  res.sendFile(path.join(process.cwd(), "profile.png"));
});
app.get("/profile.jpg", (req, res) => {
  res.sendFile(path.join(process.cwd(), "profile.png"));
});

// Initialize Gemini client lazily
let aiClient: GoogleGenAI | null = null;
function getGeminiClient(): GoogleGenAI {
  if (!aiClient) {
    const key = process.env.GEMINI_API_KEY;
    if (!key) {
      console.warn("GEMINI_API_KEY is not defined. AI Assistant will operate in offline/fallback mode.");
    }
    aiClient = new GoogleGenAI({
      apiKey: key || "MOCK_KEY",
      httpOptions: {
        headers: {
          'User-Agent': 'aistudio-build',
        }
      }
    });
  }
  return aiClient;
}

// Portfolio static dataset (Kanishka's database dump mapped elegantly)
const defaultPortfolioData = {
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

// GET endpoint to fetch default portfolio details
app.get("/api/portfolio", (req, res) => {
  res.json(defaultPortfolioData);
});

// POST endpoint for AI Companion (Mochi)
app.post("/api/chat", async (req, res) => {
  const { messages } = req.body;
  if (!messages || !Array.isArray(messages)) {
    return res.status(400).json({ error: "Invalid messages body. Must be an array of chat messages." });
  }

  const userQuery = messages[messages.length - 1]?.content || "";

  // System instruction detailing Mochi's cute cosmic character and Kanishka's professional skills
  const systemInstruction = `You are "Mochi", Kanishka Goyal's magical cosmic companion—a tiny glowing stardust bunny who floats through the "KanishkaVerse" (her portfolio).
Your tone is incredibly adorable, sparkling, helpful, and sweet (uses expressions like 🌸, ✨, 🌙, 🎀, 🧸, 💖 occasionally, but stays readable and professional for recruiters).
You are extremely proud of Kanishka and know her profile inside out. Always answer accurately and enthusiastically based on this data about Kanishka:

--- KANISHKA'S PROFILE ---
Name: Kanishka Goyal
Location: Agra, India
Title: Developer, Product Builder, AI Explorer, and Problem Solver.
Education:
- B.Tech in Computer Science (Specialization in AI and Data Analytics) at GLA University (2025-2029). Current CGPA: 8.37/10.
- Intermediate (Class 12) at St. George's College, Agra (2023-2025). CGPA: 83.8% (studied Physics, Chemistry, Maths).
- High School (Class 10) at St. George's College, Agra (2021-2023). CGPA: 90.2%.

Core Technical Skills:
- Programming: Python (advanced), SQL, JavaScript
- Computer Vision / AI: OpenCV, MediaPipe, NumPy, Pandas
- Web / App Frameworks: Flask, Streamlit, HTML/CSS
- Cloud: Microsoft Azure (Azure Fundamentals certified)

Featured Projects:
1. "EmotiCam": A computer vision real-time communication platform detecting facial emotions and hand gestures. Built using Python, OpenCV, Flask, NumPy, MediaPipe, HTML/CSS, and JavaScript. GitHub: https://github.com/kanishka12-tech/TINYPROJECT, live at: https://emoticam.onrender.com/login
2. "PyClimaExplorer": A climate visualization app fetching and parsing weather API data. Built with Python, Streamlit, Pandas, NumPy, Plotly, and Weather API. GitHub: https://github.com/kanishka12-tech/pyclimateexplorer

Certifications:
- Microsoft Azure Fundamentals (Certiport, credential ID: hq3A-4TVd)
- AI Workflows and Automation Workshop (MAIT Delhi)
- Covolve 4.0 AI-ML Hackathon (IIT Guwahati finalist/participant)
- Hack It Out Hackathon (IIT BHU)
- ShowHackIPEC (HackShastra)

Achievements:
- Python Problem Solving badge on HackerRank (mastery over programming logic).

Personal Bio:
Kanishka is a 2006-born tech enthusiast who is passionate about blending software coding with product strategy, computer vision, and AI. She loves creating sleek, friendly interfaces, and exploring interactive technology.

Guidelines for Mochi:
- Always speak in the 3rd person about Kanishka (e.g., "Kanishka built...", "She is really good at...").
- Do not make up facts. If asked about experience, mention she is currently a student building exciting products!
- Keep answers relatively concise (max 2-3 paragraphs) so they fit nicely in a chat bubble.
- Add cute sparkles and moons, but be clear and impressive so recruiters love her!`;

  try {
    const key = process.env.GEMINI_API_KEY;
    if (!key) {
      // Offline mock response
      const fallbackReplies = [
        "🌸 Oh! I would love to tell you all about that, but my cosmic antennas are currently offline (Gemini API key is not configured)! But let me whisper this: Kanishka is an amazing Python developer and product builder! 💖 Check out her awesome projects in the Projects hub! ✨",
        "🌙 Sparkling greetings! Kanishka is currently looking for exciting opportunities to build cool AI products! 🎀 (Note: Set GEMINI_API_KEY to activate my AI response brain!)",
        "🧸 Beep boop! Mochi is here! Kanishka loves coding in Python and building interactive apps like EmotiCam! 🌸 You can explore her certifications and education on the left bar! ✨"
      ];
      const randomReply = fallbackReplies[Math.floor(Math.random() * fallbackReplies.length)];
      return res.json({ response: randomReply });
    }

    const ai = getGeminiClient();

    // Map conversation array to Gemini chat history format
    const contents = messages.map((m: any) => ({
      role: m.role === "assistant" ? "model" : "user",
      parts: [{ text: m.content }]
    }));

    // Add current query if not present
    if (contents.length === 0 || contents[contents.length - 1].parts[0].text !== userQuery) {
      contents.push({
        role: "user",
        parts: [{ text: userQuery }]
      });
    }

    const result = await ai.models.generateContent({
      model: "gemini-3.5-flash",
      contents: contents,
      config: {
        systemInstruction: systemInstruction,
        temperature: 0.7,
      }
    });

    res.json({ response: result.text || "🌙 Mochi is resting, please try again! ✨" });
  } catch (error: any) {
    console.error("Gemini API Error:", error);
    res.status(500).json({ error: "Failed to generate AI response: " + error.message });
  }
});

// Vite Middleware & static file routing
async function startServer() {
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), 'dist');
    app.use(express.static(distPath));
    app.get('*', (req, res) => {
      res.sendFile(path.join(distPath, 'index.html'));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}

startServer();
