import { Link } from "react-router-dom";
import { FolderCode, Github, ExternalLink, ArrowRight, Star, Cpu } from "lucide-react";
import { staticPortfolioData } from "../data";

export default function Projects() {
  const projects = staticPortfolioData.projects;

  return (
    <div className="space-y-10 py-4 select-none animate-fade-in">
      {/* Title header */}
      <div className="space-y-2">
        <h2 className="font-display font-extrabold text-3xl md:text-4xl text-white tracking-wide animate-float">
          Projects <span className="text-gradient-sakura">Hub</span> 💻
        </h2>
        <p className="text-xs font-mono text-gray-400 tracking-wider uppercase">
          EXPLORE PYTHON, COMPUTER VISION, AND WEATHER ANALYTICS SYSTEMS
        </p>
      </div>

      {/* Grid List */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {projects.map((project) => {
          const techList = project.project_tech_stack.split(", ");
          const isEmotiCam = project.project_name.toLowerCase().includes("emoticam");

          return (
            <div 
              key={project.project_id}
              className="glass-panel rounded-3xl p-6 flex flex-col justify-between border border-[#ffb7c5]/10 hover:border-[#ffb7c5]/40 hover:translate-y-[-4px] transition-all duration-300 relative overflow-hidden group shadow-[0_4px_25px_rgba(0,0,0,0.4)]"
            >
              {/* Corner Ambient Graphic */}
              <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-[#ffb7c5]/5 to-transparent pointer-events-none" />

              <div className="space-y-4">
                {/* Header Row */}
                <div className="flex items-center justify-between">
                  <div className="w-11 h-11 rounded-2xl bg-[#ffb7c5]/10 border border-[#ffb7c5]/25 flex items-center justify-center text-xl shadow-[0_0_15px_rgba(255,183,197,0.1)]">
                    {isEmotiCam ? "📸" : "🌤️"}
                  </div>
                  <div className="flex items-center gap-2">
                    <a 
                      href={project.github_link} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="p-2 rounded-xl bg-white/5 border border-white/10 hover:bg-[#ffb7c5]/20 hover:text-white transition-all"
                      title="GitHub Repository"
                    >
                      <Github size={16} />
                    </a>
                    {project.live_link && (
                      <a 
                        href={project.live_link} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="p-2 rounded-xl bg-white/5 border border-white/10 hover:bg-[#ffb7c5]/20 hover:text-white transition-all"
                        title="Live Demo"
                      >
                        <ExternalLink size={16} />
                      </a>
                    )}
                  </div>
                </div>

                {/* Info */}
                <div className="space-y-1">
                  <h3 className="font-display font-extrabold text-xl text-white group-hover:text-[#ffb7c5] transition-colors duration-200">
                    {project.project_name}
                  </h3>
                  <p className="text-[10px] font-mono text-[#d883ff] uppercase tracking-widest">
                    {isEmotiCam ? "COMPUTER VISION PLATFORM" : "WEATHER & CLIMATE VISUALIZER"}
                  </p>
                </div>

                <p className="text-xs text-gray-400 leading-relaxed min-h-16 line-clamp-3">
                  {project.project_description}
                </p>

                {/* Tech Badges */}
                <div className="flex flex-wrap gap-1.5 pt-2">
                  {techList.slice(0, 5).map((tech, idx) => (
                    <span 
                      key={idx}
                      className="text-[9px] font-mono px-2 py-1 rounded-md bg-[#ffb7c5]/5 border border-[#ffb7c5]/15 text-[#ffb7c5]"
                    >
                      {tech}
                    </span>
                  ))}
                  {techList.length > 5 && (
                    <span className="text-[9px] font-mono px-2 py-1 rounded-md bg-white/5 text-gray-400">
                      +{techList.length - 5} more
                    </span>
                  )}
                </div>
              </div>

              {/* Action Link to Details */}
              <div className="mt-6 pt-4 border-t border-white/5 flex items-center justify-between">
                <span className="text-[9px] font-mono text-gray-500 uppercase tracking-wider">
                  {isEmotiCam ? "Python • OpenCV • Flask" : "Python • Streamlit • Pandas"}
                </span>
                <Link 
                  to={`/projects/${project.project_id}`}
                  className="inline-flex items-center gap-1.5 text-xs text-[#ffb7c5] font-display font-bold hover:text-white transition-colors cursor-pointer group"
                >
                  <span>System Deep Dive</span>
                  <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          );
        })}
      </div>

      {/* Aesthetic Callout */}
      <div className="glass-panel rounded-3xl p-6 flex flex-col md:flex-row items-center justify-between gap-4 border border-[#ffb7c5]/10 bg-gradient-to-r from-[#ffb7c5]/5 to-transparent">
        <div className="flex items-center gap-3">
          <div className="p-2.5 rounded-2xl bg-[#ffb7c5]/15 text-[#ffb7c5]">
            <Cpu size={18} />
          </div>
          <div>
            <h4 className="font-display font-bold text-sm text-white">Looking for custom models?</h4>
            <p className="text-xs text-gray-400">All repositories are modular, well-documented, and hosted under open-source licenses on GitHub.</p>
          </div>
        </div>
        <a 
          href={staticPortfolioData.meta.github_link}
          target="_blank" 
          rel="noopener noreferrer"
          className="px-5 py-2.5 rounded-xl bg-white/5 hover:bg-white/10 text-xs font-mono text-white transition-all cursor-pointer border border-[#ffb7c5]/20 hover:border-[#ffb7c5]/50 shrink-0"
        >
          View GitHub Profile
        </a>
      </div>
    </div>
  );
}
