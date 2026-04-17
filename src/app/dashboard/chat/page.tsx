'use client';

import React, { useState, useRef, useEffect } from 'react';
import { 
  Send, 
  Mic, 
  Languages, 
  Bot, 
  User, 
  Paperclip,
  Smile,
  Volume2,
  Trash2,
  Info,
  Loader2
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const languages = [
  { code: 'hi', name: 'Hindi (हिन्दी)' },
  { code: 'en', name: 'English' },
  { code: 'pb', name: 'Punjabi (ਪੰਜਾਬੀ)' },
  { code: 'bn', name: 'Bengali (বাংলা)' },
];

const initialMessages = [
  { id: 1, role: 'assistant', text: "Namaste! I'm your Krishi Expert. How can I help you with your farm today?", time: '09:00 AM' },
];

export default function ChatPage() {
  const [messages, setMessages] = useState(initialMessages);
  const [inputText, setInputText] = useState('');
  const [selectedLang, setSelectedLang] = useState('hi');
  const [isRecording, setIsRecording] = useState(false);
  const [isTyping, setIsTyping] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, isTyping]);

  const handleSend = async () => {
    if (!inputText.trim()) return;

    const userText = inputText;
    const newMessage = {
      id: Date.now(),
      role: 'user',
      text: userText,
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };

    const newMessages = [...messages, newMessage];
    setMessages(newMessages);
    setInputText('');
    setIsTyping(true);

    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ 
          message: userText,
          history: messages.map(m => ({
            role: m.role === 'assistant' ? 'model' : 'user',
            parts: [{ text: m.text }]
          }))
        })
      });

      const data = await res.json();
      
      const aiResponse = {
        id: Date.now() + 1,
        role: 'assistant',
        text: data.text,
        time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      };
      
      setMessages(prev => [...prev, aiResponse]);
    } catch (err) {
      console.error("Chat Error:", err);
    } finally {
      setIsTyping(false);
    }
  };

  const showToast = (feature: string) => {
    alert(`${feature} feature coming soon! Currently, you can talk to the Krishi Expert AI.`);
  };

  return (
    <div className="h-[calc(100vh-10rem)] flex flex-col bg-card rounded-3xl border border-border overflow-hidden shadow-xl">
      {/* Chat Header */}
      <div className="p-4 md:p-6 border-b border-border flex items-center justify-between bg-primary/5">
        <div className="flex items-center gap-4">
           <div className="w-12 h-12 bg-primary rounded-2xl flex items-center justify-center text-white shadow-lg shadow-primary/20">
             <Bot size={28} />
           </div>
           <div>
             <h2 className="font-bold text-lg">AI Krishi Expert</h2>
             <div className="flex items-center gap-2">
               <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
               <span className="text-xs font-bold text-foreground/40 uppercase tracking-widest leading-none">Online & Active (Gemini Powered)</span>
             </div>
           </div>
        </div>

        <div className="flex items-center gap-3">
           <div className="hidden sm:flex items-center gap-1 bg-white border border-border px-3 py-1.5 rounded-xl">
             <Languages size={16} className="text-primary" />
             <select 
               value={selectedLang}
               onChange={(e) => setSelectedLang(e.target.value)}
               className="text-xs font-bold bg-transparent border-none focus:ring-0 outline-none cursor-pointer"
             >
               {languages.map(lang => (
                 <option key={lang.code} value={lang.code}>{lang.name}</option>
               ))}
             </select>
           </div>
           <button 
             onClick={() => setMessages(initialMessages)}
             className="p-2.5 rounded-xl border border-border hover:bg-muted text-foreground/40 transition-colors"
           >
              <Trash2 size={20} />
           </button>
        </div>
      </div>

      {/* Messages Area */}
      <div 
        ref={scrollRef}
        className="flex-1 overflow-y-auto p-6 space-y-6 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] bg-fixed"
      >
        <AnimatePresence initial={false}>
          {messages.map((msg) => (
            <motion.div
              key={msg.id}
              initial={{ opacity: 0, scale: 0.95, y: 10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
            >
              <div className={`flex gap-3 max-w-[80%] ${msg.role === 'user' ? 'flex-row-reverse' : 'flex-row'}`}>
                 <div className={`w-8 h-8 rounded-lg flex-shrink-0 flex items-center justify-center ${
                   msg.role === 'user' ? 'bg-secondary text-primary' : 'bg-primary text-white'
                 }`}>
                   {msg.role === 'user' ? <User size={18} /> : <Bot size={18} />}
                 </div>
                 
                 <div className="flex flex-col">
                    <div className={`px-4 py-3 rounded-2xl shadow-sm text-sm font-medium leading-relaxed whitespace-pre-wrap ${
                      msg.role === 'user' 
                        ? 'bg-primary text-white rounded-tr-none' 
                        : 'bg-white border border-border rounded-tl-none'
                    }`}>
                      {msg.text}
                    </div>
                    <div className={`mt-1.5 flex items-center gap-2 ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                       <span className="text-[10px] font-bold text-foreground/30 uppercase">{msg.time}</span>
                    </div>
                 </div>
              </div>
            </motion.div>
          ))}
          {isTyping && (
            <motion.div 
              initial={{ opacity: 0, y: 5 }} 
              animate={{ opacity: 1, y: 0 }}
              className="flex justify-start items-center gap-2 text-primary font-bold text-xs"
            >
               <Loader2 size={14} className="animate-spin" />
               Expert is analyzing your crop data...
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Input Area */}
      <div className="p-4 md:p-6 border-t border-border bg-white">
        <div className="flex items-center gap-3">
          <button 
            onClick={() => showToast('Attachments')}
            className="p-3 rounded-2xl border border-border hover:bg-muted text-foreground/40 transition-colors"
          >
            <Paperclip size={20} />
          </button>
          
          <div className="flex-1 flex items-center bg-muted/30 rounded-2xl border border-border p-1 pl-4 focus-within:border-primary transition-colors">
            <input 
              type="text" 
              value={inputText}
              onChange={(e) => setInputText(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleSend()}
              placeholder="Ask about crops, pests, market, or weather..." 
              className="bg-transparent border-none focus:ring-0 w-full text-sm font-medium outline-none"
            />
            <button 
              onClick={() => showToast('Emojis')}
              className="p-2 text-foreground/40 hover:text-primary"
            >
               <Smile size={20} />
            </button>
          </div>

          <button 
            onClick={() => setIsRecording(!isRecording)}
            className={`p-4 rounded-2xl transition-all shadow-md active:scale-90 ${
              isRecording 
                ? 'bg-red-500 text-white animate-pulse' 
                : 'bg-secondary text-primary hover:bg-secondary/80'
            }`}
          >
            <Mic size={24} />
          </button>

          <button 
            onClick={handleSend}
            disabled={!inputText.trim() || isTyping}
            className="p-4 bg-primary text-white rounded-2xl shadow-lg shadow-primary/20 hover:bg-primary/90 transition-all disabled:opacity-50 disabled:shadow-none active:scale-95"
          >
            <Send size={24} />
          </button>
        </div>

        <div className="mt-4 flex items-center justify-center gap-2 text-[10px] font-bold text-foreground/30 uppercase tracking-widest text-center">
           <Info size={12} />
           <span>This advice is powered by Gemini AI. Please consult local experts for critical farming decisions.</span>
        </div>
      </div>
    </div>
  );
}
