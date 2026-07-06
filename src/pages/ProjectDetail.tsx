import { useParams, Link, Navigate } from "react-router-dom";
import { ArrowLeft, Github, ExternalLink, Cpu, Hammer, Milestone, ShieldCheck, Heart } from "lucide-react";
import { staticPortfolioData, Project } from "../data";

export default function ProjectDetail() {
  const { id } = useParams<{ id: string }>();
  const projectId = parseInt(id || "", 10);
  
  const project = staticPortfolioData.projects.find(p => p.project_id === projectId);

  if (!project) {
    return <Navigate to="/projects" replace />;
  }

  const isEmotiCam = project.project_name.toLowerCase().includes("emoticam");
  const techList = project.project_tech_stack.split(", ");

  // Custom rich data for bento segments based on the specific project selected
  const detailedData = isEmotiCam ? {
    tagline: "Facial Emotion & Gesture Recognition Computer Vision Matrix",
    features: [
      "Real-time webcam feed capturing with frames processed through OpenCV channels",
      "MediaPipe integration tracking 468 facial landpoints and 21 distinct hand joint vectors",
      "NumPy matrix computation mapping facial contours to mathematical arrays",
      "Sleek Flask backend serving instant emotion state endpoints",
      "Adorable interactive browser display mirroring recognized emotions dynamically"
    ],
    architecture: {
      backend: "Flask (Python) with processing thread loops",
      pipeline: "Frame Capture ➔ Grayscale Conversion ➔ Joint Matrix Computation ➔ MediaPipe Extraction ➔ Facial Emotion State Mapping",
      databases: "Local sessions storing interaction history (offline secure)"
    },
    challenges: [
      {
        problem: "Extreme facial joint tracking lag when running heavy neural networks in simple single-threaded Flask routes.",
        solution: "Decoupled the OpenCV frame processing loops into separate daemon threads, serving predictions through pre-computed matrix lookups."
      },
      {
        problem: "Noisy background shadows triggering false hand gesture and joint gesture states.",
        solution: "Applied standard contrast-limiting adaptive histogram equalization (CLAHE) on the feed before executing MediaPipe contours."
      }
    ],
    roadmap: [
      "Integrate deep learning CNN models trained on FER2013 dataset directly into PyTorch pipelines",
      "Add interactive multiplayer game sessions driven solely by hand gestures",
      "Secure Azure Cloud Web App hosting with automatic container deployment"
    ]
  } : {
    tagline: "Python-driven Weather Parsing and Climate Analytics Engine",
    features: [
      "Dynamic weather query pipelines fetching live weather feeds from rapid-response REST APIs",
      "Pandas dataset ingestion cleaning historical climate records instantly",
      "Plotly-powered interactive temperature, pressure, and precipitation charts",
      "NumPy statistical parsing forecasting relative moisture profiles",
      "Sleek Streamlit dashboard enabling real-time filtering and search operations"
    ],
    architecture: {
      backend: "Python engine with REST API mapping",
      pipeline: "User Search Query ➔ Weather API Request ➔ JSON Parsing ➔ Pandas DataFrame Ingestion ➔ Plotly Visualization Rendition",
      databases: "Memory caching holding search terms to avoid rate limits"
    },
    challenges: [
      {
        problem: "Frequent third-party Weather API rate limits when searching for multiples cities rapidly.",
        solution: "Established a local memory-caching layer using dictionary indexes that caches search outputs for up to 30 minutes."
      },
      {
        problem: "Plotly multi-line charts rendering slow on mobile viewports.",
        solution: "Configured chart down-sampling and responsive canvas wrappers that adapt coordinate densities on mobile screens."
      }
    ],
    roadmap: [
      "Implement machine learning regression models to predict regional rainfall rates",
      "Integrate satellite geolocation tracking to auto-fetch local environmental alerts",
      "Add direct weather bulletin email alerts triggered by Flask schedule cron systems"
    ]
  };

  return (
    <div className="space-y-10 py-4 select-none animate-fade-in">
      {/* Back button and title */}
      <div className="space-y-4">
        <Link 
          to="/projects"
          className="inline-flex items-center gap-2 text-sm text-[#ffb7c5] hover:text-white transition-colors cursor-pointer group"
        >
          <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
          <span>Back to Projects Hub</span>
        </Link>

        <div className="space-y-2">
          <div className="flex flex-wrap items-center gap-3">
            <h2 className="font-display font-extrabold text-3xl md:text-5xl text-white tracking-wide">
              {project.project_name}
            </h2>
            <div className="px-3 py-1 rounded-full bg-[#ffb7c5]/15 border border-[#ffb7c5]/35 text-[10px] font-mono text-[#ffb7c5] tracking-widest uppercase">
              {isEmotiCam ? "Computer Vision" : "Climate Science"}
            </div>
          </div>
          <p className="text-sm text-gray-400 font-medium">
            {detailedData.tagline}
          </p>
        </div>
      </div>

      {/* Hero / Links Card */}
      <section className="glass-panel rounded-3xl p-6 md:p-8 border border-[#ffb7c5]/10 grid grid-cols-1 md:grid-cols-3 gap-6 items-center">
        <div className="md:col-span-2 space-y-4">
          <h3 className="font-display font-bold text-lg text-[#ffb7c5]">System Overview</h3>
          <p className="text-sm text-gray-300 leading-relaxed">
            {project.project_description}
          </p>
          
          {/* Tech Badges */}
          <div className="flex flex-wrap gap-2 pt-2">
            {techList.map((tech, idx) => (
              <span 
                key={idx}
                className="text-xs font-mono px-3 py-1 rounded-lg bg-[#ffb7c5]/5 border border-[#ffb7c5]/15 text-[#ffb7c5]"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Links Panel */}
        <div className="glass-panel rounded-2xl p-5 border border-[#ffb7c5]/10 flex flex-col gap-3">
          <h4 className="text-xs font-mono uppercase text-gray-400 tracking-wider">Project Assets</h4>
          
          <a 
            href={project.github_link} 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center justify-between p-3 rounded-xl bg-white/5 border border-white/10 hover:bg-[#ffb7c5]/15 hover:border-[#ffb7c5]/35 text-xs text-white font-medium transition-all cursor-pointer"
          >
            <span className="flex items-center gap-2">
              <Github size={16} className="text-[#ffb7c5]" />
              GitHub Repository
            </span>
            <ExternalLink size={14} />
          </a>

          {project.live_link ? (
            <a 
              href={project.live_link} 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center justify-between p-3 rounded-xl bg-gradient-to-r from-[#ffb7c5]/20 to-[#d883ff]/20 border border-[#ffb7c5]/25 hover:from-[#ffb7c5]/30 hover:to-[#d883ff]/30 text-xs text-white font-medium transition-all cursor-pointer shadow-sm"
            >
              <span className="flex items-center gap-2">
                <span className="text-base">🚀</span>
                Launch Live System
              </span>
              <ExternalLink size={14} />
            </a>
          ) : (
            <div className="flex items-center justify-between p-3 rounded-xl bg-white/3 border border-white/5 text-xs text-gray-500 font-mono italic select-none">
              <span>Offline Local System Only</span>
              <span>🔒</span>
            </div>
          )}
        </div>
      </section>

      {/* Bento Grid: Architecture & Features */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Core System Features */}
        <div className="glass-panel rounded-3xl p-6 md:p-8 border border-[#ffb7c5]/10 space-y-6">
          <div className="flex items-center gap-2.5">
            <Heart size={18} className="text-[#ffb7c5] animate-pulse" />
            <h3 className="font-display font-bold text-lg text-white">System Capabilities</h3>
          </div>
          <ul className="space-y-4">
            {detailedData.features.map((feature, idx) => (
              <li key={idx} className="flex gap-3 items-start">
                <span className="text-[#ffb7c5] mt-1 shrink-0 text-xs">🌸</span>
                <span className="text-xs text-gray-300 leading-relaxed">{feature}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Pipeline & Infrastructure */}
        <div className="glass-panel rounded-3xl p-6 md:p-8 border border-[#ffb7c5]/10 space-y-6 flex flex-col justify-between">
          <div className="space-y-6">
            <div className="flex items-center gap-2.5">
              <Cpu size={18} className="text-[#ffb7c5]" />
              <h3 className="font-display font-bold text-lg text-white">Execution Pipeline</h3>
            </div>
            
            <div className="space-y-4 font-mono text-[11px] text-gray-400">
              <div className="space-y-1.5">
                <span className="text-xs uppercase text-[#ffb7c5] tracking-widest font-semibold font-sans">Core Pipeline Vector</span>
                <div className="p-3 bg-black/40 rounded-xl border border-white/5 leading-relaxed text-[#d883ff]">
                  {detailedData.architecture.pipeline}
                </div>
              </div>
              
              <div className="grid grid-cols-2 gap-4 pt-2">
                <div className="space-y-1">
                  <span className="text-[10px] uppercase text-white tracking-widest font-sans font-semibold">Engine Core</span>
                  <p className="text-xs text-gray-300 font-sans">{detailedData.architecture.backend}</p>
                </div>
                <div className="space-y-1">
                  <span className="text-[10px] uppercase text-white tracking-widest font-sans font-semibold">State Layer</span>
                  <p className="text-xs text-gray-300 font-sans">{detailedData.architecture.databases}</p>
                </div>
              </div>
            </div>
          </div>

          <div className="p-4 rounded-2xl bg-[#ffb7c5]/5 border border-[#ffb7c5]/10 text-center text-xs font-mono text-[#ffb7c5] mt-6">
            🛠️ 100% RELIABLE PYTHON REPOSITORY
          </div>
        </div>
      </section>

      {/* Engineering Challenges & Solutions */}
      <section className="glass-panel rounded-3xl p-6 md:p-8 border border-[#ffb7c5]/10 space-y-6">
        <div className="flex items-center gap-2.5">
          <Hammer size={18} className="text-[#ffb7c5]" />
          <h3 className="font-display font-bold text-lg text-white">Engineering Obstacles Solved</h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {detailedData.challenges.map((c, idx) => (
            <div key={idx} className="p-5 rounded-2xl bg-[#0e091a] border border-[#ffb7c5]/10 space-y-3.5">
              <div className="space-y-1.5">
                <span className="text-[9px] font-mono bg-red-500/10 text-red-400 px-2 py-1 rounded border border-red-500/20 uppercase tracking-widest font-semibold">
                  Challenge Face
                </span>
                <p className="text-xs font-semibold text-white leading-relaxed">{c.problem}</p>
              </div>
              <div className="space-y-1.5 pt-2 border-t border-white/5">
                <span className="text-[9px] font-mono bg-green-500/10 text-green-400 px-2 py-1 rounded border border-green-500/20 uppercase tracking-widest font-semibold">
                  Resolution Found
                </span>
                <p className="text-xs text-gray-400 leading-relaxed">{c.solution}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* System Roadmap */}
      <section className="glass-panel rounded-3xl p-6 md:p-8 border border-[#ffb7c5]/10 space-y-6">
        <div className="flex items-center gap-2.5">
          <Milestone size={18} className="text-[#ffb7c5]" />
          <h3 className="font-display font-bold text-lg text-white">Upcoming System Iterations</h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {detailedData.roadmap.map((goal, idx) => (
            <div key={idx} className="glass-panel rounded-2xl p-5 border border-white/5 flex gap-3.5 items-center relative">
              <div className="w-8 h-8 rounded-full bg-[#ffb7c5]/10 flex items-center justify-center text-xs font-mono text-[#ffb7c5] shrink-0 border border-[#ffb7c5]/25">
                0{idx + 1}
              </div>
              <p className="text-xs text-gray-300 leading-relaxed">{goal}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
