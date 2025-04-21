import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-black py-8 border-t border-white/10">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <span className="text-xl font-bold tracking-widest">
              EMPIRE OIL
            </span>
            <p className="text-gray-400 text-sm mt-2">
              © {new Date().getFullYear()} Empire Oil. All rights reserved.
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-6">
            <a
              href="#"
              className="text-gray-400 hover:text-white text-sm tracking-wide cursor-pointer"
            >
              PRIVACY POLICY
            </a>
            <a
              href="#"
              className="text-gray-400 hover:text-white text-sm tracking-wide cursor-pointer"
            >
              TERMS OF SERVICE
            </a>
            <a
              href="#"
              className="text-gray-400 hover:text-white text-sm tracking-wide cursor-pointer"
            >
              CAREERS
            </a>
            <a
              href="#"
              className="text-gray-400 hover:text-white text-sm tracking-wide cursor-pointer"
            >
              DISTRIBUTORS
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
