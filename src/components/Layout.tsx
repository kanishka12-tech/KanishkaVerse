import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { 
  Home, 
  User, 
  FolderCode, 
  Wand2, 
  Trophy, 
  Award, 
  GraduationCap, 
  Mail, 
  Menu, 
  X,
  Volume2,
  VolumeX
} from "lucide-react";
import { staticPortfolioData } from "../data";

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  const location = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [musicPlaying, setMusicPlaying] = useState(false);
  const [imgSrc, setImgSrc] = useState(staticPortfolioData.meta.profile_photo);

  const handleImgError = () => {
    const backupUrl = "https://media.licdn.com/dms/image/v2/D4E03AQERpx4CVjQWkg/profile-displayphoto-scale_400_400/B4EZlHp8lLIwAg-/0/1757843803580?e=1782950400&v=beta&t=Q3XvpoNEcHzQiLQK-kGwAP2VQyN8U9yG2SUCSlej_GU";
    if (imgSrc !== backupUrl) {
      setImgSrc(backupUrl);
    }
  };

  // Close mobile drawer when route changes
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  const navItems = [
    { name: "Home", path: "/", icon: Home },
    { name: "About", path: "/about", icon: User },
    { name: "Projects Hub", path: "/projects", icon: FolderCode },
    { name: "Skills Library", path: "/skills", icon: Wand2 },
    { name: "Achievements", path: "/achievements", icon: Trophy },
    { name: "Certifications", path: "/certifications", icon: Award },
    { name: "Education", path: "/education", icon: GraduationCap },
    { name: "Contact Portal", path: "/contact", icon: Mail },
  ];

  return (
    <div className="min-h-screen flex flex-col md:flex-row relative z-10 font-sans">
      {/* Sound Toggle (Ambient background soundtrack representation - cute element) */}
      <div className="fixed top-4 right-4 z-50 flex items-center gap-2">
        <button 
          onClick={() => setMusicPlaying(!musicPlaying)}
          className="glass-panel p-2.5 rounded-full text-[#ffb7c5] hover:text-white transition-all duration-300 hover:scale-110 flex items-center justify-center cursor-pointer shadow-[0_0_10px_rgba(255,183,197,0.1)]"
          title={musicPlaying ? "Mute ambient sparkles" : "Play ambient sparkles"}
        >
          {musicPlaying ? <Volume2 size={18} /> : <VolumeX size={18} />}
        </button>
        {musicPlaying && (
          <div className="glass-panel px-3 py-1.5 rounded-full text-xs text-[#ffb7c5] font-mono animate-pulse flex items-center gap-1.5 border border-[#ffb7c5]/30">
            <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-ping"></span>
            Sakura Ambience Active 🌸
          </div>
        )}
      </div>

      {/* Desktop Sidebar Rail (Fixed Left) */}
      <aside className="hidden md:flex flex-col w-64 h-screen fixed left-0 top-0 glass-panel border-r border-[#ffb7c5]/10 px-6 py-8 justify-between select-none shrink-0 z-30">
        <div>
          {/* Logo / Header Branding */}
          <Link to="/" className="flex flex-col items-center gap-1 mb-8 group">
            <div className="relative w-16 h-16 rounded-full overflow-hidden border-2 border-[#ffb7c5]/30 group-hover:border-[#ffb7c5]/75 transition-all duration-300 flex items-center justify-center p-1 bg-[#160d22]">
              <img 
                src={imgSrc} 
                alt="Kanishka Goyal" 
                onError={handleImgError}
                className="w-full h-full object-cover rounded-full"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#ffb7c5]/20 to-transparent pointer-events-none" />
            </div>
            <span className="font-display font-bold text-lg text-[#ffb7c5] tracking-wide group-hover:text-white transition-colors duration-300">
              KanishkaVerse
            </span>
            <span className="text-[10px] uppercase font-mono tracking-widest text-[#d883ff]">
              ● ONLINE EXPLORER
            </span>
          </Link>

          {/* Navigation Links */}
          <nav className="flex flex-col gap-1.5">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = location.pathname === item.path || (item.path !== "/" && location.pathname.startsWith(item.path));
              return (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`flex items-center gap-3.5 px-4 py-3 rounded-xl transition-all duration-300 relative group overflow-hidden ${
                    isActive 
                      ? "bg-gradient-to-r from-[#ffb7c5]/15 to-transparent text-white border-l-4 border-[#ffb7c5] pl-3.5 font-medium shadow-[0_0_15px_rgba(255,183,197,0.1)]" 
                      : "text-gray-400 hover:text-[#ffb7c5] hover:bg-white/5"
                  }`}
                >
                  <Icon size={18} className={`shrink-0 ${isActive ? "text-[#ffb7c5]" : "text-gray-400 group-hover:text-[#ffb7c5] group-hover:rotate-6 transition-transform duration-300"}`} />
                  <span className="text-sm font-sans tracking-wide">{item.name}</span>
                  
                  {/* Subtle hover spark slide effect */}
                  <div className="absolute right-3 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <span className="text-xs">🌸</span>
                  </div>
                </Link>
              );
            })}
          </nav>
        </div>

        {/* Bottom branding detail */}
        <div className="text-center">
          <div className="inline-flex items-center justify-center p-2 rounded-full bg-[#ffb7c5]/5 border border-[#ffb7c5]/10 animate-float mb-3">
            <span className="text-lg" role="img" aria-label="crystal">🔮</span>
          </div>
          <p className="text-[10px] font-mono text-gray-500">
            Crafted with Love & AI 💖<br />
            © {new Date().getFullYear()} KanishkaVerse
          </p>
        </div>
      </aside>

      {/* Mobile Top Header */}
      <header className="md:hidden flex items-center justify-between px-6 py-4 fixed top-0 left-0 right-0 glass-panel border-b border-[#ffb7c5]/10 z-40 select-none">
        <Link to="/" className="flex items-center gap-2.5 group">
          <div className="w-10 h-10 rounded-full overflow-hidden border border-[#ffb7c5]/30 p-0.5 bg-[#160d22]">
            <img 
              src={imgSrc} 
              alt="Kanishka Goyal" 
              onError={handleImgError}
              className="w-full h-full object-cover rounded-full"
              referrerPolicy="no-referrer"
            />
          </div>
          <div className="flex flex-col">
            <span className="font-display font-bold text-sm text-[#ffb7c5] tracking-wide leading-none">
              KanishkaVerse
            </span>
            <span className="text-[8px] font-mono tracking-widest text-gray-400">
              EXPLORER PORTAL
            </span>
          </div>
        </Link>

        {/* Mobile hamburger menu toggle */}
        <button 
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="p-1.5 text-gray-400 hover:text-[#ffb7c5] transition-colors"
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </header>

      {/* Mobile Menu Overlay Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden fixed inset-0 bg-[#06040b]/90 backdrop-blur-md z-45 flex flex-col pt-24 px-8 pb-10 justify-between">
          <nav className="flex flex-col gap-3">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = location.pathname === item.path || (item.path !== "/" && location.pathname.startsWith(item.path));
              return (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`flex items-center gap-4 p-4 rounded-2xl border transition-all duration-300 ${
                    isActive 
                      ? "glass-panel border-[#ffb7c5]/40 text-[#ffb7c5] bg-[#ffb7c5]/10 font-bold" 
                      : "border-transparent text-gray-300 hover:text-[#ffb7c5]"
                  }`}
                >
                  <Icon size={20} className={isActive ? "text-[#ffb7c5]" : "text-gray-400"} />
                  <span className="text-base tracking-wide font-display">{item.name}</span>
                  {isActive && <span className="ml-auto text-sm animate-pulse">🌸</span>}
                </Link>
              );
            })}
          </nav>

          <div className="text-center font-mono text-[10px] text-gray-500">
            🎀 Kanishka Goyal • Developer Portfolio 🎀
          </div>
        </div>
      )}

      {/* Main Content Area */}
      <main className="flex-1 md:ml-64 px-4 md:px-12 pt-24 md:pt-12 pb-24 md:pb-12 min-h-screen relative z-10 flex flex-col justify-between">
        <div className="max-w-5xl w-full mx-auto flex-1">
          {children}
        </div>

        {/* Desktop Mini-Footer */}
        <footer className="max-w-5xl w-full mx-auto pt-12 border-t border-[#ffb7c5]/5 flex flex-col sm:flex-row items-center justify-between text-xs text-gray-500 font-mono gap-4 mt-12">
          <span>COSMIC SHIELD ACTIVE • SECURE CONNECTION</span>
          <span className="flex items-center gap-1 text-[#ffb7c5]/60 hover:text-[#ffb7c5] transition-colors">
            Created with 💖 by Kanishka • Agra 2026
          </span>
        </footer>
      </main>

      {/* Floating Bottom Nav for Mobile (redundancy / shortcut for key routes) */}
      <div className="md:hidden fixed bottom-4 inset-x-4 h-16 glass-panel border border-[#ffb7c5]/15 rounded-2xl flex items-center justify-around px-2 z-40 shadow-[0_4px_24px_rgba(0,0,0,0.6)]">
        {navItems.slice(0, 5).map((item) => {
          const Icon = item.icon;
          const isActive = location.pathname === item.path || (item.path !== "/" && location.pathname.startsWith(item.path));
          return (
            <Link 
              key={item.path} 
              to={item.path}
              className={`flex flex-col items-center justify-center w-12 h-12 rounded-xl transition-all duration-300 ${isActive ? "text-[#ffb7c5] bg-[#ffb7c5]/10 scale-105" : "text-gray-400"}`}
            >
              <Icon size={20} />
              <span className="text-[9px] font-sans font-medium scale-90 tracking-tight leading-none mt-1">{item.name.split(" ")[0]}</span>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
