import {
  FaTachometerAlt,
  FaEnvelope,
  FaMailBulk,
  FaUsers,
  FaCommentDots,
  FaRobot,
  FaBuilding,
} from "react-icons/fa";
import { Outlet, Link, useLocation } from "react-router-dom";
import logo from "../../assets/Granth logo (6).png";

const AdminLayout = () => {
  const location = useLocation();

  // Define nav items array for reuse
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
  ];

  return (
    <div className="min-h-screen bg-black text-white font-raleway flex flex-col lg:flex-row">
      {/* Mobile Top Nav */}
      <div className="lg:hidden bg-[#111] flex items-center justify-between px-4 py-3 shadow-md">
        <a href="/">
          <img src={logo} alt="logo" className="h-10 w-auto" />
        </a>
      </div>

      {/* Sidebar for Desktop */}
      <aside className="hidden lg:flex lg:flex-col w-64 bg-[#111] shadow-md p-4 space-y-4">
        <a href="/">
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

      {/* Improved Mobile Bottom Navigation */}
      <nav className="lg:hidden fixed bottom-0 left-0 right-0 bg-[#111] border-t border-[#222] flex justify-around items-center h-14 z-50">
        {navItems.map(({ icon, label, to }) => {
          const isActive = location.pathname === to;
          return (
            <Link
              key={to}
              to={to}
              className={`flex flex-col items-center justify-center flex-1 text-xs ${
                isActive
                  ? "text-[var(--primary-color)] font-semibold"
                  : "text-gray-400 hover:text-[var(--primary-color)]"
              }`}
            >
              <div className="text-lg">{icon}</div>
              <span className="mt-0.5">{label}</span>
            </Link>
          );
        })}
      </nav>

      {/* Main Content Area */}
      <main className="flex-1 p-4 sm:p-6 pb-20 lg:pb-6">
        {/* Add bottom padding on mobile so content isn't hidden under nav */}
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
