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
    <div className="min-h-screen bg-black text-white font-sans p-4 sm:p-6">
      <h1 className="text-2xl sm:text-3xl font-bold mb-6">Chatbot History</h1>

      {loading ? (
        <p className="text-gray-400">Loading...</p>
      ) : chats.length === 0 ? (
        <p className="text-gray-400">No chat history found.</p>
      ) : (
        <div className="overflow-x-auto">
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
      )}
    </div>
  );
};

export default ChatbotHistory;
