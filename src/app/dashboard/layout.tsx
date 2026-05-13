"use client";

import { useAuth } from "@/context/AuthContext";
import { useTheme } from "@/context/ThemeContext";
import { 
  Sprout, LayoutDashboard, MessageSquare, Cloud, 
  TrendingUp, Settings, LogOut, Bell, User as UserIcon,
  Menu, X
} from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  const { user, logout } = useAuth();
  const { theme, toggleTheme } = useTheme();
  const pathname = usePathname();
  const [mobileMenu, setMobileMenu] = useState(false);

  const navItems = [
    { href: "/dashboard", label: "Overview", icon: <LayoutDashboard /> },
    { href: "/dashboard/chat", label: "AI Expert", icon: <MessageSquare /> },
    { href: "/dashboard/weather", label: "Climate", icon: <Cloud /> },
    { href: "/dashboard/market", label: "Mandi Pulse", icon: <TrendingUp /> },
  ];

  return (
    <div className="min-h-screen bg-background flex">
      {/* Sidebar Desktop */}
      <aside className="fixed left-0 top-0 h-full w-24 lg:w-72 glass border-r border-border hidden md:flex flex-col z-[100]">
        <div className="p-8 mb-8 flex items-center gap-3">
          <div className="w-12 h-12 bg-primary rounded-2xl flex items-center justify-center shrink-0 shadow-lg shadow-primary/20">
            <Sprout className="text-white w-7 h-7" />
          </div>
          <span className="hidden lg:block font-black text-2xl tracking-tighter uppercase">KrishiMitra</span>
        </div>

        <nav className="flex-1 px-4 space-y-3">
          {navItems.map((item) => (
            <Link 
              key={item.href}
              href={item.href}
              className={`flex items-center gap-4 p-4 rounded-2xl transition-all font-bold text-sm tracking-wide uppercase ${pathname === item.href ? "bg-primary text-white shadow-lg shadow-primary/30" : "text-muted-foreground hover:bg-white/5 hover:text-primary"}`}
            >
              <span className="w-6 h-6">{item.icon}</span>
              <span className="hidden lg:block">{item.label}</span>
            </Link>
          ))}
        </nav>

        <div className="p-6 border-t border-border">
          <div className="hidden lg:flex items-center gap-4 mb-6 p-4 glass-emerald rounded-2xl">
             <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center border border-primary/30">
                <UserIcon className="w-5 h-5 text-primary" />
             </div>
             <div className="overflow-hidden">
                <p className="text-sm font-black truncate uppercase">{user?.name || "Farmer"}</p>
                <p className="text-[10px] font-bold text-primary truncate uppercase">{user?.role || "Gold Member"}</p>
             </div>
          </div>
          <button 
            onClick={logout}
            className="w-full flex items-center gap-4 p-4 text-muted-foreground hover:text-red-500 hover:bg-red-500/5 rounded-2xl transition-all font-bold text-sm uppercase tracking-widest"
          >
            <LogOut className="w-6 h-6" />
            <span className="hidden lg:block">Sign Out</span>
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <div className="flex-1 md:pl-24 lg:pl-72 relative">
        {/* Mobile Header */}
        <header className="md:hidden glass h-20 flex items-center justify-between px-6 sticky top-0 z-[110]">
          <Link href="/" className="flex items-center gap-2">
            <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
              <Sprout className="text-white w-5 h-5" />
            </div>
            <span className="font-black tracking-tighter uppercase">KrishiMitra</span>
          </Link>
          <button onClick={() => setMobileMenu(!mobileMenu)} className="p-2 glass rounded-xl">
            {mobileMenu ? <X /> : <Menu />}
          </button>
        </header>

        {/* Desktop Top Nav */}
        <header className="hidden md:flex h-20 glass-emerald border-none mx-6 mt-6 rounded-[2rem] items-center justify-between px-10 relative z-10">
           <div className="flex items-center gap-6">
              <p className="text-xs font-black uppercase tracking-widest text-primary">Live Dashboard</p>
           </div>
           <div className="flex items-center gap-6">
              <button onClick={toggleTheme} className="p-2.5 glass rounded-xl hover:bg-white/5 transition-all">
                {theme === "dark" ? "🌙" : "☀️"}
              </button>
              <button className="relative p-2.5 glass rounded-xl hover:bg-white/5 transition-all">
                <Bell className="w-5 h-5 text-muted-foreground" />
                <span className="absolute top-2 right-2 w-2.5 h-2.5 bg-primary rounded-full border-2 border-background" />
              </button>
              <div className="h-8 w-px bg-border mx-2" />
              <div className="flex items-center gap-4">
                 <div className="text-right">
                    <p className="text-xs font-black uppercase">{user?.name || "Farmer"}</p>
                    <p className="text-[10px] font-bold text-primary uppercase">M-ID: 4321-K</p>
                 </div>
              </div>
           </div>
        </header>

        <main className="p-6 md:p-10">
          {children}
        </main>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileMenu && (
          <motion.div 
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            className="fixed inset-0 z-[120] bg-background md:hidden p-8"
          >
            <div className="flex justify-between items-center mb-12">
               <span className="font-black text-2xl uppercase">Menu</span>
               <button onClick={() => setMobileMenu(false)} className="p-2 glass rounded-xl"><X /></button>
            </div>
            <nav className="space-y-6">
              {navItems.map((item) => (
                <Link 
                  key={item.href}
                  href={item.href}
                  onClick={() => setMobileMenu(false)}
                  className={`flex items-center gap-6 text-xl font-black uppercase ${pathname === item.href ? "text-primary" : "text-muted-foreground"}`}
                >
                  <span className="w-8 h-8">{item.icon}</span>
                  {item.label}
                </Link>
              ))}
              <div className="h-px bg-border my-8" />
              <button onClick={logout} className="flex items-center gap-6 text-xl font-black uppercase text-red-500">
                <LogOut className="w-8 h-8" />
                Sign Out
              </button>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
