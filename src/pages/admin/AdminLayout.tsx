import {
  FaTachometerAlt,
  FaEnvelope,
  FaMailBulk,
  FaUsers,
  FaCommentDots,
  FaRobot,
  FaBuilding,
  FaBars,
  FaTimes,
} from "react-icons/fa";
import { Outlet, Link, useLocation } from "react-router-dom";
import logo from "../../assets/Granth logo (6).png";
import { useState } from "react";
import { NotebookPen } from "lucide-react";

const AdminLayout = () => {
  const location = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { icon: <FaTachometerAlt />, label: "Dashboard", to: "/admin" },
    { icon: <FaUsers />, label: "Subscribers", to: "/admin/subscriber" },
    { icon: <FaCommentDots />, label: "Leads", to: "/admin/leads" },
    {
      icon: <FaBuilding />,
      label: "Property Listings",
      to: "/admin/property_listing",
    },
    { icon: <FaEnvelope />, label: "Newsletter", to: "/admin/newsletter" },
    { icon: <FaMailBulk />, label: "Emailer", to: "/admin/emailer" },
    { icon: <FaRobot />, label: "Chatbot Leads", to: "/admin/chatbot" },
    { icon: <NotebookPen />, label: "Blogs", to: "/admin/blogs" },
  ];

  return (
    <div className="min-h-screen bg-black text-white font-raleway flex flex-col lg:flex-row">
      {/* Mobile Top Bar */}
      <div className="lg:hidden bg-[#111] flex items-center justify-between px-4 py-3 shadow-md relative z-50">
        <a href="/admin">
          <img src={logo} alt="logo" className="h-10 w-auto" />
        </a>
        <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
          {mobileMenuOpen ? (
            <FaTimes className="text-white text-xl" />
          ) : (
            <FaBars className="text-white text-xl" />
          )}
        </button>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed top-16 left-0 right-0 bg-[#111] z-40 px-4 py-4 border-t border-gray-700 shadow-md">
          <nav className="flex flex-col gap-2 text-sm">
            {navItems.map(({ icon, label, to }) => (
              <Link
                key={to}
                to={to}
                onClick={() => setMobileMenuOpen(false)}
                className={`flex items-center gap-2 px-3 py-2 rounded ${
                  location.pathname === to
                    ? "bg-[var(--primary-color)] text-black font-semibold"
                    : "hover:bg-[var(--primary-color)] hover:text-black"
                }`}
              >
                {icon} {label}
              </Link>
            ))}
          </nav>
        </div>
      )}

      {/* Fixed Sidebar for Desktop */}
      <aside className="hidden lg:flex fixed top-0 left-0 h-full w-64 bg-[#111] shadow-md p-4 flex-col space-y-4 z-40">
        <a href="/admin">
          <img src={logo} alt="logo" className="h-14 w-auto mx-auto mb-2" />
        </a>
        <nav className="flex flex-col gap-2 text-sm">
          {navItems.map(({ icon, label, to }) => (
            <NavItem
              key={to}
              icon={icon}
              label={label}
              to={to}
              active={location.pathname === to}
            />
          ))}
        </nav>
      </aside>

      {/* Main Content Area */}
      <main className="flex-1 p-4 sm:p-6 lg:pl-64">
        <Outlet />
      </main>
    </div>
  );
};

const NavItem = ({
  icon,
  label,
  to,
  active,
}: {
  icon: React.ReactNode;
  label: string;
  to: string;
  active?: boolean;
}) => (
  <Link
    to={to}
    className={`flex items-center gap-2 px-3 py-2 rounded whitespace-nowrap ${
      active
        ? "bg-[var(--primary-color)] text-black font-semibold"
        : "hover:bg-[var(--primary-color)] hover:text-black"
    }`}
  >
    {icon} {label}
  </Link>
);

export default AdminLayout;
