import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FiMenu, FiSun, FiMoon, FiPhone } from "react-icons/fi";
import logo from "../assets/logo2.png";
import {
  FaFacebook,
  FaInstagram,
  FaYoutube,
  FaTwitter,
  FaWhatsapp,
} from "react-icons/fa";
import "../index.css";

declare global {
  interface Window {
    googleTranslateElementInit: () => void;
    google: any;
  }
}

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeItem, setActiveItem] = useState<string | null>(null);

  const [darkMode, setDarkMode] = useState(() => {
    return localStorage.getItem("theme")
      ? localStorage.getItem("theme") === "dark"
      : true;
  });

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);

  const navItems = [
    { label: "Buy", path: "/buy" },
    { label: "Rent", path: "/rent" },
    { label: "Sell", path: "/sell" },
    { label: "Off-Plan", path: "/offplan" },
    { label: "Blogs", path: "/blog" },
    { label: "About Us", path: "/about" },
    { label: "Contact Us", path: "/contact" },
  ];

  useEffect(() => {
    const googleTranslateElementInit = () => {
      new window.google.translate.TranslateElement(
        {
          pageLanguage: "en",
          autoDisplay: false,
        },
        "google_translate_element"
      );
    };

    const loadGoogleTranslateScript = () => {
      if (!window.googleTranslateElementInit) {
        const script = document.createElement("script");
        script.src =
          "//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit";
        script.async = true;
        document.body.appendChild(script);
        window.googleTranslateElementInit = googleTranslateElementInit;
      }
    };

    loadGoogleTranslateScript();
  }, []);

  return (
    <>
      <nav className="bg-white dark:bg-black text-black dark:text-white font-raleway font-light dark:font-thin w-full fixed top-0 z-50 border-b border-gray-200 dark:border-gray-800 transition-colors">
        <div className="w-full mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-24 items-center">
            {/* Mobile View */}
            <div className="flex items-center w-full justify-between md:hidden">
              <a href="/">
                <img
                  src={logo}
                  alt="Mondus Logo"
                  className="h-20"
                  draggable="false"
                />
              </a>

              <div className="flex gap-4">
                <button
                  onClick={() => setDarkMode(!darkMode)}
                  className="text-xl text-inherit"
                  title="Toggle Theme"
                >
                  {darkMode ? <FiSun /> : <FiMoon />}
                </button>
                <button
                  onClick={() => setIsOpen(!isOpen)}
                  className="text-inherit text-2xl"
                >
                  <FiMenu />
                </button>
              </div>
            </div>

            {/* Desktop View */}
            <div className="hidden md:flex w-full justify-between items-center">
              <div className="flex items-center space-x-4">
                <div className="h-20 pr-6 mr-6 border-r border-gray-600 dark:border-gray-400 flex items-center">
                  <a href="/">
                    <img src={logo} alt="AX Logo" className="h-16" />
                  </a>
                </div>
                <div className="flex items-center gap-8">
                  {navItems.map((item, index) => (
                    <a
                      key={index}
                      href={item.path}
                      onClick={() => setActiveItem(item.label)}
                      className={`relative pb-2 text-sm text-inherit transition-colors hover:text-[var(--primary-color)] ${
                        activeItem === item.label ? "font-light text-md" : ""
                      }`}
                    >
                      {item.label}
                    </a>
                  ))}
                </div>
              </div>

              <div className="flex items-center space-x-6">
                <div className="flex items-center space-x-6">
                  <a
                    href="https://wa.me/971521110795"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaWhatsapp className="text-[var(--primary-color)] text-2xl cursor-pointer font-light" />
                  </a>
                </div>
                <div className="relative group">
                  <span className="text-sm text-[var(--primary-color)] font-medium cursor-pointer py-8">
                    Follow Us
                  </span>

                  <div
                    className={`absolute top-12 -right-16 min-w-[150px] rounded shadow-lg z-50 opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none group-hover:pointer-events-auto ${
                      darkMode
                        ? "bg-gray-800 text-white"
                        : "bg-white text-black"
                    }`}
                  >
                    <a
                      href="https://www.facebook.com/p/Mondus-Group-61554982800603"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-2 hover:bg-gray-700 hover:text-white"
                    >
                      <FaFacebook size={16} />
                      Facebook
                    </a>
                    <a
                      href="https://www.instagram.com/mondusproperties/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-2 hover:bg-gray-700 hover:text-white"
                    >
                      <FaInstagram size={16} />
                      Instagram
                    </a>
                    <a
                      href="https://www.tiktok.com/@mondus.properties"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-2 hover:bg-gray-700 hover:text-white"
                    >
                      <FaTwitter />
                      Twitter
                    </a>

                    <a
                      href="https://www.youtube.com/@MondusPropertiesOfficial"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-2 hover:bg-gray-700 hover:text-white"
                    >
                      <FaYoutube size={16} />
                      Youtube
                    </a>
                  </div>
                </div>
                <span className="text-sm text-[var(--primary-color)] font-medium cursor-pointer">
                  <a href="tel:+971521110794">Call Us</a>
                </span>
                <div className="w-px h-6 bg-gray-400 dark:bg-gray-600"></div>

                <button
                  onClick={() => setDarkMode(!darkMode)}
                  className="text-xl text-inherit transition-colors"
                  title="Toggle Theme"
                >
                  {darkMode ? <FiSun /> : <FiMoon />}
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {isOpen && (
          <div className="md:hidden fixed inset-0 z-[9999] bg-white dark:bg-black flex flex-col pl-2 pr-5 pb-6 pt-3">
            <div className="flex justify-between items-center mb-6">
              <img src={logo} alt="Mondus Logo" className="w-28" />
              <button
                onClick={() => setIsOpen(false)}
                className="text-2xl text-inherit"
              >
                ✕
              </button>
            </div>

            <div className="flex flex-col space-y-4 px-5">
              {navItems.map((item, index) => (
                <Link
                  key={index}
                  to={item.path}
                  onClick={() => {
                    setActiveItem(item.label);
                    setIsOpen(false);
                  }}
                  className="text-lg text-inherit hover:text-[var(--primary-color)] transition-colors"
                >
                  {item.label}
                </Link>
              ))}
            </div>

            {/* Bottom Buttons */}
            <div className="absolute bottom-0 left-0 w-full flex">
              <div className="w-1/2 bg-[var(--primary-color)] text-white text-center py-3">
                <a
                  href="tel:+1234567890"
                  className="w-full flex items-center justify-center gap-2"
                >
                  <FiPhone size={18} />
                  Call Us
                </a>
              </div>
              <div className="w-1/2 bg-white text-green-500 text-center py-3 border-l border-white">
                <a
                  href="https://wa.me/1234567890"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center gap-2"
                >
                  <FaWhatsapp size={18} />
                  WhatsApp
                </a>
              </div>
            </div>
          </div>
        )}
      </nav>

      {!isOpen && (
        <div
          id="google_translate_element"
          className="fixed z-[999] right-[90px] top-8 translate-x-0 md:right-[250px] md:top-[30px] md:-translate-x-1/2"
        />
      )}
    </>
  );
};

export default Navbar;
