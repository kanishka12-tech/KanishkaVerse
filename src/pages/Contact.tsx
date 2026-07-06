import React, { useState } from "react";
import { Mail, Phone, MapPin, Github, Linkedin, Send, Sparkles, FileText, CheckCircle } from "lucide-react";
import { staticPortfolioData } from "../data";

export default function Contact() {
  const meta = staticPortfolioData.meta;
  const [formData, setFormData] = useState({ name: "", email: "", msg: "" });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.msg) return;

    setLoading(true);
    // Simulate stardust channel buffer transfer
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
      setFormData({ name: "", email: "", msg: "" });
    }, 1200);
  };

  return (
    <div className="space-y-10 py-4 select-none animate-fade-in">
      {/* Title header */}
      <div className="space-y-2">
        <h2 className="font-display font-extrabold text-3xl md:text-4xl text-white tracking-wide">
          Contact <span className="text-gradient-sakura">Portal</span> 📬
        </h2>
        <p className="text-xs font-mono text-gray-400 tracking-wider uppercase">
          ESTABLISH SECURE LINK WITH KANISHKA THROUGH STARDUST OR SOCIAL METRIC CHANNELS
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left Side: Contact Form Portal */}
        <div className="lg:col-span-7">
          <div className="glass-panel rounded-3xl p-6 md:p-8 border border-[#ffb7c5]/15 relative overflow-hidden bg-gradient-to-br from-[#1b122c]/40 to-transparent">
            <h3 className="font-display font-extrabold text-xl text-[#ffb7c5] mb-2 flex items-center gap-2">
              <span>Send a Cosmic Message</span>
              <Sparkles size={16} className="text-[#ffb7c5] animate-pulse" />
            </h3>
            <p className="text-xs text-gray-400 leading-relaxed mb-6">
              Recruiters, mentors, and fellow explorers are welcome! Leave a message below, and Mochi will immediately notify Kanishka.
            </p>

            {submitted ? (
              <div className="p-6 rounded-2xl bg-green-500/10 border border-green-500/20 text-center space-y-4 animate-float">
                <div className="w-12 h-12 rounded-full bg-green-500/20 flex items-center justify-center mx-auto text-green-400 shadow-[0_0_15px_rgba(34,197,94,0.3)]">
                  <CheckCircle size={24} />
                </div>
                <div className="space-y-1">
                  <h4 className="font-display font-bold text-base text-white">Transmission Successful!</h4>
                  <p className="text-xs text-gray-400 leading-relaxed max-w-sm mx-auto">
                    Your message was safely loaded into the **KanishkaVerse stardust buffer**! Mochi is currently nudging her. 🐇🌸
                  </p>
                </div>
                <button
                  onClick={() => setSubmitted(false)}
                  className="px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-[10px] font-mono text-white hover:bg-white/10 transition-colors cursor-pointer"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="text-[10px] font-mono text-gray-400 uppercase tracking-widest font-semibold">
                      Your Identity
                    </label>
                    <input 
                      type="text" 
                      required
                      placeholder="Explorer Name"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full bg-[#120a1d] border border-white/10 rounded-2xl px-4 py-3 text-xs text-white placeholder-gray-600 focus:outline-none focus:border-[#ffb7c5] transition-colors"
                    />
                  </div>
                  
                  <div className="space-y-1.5">
                    <label className="text-[10px] font-mono text-gray-400 uppercase tracking-widest font-semibold">
                      Your Signal Link
                    </label>
                    <input 
                      type="email" 
                      required
                      placeholder="explorer@email.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full bg-[#120a1d] border border-white/10 rounded-2xl px-4 py-3 text-xs text-white placeholder-gray-600 focus:outline-none focus:border-[#ffb7c5] transition-colors"
                    />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label className="text-[10px] font-mono text-gray-400 uppercase tracking-widest font-semibold">
                    Message Payload
                  </label>
                  <textarea 
                    required
                    rows={4}
                    placeholder="Type your cosmic whisper or career query here..."
                    value={formData.msg}
                    onChange={(e) => setFormData({ ...formData, msg: e.target.value })}
                    className="w-full bg-[#120a1d] border border-white/10 rounded-2xl px-4 py-3 text-xs text-white placeholder-gray-600 focus:outline-none focus:border-[#ffb7c5] transition-colors resize-none"
                  />
                </div>

                <button 
                  type="submit"
                  disabled={loading}
                  className="w-full py-3 bg-gradient-to-r from-[#ffb7c5] to-[#d883ff] text-[#0b0713] font-bold rounded-2xl hover:shadow-[0_0_15px_rgba(255,183,197,0.3)] hover:brightness-105 active:scale-99 transition-all cursor-pointer flex items-center justify-center gap-2"
                >
                  {loading ? (
                    <span className="text-xs font-mono animate-pulse">Transferring telemetry stream...</span>
                  ) : (
                    <>
                      <span>Transmit Message</span>
                      <Send size={14} />
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>

        {/* Right Side: Contact Information Cards */}
        <div className="lg:col-span-5 space-y-6">
          <div className="glass-panel rounded-3xl p-6 border border-[#ffb7c5]/10 space-y-6">
            <h3 className="font-display font-bold text-lg text-white">Direct Coordinates</h3>

            <div className="space-y-4.5">
              {/* Coordinates: Phone */}
              <div className="flex items-center gap-4">
                <div className="w-9 h-9 rounded-xl bg-[#ffb7c5]/10 border border-[#ffb7c5]/20 flex items-center justify-center text-[#ffb7c5] shrink-0">
                  <Phone size={16} />
                </div>
                <div className="leading-tight">
                  <span className="text-[9px] font-mono text-gray-500 uppercase tracking-widest block">Voice / Mobile</span>
                  <a href={`tel:${meta.mobile_no}`} className="text-xs font-bold text-white hover:text-[#ffb7c5] transition-colors font-mono">
                    +91 {meta.mobile_no}
                  </a>
                </div>
              </div>

              {/* Coordinates: Email */}
              <div className="flex items-center gap-4">
                <div className="w-9 h-9 rounded-xl bg-[#ffb7c5]/10 border border-[#ffb7c5]/20 flex items-center justify-center text-[#ffb7c5] shrink-0">
                  <Mail size={16} />
                </div>
                <div className="leading-tight">
                  <span className="text-[9px] font-mono text-gray-500 uppercase tracking-widest block">Secure Email</span>
                  <a href={`mailto:${meta.email}`} className="text-xs font-bold text-white hover:text-[#ffb7c5] transition-colors font-mono break-all">
                    {meta.email}
                  </a>
                </div>
              </div>

              {/* Coordinates: Location */}
              <div className="flex items-center gap-4">
                <div className="w-9 h-9 rounded-xl bg-[#ffb7c5]/10 border border-[#ffb7c5]/20 flex items-center justify-center text-[#ffb7c5] shrink-0">
                  <MapPin size={16} />
                </div>
                <div className="leading-tight">
                  <span className="text-[9px] font-mono text-gray-500 uppercase tracking-widest block">Home City</span>
                  <span className="text-xs font-bold text-white">
                    {meta.city}, Uttar Pradesh, India 🕌
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Social Channels Panel */}
          <div className="glass-panel rounded-3xl p-6 border border-[#ffb7c5]/10 space-y-4">
            <h3 className="font-display font-bold text-base text-white">Network Metrics</h3>
            <div className="grid grid-cols-2 gap-3">
              <a 
                href={meta.linkedin_link} 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex flex-col items-center justify-center p-4 rounded-2xl bg-[#ffb7c5]/5 border border-[#ffb7c5]/10 hover:bg-[#ffb7c5]/15 hover:border-[#ffb7c5]/40 transition-all cursor-pointer text-center space-y-2 group"
              >
                <Linkedin size={20} className="text-[#ffb7c5] group-hover:scale-110 transition-transform" />
                <span className="text-[10px] font-mono text-gray-300">LinkedIn</span>
              </a>

              <a 
                href={meta.github_link} 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex flex-col items-center justify-center p-4 rounded-2xl bg-[#ffb7c5]/5 border border-[#ffb7c5]/10 hover:bg-[#ffb7c5]/15 hover:border-[#ffb7c5]/40 transition-all cursor-pointer text-center space-y-2 group"
              >
                <Github size={20} className="text-[#ffb7c5] group-hover:scale-110 transition-transform" />
                <span className="text-[10px] font-mono text-gray-300">GitHub</span>
              </a>
            </div>

            {/* Document link card */}
            <a 
              href={meta.resume_link} 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-full flex items-center justify-center gap-2 p-3.5 rounded-2xl bg-white/5 border border-white/10 hover:border-[#ffb7c5]/40 hover:bg-white/10 text-xs font-mono text-white transition-all cursor-pointer"
            >
              <FileText size={14} className="text-[#ffb7c5]" />
              <span>Explore Verified Resume</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
