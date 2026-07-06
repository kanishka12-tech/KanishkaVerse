import { useEffect, useState } from "react";

interface Petal {
  id: number;
  left: string;
  size: string;
  delay: string;
  duration: string;
  rotation: string;
}

export default function Background() {
  const [petals, setPetals] = useState<Petal[]>([]);

  useEffect(() => {
    // Generate a set of cherry blossom petals with varied properties
    const newPetals = Array.from({ length: 18 }).map((_, idx) => {
      const size = Math.random() * 12 + 6; // 6px to 18px
      return {
        id: idx,
        left: `${Math.random() * 100}%`,
        size: `${size}px`,
        delay: `${Math.random() * 10}s`,
        duration: `${Math.random() * 15 + 10}s`, // 10s to 25s
        rotation: `${Math.random() * 360}deg`
      };
    });
    setPetals(newPetals);
  }, []);

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      {/* Absolute background color and galaxy nebula gradients */}
      <div className="absolute inset-0 bg-[#06040b]" />

      {/* Cosmic Nebula Orbs (Slowly Pulsing) */}
      <div 
        className="absolute top-[-10%] left-[-10%] w-[50vw] h-[50vw] rounded-full bg-gradient-to-br from-[#8a2be2]/15 to-[#ffb7c5]/5 blur-[120px] animate-pulse-slow"
        style={{ animationDuration: "12s" }}
      />
      <div 
        className="absolute bottom-[-10%] right-[-10%] w-[60vw] h-[60vw] rounded-full bg-gradient-to-tr from-[#ffb7c5]/15 to-[#4b0082]/10 blur-[140px] animate-pulse-slow"
        style={{ animationDuration: "16s" }}
      />
      <div 
        className="absolute top-[40%] left-[60%] w-[35vw] h-[35vw] rounded-full bg-gradient-to-r from-[#d883ff]/10 to-transparent blur-[100px] animate-pulse-slow"
        style={{ animationDuration: "9s" }}
      />

      {/* Twinkling Stars (Static positions, randomized sizes) */}
      <div className="absolute inset-0 opacity-40">
        {Array.from({ length: 40 }).map((_, i) => {
          const top = `${Math.random() * 100}%`;
          const left = `${Math.random() * 100}%`;
          const size = Math.random() * 3 + 1; // 1px to 4px
          const delay = `${Math.random() * 4}s`;
          return (
            <div
              key={`star-${i}`}
              className="absolute bg-white rounded-full animate-twinkle"
              style={{
                top,
                left,
                width: `${size}px`,
                height: `${size}px`,
                animationDelay: delay,
                boxShadow: size > 2 ? "0 0 8px #ffffff" : "none"
              }}
            />
          );
        })}
      </div>

      {/* Floating Sparkles / Cosmic Dust */}
      <div className="absolute inset-0 opacity-50">
        {Array.from({ length: 15 }).map((_, i) => {
          const top = `${Math.random() * 100}%`;
          const left = `${Math.random() * 100}%`;
          const size = Math.random() * 4 + 2;
          const delay = `${Math.random() * 6}s`;
          return (
            <div
              key={`sparkle-${i}`}
              className="absolute rounded-full bg-gradient-to-br from-[#ffb7c5] to-[#d883ff] animate-float"
              style={{
                top,
                left,
                width: `${size}px`,
                height: `${size}px`,
                animationDelay: delay,
                opacity: 0.6
              }}
            />
          );
        })}
      </div>

      {/* Animated Sakura Cherry Blossom Petals */}
      {petals.map((petal) => (
        <div
          key={petal.id}
          className="sakura-petal"
          style={{
            left: petal.left,
            width: petal.size,
            height: petal.size,
            animationDelay: petal.delay,
            animationDuration: petal.duration,
            transform: `rotate(${petal.rotation})`,
            animationName: "fall",
            animationTimingFunction: "linear",
            animationIterationCount: "infinite"
          }}
        />
      ))}
    </div>
  );
}
