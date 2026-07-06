export default function Loader() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[50vh] text-center p-8 relative z-10">
      <div className="relative w-24 h-24 mb-6">
        {/* Outer glowing ring */}
        <div className="absolute inset-0 rounded-full border-4 border-dashed border-[#ffb7c5]/30 animate-spin" style={{ animationDuration: "12s" }} />
        
        {/* Middle spinning pink ring */}
        <div className="absolute inset-2 rounded-full border-4 border-t-[#ffb7c5] border-r-transparent border-b-[#d883ff] border-l-transparent animate-spin" style={{ animationDuration: "3s" }} />

        {/* Inner cute glowing crescent moon/heart logo */}
        <div className="absolute inset-4 rounded-full bg-gradient-to-br from-[#1b1429] to-[#0c0914] flex items-center justify-center border border-[#ffb7c5]/20 shadow-[0_0_15px_rgba(255,183,197,0.2)]">
          <span className="text-2xl animate-pulse">🌙</span>
        </div>
      </div>
      
      <h3 className="font-display text-xl text-[#ffb7c5] tracking-wide animate-pulse mb-2">
        Traversing KanishkaVerse...
      </h3>
      <p className="text-sm text-gray-400 max-w-xs">
        Whispering to the cosmic database for records of her achievements ✨
      </p>
    </div>
  );
}
