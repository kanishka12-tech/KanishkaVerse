import { staticPortfolioData } from "../data";
import { Award, Calendar, Bookmark, ExternalLink } from "lucide-react";

export default function Certifications() {
  const certifications = staticPortfolioData.certifications;

  return (
    <div className="space-y-10 py-4 select-none animate-fade-in">
      {/* Title header */}
      <div className="space-y-2">
        <h2 className="font-display font-extrabold text-3xl md:text-4xl text-white tracking-wide">
          Certifications <span className="text-gradient-sakura">Vault</span> 📜
        </h2>
        <p className="text-xs font-mono text-gray-400 tracking-wider uppercase">
          EXPLORE VERIFIED TECHNICAL BADGES, AI WORKSHOPS, AND NATIONAL HACKATHONS
        </p>
      </div>

      {/* Grid Layout */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {certifications.map((cert) => {
          const isAzure = cert.certificate_name.toLowerCase().includes("azure");
          const isWorkshop = cert.certificate_name.toLowerCase().includes("workshop");
          const isHackathon = cert.certificate_name.toLowerCase().includes("hack") || cert.certificate_name.toLowerCase().includes("covolve");

          return (
            <div 
              key={cert.certification_id}
              className="glass-panel rounded-3xl p-5 border border-[#ffb7c5]/10 hover:border-[#ffb7c5]/35 hover:translate-y-[-4px] transition-all duration-300 flex flex-col justify-between group relative overflow-hidden shadow-md"
            >
              {/* Soft visual accent */}
              <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-bl from-white/3 to-transparent pointer-events-none" />

              <div className="space-y-4">
                {/* Header Row with thematic icon */}
                <div className="flex items-center justify-between">
                  <div className="w-10 h-10 rounded-2xl bg-[#ffb7c5]/10 border border-[#ffb7c5]/25 flex items-center justify-center text-xl shadow-[0_0_10px_rgba(255,183,197,0.1)]">
                    {isAzure ? "☁️" : isWorkshop ? "🤖" : "🏆"}
                  </div>
                  
                  {cert.credential_id && (
                    <span className="text-[9px] font-mono text-gray-400 bg-white/5 px-2 py-0.5 rounded border border-white/5">
                      ID: {cert.credential_id}
                    </span>
                  )}
                </div>

                {/* Name & Issuing details */}
                <div className="space-y-1">
                  <h3 className="font-display font-extrabold text-base text-white group-hover:text-[#ffb7c5] transition-colors leading-tight min-h-12 flex items-center">
                    {cert.certificate_name}
                  </h3>
                  
                  <div className="flex flex-col gap-1 text-[10px] font-mono text-gray-400 uppercase tracking-wider leading-none">
                    <span className="text-[#d883ff] font-semibold">{cert.issuing_organization}</span>
                    <span className="text-gray-500 mt-1 flex items-center gap-1">
                      <Calendar size={10} />
                      {cert.issued_date}
                    </span>
                  </div>
                </div>
              </div>

              {/* Footer action link */}
              <div className="mt-5 pt-4 border-t border-white/5">
                <a 
                  href={cert.link_of_certificate} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center gap-1.5 py-2 rounded-xl bg-white/5 hover:bg-[#ffb7c5]/15 text-[10px] font-mono text-white transition-colors cursor-pointer border border-white/5 hover:border-[#ffb7c5]/30 group/btn"
                >
                  <span>Verify Credential Link</span>
                  <ExternalLink size={12} className="group-hover/btn:translate-y-[-1px] group-hover/btn:translate-x-[1px] transition-transform" />
                </a>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
