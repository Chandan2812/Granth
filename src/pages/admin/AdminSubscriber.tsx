import { useEffect, useState } from "react";

interface Subscriber {
  _id: string;
  email: string;
  createdAt: string;
}

const AdminSubscriber = () => {
  const [subscribers, setSubscribers] = useState<Subscriber[]>([]);

  useEffect(() => {
    fetch("https://granth-backend.onrender.com/subscribers")
      .then((res) => res.json())
      .then((data) => setSubscribers(data))
      .catch((err) => console.error("Error fetching subscribers:", err));
  }, []);

  return (
    <div className="min-h-screen bg-black text-white font-raleway p-4 sm:p-6">
      <h1 className="text-2xl sm:text-3xl font-bold mb-6">Subscribers</h1>

      {subscribers.length === 0 ? (
        <p className="text-gray-400">No subscribers found.</p>
      ) : (
        <div className="overflow-x-auto">
          <table className="w-full table-auto border-collapse border border-gray-700 text-sm sm:text-base">
            <thead className="bg-[#1e1e1e] text-left">
              <tr>
                <th className="px-4 py-3 border-b border-gray-700">Email</th>
                <th className="px-4 py-3 border-b border-gray-700">
                  Subscribed At
                </th>
                <th className="px-4 py-3 border-b border-gray-700">
                  Send Mail
                </th>
              </tr>
            </thead>
            <tbody>
              {subscribers.map((subscriber) => (
                <tr
                  key={subscriber._id}
                  className="even:bg-[#111] hover:bg-[#222] transition duration-200"
                >
                  <td className="px-4 py-3">{subscriber.email}</td>
                  <td className="px-4 py-3">
                    {new Date(subscriber.createdAt).toLocaleString()}
                  </td>
                  <td className="px-4 py-3">
                    <a
                      href={`mailto:${subscriber.email}`}
                      className="text-blue-400 hover:underline"
                    >
                      Send Mail
                    </a>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default AdminSubscriber;
