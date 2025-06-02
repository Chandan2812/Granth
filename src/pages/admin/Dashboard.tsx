import { useEffect, useState } from "react";

const Dashboard = () => {
  const [subscriberCount, setSubscriberCount] = useState(0);
  const [newsletterCount, setNewsletterCount] = useState(0);
  const [emailerCount, setEmailerCount] = useState(0);
  const [contactCount, setContactCount] = useState(0);

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
  }, []);

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold mb-4">Admin Dashboard</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <StatCard title="Subscribers" count={subscriberCount} />
        <StatCard title="Newsletters" count={newsletterCount} />
        <StatCard title="Emailers" count={emailerCount} />
        <StatCard title="Contact Requests" count={contactCount} />
      </div>
    </div>
  );
};

const StatCard = ({ title, count }: { title: string; count: number }) => (
  <div className="bg-[#222] p-4 rounded shadow text-center">
    <h3 className="text-lg font-semibold">{title}</h3>
    <p className="text-2xl font-bold text-[var(--primary-color)]">{count}</p>
  </div>
);

export default Dashboard;
