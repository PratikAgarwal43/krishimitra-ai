'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { 
  LayoutDashboard, 
  CloudSun, 
  TrendingUp, 
  MessageSquare, 
  Settings, 
  LogOut,
  Bell,
  Search,
  User,
  Sprout,
  Menu,
  X
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const navigation = [
  { name: 'Dashboard', href: '/dashboard', icon: LayoutDashboard },
  { name: 'Weather', href: '/dashboard/weather', icon: CloudSun },
  { name: 'Market', href: '/dashboard/market', icon: TrendingUp },
  { name: 'AI Expert', href: '/dashboard/chat', icon: MessageSquare },
  { name: 'Settings', href: '/dashboard/settings', icon: Settings },
];

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const SidebarContent = () => (
    <div className="flex flex-col h-full">
      <div className="p-6 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3">
          <div className="bg-primary p-2 rounded-xl text-white shadow-lg shadow-primary/20">
            <Sprout size={24} />
          </div>
          <span className="font-bold text-xl text-primary tracking-tight">KrishiMitra</span>
        </Link>
        <button onClick={() => setIsMobileMenuOpen(false)} className="md:hidden p-2 hover:bg-muted rounded-lg transition-colors">
          <X size={20} />
        </button>
      </div>

      <nav className="flex-1 px-4 py-4 space-y-1">
        {navigation.map((item) => {
          const isActive = pathname === item.href;
          return (
            <Link
              key={item.name}
              href={item.href}
              onClick={() => setIsMobileMenuOpen(false)}
              className={`flex items-center gap-3 px-4 py-3 rounded-2xl transition-all duration-200 group ${
                isActive 
                  ? 'bg-primary text-white shadow-md shadow-primary/20' 
                  : 'text-foreground/60 hover:bg-muted hover:text-primary'
              }`}
            >
              <item.icon size={20} className={isActive ? 'text-white' : 'group-hover:scale-110 transition-transform'} />
              <span className="font-semibold">{item.name}</span>
              {isActive && (
                <motion.div 
                  layoutId="activeNav" 
                  className="ml-auto w-1.5 h-1.5 rounded-full bg-white"
                />
              )}
            </Link>
          );
        })}
      </nav>

      <div className="p-4 border-t border-border bg-card">
        <button className="flex items-center gap-3 w-full px-4 py-3 text-red-500 hover:bg-red-50 rounded-2xl transition-colors font-semibold group transition-all duration-300">
          <LogOut size={20} className="group-hover:rotate-12" />
          <span>Sign Out</span>
        </button>
      </div>
    </div>
  );

  return (
    <div className="flex min-h-screen bg-muted/30 font-sans selection:bg-primary/20">
      {/* Desktop Sidebar */}
      <aside className="w-64 bg-card border-r border-border hidden md:flex flex-col sticky top-0 h-screen">
        <SidebarContent />
      </aside>

      {/* Mobile Drawer Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsMobileMenuOpen(false)}
              className="fixed inset-0 bg-black/40 backdrop-blur-sm z-[90] md:hidden"
            />
            <motion.aside
              initial={{ x: '-100%' }}
              animate={{ x: 0 }}
              exit={{ x: '-100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 150 }}
              className="fixed left-0 top-0 bottom-0 w-[280px] bg-card z-[100] md:hidden shadow-2xl border-r border-border"
            >
              <SidebarContent />
            </motion.aside>
          </>
        )}
      </AnimatePresence>

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col min-h-0 overflow-hidden w-full">
        {/* Topbar */}
        <header className="h-16 bg-card/80 backdrop-blur-md border-b border-border px-4 md:px-6 flex items-center justify-between sticky top-0 z-50">
          <div className="flex items-center gap-4 flex-1">
            <button 
              onClick={() => setIsMobileMenuOpen(true)}
              className="md:hidden p-2 -ml-2 hover:bg-muted rounded-xl transition-colors"
            >
              <Menu size={24} className="text-foreground/70" />
            </button>
            <div className="flex items-center gap-3 bg-muted/50 px-4 py-2 rounded-2xl border border-border/50 max-w-sm w-full transition-all focus-within:bg-white focus-within:border-primary/50 focus-within:shadow-sm">
              <Search size={18} className="text-foreground/40 shrink-0" />
              <input 
                type="text" 
                placeholder="Search advisory..." 
                className="bg-transparent border-none focus:ring-0 text-sm w-full outline-none placeholder:text-foreground/30 font-medium"
              />
            </div>
          </div>

          <div className="flex items-center gap-2 md:gap-4 pl-4 border-l border-border ml-4">
            <button className="p-2 md:p-2.5 rounded-xl border border-border hover:bg-muted relative transition-all active:scale-95 text-foreground/70 ring-primary/20">
              <Bell size={18} className="md:size-[20px]" />
              <span className="absolute top-2 right-2 w-2 h-2 bg-red-500 rounded-full border-2 border-card" />
            </button>
            
            <Link href="/dashboard/settings" className="flex items-center gap-3 hover:opacity-80 transition-all border border-transparent p-1 px-2 rounded-xl">
              <div className="text-right hidden lg:block">
                <p className="text-xs font-black leading-none mb-1">Rajesh Kumar</p>
                <p className="text-[9px] text-foreground/40 font-black uppercase tracking-widest leading-none">Potato Farmer</p>
              </div>
              <div className="w-8 h-8 md:w-10 md:h-10 rounded-xl bg-primary text-white flex items-center justify-center border border-primary/20 shadow-md shadow-primary/10 overflow-hidden">
                <User size={20} className="md:size-[24px]" />
              </div>
            </Link>
          </div>
        </header>

        {/* Scrollable Main Area */}
        <main className="flex-1 overflow-y-auto p-4 md:p-8 scroll-smooth">
          <AnimatePresence mode="wait">
            <motion.div
              key={pathname}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
            >
              {children}
            </motion.div>
          </AnimatePresence>
        </main>
      </div>
    </div>
  );
}
