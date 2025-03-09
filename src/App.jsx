import { useState, useEffect } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import i18n from "i18next";
import Navbar from "./components/Navbar";
import AppRoutes from "./routes";

function App() {
  const [direction, setDirection] = useState("ltr");
  const [isOpen, setIsOpen] = useState(true);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 630);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 630);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const toggleDirection = () => {
    const newDirection = direction === "ltr" ? "rtl" : "ltr";
    setDirection(newDirection);
    document.documentElement.dir = newDirection; // Apply to <html> tag globally
    const newLanguage = i18n.language === "en" ? "he" : "en";
    i18n.changeLanguage(newLanguage);
  };

  return (
    <Router>
      <div dir={direction} className="flex">
        <Navbar
          direction={direction}
          toggleDirection={toggleDirection}
          isOpen={isOpen}
          setIsOpen={setIsOpen}
          isMobile={isMobile}
        />

        <main
          className={`flex-1 transition-all duration-300 p-6 ${isMobile
            ? isOpen
              ? "mt-75 w-full"  // Header open, full width
              : "mt-10 w-full"   // Header closed, full width
            : isOpen
              ? direction === "ltr"
                ? "ml-60 w-[calc(100%-15rem)]"  // Sidebar open (full width minus 60px sidebar)
                : "mr-60 w-[calc(100%-15rem)]"  // Sidebar open in RTL
              : direction === "ltr"
                ? "ml-16 w-full"   // Sidebar closed in LTR
                : "mr-16 w-full"
            }`
          }
        >
          <AppRoutes isOpen={isOpen} isMobile={isMobile} />
        </main>
      </div>
    </Router>
  );
}

export default App;
