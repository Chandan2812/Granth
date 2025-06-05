import { useEffect, useState } from "react";

interface Newsletter {
  _id: string;
  emails: string[];
  subject: string;
  title: string;
  content: string;
  ctaText: string;
  ctaUrl: string;
  imageUrl?: string;
  sent: boolean;
  scheduleAt: string;
  sentAt?: string;
}

const NewsletterPage = () => {
  const [newsletters, setNewsletters] = useState<Newsletter[]>([]);
  const [expandedEmails, setExpandedEmails] = useState<Record<string, boolean>>(
    {}
  );
  const [expandedContent, setExpandedContent] = useState<
    Record<string, boolean>
  >({});

  useEffect(() => {
    fetch("https://granth-backend.onrender.com/newsletter")
      .then((res) => res.json())
      .then((data) => setNewsletters(data));
  }, []);

  const toggleEmails = (id: string) => {
    setExpandedEmails((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  const toggleContent = (id: string) => {
    setExpandedContent((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  return (
    <div className="h-screen bg-black text-white font-raleway flex flex-col p-0">
      <div className="flex justify-between sticky top-5 z-20 bg-black p-4 sm:p-6 border-b border-gray-700">
        <h1 className="text-2xl sm:text-3xl font-bold mb-6">Newsletters</h1>
        <a href="/admin/sendnewsletter">
          <button className="text-white  bg-[var(--primary-color)] p-2">
            Send Newsletter
          </button>
        </a>
      </div>

      <div className="flex-1 overflow-y-auto p-4 sm:p-6">
        {newsletters.length === 0 ? (
          <p className="text-gray-400">No newsletters found.</p>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full table-auto border-collapse border border-gray-700 text-sm sm:text-base">
              <thead className="bg-[#1e1e1e] text-left">
                <tr>
                  <th className="px-4 py-3 border-b border-gray-700">Title</th>
                  <th className="px-4 py-3 border-b border-gray-700">
                    Subject
                  </th>
                  <th className="px-4 py-3 border-b border-gray-700">
                    Content
                  </th>
                  <th className="px-4 py-3 border-b border-gray-700">
                    Button Text
                  </th>

                  <th className="px-4 py-3 border-b border-gray-700">
                    Scheduled At
                  </th>

                  <th className="px-4 py-3 border-b border-gray-700">Emails</th>
                </tr>
              </thead>
              <tbody>
                {newsletters.map((n) => (
                  <tr
                    key={n._id}
                    className="even:bg-[#111] hover:bg-[#222] transition duration-200"
                  >
                    <td className="px-4 py-3">{n.title}</td>
                    <td className="px-4 py-3">{n.subject}</td>
                    <td className="px-4 py-3 max-w-xs">
                      {expandedContent[n._id] ? (
                        <>
                          {n.content}
                          <button
                            onClick={() => toggleContent(n._id)}
                            className="ml-2 text-sm text-blue-400 hover:underline"
                          >
                            Show less
                          </button>
                        </>
                      ) : (
                        <>
                          {n.content.length > 80
                            ? n.content.slice(0, 80) + "..."
                            : n.content}
                          {n.content.length > 80 && (
                            <button
                              onClick={() => toggleContent(n._id)}
                              className="ml-2 text-sm text-blue-400 hover:underline"
                            >
                              Read more
                            </button>
                          )}
                        </>
                      )}
                    </td>
                    <td className="px-4 py-3">
                      <a
                        href={n.ctaUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[var(--primary-color)] hover:underline break-all"
                      >
                        {n.ctaText}
                      </a>
                    </td>

                    <td className="px-4 py-3">
                      {new Date(n.scheduleAt).toLocaleString()}
                    </td>

                    <td className="px-4 py-3">
                      {expandedEmails[n._id] ? (
                        <>
                          <div className="space-y-1">
                            {n.emails.map((email, i) => (
                              <div key={i}>{email}</div>
                            ))}
                          </div>
                          <button
                            onClick={() => toggleEmails(n._id)}
                            className="text-sm text-blue-400 hover:underline mt-1"
                          >
                            Show less
                          </button>
                        </>
                      ) : (
                        <>
                          <div className="space-y-1">
                            {n.emails.slice(0, 3).map((email, i) => (
                              <div key={i}>{email}</div>
                            ))}
                          </div>
                          {n.emails.length > 3 && (
                            <button
                              onClick={() => toggleEmails(n._id)}
                              className="text-sm text-blue-400 hover:underline mt-1"
                            >
                              +{n.emails.length - 3} more
                            </button>
                          )}
                        </>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
};

export default NewsletterPage;
