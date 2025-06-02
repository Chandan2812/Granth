import { useEffect, useState } from "react";

interface ContactRequest {
  _id: string;
  name: string;
  phone: string;
  email: string;
  createdAt: string;
}

const AdminLeads = () => {
  const [contacts, setContacts] = useState<ContactRequest[]>([]);

  useEffect(() => {
    fetch("https://granth-backend.onrender.com/api/leads")
      .then((res) => res.json())
      .then((data) => setContacts(data))
      .catch((err) => console.error("Error fetching contact requests:", err));
  }, []);

  return (
    <div className="min-h-screen bg-black text-white font-raleway p-4 sm:p-6">
      <h1 className="text-2xl sm:text-3xl font-bold mb-6">Leads</h1>

      {contacts.length === 0 ? (
        <p className="text-gray-400">No contact requests found.</p>
      ) : (
        <div className="overflow-x-auto">
          <table className="w-full table-auto border-collapse border border-gray-700 text-sm sm:text-base">
            <thead className="bg-[#1e1e1e] text-left">
              <tr>
                <th className="px-4 py-3 border-b border-gray-700">Name</th>
                <th className="px-4 py-3 border-b border-gray-700">Email</th>
                <th className="px-4 py-3 border-b border-gray-700">Phone</th>
                <th className="px-4 py-3 border-b border-gray-700">
                  Requested At
                </th>
                <th className="px-4 py-3 border-b border-gray-700">
                  Send Mail
                </th>
              </tr>
            </thead>
            <tbody>
              {contacts.map((contact) => (
                <tr
                  key={contact._id}
                  className="even:bg-[#111] hover:bg-[#222] transition duration-200"
                >
                  <td className="px-4 py-3">{contact.name}</td>
                  <td className="px-4 py-3">{contact.email}</td>
                  <td className="px-4 py-3">{contact.phone}</td>
                  <td className="px-4 py-3">
                    {new Date(contact.createdAt).toLocaleString()}
                  </td>
                  <td className="px-4 py-3">
                    <a
                      href={`mailto:${contact.email}`}
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

export default AdminLeads;
