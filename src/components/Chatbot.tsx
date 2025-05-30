import { useState, useEffect, useRef } from "react";
import { FaComments, FaTimes } from "react-icons/fa";

const Chatbot: React.FC = () => {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<
    { sender: "user" | "bot"; text: string }[]
  >([]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement | null>(null);

  const toggleChat = () => setOpen(!open);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const responses: { keywords: string[]; response: string }[] = [
    {
      keywords: ["buy", "purchase", "property for sale"],
      response:
        "We offer a wide range of properties for sale in Goa including villas, apartments, penthouses, and plots. Let us know your preference!",
    },
    {
      keywords: ["rent", "rental"],
      response:
        "Looking to rent? We have curated rental listings across prime Goa locations.",
    },
    {
      keywords: ["luxury villa", "high-end villa"],
      response:
        "Our luxury villas in Goa come with modern amenities, private pools, and scenic views. Would you like us to show you available options?",
    },
    {
      keywords: ["beach", "beachfront"],
      response:
        "Yes, we have exclusive beachfront properties available. You can explore listings on our website or contact us directly.",
    },
    {
      keywords: ["north goa"],
      response:
        "North Goa has vibrant lifestyle options. We offer properties in areas like Anjuna, Baga, and Calangute.",
    },
    {
      keywords: ["south goa"],
      response:
        "South Goa is known for its serenity. We offer properties in Palolem, Colva, and more peaceful areas.",
    },
    {
      keywords: ["legal", "registration", "document"],
      response:
        "We guide you through the legal steps including due diligence, agreement drafting, and registration.",
    },
    {
      keywords: ["loan", "finance", "bank"],
      response:
        "Yes, we help connect you with trusted banking partners for home loan facilitation.",
    },
    {
      keywords: ["visit", "site visit", "see the property"],
      response:
        "You can schedule a site visit by contacting us or using the 'Enquire Now' option on any listing.",
    },
    {
      keywords: ["investment", "returns"],
      response:
        "Goa real estate offers great returns. We have options in developing neighborhoods ideal for long-term investment.",
    },
    {
      keywords: ["resale"],
      response:
        "We also handle resale transactions. Please specify the area or type you’re looking for.",
    },
    {
      keywords: ["nri", "non-resident"],
      response:
        "Yes, we assist NRIs in buying, managing, and renting out properties in Goa.",
    },
    {
      keywords: ["agent", "contact"],
      response:
        "You can reach our agents via the contact page, or leave your number and we’ll get in touch shortly.",
    },
    {
      keywords: ["granth"],
      response:
        "Granth Properties is your trusted partner for real estate in Goa. We specialize in buying, selling, and renting exclusive properties.",
    },
    {
      keywords: ["why choose", "benefits", "advantage"],
      response:
        "We provide end-to-end service, from property discovery to post-sale support, with a personalized approach.",
    },
    {
      keywords: ["services", "what you do"],
      response:
        "We help you buy, sell, rent, and invest in properties across Goa. We also assist with loans, legal documentation, and site visits.",
    },
    {
      keywords: ["hello", "hi", "hey"],
      response: "Hello! How can I assist you with your property needs in Goa?",
    },
    {
      keywords: ["thanks", "thank you"],
      response: "You're welcome! Let me know if you have more questions.",
    },
  ];

  const getBotResponse = (input: string): string => {
    const lowerInput = input.toLowerCase();

    for (const entry of responses) {
      if (entry.keywords.some((keyword) => lowerInput.includes(keyword))) {
        return entry.response;
      }
    }

    return "Welcome to Granth Properties! I'm here to help with property buying, selling, rentals, investments, and more in Goa. How can I assist you today?";
  };

  const sendMessage = async () => {
    if (!input.trim() || loading) return;

    const userMsg = { sender: "user" as const, text: input };
    setMessages((prev) => [...prev, userMsg]);
    setInput("");
    setLoading(true);

    setTimeout(() => {
      const botReply = getBotResponse(input);
      setMessages((prev) => [...prev, { sender: "bot", text: botReply }]);
      setLoading(false);
    }, 600);
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
              placeholder="Type your message..."
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
