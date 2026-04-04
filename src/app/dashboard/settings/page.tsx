'use client';

import React, { useState } from 'react';
import { 
  User, 
  Bell, 
  Shield, 
  Globe, 
  Smartphone, 
  HelpCircle,
  ChevronRight,
  Camera,
  CheckCircle2
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function SettingsPage() {
  const [activeSegment, setActiveSegment] = useState('profile');
  const [notifications, setNotifications] = useState(true);
  const [language, setLanguage] = useState('hi');
  const [showSaveToast, setShowSaveToast] = useState(false);

  const saveSettings = () => {
    setShowSaveToast(true);
    setTimeout(() => setShowSaveToast(false), 3000);
  };

  const menuItems = [
    { id: 'profile', label: 'Profile Information', icon: User, desc: 'Manage your personal details and location' },
    { id: 'notifications', label: 'Notifications', icon: Bell, desc: 'SMS and App alert preferences' },
    { id: 'security', label: 'Security', icon: Shield, desc: 'PIN and biometric settings' },
    { id: 'language', label: 'App Language', icon: Globe, desc: 'Change interface language' },
    { id: 'device', label: 'Device & SMS', icon: Smartphone, desc: 'Offline SMS mode settings' },
    { id: 'help', label: 'Help & Support', icon: HelpCircle, desc: 'FAQs and direct contact' },
  ];

  return (
    <div className="max-w-4xl mx-auto space-y-8">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold tracking-tight mb-2 italic">Settings</h1>
        <p className="text-foreground/50 font-medium">Customize your KrishiMitra experience.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
        {/* Sidebar Menu */}
        <div className="md:col-span-4 space-y-2">
          {menuItems.map((item) => (
            <button
              key={item.id}
              onClick={() => setActiveSegment(item.id)}
              className={`w-full flex items-center gap-4 p-4 rounded-2xl transition-all text-left border ${
                activeSegment === item.id 
                  ? 'bg-primary text-white border-primary shadow-lg shadow-primary/20' 
                  : 'bg-card border-border hover:border-primary/30 text-foreground/60'
              }`}
            >
              <item.icon size={20} />
              <div>
                <p className="font-bold text-sm leading-none mb-1">{item.label}</p>
                <p className={`text-[10px] font-medium leading-none ${activeSegment === item.id ? 'text-white/60' : 'text-foreground/30'}`}>
                  {item.desc}
                </p>
              </div>
              <ChevronRight size={14} className={`ml-auto ${activeSegment === item.id ? 'opacity-100' : 'opacity-20'}`} />
            </button>
          ))}
        </div>

        {/* Content Area */}
        <div className="md:col-span-8 bg-card rounded-[2rem] border border-border p-8 shadow-sm relative overflow-hidden">
          <AnimatePresence mode="wait">
            {activeSegment === 'profile' && (
              <motion.div
                key="profile"
                initial={{ opacity: 0, x: 10 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -10 }}
                className="space-y-8"
              >
                <div className="flex items-center gap-6">
                  <div className="relative group">
                    <div className="w-24 h-24 rounded-3xl bg-secondary flex items-center justify-center text-primary border border-primary/10 overflow-hidden relative">
                       <User size={48} />
                       <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center cursor-pointer">
                          <Camera size={24} className="text-white" />
                       </div>
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold italic">Rajesh Kumar</h3>
                    <p className="text-sm font-medium text-foreground/40 mb-3 tracking-tight">Potato Farmer • Barauli, UP</p>
                    <button className="text-xs font-black uppercase text-primary tracking-widest hover:underline">Change Profile Photo</button>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                   <div className="space-y-2">
                      <label className="text-[10px] font-black uppercase text-foreground/30 tracking-widest pl-1">Full Name</label>
                      <input type="text" defaultValue="Rajesh Kumar" className="w-full bg-muted/30 border-border rounded-xl px-4 py-3 text-sm font-bold focus:ring-primary focus:border-primary" />
                   </div>
                   <div className="space-y-2">
                      <label className="text-[10px] font-black uppercase text-foreground/30 tracking-widest pl-1">Phone Number</label>
                      <input type="text" defaultValue="+91 98765 43210" className="w-full bg-muted/30 border-border rounded-xl px-4 py-3 text-sm font-bold focus:ring-primary focus:border-primary" />
                   </div>
                   <div className="space-y-2 sm:col-span-2">
                      <label className="text-[10px] font-black uppercase text-foreground/30 tracking-widest pl-1">Primary Crop Location (Village/Mandi)</label>
                      <input type="text" defaultValue="Barauli Village, Agra District" className="w-full bg-muted/30 border-border rounded-xl px-4 py-3 text-sm font-bold focus:ring-primary focus:border-primary" />
                   </div>
                </div>
              </motion.div>
            )}

            {activeSegment === 'notifications' && (
              <motion.div
                key="notifications"
                initial={{ opacity: 0, x: 10 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -10 }}
                className="space-y-6"
              >
                <h3 className="text-xl font-bold flex items-center gap-2">
                  <Bell size={20} className="text-primary" />
                  Notification Preferences
                </h3>
                <div className="space-y-4">
                   {[
                     { id: 'sms', title: 'SMS Advisories', desc: 'Receive weather and pest alerts via offline SMS' },
                     { id: 'mandi', title: 'Mandi Price Updates', desc: 'Daily morning summary for your tracked crops' },
                     { id: 'voice', title: 'Voice Calls', desc: 'Emergency alerts via automated voice calls' }
                   ].map(opt => (
                     <div key={opt.id} className="flex items-center justify-between p-4 bg-muted/20 rounded-2xl border border-border/50">
                        <div className="flex-1 mr-4">
                           <p className="font-bold text-sm leading-none mb-1">{opt.title}</p>
                           <p className="text-xs text-foreground/40 font-medium">{opt.desc}</p>
                        </div>
                        <button 
                          onClick={() => setNotifications(!notifications)}
                          className={`w-12 h-6 rounded-full transition-colors relative ${notifications ? 'bg-primary' : 'bg-muted'}`}
                        >
                           <div className={`absolute top-1 w-4 h-4 bg-white rounded-full transition-all ${notifications ? 'left-7' : 'left-1'}`} />
                        </button>
                     </div>
                   ))}
                </div>
              </motion.div>
            )}

            {activeSegment === 'language' && (
              <motion.div
                key="language"
                initial={{ opacity: 0, x: 10 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -10 }}
                className="space-y-6"
              >
                <h3 className="text-xl font-bold flex items-center gap-2">
                   <Globe size={20} className="text-primary" />
                   Choose Language
                </h3>
                <div className="grid grid-cols-2 gap-4">
                   {[
                     { id: 'hi', name: 'हिन्दी', sub: 'Hindi' },
                     { id: 'en', name: 'English', sub: 'English' },
                     { id: 'pb', name: 'ਪੰਜਾਬੀ', sub: 'Punjabi' },
                     { id: 'bn', name: 'বাংলা', sub: 'Bengali' }
                   ].map(lang => (
                     <button
                       key={lang.id}
                       onClick={() => setLanguage(lang.id)}
                       className={`p-6 rounded-3xl border-2 transition-all text-left ${
                         language === lang.id ? 'border-primary bg-primary/5' : 'border-border hover:border-primary/20'
                       }`}
                     >
                        <p className="text-xl font-black mb-1">{lang.name}</p>
                        <p className="text-xs font-bold text-foreground/40 uppercase tracking-widest">{lang.sub}</p>
                     </button>
                   ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          <div className="mt-12 flex flex-col sm:flex-row gap-4">
             <button 
               onClick={saveSettings}
               className="flex-1 bg-primary text-white py-4 rounded-2xl font-bold shadow-lg shadow-primary/20 hover:scale-[1.02] active:scale-95 transition-all"
             >
               Save Changes
             </button>
             <button className="flex-1 bg-muted/50 text-foreground/50 py-4 rounded-2xl font-bold border border-border hover:bg-muted transition-all">
               Discard
             </button>
          </div>

          {/* Success Toast */}
          <AnimatePresence>
            {showSaveToast && (
              <motion.div 
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: 50, opacity: 0 }}
                className="absolute bottom-6 left-6 right-6 bg-green-600 text-white p-4 rounded-2xl shadow-xl flex items-center gap-3 z-50 border border-green-500/50"
              >
                <CheckCircle2 size={24} />
                <p className="font-bold text-sm">Settings saved successfully!</p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}
