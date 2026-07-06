import { staticPortfolioData } from "../data";
import { Trophy, Award, Sparkles, Star, ShieldCheck, ExternalLink } from "lucide-react";

export default function Achievements() {
  const achievements = staticPortfolioData.achievements;

  // Thematic custom badges mapping to her milestone successes
  const customBadges = [
    {
      title: "OpenCV Wizard",
      desc: "Architected live threading gesture and contour tracking inside the EmotiCam matrix.",
      icon: "📸",
      unlocked: "2026-02-02"
    },
    {
      title: "Academic Star",
      desc: "Maintained a strong 8.37 CGPA specialization portfolio at GLA University.",
      icon: "🎓",
      unlocked: "Ongoing"
    },
    {
      title: "UI Alchemist",
      desc: "Designed and implemented the Moonlit Sakura interactive glassmorphism UI.",
      icon: "🌸",
      unlocked: "Current"
    },
    {
      title: "Git Captain",
      desc: "Pushed 50+ clean modular Python and Flask repository commits.",
      icon: "🚀",
      unlocked: "Active"
    }
  ];

  return (
    <div className="space-y-10 py-4 select-none animate-fade-in">
      {/* Title header */}
      <div className="space-y-2">
        <h2 className="font-display font-extrabold text-3xl md:text-4xl text-white tracking-wide">
          Achievement <span className="text-gradient-sakura">Vault</span> 🏆
        </h2>
        <p className="text-xs font-mono text-gray-400 tracking-wider uppercase">
          EXPLORE VERIFIED PROBLEM-SOLVING RECORDS AND THEMATIC MASTERIES
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left: Verified Credentials Card */}
        <div className="lg:col-span-7 space-y-6">
          <div className="glass-panel rounded-3xl p-6 md:p-8 border border-[#ffb7c5]/15 space-y-6 relative overflow-hidden bg-gradient-to-br from-[#1b122c]/50 to-transparent">
            {/* Background trophy shadow */}
            <div className="absolute right-[-10px] top-[-10px] text-8xl opacity-5 pointer-events-none">🏆</div>
            
            <div className="flex items-center gap-3 pb-4 border-b border-white/5">
              <Trophy size={24} className="text-[#ffb7c5] animate-bounce" />
              <h3 className="font-display font-bold text-xl text-white">Verified Achievements</h3>
            </div>

            <div className="space-y-6">
              {achievements.map((ach) => (
                <div 
                  key={ach.achievement_id}
                  className="p-5 rounded-2xl bg-white/3 border border-white/5 hover:border-[#ffb7c5]/25 hover:bg-white/5 transition-all duration-300 relative group space-y-3.5"
                >
                  <div className="space-y-1">
                    <div className="flex flex-wrap items-center justify-between gap-2">
                      <h4 className="font-display font-extrabold text-lg text-white group-hover:text-[#ffb7c5] transition-colors">
                        {ach.title}
                      </h4>
                      <span className="text-[10px] font-mono text-gray-400 bg-white/5 px-2 py-1 rounded">
                        {ach.achievement_date}
                      </span>
                    </div>
                    <span className="text-[10px] font-mono text-[#d883ff] uppercase tracking-widest leading-none">
                      ISSUED BY {ach.issuer}
                    </span>
                  </div>

                  <p className="text-xs text-gray-400 leading-relaxed">
                    {ach.achievement_description}
                  </p>

                  <div className="pt-2">
                    <a 
                      href={ach.certificate_link} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-[#ffb7c5]/10 border border-[#ffb7c5]/25 text-[10px] font-mono text-white hover:bg-[#ffb7c5]/20 hover:border-[#ffb7c5]/50 transition-colors cursor-pointer"
                    >
                      <span>View HackerRank Certificate</span>
                      <ExternalLink size={12} />
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right: Thematic Badges Board */}
        <div className="lg:col-span-5 space-y-6">
          <div className="glass-panel rounded-3xl p-6 border border-[#ffb7c5]/10 space-y-5">
            <div className="flex items-center gap-2.5">
              <Award size={20} className="text-[#d883ff]" />
              <h3 className="font-display font-bold text-lg text-white">Universe Mastery Badges</h3>
            </div>

            <p className="text-xs text-gray-400 leading-relaxed">
              Fun micro-milestones unlocked while building applications and navigating academic pipelines.
            </p>

            <div className="grid grid-cols-1 gap-4 pt-2">
              {customBadges.map((badge, idx) => (
                <div 
                  key={idx}
                  className="flex items-center gap-4 p-4 rounded-2xl bg-black/30 border border-white/5 hover:border-[#ffb7c5]/20 transition-all duration-300"
                >
                  <div className="w-12 h-12 rounded-2xl bg-[#ffb7c5]/5 border border-[#ffb7c5]/15 flex items-center justify-center text-2xl shrink-0 shadow-[0_0_12px_rgba(255,183,197,0.1)]">
                    {badge.icon}
                  </div>
                  <div className="space-y-1 leading-none">
                    <div className="flex items-center gap-2">
                      <h4 className="font-display font-bold text-sm text-white">{badge.title}</h4>
                      <span className="text-[8px] font-mono text-green-400 px-1.5 py-0.5 rounded bg-green-500/10 border border-green-500/20 uppercase tracking-widest font-semibold leading-none">
                        Unlocked
                      </span>
                    </div>
                    <p className="text-[10px] text-gray-400 leading-normal">{badge.desc}</p>
                    <p className="text-[8px] font-mono text-gray-500 uppercase tracking-wider pt-0.5">DATE: {badge.unlocked}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
