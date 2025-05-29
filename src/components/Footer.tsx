import {
  FaEnvelope,
  FaFacebookF,
  FaLinkedinIn,
  FaWhatsapp,
  FaInstagram,
  FaYoutube,
} from "react-icons/fa";
import logo from "../assets/logo2.png";
import { IoMdSend } from "react-icons/io";

const Footer = () => {
  return (
    <footer className="bg-white dark:bg-black text-black dark:text-white  text-sm">
      {/* Top horizontal line */}
      <div className="border-t border-gray-300 dark:border-gray-700 w-full" />

      {/* Logo and CONTACTS Title */}
      <div className="w-full max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center px-6 sm:px-12 lg:px-6">
        <div className="flex flex-col items-center md:items-start">
          <div className="flex items-center gap-4">
            <div className="w-16 border-t border-[var(--primary-color)]" />
            <img
              src={logo}
              alt="Logo"
              className="w-24 md:w-40 h-auto object-contain py-2"
            />
            <div className="w-20 border-t border-[var(--primary-color)]" />
          </div>
        </div>
        <h2 className="text-2xl font-thin mt-5 md:mt-0">CONTACTS</h2>
      </div>

      {/* Mid horizontal line */}
      <div className="md:max-w-7xl mx-auto border-t border-gray-300 dark:border-gray-700 w-full mb-8" />

      {/* Main content with 3 columns */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8 px-6 sm:px-12 lg:px-6 pb-10 ">
        {/* Left: Newsletter */}
        <div className="w-full max-w-[300px]">
          <h3 className="text-lg mb-4 font-semibold">
            Subscribe to our Newsletter
          </h3>
          <p className="text-sm mb-4 text-gray-600 dark:text-gray-400">
            Don’t miss our future updates! Get Subscribed Today!
          </p>
          <form className="flex items-center">
            <input
              type="email"
              placeholder="Your email here"
              className="flex-grow px-4 py-[7px] text-sm text-black rounded-l-full outline-none bg-white dark:bg-gray-100"
            />
            <button
              type="submit"
              className="bg-[var(--primary-color)] px-4 py-2 rounded-r-full text-white text-sm uppercase hover:opacity-90 transition"
            >
              <IoMdSend className="text-black text-lg" />
            </button>
          </form>
        </div>
        {/* Center: Quick Links */}
        <div className="grid grid-cols-2 md:grid-cols-2 gap-6 justify-center">
          {[
            [
              { label: "Buy Properties", path: "/buy" },
              { label: "Rent Properties", path: "/rent" },
              { label: "Sell Properties", path: "/sell" },
              { label: "Off-Plan Properties", path: "/offplan" },
            ],
            [
              { label: "Catalogs", path: "/catalogs" },
              { label: "Area Guides", path: "/area-guides" },
              { label: "Contact Us", path: "/contact" },
            ],
          ].map((group, idx) => (
            <ul key={idx} className="space-y-4">
              {group.map((item, i) => (
                <li key={i}>
                  <a
                    href={item.path}
                    className="cursor-pointer hover:text-[var(--primary-color)] transition"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          ))}
        </div>

        {/* Right: Contact Info */}
        <div className="space-y-4 lg:text-right">
          <h3 className="text-lg">Goa</h3>
          <p className="text-gray-700 dark:text-gray-200">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit.
          </p>
          <div className="flex justify-start lg:justify-end gap-4 pt-2 text-[var(--primary-color)] text-xl">
            <a
              href="mailto:info@Granthproperties.ae"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:opacity-80 p-2 rounded"
            >
              <FaEnvelope />
            </a>
            <a
              href="https://www.facebook.com/p/Granth-Group-61554982800603"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:opacity-80 p-2 rounded"
            >
              <FaFacebookF />
            </a>
            <a
              href="https://www.linkedin.com/company/Granthproperties"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:opacity-80 p-2 rounded"
            >
              <FaLinkedinIn />
            </a>
            <a
              href="https://wa.me/971521110795"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:opacity-80 p-2 rounded"
            >
              <FaWhatsapp />
            </a>
            <a
              href="https://www.instagram.com/Granthproperties/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:opacity-80 p-2 rounded"
            >
              <FaInstagram />
            </a>
            <a
              href="https://www.youtube.com/@GranthPropertiesOfficial"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:opacity-80 p-2 rounded"
            >
              <FaYoutube />
            </a>
          </div>
          <button className="mt-4 border border-[var(--primary-color)] text-black hover:opacity-80 px-6 py-2 uppercase tracking-wide bg-gradient-to-r from-[var(--primary-color)] via-[#e3c5b5] to-[var(--primary-color)] transition">
            <a href="tel:+971521110794">Call Us</a>
          </button>
        </div>
      </div>

      {/* Footer Bottom Links */}
      <div className="max-w-7xl mx-auto px-6 sm:px-12 lg:px-6 py-6 text-xs text-gray-600 dark:text-gray-400 flex flex-col sm:flex-row justify-between gap-2">
        <span>Granth ©2025 All Rights Reserved</span>
        <div className="flex gap-4">
          {["Terms of Use", "Privacy Policy"].map((item, idx) => (
            <a
              key={idx}
              href="#"
              className="cursor-pointer hover:text-[var(--primary-color)] transition"
            >
              {item}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
