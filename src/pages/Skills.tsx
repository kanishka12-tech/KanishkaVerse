import { staticPortfolioData, Skill } from "../data";
import { Wand2, Code2, LineChart, Server, Sparkles } from "lucide-react";

export default function Skills() {
  const skills = staticPortfolioData.skills;

  // Group skills by category
  const categories = skills.reduce((acc, curr) => {
    if (!acc[curr.category]) {
      acc[curr.category] = [];
    }
    acc[curr.category].push(curr);
    return acc;
  }, {} as Record<string, Skill[]>);

  // Map icon based on category name
  const getCategoryIcon = (category: string) => {
    switch (category.toLowerCase()) {
      case "languages":
        return <Code2 size={18} className="text-[#ffb7c5]" />;
      case "ai & computer vision":
        return <Wand2 size={18} className="text-[#d883ff]" />;
      case "data science":
        return <LineChart size={18} className="text-amber-300" />;
      case "web development":
      case "databases":
      case "cloud systems":
        return <Server size={18} className="text-indigo-400" />;
      default:
        return <Sparkles size={18} className="text-[#ffb7c5]" />;
    }
  };

  return (
    <div className="space-y-10 py-4 select-none animate-fade-in">
      {/* Title header */}
      <div className="space-y-2">
        <h2 className="font-display font-extrabold text-3xl md:text-4xl text-white tracking-wide">
          Skills <span className="text-gradient-sakura">Library</span> 🛠️
        </h2>
        <p className="text-xs font-mono text-gray-400 tracking-wider uppercase">
          EXPLORE CORE TECHNICAL PROWESS, AI FRAMEWORKS, AND ENGINEERING PARADIGMS
        </p>
      </div>

      {/* Categories Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {Object.entries(categories).map(([category, list]) => (
          <div 
            key={category}
            className="glass-panel rounded-3xl p-6 border border-[#ffb7c5]/10 flex flex-col justify-between hover:border-[#ffb7c5]/25 transition-all duration-300 shadow-md relative overflow-hidden"
          >
            {/* Soft decorative background dot */}
            <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-bl from-white/2 to-transparent pointer-events-none" />

            <div className="space-y-6">
              {/* Category Header */}
              <div className="flex items-center gap-2.5 pb-3 border-b border-white/5">
                <div className="p-2 rounded-xl bg-white/5 border border-white/10">
                  {getCategoryIcon(category)}
                </div>
                <h3 className="font-display font-bold text-lg text-white">
                  {category}
                </h3>
              </div>

              {/* Skills List */}
              <div className="space-y-5">
                {list.map((skill, idx) => (
                  <div key={idx} className="space-y-2">
                    <div className="flex items-center justify-between text-xs font-mono">
                      <span className="text-gray-200 font-semibold flex items-center gap-1.5">
                        <span className="text-xs">🌸</span>
                        {skill.name}
                      </span>
                      <span className="text-[#ffb7c5] font-semibold">{skill.level}</span>
                    </div>

                    {/* Progress Slider Track */}
                    <div className="h-2 w-full rounded-full bg-black/40 border border-white/5 overflow-hidden">
                      <div 
                        className="h-full rounded-full bg-gradient-to-r from-[#ffb7c5] to-[#d883ff] shadow-[0_0_8px_rgba(255,183,197,0.3)] transition-all duration-1000"
                        style={{ width: `${skill.score}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-white/5 flex items-center justify-between text-[9px] font-mono text-gray-500 uppercase tracking-widest">
              <span>Verified Level</span>
              <span className="text-[#ffb7c5]">{list.length} items logged</span>
            </div>
          </div>
        ))}
      </div>

      {/* Quote / Narrative footer callout */}
      <section className="glass-panel rounded-3xl p-6 border border-[#ffb7c5]/10 text-center space-y-2 relative overflow-hidden max-w-2xl mx-auto">
        <div className="absolute -inset-1 bg-gradient-to-tr from-[#ffb7c5]/5 to-[#d883ff]/5 blur-lg opacity-40" />
        <span className="text-2xl animate-float inline-block">🔮</span>
        <h4 className="font-display font-bold text-sm text-white">Continuous Innovation Vector</h4>
        <p className="text-xs text-gray-400 max-w-lg mx-auto leading-relaxed">
          "I actively build new projects every month to experiment with up-and-coming libraries, pushing limits in MediaPipe pose meshes and automated pipelines."
        </p>
      </section>
    </div>
  );
}
