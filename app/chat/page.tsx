// app/chat/page.tsx
"use client";

import { useState, useRef, useEffect } from "react";
import { useChatStore } from "@/store/useChatStore";
import { fetchAIResponse } from "@/utils/fetchAIResponse";

export default function ChatPage() {
  const { messages, addMessage, resetChat } = useChatStore();
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const bottomRef = useRef<HTMLDivElement | null>(null);

  const handleSend = async () => {
    if (!input.trim()) return;

    addMessage({
      role: "user", text: input,
      content: undefined
    });
    setLoading(true);
    const aiResponse = await fetchAIResponse(input);
    addMessage({
      role: "ai", text: aiResponse,
      content: undefined
    });
    setInput("");
    setLoading(false);
  };

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  return (
    <div className="flex flex-col max-h-[calc(100vh-4rem)] px-4 py-6">
      {/* Chat Area */}
      <div className="overflow-y-auto flex-1 space-y-3 pr-1">
        {messages.map((msg, index) => (
          <div
            key={index}
            className={`max-w-[75%] p-3 rounded-lg text-sm shadow ${
              msg.role === "user"
                ? "bg-indigo-600 text-white ml-auto"
                : "bg-gray-100 text-gray-900 dark:bg-gray-800 dark:text-white"
            }`}
          >
            {msg.text}
          </div>
        ))}
        <div ref={bottomRef} />
      </div>

      {/* Chat Input */}
      <div className="mt-4 flex flex-col gap-2">
        <div className="flex gap-2">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && handleSend()}
            placeholder="Ask me anything..."
            className="flex-1 rounded-md border border-gray-300 dark:border-gray-700 p-2 dark:bg-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
          <button
            onClick={handleSend}
            disabled={loading}
            className="bg-indigo-600 text-white px-6 py-2 rounded-md hover:bg-indigo-700 transition disabled:bg-gray-400 disabled:cursor-not-allowed"
          >
            {loading ? "Thinking..." : "Send"}
          </button>
        </div>

        <button
          onClick={resetChat}
          className="self-start bg-indigo-600 px-4 py-2 text-white hover:bg-indigo-700 rounded-sm text-sm shadow-lg space-x-6 "
        >
          Clear Chat
        </button>
      </div>
    </div>
  );
}
