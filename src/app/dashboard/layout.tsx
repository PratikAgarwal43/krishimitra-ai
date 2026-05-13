"use client";

import { 
  LayoutDashboard, Cloud, TrendingUp, MessageSquare, 
  Settings, LogOut, Bell, Search, User, Menu, X, Sprout
} from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const [mobileMenu, setMobileMenu] = useState(false);

  const navItems = [
    { href: "/dashboard", label: "Dashboard", icon: <LayoutDashboard /> },
    { href: "/dashboard/weather", label: "Weather", icon: <Cloud /> },
    { href: "/dashboard/market", label: "Market", icon: <TrendingUp /> },
    { href: "/dashboard/chat", label: "AI Expert", icon: <MessageSquare /> },
    { href: "/dashboard/settings", label: "Settings", icon: <Settings /> },
  ];

  return (
    <div className="min-h-screen bg-[#f4f7f5] flex">
      {/* Sidebar Desktop */}
      <aside className="fixed left-0 top-0 h-full w-64 bg-white border-r border-gray-100 hidden lg:flex flex-col z-[100]">
        <div className="p-8 mb-4 flex items-center gap-3">
          <div className="w-8 h-8 bg-[#1e5128] rounded-lg flex items-center justify-center">
            <Sprout className="text-white w-5 h-5" />
          </div>
          <span className="font-bold text-xl text-[#1e5128]">KrishiMitra</span>
        </div>

        <nav className="flex-1 px-4 space-y-2 mt-4">
          {navItems.map((item) => (
            <Link 
              key={item.href}
              href={item.href}
              className={`flex items-center gap-4 px-4 py-3.5 rounded-xl transition-all font-semibold text-sm ${pathname === item.href ? "bg-[#1e5128] text-white shadow-lg shadow-emerald-900/10" : "text-gray-500 hover:bg-gray-50 hover:text-[#1e5128]"}`}
            >
              <span className="w-5 h-5">{item.icon}</span>
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="p-6">
          <button className="w-full flex items-center gap-4 px-4 py-3 text-red-500 hover:bg-red-50 rounded-xl transition-all font-bold text-sm">
            <LogOut className="w-5 h-5" />
            Sign Out
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <div className="flex-1 lg:pl-64 flex flex-col">
        {/* Top Header */}
        <header className="h-20 bg-white/50 backdrop-blur-md border-b border-gray-100 flex items-center justify-between px-10 sticky top-0 z-[90]">
           <div className="relative w-96 hidden md:block">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
              <input 
                type="text" 
                placeholder="Search advisory, markets..." 
                className="w-full bg-gray-100/50 border-none rounded-full py-2.5 pl-11 pr-4 text-sm focus:ring-1 focus:ring-emerald-500/20"
              />
           </div>

           <div className="flex items-center gap-6">
              <button className="relative p-2.5 hover:bg-gray-100 rounded-full transition-all">
                <Bell className="w-5 h-5 text-gray-400" />
                <span className="absolute top-2 right-2 w-2 h-2 bg-red-500 rounded-full border-2 border-white" />
              </button>
              
              <div className="flex items-center gap-4 pl-4 border-l border-gray-100">
                 <div className="text-right hidden sm:block">
                    <p className="text-sm font-bold text-gray-900">Rajesh Kumar</p>
                    <p className="text-[10px] font-black uppercase text-gray-400">Potato Farmer</p>
                 </div>
                 <div className="w-10 h-10 bg-[#1e5128] rounded-full flex items-center justify-center text-white">
                    <User className="w-6 h-6" />
                 </div>
              </div>
              <button className="lg:hidden p-2" onClick={() => setMobileMenu(true)}>
                <Menu className="w-6 h-6 text-gray-400" />
              </button>
           </div>
        </header>

        <main className="p-8">
          {children}
        </main>
      </div>
    </div>
  );
}
