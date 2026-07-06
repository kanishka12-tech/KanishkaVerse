import React, { useState } from "react";
import { Sparkles, Heart, Coffee, ShieldCheck, Cpu, Code2 } from "lucide-react";
import { staticPortfolioData } from "../data";

export default function About() {
  const meta = staticPortfolioData.meta;
  const projectsCount = staticPortfolioData.projects.length;
  const [imgSrc, setImgSrc] = useState(meta.profile_photo);

  const handleImgError = () => {
    const backupUrl = "https://media.licdn.com/dms/image/v2/D4E03AQERpx4CVjQWkg/profile-displayphoto-scale_400_400/B4EZlHp8lLIwAg-/0/1757843803580?e=1782950400&v=beta&t=Q3XvpoNEcHzQiLQK-kGwAP2VQyN8U9yG2SUCSlej_GU";
    if (imgSrc !== backupUrl) {
      setImgSrc(backupUrl);
    }
  };

  const quickStats = [
    { label: "Curiosity Quotient", value: "∞", icon: Sparkles, color: "text-amber-300" },
    { label: "Projects Designed", value: projectsCount.toString(), icon: Code2, color: "text-[#ffb7c5]" },
    { label: "Hackathons Solved", value: "4", icon: Cpu, color: "text-indigo-400" },
    { label: "Coffee to Code conversion", value: "100%", icon: Coffee, color: "text-amber-600" }
  ];

  const interests = [
    "Computer Vision & Emotion Processing",
    "Product Strategy & User Experience Design",
    "Python scripting & automation algorithms",
    "Magical, high-contrast, cute interactive interfaces",
    "Deep-learning pipelines & neural networks",
    "IoT workflows and Cloud system orchestration"
  ];

  return (
    <div className="space-y-10 py-4 select-none">
      {/* Title header */}
      <div className="space-y-2">
        <h2 className="font-display font-extrabold text-3xl md:text-4xl text-white tracking-wide">
          About <span className="text-gradient-sakura">Kanishka Goyal</span> 🌸
        </h2>
        <p className="text-xs font-mono text-gray-400 tracking-wider uppercase">
          DEVELOPER • PRODUCT BUILDER • AI EXPLORER
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left Side: Avatar Panel */}
        <div className="lg:col-span-4 flex flex-col items-center space-y-6">
          <div className="relative group">
            {/* Soft pink blur background glow */}
            <div className="absolute -inset-1 rounded-3xl bg-gradient-to-r from-[#ffb7c5] to-[#d883ff] opacity-40 blur-xl group-hover:opacity-70 transition-opacity duration-300" />
            
            {/* Image Wrapper */}
            <div className="relative w-56 h-56 rounded-3xl overflow-hidden border-2 border-[#ffb7c5]/40 p-2.5 bg-[#120b1e]">
              <img 
                src={imgSrc} 
                alt={meta.full_name} 
                onError={handleImgError}
                className="w-full h-full object-cover rounded-2xl group-hover:scale-105 transition-transform duration-500"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#000000]/30 to-transparent" />
            </div>
          </div>

          {/* Quick info capsule */}
          <div className="glass-panel rounded-2xl px-5 py-3.5 text-center w-full space-y-2 border border-[#ffb7c5]/10">
            <h4 className="font-display font-bold text-sm text-white">{meta.full_name}</h4>
            <div className="flex items-center justify-center gap-1.5 text-xs text-[#ffb7c5] font-mono">
              <span>Agra, India</span>
              <span>•</span>
              <span>Born 2006</span>
            </div>
            <a 
              href={meta.resume_link} 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-[#ffb7c5]/10 border border-[#ffb7c5]/25 text-[10px] font-mono text-white hover:bg-[#ffb7c5]/20 hover:border-[#ffb7c5]/50 transition-colors cursor-pointer mt-1"
            >
              <span>Download Resume</span>
              <ShieldCheck size={12} />
            </a>
          </div>
        </div>

        {/* Right Side: Narrative Panel */}
        <div className="lg:col-span-8 space-y-8">
          <div className="glass-panel rounded-3xl p-6 md:p-8 border border-[#ffb7c5]/10 space-y-6">
            <h3 className="font-display font-bold text-xl text-[#ffb7c5]">The Journey</h3>
            <p className="text-sm text-gray-300 leading-relaxed">
              I am a passionate tech explorer pursuing my <strong>B.Tech in Computer Science</strong> with specializations in <strong>Artificial Intelligence and Data Analytics</strong> at <strong>GLA University</strong>.
            </p>
            <p className="text-sm text-gray-300 leading-relaxed">
              For me, coding isn't just about throwing logical loops in a command line. It's about designing elegant experiences. I consider myself a dual-natured explorer: a <strong>Developer</strong> who loves writing neat Python algorithms, and a <strong>Product Builder</strong> who prioritizes how users interact with technology.
            </p>
            <p className="text-sm text-gray-300 leading-relaxed">
              My core playground involves <strong>Computer Vision</strong>, integrating frameworks like <strong>OpenCV</strong> and <strong>MediaPipe</strong> to detect gestures, facial expressions, and translate environmental data into interactive actions. When I'm not studying PCM analytics or AI paradigms, you can find me customizing beautiful pixel interfaces, drinking coffee, and exploring the next AI innovation! 🚀
            </p>
          </div>

          {/* Interests Board */}
          <div className="glass-panel rounded-3xl p-6 border border-[#ffb7c5]/10 space-y-4">
            <h3 className="font-display font-bold text-lg text-white">Core Interest Fields</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5">
              {interests.map((interest, idx) => (
                <div 
                  key={idx}
                  className="flex items-center gap-3 p-3 rounded-2xl bg-white/3 border border-white/5 hover:border-[#ffb7c5]/20 hover:bg-white/5 transition-all duration-300"
                >
                  <span className="text-[#ffb7c5]">🌸</span>
                  <span className="text-xs text-gray-300">{interest}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Bento Stats Panel Row */}
      <section className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {quickStats.map((qs, index) => {
          const Icon = qs.icon;
          return (
            <div 
              key={index}
              className="glass-panel rounded-2xl p-5 border border-[#ffb7c5]/10 flex flex-col justify-between items-center text-center space-y-3 shadow-md"
            >
              <div className={`p-2.5 rounded-xl bg-white/5 border border-white/10 ${qs.color}`}>
                <Icon size={20} />
              </div>
              <div>
                <h4 className="text-2xl font-display font-black text-white">{qs.value}</h4>
                <p className="text-[10px] font-mono uppercase text-gray-400 tracking-wider mt-1">{qs.label}</p>
              </div>
            </div>
          );
        })}
      </section>
    </div>
  );
}
