"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Send, Bot, User, ArrowLeft, Loader2, 
  RefreshCcw, Info, Sparkles, MessageSquare,
  Thermometer, Sprout, TrendingUp
} from "lucide-react";
import Link from "next/link";
import axios from "axios";

interface Message {
  role: "user" | "bot";
  content: string;
}

export default function ChatPage() {
  const [messages, setMessages] = useState<Message[]>([
    { role: "bot", content: "नमस्ते! I am your Krishi Expert. I can help you with crop planning, pest control, and market trends. How is your farm today?" }
  ]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, loading]);

  const handleSend = async (text: string = input) => {
    if (!text.trim() || loading) return;

    const userMsg: Message = { role: "user", content: text };
    setMessages(prev => [...prev, userMsg]);
    setInput("");
    setLoading(true);
    setError("");

    try {
      const response = await axios.post("/api/chat", { message: text });
      const botMsg: Message = { role: "bot", content: response.data.reply };
      setMessages(prev => [...prev, botMsg]);
    } catch (err: any) {
      setError(err.response?.data?.error || "Network connection issue. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const suggestedPrompts = [
    { text: "Tomato pest control", icon: <Sprout className="w-4 h-4" /> },
    { text: "Wheat fertilizer plan", icon: <Thermometer className="w-4 h-4" /> },
    { text: "Market trends Nashik", icon: <TrendingUp className="w-4 h-4" /> }
  ];

  return (
    <div className="min-h-screen bg-background flex flex-col relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_0%,rgba(16,185,129,0.05),transparent)] pointer-events-none" />

      {/* Chat Header */}
      <header className="glass h-20 flex items-center justify-between px-6 sticky top-0 z-50">
        <div className="flex items-center gap-4">
          <Link href="/dashboard" className="p-2.5 hover:bg-white/5 rounded-xl transition-all">
            <ArrowLeft className="w-5 h-5 text-muted-foreground" />
          </Link>
          <div className="flex items-center gap-3">
            <div className="w-11 h-11 bg-primary/20 rounded-xl flex items-center justify-center border border-primary/30">
              <Bot className="text-primary w-6 h-6" />
            </div>
            <div>
              <h1 className="font-bold tracking-tight">Krishi Expert AI</h1>
              <div className="flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-widest text-primary">
                <span className="w-1.5 h-1.5 bg-primary rounded-full animate-pulse" />
                Live Advisor
              </div>
            </div>
          </div>
        </div>
        <div className="hidden md:flex items-center gap-2 text-xs text-muted-foreground font-medium px-4 py-2 rounded-full bg-white/5">
          <Sparkles className="w-4 h-4 text-primary" />
          Powered by Gemini 1.5 Gold
        </div>
      </header>

      {/* Messages Area */}
      <main ref={scrollRef} className="flex-1 max-w-4xl mx-auto w-full p-6 flex flex-col gap-8 overflow-y-auto scroll-smooth pb-40">
        <AnimatePresence>
          {messages.map((msg, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className={`flex items-start gap-4 ${msg.role === "user" ? "flex-row-reverse" : ""}`}
            >
              <div className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 shadow-lg ${msg.role === "bot" ? "bg-primary text-white" : "bg-slate-700 text-white"}`}>
                {msg.role === "bot" ? <Bot className="w-5 h-5" /> : <User className="w-5 h-5" />}
              </div>
              <div className={`max-w-[85%] p-5 rounded-[1.5rem] leading-relaxed text-sm font-medium shadow-sm ${msg.role === "bot" ? "glass border-primary/10" : "bg-primary text-white"}`}>
                {msg.content}
              </div>
            </motion.div>
          ))}
        </AnimatePresence>

        {loading && (
          <div className="flex items-start gap-4 animate-pulse">
            <div className="w-10 h-10 rounded-xl bg-primary/20 flex items-center justify-center border border-primary/30">
              <Loader2 className="w-5 h-5 text-primary animate-spin" />
            </div>
            <div className="glass h-16 w-48 rounded-[1.5rem]" />
          </div>
        )}

        {error && (
          <div className="flex flex-col items-center gap-4 py-8">
            <div className="bg-red-500/10 border border-red-500/20 text-red-500 px-6 py-4 rounded-2xl text-sm font-medium flex items-center gap-3">
              <Info className="w-5 h-5" />
              {error}
            </div>
            <button 
              onClick={() => handleSend(messages[messages.length - 1].content)}
              className="flex items-center gap-2 text-primary font-bold text-sm hover:underline"
            >
              <RefreshCcw className="w-4 h-4" />
              Try Again
            </button>
          </div>
        )}
      </main>

      {/* Input Section */}
      <div className="fixed bottom-0 left-0 w-full p-6 bg-gradient-to-t from-background via-background to-transparent">
        <div className="max-w-4xl mx-auto flex flex-col gap-4">
          {messages.length < 3 && !loading && (
            <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-hide">
              {suggestedPrompts.map((p, i) => (
                <button 
                  key={i}
                  onClick={() => handleSend(p.text)}
                  className="flex items-center gap-2 whitespace-nowrap bg-white/5 border border-border px-4 py-2 rounded-full text-xs font-bold hover:bg-primary/10 hover:border-primary/30 transition-all"
                >
                  {p.icon}
                  {p.text}
                </button>
              ))}
            </div>
          )}
          
          <div className="relative group">
            <input 
              type="text" 
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyPress={(e) => e.key === "Enter" && handleSend()}
              placeholder="Ask Krishi Expert (Hindi/English)..."
              className="w-full bg-black/60 border border-border rounded-[2rem] py-5 pl-8 pr-20 focus:outline-none focus:border-primary transition-all shadow-2xl group-hover:border-primary/30"
            />
            <button 
              onClick={() => handleSend()}
              disabled={!input.trim() || loading}
              className="absolute right-3 top-1/2 -translate-y-1/2 w-12 h-12 bg-primary hover:bg-emerald-600 rounded-full flex items-center justify-center transition-all disabled:opacity-50 shadow-lg shadow-primary/20"
            >
              <Send className="w-5 h-5 text-white" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
