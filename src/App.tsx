import { useState, useEffect } from "react";
import { Element } from "react-scroll";
import Header from "./components/Header";
import PreHeader from "./components/PreHeader";
import Services from "./components/Services";
import Merch from "./components/Merch";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Locations from "./components/Locations";

function App() {
  const [showScrollButton, setShowScrollButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowScrollButton(true);
      } else {
        setShowScrollButton(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className="relative min-h-screen bg-black text-white">
      <PreHeader />
      <Element name="home">
        <Header />
      </Element>
      <Element name="products">
        <Services />
      </Element>
      <Element name="merch">
        <Merch />
      </Element>
      <Element name="locations">
        <Locations />
      </Element>
      <Element name="contact">
        <Contact />
      </Element>
      <Footer />

      {showScrollButton && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 bg-white text-black p-3 rounded-full shadow-lg z-50 hover:bg-gray-200 transition duration-300"
          aria-label="Scroll to top"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M5 10l7-7m0 0l7 7m-7-7v18"
            />
          </svg>
        </button>
      )}
    </div>
  );
}

export default App;
