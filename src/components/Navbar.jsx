import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Menu, X, Home, Grid3x3, Phone, Globe, RectangleEllipsis } from "lucide-react";
import { useTranslation } from "react-i18next";
import "../i18n";

const Navbar = ({ direction, toggleDirection, isOpen, setIsOpen, isMobile }) => {
  const { t } = useTranslation();

  const [isSmallScreen, setIsSmallScreen] = useState(
    window.innerWidth < 800 || window.innerHeight < 600
  );

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth < 800 || window.innerHeight < 600);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  
  return (
    <div className="flex flex-col">
      {isMobile ? (
        <div className="fixed top-0 left-0 w-full bg-gray-900 text-white p-4 flex items-center justify-between shadow-md z-50">
          <h1 className={`font-bold ${isSmallScreen ? "text-lg" : "text-xl"}`}>{t("app.title")}</h1>
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="flex items-center justify-center rounded-full p-2 transition-all duration-300 hover:bg-gray-700 hover:scale-110"
          >
            {isOpen ? <X size={isSmallScreen ? 24 : 30} className="text-red-400" /> : <Menu size={isSmallScreen ? 24 : 30} />}
          </button>
        </div>
      ) : (
        <div
          className={`bg-gray-900 text-white fixed top-0 ${
            direction === "ltr" ? "left-0" : "right-0"
          } h-screen transition-all duration-300 ${isOpen ? "w-60" : "w-16"} z-50 overflow-y-auto`}
        >
          <div className="flex items-center justify-between p-4">
            {isOpen && <h1 className={`font-bold ${isSmallScreen ? "text-lg" : "text-xl"}`}>{t("app.title")}</h1>}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="flex items-center justify-center rounded-full p-2 transition-all duration-300 hover:bg-gray-700 hover:scale-110"
            >
              {isOpen ? <X size={isSmallScreen ? 24 : 30} className="text-red-400" /> : <Menu size={isSmallScreen ? 24 : 30} />}
            </button>
          </div>

          <nav className={`px-4 flex flex-col flex-grow ${isSmallScreen ? "overflow-y-auto max-h-[70vh]" : ""}`}>
            <ul className={`flex flex-col gap-4 ${isSmallScreen ? "text-sm p-2" : "text-lg"}`}>
              <li>
                <Link to="/" className="flex items-center gap-3 hover:text-gray-400">
                  <Home size={isSmallScreen ? 20 : 24} />
                  {isOpen && <span className={isSmallScreen ? "text-sm" : "text-lg"}>{t("navigation.home")}</span>}
                </Link>
              </li>
              <li>
                <Link to="/fields" className="flex items-center gap-3 hover:text-gray-400">
                  <RectangleEllipsis size={isSmallScreen ? 20 : 24} />
                  {isOpen && <span className={isSmallScreen ? "text-sm" : "text-lg"}>{t("navigation.fields")}</span>}
                </Link>
              </li>
              <li>
                <Link to="/table" className="flex items-center gap-3 hover:text-gray-400">
                  <Grid3x3 size={isSmallScreen ? 20 : 24} />
                  {isOpen && <span className={isSmallScreen ? "text-sm" : "text-lg"}>{t("navigation.table")}</span>}
                </Link>
              </li>
              <li>
                <Link to="/contact" className="flex items-center gap-3 hover:text-gray-400">
                  <Phone size={isSmallScreen ? 20 : 24} />
                  {isOpen && <span className={isSmallScreen ? "text-sm" : "text-lg"}>{t("navigation.contact")}</span>}
                </Link>
              </li>
            </ul>
          </nav>

          <button
            onClick={toggleDirection}
            className={`flex items-center gap-3 p-4 w-full bg-gray-800 mt-auto hover:bg-gray-700 ${
              isSmallScreen ? "text-sm" : "text-lg"
            }`}
          >
            <Globe size={isSmallScreen ? 20 : 24} />
            {isOpen && <span className={isSmallScreen ? "text-sm" : "text-lg"}>{t("app.toggleRTL")}</span>}
          </button>
        </div>
      )}

      {isMobile && isOpen && (
        <div className="fixed top-16 left-0 w-full bg-gray-900 text-white p-4 shadow-md z-50 overflow-y-auto max-h-[75vh]">
          <ul className={`flex flex-col gap-4 ${isSmallScreen ? "text-sm p-2" : "text-lg"}`}>
            <li>
              <Link to="/" className="flex items-center gap-3 hover:text-gray-400">
                <Home size={isSmallScreen ? 20 : 24} />
                <span className={isSmallScreen ? "text-sm" : "text-lg"}>{t("navigation.home")}</span>
              </Link>
            </li>
            <li>
              <Link to="/fields" className="flex items-center gap-3 hover:text-gray-400">
                <RectangleEllipsis size={isSmallScreen ? 20 : 24} />
                <span className={isSmallScreen ? "text-sm" : "text-lg"}>{t("navigation.fields")}</span>
              </Link>
            </li>
            <li>
              <Link to="/table" className="flex items-center gap-3 hover:text-gray-400">
                <Grid3x3 size={isSmallScreen ? 20 : 24} />
                <span className={isSmallScreen ? "text-sm" : "text-lg"}>{t("navigation.table")}</span>
              </Link>
            </li>
            <li>
              <Link to="/contact" className="flex items-center gap-3 hover:text-gray-400">
                <Phone size={isSmallScreen ? 20 : 24} />
                <span className={isSmallScreen ? "text-sm" : "text-lg"}>{t("navigation.contact")}</span>
              </Link>
            </li>
          </ul>

          <button
            onClick={toggleDirection}
            className={`flex items-center gap-3 p-4 w-full bg-gray-800 hover:bg-gray-700 ${
              isSmallScreen ? "text-sm" : "text-lg"
            }`}
          >
            <Globe size={isSmallScreen ? 20 : 24} />
            <span className={isSmallScreen ? "text-sm" : "text-lg"}>{t("app.toggleRTL")}</span>
          </button>
        </div>
      )}
    </div>
  );
};

export default Navbar;
