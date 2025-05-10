import { useState } from "react";
import { MessageCircle, X } from "lucide-react";

export default function Chatbot() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState([
    { from: "bot", text: "Hay! This is Shad How I can help you?" },
  ]);
  const [input, setInput] = useState("");

  const sendMessage = () => {
    if (!input.trim()) return;
    setMessages([...messages, { from: "user", text: input }]);
    setInput("");
    setTimeout(() => {
      setMessages((prev) => [...prev, { from: "bot", text: "Thanks for your message we will get you back shortly!" }]);
    }, 1000);
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {open ? (
        <div className="w-80 bg-white shadow-xl rounded-lg overflow-hidden border ">
          <div className="flex items-center justify-between p-3 bg-blue-600 text-white ">
            <span>Chatbot</span>
            <button onClick={() => setOpen(false)}>
              <X className="w-5 h-5" />
            </button>
          </div>
          <div className="p-3 h-64 overflow-y-auto space-y-2 text-sm ">
            {messages.map((msg, idx) => (
              <div
                key={idx}
                className={`p-2 rounded-lg bg-blue-50 dark:bg-gray-900 ${
                  msg.from === "bot"
                    ? "bg-gray-200 text-left"
                    : "bg-blue-500 text-white self-end text-right"
                }`}
              >
                {msg.text}
              </div>
            ))}
          </div>
          <div className="flex border-t p-2">
            <input
              type="text"
              className="flex-1 border border-gray-300 rounded px-2 py-1 mr-2 text-sm "
              placeholder="Type a message..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && sendMessage()}
            />
            <button
              onClick={sendMessage}
              className="bg-blue-600 text-white px-3 py-1 rounded text-sm"
            >
              Send
            </button>
          </div>
        </div>
      ) : (
        <button
          onClick={() => setOpen(true)}
          className="bg-blue-600 text-white p-3 rounded-full shadow-lg hover:bg-blue-700"
        >
          <MessageCircle className="w-5 h-5" />
        </button>
      )}
    </div>
  );
}
