import { useEffect, useState } from "react";

interface Chat {
  timestamp: string | number | Date;
  _id: string;
  userMessage: string;
  botReply: string;
  createdAt: string;
}

const ChatbotHistory = () => {
  const [chats, setChats] = useState<Chat[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://granth-backend.onrender.com/api/chatbot")
      .then((res) => res.json())
      .then((data) => setChats(data))
      .catch((err) => console.error("Error fetching chatbot history:", err))
      .finally(() => setLoading(false));
  }, []);

  return (
    <div className="h-screen bg-black text-white font-raleway flex flex-col p-0">
      <div className="sticky top-5 z-20 bg-black p-4 sm:p-6 border-b border-gray-700">
        <h1 className="text-2xl sm:text-3xl font-bold">Chatbot History</h1>
      </div>

      <div className="flex-1 overflow-y-auto p-4 sm:p-6">
        {loading ? (
          <p className="text-gray-400">Loading...</p>
        ) : chats.length === 0 ? (
          <p className="text-gray-400">No chat history found.</p>
        ) : (
          <>
            {/* Desktop Table */}
            <div className="hidden md:block overflow-x-auto">
              <table className="w-full table-auto border-collapse border border-gray-700 text-sm sm:text-base">
                <thead className="bg-[#1e1e1e] text-left">
                  <tr>
                    <th className="px-4 py-3 border-b border-gray-700">Date</th>
                    <th className="px-4 py-3 border-b border-gray-700">
                      User Message
                    </th>
                    <th className="px-4 py-3 border-b border-gray-700">
                      Bot Reply
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {chats.map((chat) => (
                    <tr
                      key={chat._id}
                      className="even:bg-[#111] hover:bg-[#222] transition duration-200"
                    >
                      <td className="px-4 py-3">
                        {new Date(chat.timestamp).toLocaleString()}
                      </td>
                      <td className="px-4 py-3 whitespace-pre-wrap">
                        {chat.userMessage}
                      </td>
                      <td className="px-4 py-3 whitespace-pre-wrap">
                        {chat.botReply}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Mobile Cards */}
            <div className="md:hidden flex flex-col gap-4">
              {chats.map((chat) => (
                <div
                  key={chat._id}
                  className="bg-[#1e1e1e] p-4 rounded-lg border border-gray-700"
                >
                  <div className="text-sm text-gray-400 mb-2">
                    {new Date(chat.timestamp).toLocaleString()}
                  </div>
                  <div className="mb-2">
                    <span className="font-semibold text-[var(--primary-color)]">
                      User:
                    </span>
                    <p className="whitespace-pre-wrap">{chat.userMessage}</p>
                  </div>
                  <div>
                    <span className="font-semibold text-[var(--primary-color)]">
                      Bot:
                    </span>
                    <p className="whitespace-pre-wrap">{chat.botReply}</p>
                  </div>
                </div>
              ))}
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default ChatbotHistory;
