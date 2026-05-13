"use client";

import { useState } from "react";
import { Sprout, Send, Bot, User, ArrowLeft, Loader2, Info } from "lucide-react";
import Link from "next/link";

export default function ChatPage() {
  const [messages, setMessages] = useState([
    { role: "bot", content: "Hello! I am your AI Krishi Expert. How can I help you with your farm today?" }
  ]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);

  const sendMessage = async () => {
    if (!input.trim()) return;
    
    const userMsg = { role: "user", content: input };
    setMessages(prev => [...prev, userMsg]);
    setInput("");
    setLoading(true);

    // Simulation of AI Response logic (Gemini)
    setTimeout(() => {
      const botMsg = { role: "bot", content: "Based on the current weather in Maharashtra, I recommend preparing for slight rainfall this weekend. Ensure your drainage systems are clear to prevent waterlogging in your cotton fields." };
      setMessages(prev => [...prev, botMsg]);
      setLoading(false);
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white flex flex-col">
      {/* Header */}
      <header className="h-20 bg-black/50 backdrop-blur-md border-b border-white/5 flex items-center justify-between px-6 sticky top-0 z-50">
        <div className="flex items-center gap-4">
          <Link href="/dashboard" className="p-2 hover:bg-white/5 rounded-full transition-all">
            <ArrowLeft className="w-5 h-5 text-gray-400" />
          </Link>
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-emerald-600/20 rounded-xl flex items-center justify-center border border-emerald-500/30">
              <Bot className="text-emerald-400 w-6 h-6" />
            </div>
            <div>
              <h1 className="font-bold">Krishi Expert AI</h1>
              <p className="text-[10px] text-emerald-500 flex items-center gap-1">
                <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full animate-pulse" />
                Online & Ready
              </p>
            </div>
          </div>
        </div>
        <div className="flex items-center gap-2 text-xs text-gray-500">
          <Info className="w-4 h-4" />
          Powered by Gemini 1.5 Pro
        </div>
      </header>

      {/* Chat Area */}
      <main className="flex-1 max-w-4xl mx-auto w-full p-6 flex flex-col gap-6 overflow-y-auto pb-32">
        {messages.map((msg, idx) => (
          <div key={idx} className={`flex items-start gap-4 ${msg.role === "user" ? "flex-row-reverse" : ""}`}>
            <div className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 ${msg.role === "bot" ? "bg-emerald-600/10 border border-emerald-500/20" : "bg-white/5 border border-white/10"}`}>
              {msg.role === "bot" ? <Bot className="w-5 h-5 text-emerald-400" /> : <User className="w-5 h-5 text-gray-400" />}
            </div>
            <div className={`max-w-[80%] p-4 rounded-2xl leading-relaxed text-sm ${msg.role === "bot" ? "bg-white/5 border border-white/10" : "bg-emerald-600 text-white"}`}>
              {msg.content}
            </div>
          </div>
        ))}
        {loading && (
          <div className="flex items-center gap-3 text-gray-500 text-xs animate-pulse ml-14">
            <Loader2 className="w-4 h-4 animate-spin" />
            AI is analyzing soil conditions...
          </div>
        )}
      </main>

      {/* Input Area */}
      <div className="fixed bottom-0 left-0 w-full p-6 bg-gradient-to-t from-[#0a0a0a] via-[#0a0a0a] to-transparent">
        <div className="max-w-4xl mx-auto relative">
          <input 
            type="text" 
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyPress={(e) => e.key === "Enter" && sendMessage()}
            placeholder="Ask anything (e.g., How to treat tomato blight?)"
            className="w-full bg-black/60 border border-white/10 rounded-full py-5 pl-8 pr-20 focus:outline-none focus:border-emerald-500 transition-all shadow-2xl"
          />
          <button 
            onClick={sendMessage}
            disabled={!input.trim() || loading}
            className="absolute right-3 top-1/2 -translate-y-1/2 w-12 h-12 bg-emerald-600 hover:bg-emerald-500 rounded-full flex items-center justify-center transition-all disabled:opacity-50"
          >
            <Send className="w-5 h-5 text-white" />
          </button>
        </div>
        <p className="text-center text-[10px] text-gray-600 mt-4">
          Advice is AI-generated. Consult a local expert for high-stakes decisions.
        </p>
      </div>
    </div>
  );
}
