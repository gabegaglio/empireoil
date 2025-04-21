import React, { useState, useEffect } from "react";

const PreHeader: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div
      className={`fixed w-full top-0 z-50 transition-all duration-300 ${
        isScrolled ? "py-3 bg-black/80 backdrop-blur-md" : "py-6"
      }`}
    >
      <div className="container mx-auto flex justify-between items-center px-4">
        {/* Logo (visible when scrolled) */}
        <div
          className={`transition-opacity duration-300 cursor-pointer ${
            isScrolled ? "opacity-100" : "opacity-0"
          }`}
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        >
          <span className="text-xl font-bold tracking-widest">EMPIRE OIL</span>
        </div>

        {/* Navigation */}
        <nav className="mx-auto md:mr-0">
          <div className="flex space-x-1 md:space-x-6">
            <button
              onClick={() => scrollToSection("services")}
              className="text-white px-3 py-2 text-sm tracking-wider font-light hover:text-gray-300 transition-colors cursor-pointer"
            >
              SERVICES
            </button>

            <button
              onClick={() => scrollToSection("locations")}
              className="text-white px-3 py-2 text-sm tracking-wider font-light hover:text-gray-300 transition-colors cursor-pointer"
            >
              LOCATIONS
            </button>

            <button
              onClick={() => scrollToSection("merch")}
              className="text-white px-3 py-2 text-sm tracking-wider font-light hover:text-gray-300 transition-colors cursor-pointer"
            >
              MERCH
            </button>

            <button
              onClick={() => scrollToSection("contact")}
              className="text-white bg-white/10 backdrop-blur-xl rounded hover:bg-white/20 px-4 py-2 text-sm tracking-wider font-light transition-all duration-200 cursor-pointer"
            >
              CONTACT
            </button>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default PreHeader;
