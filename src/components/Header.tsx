import React, { useEffect, useState } from "react";
import logo from "@/assets/mainlogo.svg";

const Header: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="h-screen w-full flex flex-col items-center justify-center relative overflow-hidden">
      {/* Background with gradient overlay */}
      <div className="absolute inset-0 bg-black">
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/80 to-black"></div>
      </div>

      {/* Logo and text content */}
      <div className="z-10 flex flex-col items-center justify-center px-4 text-center">
        <img
          src={logo}
          alt="Empire Oil Logo"
          className="w-40 h-40 md:w-56 md:h-56 lg:w-72 lg:h-72 animate-float"
        />
        <h1 className="mt-8 text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white">
          EMPIRE OIL
        </h1>
        <p className="mt-4 max-w-md text-lg md:text-xl text-white/80 font-light tracking-wide">
          PREMIUM QUALITY. ULTIMATE PERFORMANCE.
        </p>

        {/* CTA Button */}
        <button
          onClick={() =>
            document
              .getElementById("services")
              ?.scrollIntoView({ behavior: "smooth" })
          }
          className="mt-10 px-8 py-3 bg-white/10 backdrop-blur-md border border-white/20 rounded 
          hover:bg-white/20 transition-all duration-300 text-white font-light tracking-widest cursor-pointer"
        >
          EXPLORE
        </button>
      </div>

      {/* Animated particles */}
      <div className="absolute inset-0 pointer-events-none">
        {Array.from({ length: 30 }).map((_, i) => (
          <div
            key={i}
            className="absolute w-1.5 h-1.5 bg-white/30 rounded-full animate-float"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animationDuration: `${3 + Math.random() * 7}s`,
              animationDelay: `${Math.random() * 5}s`,
            }}
          />
        ))}
      </div>
    </header>
  );
};

export default Header;
