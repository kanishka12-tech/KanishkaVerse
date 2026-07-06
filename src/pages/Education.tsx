import { staticPortfolioData } from "../data";
import { GraduationCap, Calendar, Compass, Shield } from "lucide-react";

export default function Education() {
  const education = staticPortfolioData.education;

  // We sort education in chronological order or reverse. Let's do reverse so the current GLA is at the top.
  const sortedEdu = [...education].sort((a, b) => b.year_of_completion - a.year_of_completion);

  return (
    <div className="space-y-10 py-4 select-none animate-fade-in">
      {/* Title header */}
      <div className="space-y-2">
        <h2 className="font-display font-extrabold text-3xl md:text-4xl text-white tracking-wide">
          Education <span className="text-gradient-sakura">Growth Tree</span> 🎓
        </h2>
        <p className="text-xs font-mono text-gray-400 tracking-wider uppercase">
          CHRONOLOGICAL ROADMAP OF ACADEMIC MILESTONES AND THEORETICAL SPECIALIZATIONS
        </p>
      </div>

      {/* Timeline Wrapper */}
      <div className="relative max-w-2xl mx-auto pl-6 md:pl-10 space-y-10 py-4">
        {/* Continuous timeline vertical line */}
        <div className="absolute left-1.5 md:left-5 top-2 bottom-2 w-0.5 bg-gradient-to-b from-[#ffb7c5] via-[#d883ff] to-[#4b0082]/30" />

        {sortedEdu.map((edu, idx) => {
          const isGLA = edu.institution_name.toLowerCase().includes("gla");
          return (
            <div 
              key={edu.edu_id}
              className="relative space-y-4 animate-float"
              style={{ animationDelay: `${idx * 1.5}s`, animationDuration: "7s" }}
            >
              {/* Timeline custom node bubble */}
              <div className="absolute -left-[30px] md:-left-[46px] top-1.5 w-6 h-6 md:w-8 md:h-8 rounded-full bg-[#1b122c] border-2 border-[#ffb7c5] flex items-center justify-center text-xs shadow-[0_0_15px_rgba(255,183,197,0.4)] z-20 group">
                <span className="text-[10px] md:text-xs">🌸</span>
              </div>

              {/* Event Glass Card */}
              <div className="glass-panel rounded-3xl p-6 md:p-8 border border-[#ffb7c5]/10 hover:border-[#ffb7c5]/30 hover:scale-101 transition-all duration-300 relative overflow-hidden group shadow-lg">
                {/* Decorative glowing gradient backdrop */}
                {isGLA && (
                  <div className="absolute inset-0 bg-gradient-to-tr from-[#ffb7c5]/3 to-[#d883ff]/3 pointer-events-none" />
                )}

                <div className="space-y-4 relative z-10">
                  {/* Top line with Date and degree */}
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-white/5 pb-3">
                    <div className="space-y-1 leading-none">
                      <h3 className="font-display font-extrabold text-lg text-white group-hover:text-[#ffb7c5] transition-colors leading-tight">
                        {edu.degree}
                      </h3>
                      <span className="text-[10px] font-mono text-[#d883ff] uppercase tracking-widest font-semibold leading-none">
                        {edu.institution_name}
                      </span>
                    </div>

                    <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-[10px] font-mono text-gray-300 w-fit shrink-0">
                      <Calendar size={10} />
                      <span>Completing {edu.year_of_completion} ({edu.duration})</span>
                    </div>
                  </div>

                  {/* Body description */}
                  <p className="text-xs text-gray-400 leading-relaxed">
                    {edu.edu_description}
                  </p>

                  {/* CGPA / Score board */}
                  <div className="flex items-center gap-4 pt-2 font-mono text-[10px] text-gray-500">
                    <div className="flex items-center gap-1.5 bg-black/40 border border-white/5 px-3 py-1.5 rounded-xl text-white">
                      <span>Score Badge:</span>
                      <span className="text-[#ffb7c5] font-bold">{edu.cgpa}</span>
                    </div>

                    {isGLA && (
                      <span className="text-[#d883ff] font-semibold animate-pulse uppercase tracking-wider">
                        ★ ACTIVE RECRUIT SPECIALIZATION
                      </span>
                    )}
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
