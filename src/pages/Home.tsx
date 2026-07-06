import { Link } from "react-router-dom";
import { ArrowRight, Sparkles, Terminal, Globe, Calendar, Rocket, Compass } from "lucide-react";
import { useState, useEffect } from "react";
import { staticPortfolioData } from "../data";

export default function Home() {
  const meta = staticPortfolioData.meta;
  const [currentTime, setCurrentTime] = useState("");
  const [imgSrc, setImgSrc] = useState(meta.profile_photo);

  const handleImgError = () => {
    const backupUrl = "https://media.licdn.com/dms/image/v2/D4E03AQERpx4CVjQWkg/profile-displayphoto-scale_400_400/B4EZlHp8lLIwAg-/0/1757843803580?e=1782950400&v=beta&t=Q3XvpoNEcHzQiLQK-kGwAP2VQyN8U9yG2SUCSlej_GU";
    if (imgSrc !== backupUrl) {
      setImgSrc(backupUrl);
    }
  };

  useEffect(() => {
    // Elegant ticking clock reflecting India local offset (+5:30) or UTC representation
    const updateTime = () => {
      const now = new Date();
      // Agra, India is UTC +5:30. Let's calculate and format beautifully.
      const utc = now.getTime() + (now.getTimezoneOffset() * 60000);
      const agraTime = new Date(utc + (3600000 * 5.5));
      
      const timeStr = agraTime.toLocaleTimeString("en-US", {
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: true
      });
      setCurrentTime(timeStr);
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="space-y-10 py-4 select-none">
      {/* Hero Header Card */}
      <section className="glass-panel rounded-3xl p-8 md:p-12 relative overflow-hidden shadow-[0_4px_30px_rgba(0,0,0,0.4)] border border-[#ffb7c5]/10 animate-float grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        {/* Adorable ambient light indicator */}
        <div className="absolute top-4 right-6 flex items-center gap-2">
          <span className="flex h-2.5 w-2.5 relative">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-400"></span>
          </span>
          <span className="text-[10px] font-mono tracking-widest text-green-400 uppercase">System Active</span>
        </div>

        <div className="lg:col-span-8 space-y-6 relative z-10">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#ffb7c5]/10 border border-[#ffb7c5]/20 text-[#ffb7c5] text-xs font-mono tracking-wider">
            <Sparkles size={12} className="animate-pulse" />
            <span>Welcome to KanishkaVerse 🌸</span>
          </div>

          <div className="space-y-2">
            <h1 className="font-display font-extrabold text-4xl md:text-5xl lg:text-6xl text-white tracking-wide leading-tight">
              Hey there! I am <br />
              <span className="text-gradient-sakura">{meta.full_name}</span> ✨
            </h1>
            <p className="font-display text-lg md:text-xl text-gray-300 font-medium tracking-wide">
              {meta.headline}
            </p>
          </div>

          <p className="text-sm md:text-base text-gray-400 leading-relaxed max-w-xl">
            {meta.bio_description} B.Tech Student specializing in Artificial Intelligence and Data Analytics at GLA University. Let's make something amazing together! 💖
          </p>

          {/* Magnetic Capsule Buttons */}
          <div className="flex flex-wrap gap-4 pt-4">
            <Link 
              to="/projects"
              className="px-6 py-3 bg-gradient-to-r from-[#ffb7c5] to-[#d883ff] text-[#0b0713] font-bold rounded-2xl hover:shadow-[0_0_20px_rgba(255,183,197,0.5)] hover:scale-102 transition-all duration-300 flex items-center gap-2 cursor-pointer shadow-lg"
            >
              <span>Explore Projects Hub</span>
              <ArrowRight size={16} />
            </Link>
            
            <Link 
              to="/contact"
              className="px-6 py-3 bg-white/5 border border-[#ffb7c5]/25 text-white font-medium rounded-2xl hover:bg-white/10 hover:border-[#ffb7c5]/55 transition-all duration-300 flex items-center gap-2 cursor-pointer"
            >
              <span>Enter Contact Portal</span>
              <span className="text-xs">🔮</span>
            </Link>
          </div>
        </div>

        {/* Home Hero Profile Photo Column */}
        <div className="lg:col-span-4 flex justify-center relative z-10">
          <div className="relative group">
            {/* Elegant glassmorphic outer blur glow */}
            <div className="absolute -inset-1.5 rounded-full bg-gradient-to-r from-[#ffb7c5] via-[#d883ff] to-[#ffb7c5] opacity-50 blur-lg group-hover:opacity-80 transition-opacity duration-500 animate-pulse" />
            
            {/* Image Frame */}
            <div className="relative w-44 h-44 sm:w-52 sm:h-52 rounded-full overflow-hidden border-4 border-[#ffb7c5]/40 p-2 bg-[#120b1e]/90 shadow-[0_0_30px_rgba(255,183,197,0.25)] flex items-center justify-center">
              <img 
                src={imgSrc} 
                alt={meta.full_name} 
                onError={handleImgError}
                className="w-full h-full object-cover rounded-full group-hover:scale-105 transition-transform duration-500"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 rounded-full bg-gradient-to-t from-[#ffb7c5]/10 to-transparent pointer-events-none" />
            </div>
            
            {/* Adorable overlapping accent sticker */}
            <div className="absolute -bottom-1 -right-1 w-10 h-10 rounded-full bg-[#1b122c] border border-[#ffb7c5]/30 flex items-center justify-center text-lg shadow-[0_4px_15px_rgba(0,0,0,0.5)] animate-bounce select-none" style={{ animationDuration: "3s" }}>
              🌸
            </div>
          </div>
        </div>

        {/* Decorative Moonlit Sakura Silhouette background vector (SVG representation) */}
        <div className="absolute right-[-20px] bottom-[-20px] opacity-15 md:opacity-25 pointer-events-none z-0">
          <svg width="240" height="240" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-[#ffb7c5]">
            <path d="M50 90C72.0914 90 90 72.0914 90 50C90 27.9086 72.0914 10 50 10" stroke="currentColor" strokeWidth="1" strokeLinecap="round" />
            <path d="M50 90C61.0457 90 70 81.0457 70 70C70 58.9543 61.0457 50 50 50" stroke="currentColor" strokeWidth="0.75" strokeDasharray="2 2" />
            <circle cx="50" cy="50" r="4" fill="currentColor" className="animate-pulse" />
            <path d="M40 30L45 25M65 40L72 37M55 75L50 82" stroke="currentColor" strokeWidth="0.5" strokeLinecap="round" />
          </svg>
        </div>
      </section>

      {/* Bento Grid Analytics Row */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Column 1: Current Mission */}
        <div className="glass-panel rounded-3xl p-6 relative overflow-hidden flex flex-col justify-between border border-[#ffb7c5]/10 group hover:border-[#ffb7c5]/30 transition-all duration-300">
          <div className="space-y-4">
            <div className="w-10 h-10 rounded-2xl bg-[#ffb7c5]/10 border border-[#ffb7c5]/20 flex items-center justify-center text-lg shadow-[0_0_10px_rgba(255,183,197,0.15)]">
              🚀
            </div>
            <h3 className="font-display font-bold text-lg text-white leading-tight">
              Current Mission
            </h3>
            <p className="text-xs text-gray-400 leading-relaxed">
              Developing <strong>EmotiCam</strong> to optimize computer vision facial emotion algorithms & completing core AI frameworks at GLA.
            </p>
          </div>
          <div className="mt-4 pt-4 border-t border-white/5 flex items-center justify-between text-[10px] font-mono text-gray-500">
            <span>TARGET: AGRA, IN</span>
            <span className="text-[#ffb7c5]">92% SOLVED</span>
          </div>
        </div>

        {/* Column 2: Live Location Clock */}
        <div className="glass-panel rounded-3xl p-6 relative overflow-hidden flex flex-col justify-between border border-[#ffb7c5]/10 group hover:border-[#ffb7c5]/30 transition-all duration-300">
          <div className="space-y-4">
            <div className="w-10 h-10 rounded-2xl bg-[#d883ff]/10 border border-[#d883ff]/20 flex items-center justify-center text-lg shadow-[0_0_10px_rgba(216,131,255,0.15)]">
              ⏰
            </div>
            <h3 className="font-display font-bold text-lg text-white leading-tight">
              Agra, India Local Time
            </h3>
            <p className="font-mono text-2xl font-bold text-[#ffb7c5] tracking-widest py-1 drop-shadow-[0_0_10px_rgba(255,183,197,0.3)]">
              {currentTime || "07:51 PM"}
            </p>
          </div>
          <div className="mt-4 pt-4 border-t border-white/5 flex items-center justify-between text-[10px] font-mono text-gray-500">
            <span>ZONE: Asia/Kolkata</span>
            <span className="text-[#d883ff]">GMT +5:30</span>
          </div>
        </div>

        {/* Column 3: Stats Quick Link */}
        <div className="glass-panel rounded-3xl p-6 relative overflow-hidden flex flex-col justify-between border border-[#ffb7c5]/10 group hover:border-[#ffb7c5]/30 transition-all duration-300 bg-gradient-to-br from-transparent to-[#ffb7c5]/5">
          <div className="space-y-4">
            <div className="w-10 h-10 rounded-2xl bg-white/5 border border-[#ffb7c5]/15 flex items-center justify-center text-lg">
              ✨
            </div>
            <h3 className="font-display font-bold text-lg text-white leading-tight">
              Universe Identity
            </h3>
            <div className="space-y-1.5 font-mono text-xs text-gray-400">
              <div className="flex justify-between">
                <span>Born:</span>
                <span className="text-[#ffb7c5] font-semibold">{meta.year_of_birth} 🌟</span>
              </div>
              <div className="flex justify-between">
                <span>Core Tool:</span>
                <span className="text-[#ffb7c5] font-semibold">Python 🐍</span>
              </div>
              <div className="flex justify-between">
                <span>Passions:</span>
                <span className="text-[#ffb7c5] font-semibold">AI, Product Builder</span>
              </div>
            </div>
          </div>
          <div className="mt-4 pt-4 border-t border-white/5 flex items-center justify-between text-[10px] font-mono text-gray-500">
            <span>CONSOLE PORTAL</span>
            <span className="text-green-400">SECURE SHELL</span>
          </div>
        </div>
      </section>

      {/* Highlights / Features ticker section */}
      <section className="glass-panel rounded-3xl p-6 flex flex-col md:flex-row items-center justify-between gap-6 border border-[#ffb7c5]/10">
        <div className="flex items-center gap-3">
          <div className="text-2xl animate-spin" style={{ animationDuration: "8s" }}>🌸</div>
          <div>
            <h4 className="font-display font-bold text-sm text-white">Interactive AI Companion Active!</h4>
            <p className="text-xs text-gray-400">Chat with Mochi in the corner to ask about her achievements or skills.</p>
          </div>
        </div>
        <div className="text-xs font-mono text-[#ffb7c5] border border-[#ffb7c5]/20 bg-[#ffb7c5]/5 px-3 py-1.5 rounded-full uppercase tracking-widest animate-pulse">
          Developer • Product Builder • AI Explorer
        </div>
      </section>
    </div>
  );
}
