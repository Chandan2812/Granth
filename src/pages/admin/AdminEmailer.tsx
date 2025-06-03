import { useEffect, useState } from "react";

interface Attachment {
  filename: string;
  path: string;
  _id: string;
}

interface Emailer {
  _id: string;
  subject: string;
  title: string;
  content: string;
  ctaText: string;
  ctaUrl: string;
  imageUrl?: string;
  attachments: Attachment[];
  recipients: string[];
  sendToAll: boolean;
  createdAt: string;
  updatedAt: string;
}

const AdminEmailer = () => {
  const [emailers, setEmailers] = useState<Emailer[]>([]);
  const [expandedRecipients, setExpandedRecipients] = useState<
    Record<string, boolean>
  >({});
  const [expandedContent, setExpandedContent] = useState<
    Record<string, boolean>
  >({});

  useEffect(() => {
    fetch("https://granth-backend.onrender.com/emailer")
      .then((res) => res.json())
      .then((data) => setEmailers(data));
  }, []);

  const toggleRecipients = (id: string) => {
    setExpandedRecipients((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  const toggleContent = (id: string) => {
    setExpandedContent((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  return (
    <div className="min-h-screen bg-black text-white font-sans p-4 sm:p-6">
      <div className="flex justify-between">
        <h1 className="text-2xl sm:text-3xl font-bold mb-6">Emailers</h1>
        <a href="/emailer">
          <button className="text-[var(--primary-color)]">Send Emailer</button>
        </a>
      </div>

      {emailers.length === 0 ? (
        <p className="text-gray-400">No emailers found.</p>
      ) : (
        <div className="overflow-x-auto">
          <table className="w-full table-auto border-collapse border border-gray-700 text-sm sm:text-base">
            <thead className="bg-[#1e1e1e] text-left">
              <tr>
                <th className="px-4 py-3 border-b border-gray-700">Title</th>
                <th className="px-4 py-3 border-b border-gray-700">Subject</th>
                <th className="px-4 py-3 border-b border-gray-700">Content</th>
                <th className="px-4 py-3 border-b border-gray-700">Button</th>

                <th className="px-4 py-3 border-b border-gray-700">
                  Recipients
                </th>
                <th className="px-4 py-3 border-b border-gray-700">
                  Created At
                </th>
              </tr>
            </thead>
            <tbody>
              {emailers.map((e) => (
                <tr
                  key={e._id}
                  className="even:bg-[#111] hover:bg-[#222] transition duration-200"
                >
                  <td className="px-4 py-3">{e.title}</td>
                  <td className="px-4 py-3">{e.subject}</td>
                  <td className="px-4 py-3 max-w-xs">
                    {expandedContent[e._id] ? (
                      <>
                        {e.content}
                        <button
                          onClick={() => toggleContent(e._id)}
                          className="ml-2 text-sm text-blue-400 hover:underline"
                        >
                          Show less
                        </button>
                      </>
                    ) : (
                      <>
                        {e.content.length > 80
                          ? e.content.slice(0, 80) + "..."
                          : e.content}
                        {e.content.length > 80 && (
                          <button
                            onClick={() => toggleContent(e._id)}
                            className="ml-2 text-sm text-blue-400 hover:underline"
                          >
                            Read more
                          </button>
                        )}
                      </>
                    )}
                  </td>
                  <td className="px-4 py-3">
                    {e.ctaText && e.ctaUrl ? (
                      <a
                        href={e.ctaUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[var(--primary-color)] hover:underline"
                      >
                        {e.ctaText}
                      </a>
                    ) : (
                      "-"
                    )}
                  </td>

                  <td className="px-4 py-3">
                    {expandedRecipients[e._id] ? (
                      <>
                        <div className="space-y-1">
                          {e.recipients.map((email, i) => (
                            <div key={i}>{email}</div>
                          ))}
                        </div>
                        <button
                          onClick={() => toggleRecipients(e._id)}
                          className="text-sm text-blue-400 hover:underline mt-1"
                        >
                          Show less
                        </button>
                      </>
                    ) : (
                      <>
                        <div className="space-y-1">
                          {e.recipients.slice(0, 3).map((email, i) => (
                            <div key={i}>{email}</div>
                          ))}
                        </div>
                        {e.recipients.length > 3 && (
                          <button
                            onClick={() => toggleRecipients(e._id)}
                            className="text-sm text-blue-400 hover:underline mt-1"
                          >
                            +{e.recipients.length - 3} more
                          </button>
                        )}
                      </>
                    )}
                  </td>
                  <td className="px-4 py-3">
                    {new Date(e.createdAt).toLocaleString()}
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

export default AdminEmailer;
