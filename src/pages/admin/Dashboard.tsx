import { useEffect, useState } from "react";
import {
  FaUsers,
  FaNewspaper,
  FaEnvelope,
  FaPhoneAlt,
  FaBuilding,
  FaBook,
} from "react-icons/fa";

const Dashboard = () => {
  const [subscriberCount, setSubscriberCount] = useState(0);
  const [newsletterCount, setNewsletterCount] = useState(0);
  const [emailerCount, setEmailerCount] = useState(0);
  const [contactCount, setContactCount] = useState(0);
  const [propertyCount, setPropertyCount] = useState(0);
  const [blogsCount, setBlogsCount] = useState(0);

  useEffect(() => {
    fetch("https://granth-backend.onrender.com/subscribers")
      .then((res) => res.json())
      .then((data) => setSubscriberCount(data.length));

    fetch("https://granth-backend.onrender.com/newsletter")
      .then((res) => res.json())
      .then((data) => setNewsletterCount(data.length));

    fetch("https://granth-backend.onrender.com/emailer")
      .then((res) => res.json())
      .then((data) => setEmailerCount(data.length));

    fetch("https://granth-backend.onrender.com/api/leads")
      .then((res) => res.json())
      .then((data) => setContactCount(data.length));

    fetch("https://granth-backend.onrender.com/api/property/list")
      .then((res) => res.json())
      .then((data) => setPropertyCount(data.length));
    fetch("https://granth-backend.onrender.com/api/blogs/viewblog")
      .then((res) => res.json())
      .then((data) => setBlogsCount(data.length));
  }, []);

  return (
    <div className="p-6 space-y-8">
      <h2 className="text-3xl font-bold text-center">📊 Admin Dashboard</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <StatCard
          title="Newsletter Subscribers"
          count={subscriberCount}
          icon={<FaUsers />}
          gradient="from-pink-200 to-red-200"
        />
        <StatCard
          title="Sent Newsletters"
          count={newsletterCount}
          icon={<FaNewspaper />}
          gradient="from-purple-200 to-indigo-200"
        />
        <StatCard
          title="Sent Emailers"
          count={emailerCount}
          icon={<FaEnvelope />}
          gradient="from-green-200 to-blue-200"
        />
        <StatCard
          title="Leads Generated"
          count={contactCount}
          icon={<FaPhoneAlt />}
          gradient="from-yellow-200 to-orange-200"
        />
        <StatCard
          title="Property Listings"
          count={propertyCount}
          icon={<FaBuilding />}
          gradient="from-cyan-200 to-teal-200"
        />
        <StatCard
          title="Blogs"
          count={blogsCount}
          icon={<FaBook />}
          gradient="from-red-200 to-orange-200"
        />
      </div>
    </div>
  );
};

interface StatCardProps {
  title: string;
  count: number;
  icon: React.ReactNode;
  gradient: string;
}

const StatCard = ({ title, count, icon, gradient }: StatCardProps) => (
  <div
    className={`bg-gradient-to-r ${gradient} text-gray-800 p-6 rounded-2xl shadow-md transition transform hover:scale-105`}
  >
    <div className="flex items-center justify-between mb-4">
      <div className="text-4xl">{icon}</div>
      <p className="text-4xl font-bold">{count}</p>
    </div>
    <h3 className="text-lg font-semibold">{title}</h3>
  </div>
);

export default Dashboard;
