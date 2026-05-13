"use client";

import React, { useState, useEffect, useRef } from "react";
import { 
  Send, Mic, Paperclip, Smile, Volume2, 
  Trash2, Globe, Sparkles, Bot, Loader2
} from "lucide-react";

interface Message {
  role: "user" | "bot";
  content: string;
  timestamp: string;
}

export default function ChatPage() {
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState<Message[]>([
    { 
      role: "bot", 
      content: "Namaste Rajesh! I'm your Krishi Expert. How can I help you with your farm today?", 
      timestamp: "09:00 AM" 
    }
  ]);
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim()) return;

    const userMsg: Message = {
      role: "user",
      content: input,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };

    setMessages(prev => [...prev, userMsg]);
    setInput("");
    setIsTyping(true);

    try {
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: input })
      });

      const data = await response.json();
      
      const botMsg: Message = {
        role: "bot",
        content: data.reply || "I apologize, I'm having trouble connecting to the AI service.",
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      };

      setMessages(prev => [...prev, botMsg]);
    } catch (error) {
      const errorMsg: Message = {
        role: "bot",
        content: "Network Error: Unable to reach the AI assistant. Please check your connection.",
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      };
      setMessages(prev => [...prev, errorMsg]);
    } finally {
      setIsTyping(false);
    }
  };

  return (
    <div className="max-w-5xl mx-auto h-[calc(100vh-160px)] flex flex-col">
      {/* Chat Header */}
      <div className="bg-white rounded-t-[2rem] border border-gray-100 p-6 flex items-center justify-between shadow-sm relative z-10">
         <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-[#1e5128] rounded-2xl flex items-center justify-center text-white">
               <Bot className="w-7 h-7" />
            </div>
            <div>
               <h2 className="text-lg font-bold text-gray-900">AI Krishi Expert</h2>
               <p className="text-[10px] font-black uppercase text-emerald-500 flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full animate-pulse" />
                  Online & Active
               </p>
            </div>
         </div>

         <div className="flex items-center gap-3">
            <div className="flex items-center gap-2 bg-gray-50 border border-gray-100 rounded-xl px-4 py-2">
               <Globe className="w-4 h-4 text-gray-400" />
               <select className="bg-transparent text-sm font-bold text-gray-700 outline-none appearance-none">
                  <option>Hindi (हिन्दी)</option>
                  <option>English</option>
               </select>
            </div>
            <button 
               onClick={() => setMessages([messages[0]])}
               className="p-2.5 text-gray-400 hover:text-red-500 hover:bg-red-50 rounded-xl transition-all"
            >
               <Trash2 className="w-5 h-5" />
            </button>
         </div>
      </div>

      {/* Messages Area */}
      <div className="flex-1 bg-white border-x border-gray-100 p-8 overflow-y-auto space-y-8 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:20px_20px]">
         {messages.map((msg, i) => (
            <div key={i} className={`flex flex-col ${msg.role === "user" ? "items-end" : "items-start"} gap-2 animate-in fade-in slide-in-from-bottom-2`}>
               {msg.role === "bot" && (
                  <div className="flex items-center gap-2 mb-1">
                     <div className="w-6 h-6 bg-[#1e5128] rounded-md flex items-center justify-center text-white scale-75">
                        <Bot className="w-4 h-4" />
                     </div>
                  </div>
               )}
               <div className={`p-5 rounded-2xl max-w-2xl text-gray-700 font-medium shadow-sm relative group ${msg.role === "user" ? "bg-[#1e5128] text-white rounded-tr-none" : "bg-gray-50 border border-gray-100 rounded-tl-none"}`}>
                  {msg.content}
                  <div className={`flex items-center gap-4 mt-3 text-[10px] font-bold uppercase ${msg.role === "user" ? "text-white/60" : "text-gray-400"}`}>
                     {msg.timestamp}
                     {msg.role === "bot" && (
                        <button className="hover:text-emerald-500 transition-colors">
                           <Volume2 className="w-3.5 h-3.5" />
                        </button>
                     )}
                  </div>
               </div>
            </div>
         ))}
         {isTyping && (
            <div className="flex items-center gap-2 text-gray-400 text-xs font-bold animate-pulse">
               <Loader2 className="w-4 h-4 animate-spin" />
               Expert is typing...
            </div>
         )}
         <div ref={messagesEndRef} />
      </div>

      {/* Input Area */}
      <div className="bg-white rounded-b-[2rem] border border-gray-100 p-6 shadow-sm relative z-10">
         <form 
           onSubmit={(e) => { e.preventDefault(); handleSend(); }}
           className="flex items-center gap-4 bg-gray-50 border border-gray-100 rounded-2xl px-6 py-2 shadow-inner"
         >
            <button type="button" className="text-gray-400 hover:text-[#1e5128] transition-colors">
               <Paperclip className="w-5 h-5" />
            </button>
            <input 
              type="text" 
              placeholder="Type your question..." 
              value={input}
              onChange={(e) => setInput(e.target.value)}
              className="flex-1 bg-transparent border-none py-4 text-sm font-medium focus:ring-0 placeholder:text-gray-400"
            />
            <div className="flex items-center gap-4 border-l border-gray-100 pl-4">
               <button type="button" className="text-gray-400 hover:text-[#1e5128] transition-colors">
                  <Smile className="w-5 h-5" />
               </button>
               <button type="button" className="text-[#1e5128] hover:scale-110 transition-transform">
                  <Mic className="w-5 h-5" />
               </button>
               <button 
                  type="submit"
                  disabled={!input.trim() || isTyping}
                  className="w-10 h-10 bg-[#1e5128] text-white rounded-xl flex items-center justify-center hover:bg-[#194322] transition-all shadow-lg shadow-emerald-900/10 disabled:opacity-50"
               >
                  <Send className="w-5 h-5" />
               </button>
            </div>
         </form>
         <p className="text-center text-[10px] font-bold text-gray-400 uppercase tracking-widest mt-6">
            <Sparkles className="w-3 h-3 inline mr-2 opacity-50" />
            This expert advice is generated by AI and should be verified locally.
         </p>
      </div>
    </div>
  );
}
