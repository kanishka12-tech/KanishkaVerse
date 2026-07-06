import { useState, useRef, useEffect } from "react";
import { MessageSquare, Send, X, Sparkles, AlertCircle } from "lucide-react";

interface Message {
  role: "user" | "assistant";
  content: string;
}

export default function MochiAssistant() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      role: "assistant",
      content: "🌸 Sparkling greetings! I am **Mochi**, your cosmic companion! 🐇✨ I float through Kanishka's portfolio to help you discover her amazing projects, skills, and coding milestones. What would you like to know about her? 💖"
    }
  ]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [hasNewMessage, setHasNewMessage] = useState(true);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages, isOpen]);

  // Alert notifier sound representation / micro flash
  useEffect(() => {
    if (!isOpen && messages.length > 1) {
      setHasNewMessage(true);
    }
  }, [messages, isOpen]);

  const handleSend = async (textToSend?: string) => {
    const text = textToSend || input.trim();
    if (!text) return;

    if (!textToSend) {
      setInput("");
    }

    const newMessages = [...messages, { role: "user" as const, content: text }];
    setMessages(newMessages);
    setLoading(true);

    try {
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ messages: newMessages }),
      });

      if (!response.ok) {
        throw new Error("Mochi's cosmic signals are a bit scrambled! Let's try again.");
      }

      const data = await response.json();
      setMessages([...newMessages, { role: "assistant", content: data.response }]);
    } catch (err: any) {
      setMessages([
        ...newMessages,
        {
          role: "assistant",
          content: "💫 *Puff!* Oh no, it seems my stardust antenna had a tiny cosmic glitch. But do check out Kanishka's Python, OpenCV, and Flask projects below! 🌸"
        }
      ]);
    } finally {
      setLoading(false);
    }
  };

  const suggestions = [
    { text: "Tell me about EmotiCam! 🎥", query: "Tell me about Kanishka's EmotiCam project." },
    { text: "What are her tech skills? 🛠️", query: "What programming languages and technical skills does Kanishka have?" },
    { text: "Where does she study? 🎓", query: "Tell me about Kanishka's college, CGPA, and education details." },
  ];

  return (
    <div className="fixed bottom-6 right-6 z-50 font-sans hidden sm:block">
      {/* Trigger Button */}
      {!isOpen && (
        <button
          onClick={() => {
            setIsOpen(true);
            setHasNewMessage(false);
          }}
          className="relative flex items-center gap-2 px-4 py-3 bg-gradient-to-r from-[#ffb7c5] to-[#d883ff] text-[#0b0713] font-bold rounded-full shadow-[0_4px_20px_rgba(255,183,197,0.4)] hover:shadow-[0_4px_30px_rgba(255,183,197,0.6)] hover:scale-105 active:scale-95 transition-all duration-300 cursor-pointer animate-float group"
        >
          {hasNewMessage && (
            <span className="absolute -top-1.5 -right-1.5 flex h-4.5 w-4.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-4.5 w-4.5 bg-red-500 border-2 border-[#0b0713]"></span>
            </span>
          )}
          <span className="text-xl group-hover:rotate-12 transition-transform duration-300">🐇</span>
          <span className="text-sm font-display tracking-wide">Chat with Mochi!</span>
          <MessageSquare size={16} className="opacity-80" />
        </button>
      )}

      {/* Chat Window */}
      {isOpen && (
        <div className="w-88 h-120 glass-panel border border-[#ffb7c5]/30 rounded-3xl flex flex-col overflow-hidden shadow-[0_10px_40px_rgba(0,0,0,0.6)] animate-float">
          {/* Header */}
          <div className="px-5 py-3.5 bg-gradient-to-r from-[#ffb7c5]/15 to-[#d883ff]/15 border-b border-[#ffb7c5]/15 flex items-center justify-between">
            <div className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-full bg-[#ffb7c5]/10 border border-[#ffb7c5]/30 flex items-center justify-center text-xl shadow-[0_0_10px_rgba(255,183,197,0.2)]">
                🐇
              </div>
              <div>
                <h4 className="font-display font-bold text-sm text-[#ffb7c5] leading-none">Mochi</h4>
                <span className="text-[9px] font-mono tracking-wider text-green-400">● ONLINE SAKURA BUNNY</span>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="p-1 text-gray-400 hover:text-white transition-colors cursor-pointer"
            >
              <X size={18} />
            </button>
          </div>

          {/* Messages Body */}
          <div className="flex-1 overflow-y-auto p-4 space-y-3.5 custom-scrollbar bg-[#0f0a1d]/50">
            {messages.map((msg, index) => (
              <div
                key={index}
                className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}
              >
                <div
                  className={`max-w-[85%] rounded-2xl px-4 py-2.5 text-xs leading-relaxed shadow-sm ${
                    msg.role === "user"
                      ? "bg-[#ffb7c5] text-[#0b0713] font-medium rounded-tr-none"
                      : "bg-[#1d162c] text-gray-200 border border-[#ffb7c5]/10 rounded-tl-none"
                  }`}
                >
                  {/* Parse basic markdown bolding (e.g. **Mochi**) */}
                  {msg.content.split("\n").map((line, lIdx) => (
                    <p key={lIdx} className={lIdx > 0 ? "mt-1.5" : ""}>
                      {line.split("**").map((part, pIdx) => {
                        if (pIdx % 2 === 1) {
                          return <strong key={pIdx} className={msg.role === 'user' ? "font-bold text-black" : "text-[#ffb7c5] font-semibold"}>{part}</strong>;
                        }
                        return part;
                      })}
                    </p>
                  ))}
                </div>
              </div>
            ))}

            {loading && (
              <div className="flex justify-start">
                <div className="bg-[#1d162c] text-gray-400 border border-[#ffb7c5]/10 rounded-2xl rounded-tl-none px-4 py-3 flex items-center gap-2">
                  <div className="flex space-x-1">
                    <div className="w-1.5 h-1.5 bg-[#ffb7c5] rounded-full animate-bounce" style={{ animationDelay: "0ms" }}></div>
                    <div className="w-1.5 h-1.5 bg-[#d883ff] rounded-full animate-bounce" style={{ animationDelay: "150ms" }}></div>
                    <div className="w-1.5 h-1.5 bg-[#ffb7c5] rounded-full animate-bounce" style={{ animationDelay: "300ms" }}></div>
                  </div>
                  <span className="text-[10px] font-mono italic text-[#ffb7c5]/70">Gathering cosmic wisdom...</span>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Suggetions Area */}
          {messages.length === 1 && !loading && (
            <div className="p-3 bg-[#0c0818]/80 border-t border-[#ffb7c5]/10 flex flex-col gap-1.5">
              <span className="text-[9px] font-mono text-gray-500 uppercase tracking-widest px-1">Quick Prompts</span>
              <div className="flex flex-col gap-1.5">
                {suggestions.map((s, idx) => (
                  <button
                    key={idx}
                    onClick={() => handleSend(s.query)}
                    className="w-full text-left p-2 rounded-xl text-[10px] bg-white/5 border border-[#ffb7c5]/5 text-gray-300 hover:bg-[#ffb7c5]/10 hover:border-[#ffb7c5]/30 hover:text-white transition-all cursor-pointer truncate"
                  >
                    {s.text}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Footer Input */}
          <div className="p-3 bg-[#06040b] border-t border-[#ffb7c5]/10 flex gap-2">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter") handleSend();
              }}
              placeholder="Ask me anything about Kanishka..."
              className="flex-1 bg-[#130b20] border border-[#ffb7c5]/15 rounded-xl px-3 py-2 text-xs text-white focus:outline-none focus:border-[#ffb7c5] placeholder-gray-500"
              disabled={loading}
            />
            <button
              onClick={() => handleSend()}
              className="p-2 rounded-xl bg-gradient-to-br from-[#ffb7c5] to-[#d883ff] text-[#0b0713] hover:brightness-110 active:scale-95 transition-all cursor-pointer flex items-center justify-center shrink-0"
              disabled={loading || !input.trim()}
            >
              <Send size={14} />
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
