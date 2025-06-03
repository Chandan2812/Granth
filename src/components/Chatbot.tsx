import { useState, useEffect, useRef } from "react";
import { FaComments, FaTimes } from "react-icons/fa";

const Chatbot: React.FC = () => {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<
    { sender: "user" | "bot"; text: string }[]
  >([]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [userInfo, setUserInfo] = useState<{ name: string; email: string }>({
    name: "",
    email: "",
  });
  const [userDetailsCaptured, setUserDetailsCaptured] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement | null>(null);

  const toggleChat = () => {
    const newState = !open;
    setOpen(newState);

    if (newState) {
      setMessages([
        {
          sender: "bot",
          text: "👋 Welcome to Granth Dream Homes! May I know your name and email to assist you better?",
        },
      ]);
    } else {
      // Reset chat on close
      setMessages([]);
      setInput("");
      setUserDetailsCaptured(false);
      setUserInfo({ name: "", email: "" });
    }
  };

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const sendMessage = async () => {
    if (!input.trim() || loading) return;

    const trimmedInput = input.trim();
    const newUserMsg = { sender: "user" as const, text: trimmedInput };
    setMessages((prev) => [...prev, newUserMsg]);
    setInput("");
    setLoading(true);

    try {
      let botReply = "";

      if (!userDetailsCaptured) {
        // Try to extract name and email from the input
        const emailMatch = trimmedInput.match(
          /([a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})/
        );
        const namePart = trimmedInput.replace(emailMatch?.[0] || "", "").trim();

        if (!emailMatch || !namePart) {
          botReply =
            "❗ Please provide both your name and a valid email in one message.";
          setMessages((prev) => [...prev, { sender: "bot", text: botReply }]);
          return;
        }

        // Save user info
        const name = namePart;
        const email = emailMatch[0];

        setUserInfo({ name, email });
        setUserDetailsCaptured(true);

        botReply = `Thanks ${name}! You can now ask me anything about our properties. 😊`;

        // Send user details + intro message to backend
        await fetch("http://localhost:8000/api/chatbot", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            user: { name, email },
            message: trimmedInput,
            isLead: true,
            chatHistory: [...messages, newUserMsg],
          }),
        });

        setMessages((prev) => [...prev, { sender: "bot", text: botReply }]);
      } else {
        // Normal chatbot message
        const res = await fetch(
          "https://granth-backend.onrender.com/api/chatbot",
          {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
              user: userInfo,
              message: trimmedInput,
              chatHistory: [...messages, newUserMsg],
            }),
          }
        );

        const data = await res.json();

        botReply =
          res.ok && data.reply
            ? data.reply
            : "Sorry, something went wrong. Please try again.";

        setMessages((prev) => [...prev, { sender: "bot", text: botReply }]);
      }
    } catch (error) {
      console.error(error);
      setMessages((prev) => [
        ...prev,
        { sender: "bot", text: "⚠️ Server error. Please try again later." },
      ]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      {/* Floating Button */}
      <button
        className="fixed bottom-20 right-6 z-50 p-4 rounded-full bg-[var(--primary-color)] text-white shadow-lg hover:scale-105 transition"
        onClick={toggleChat}
        aria-label="Toggle Chatbot"
      >
        {open ? <FaTimes size={20} /> : <FaComments size={20} />}
      </button>

      {/* Chat Window */}
      {open && (
        <div className="fixed bottom-36 right-6 w-80 max-h-[500px] bg-white rounded-lg shadow-lg flex flex-col z-50">
          <div className="bg-[var(--primary-color)] text-white px-4 py-2 font-bold rounded-t-lg">
            Chat with Granth Properties
          </div>
          <div className="flex-1 p-4 overflow-y-auto space-y-2 text-sm bg-gray-100">
            {messages.map((msg, i) => (
              <div
                key={i}
                className={`p-2 rounded-md ${
                  msg.sender === "user"
                    ? "bg-[var(--primary-color)] text-white self-end ml-auto w-fit"
                    : "bg-white text-black self-start mr-auto w-fit border"
                }`}
              >
                {msg.text}
              </div>
            ))}
            <div ref={messagesEndRef} />
          </div>
          <div className="p-2 flex border-t">
            <input
              type="text"
              className="flex-1 p-2 border rounded-l outline-none"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && sendMessage()}
              placeholder={
                !userDetailsCaptured
                  ? "e.g. John Doe john@example.com"
                  : "Type your message..."
              }
              disabled={loading}
            />
            <button
              className="bg-[var(--primary-color)] text-white px-4 rounded-r"
              onClick={sendMessage}
              disabled={loading}
            >
              {loading ? "..." : "Send"}
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Chatbot;
