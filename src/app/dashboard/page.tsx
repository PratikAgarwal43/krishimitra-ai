'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { 
  CloudSun, 
  TrendingUp, 
  Droplets, 
  Leaf, 
  ChevronRight, 
  Thermometer,
  Wind,
  Calendar,
  MessageSquare,
  MapPin,
  Loader2
} from 'lucide-react';
import { motion } from 'framer-motion';

export default function DashboardHome() {
  const [activeTab, setActiveTab] = useState<'overview' | 'yield'>('overview');
  const [weather, setWeather] = useState<any>(null);
  const [marketPrices, setMarketPrices] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [location, setLocation] = useState<{ lat: number; lon: number } | null>(null);

  useEffect(() => {
    // 1. Detect Location
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setLocation({
            lat: position.coords.latitude,
            lon: position.coords.longitude
          });
        },
        () => {
          // Default to Nashik if permission denied
          setLocation({ lat: 19.9975, lon: 73.7898 });
        }
      );
    } else {
      setLocation({ lat: 19.9975, lon: 73.7898 });
    }
  }, []);

  useEffect(() => {
    if (!location) return;

    const fetchData = async () => {
      setLoading(true);
      try {
        const [weatherRes, marketRes] = await Promise.all([
          fetch(`/api/weather?lat=${location.lat}&lon=${location.lon}`),
          fetch(`/api/market?state=Maharashtra`)
        ]);

        const weatherData = await weatherRes.json();
        const marketData = await marketRes.json();

        setWeather(weatherData);
        setMarketPrices(marketData.prices);
      } catch (err) {
        console.error("Fetch Error:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [location]);

  const stats = [
    { label: 'Soil Moisture', value: '32%', icon: Droplets, color: 'bg-blue-50 text-blue-600', trend: '+2% from yesterday', href: '/dashboard/weather' },
    { label: 'Crop Health', value: 'Good', icon: Leaf, color: 'bg-green-50 text-green-600', trend: 'Healthy growth detected', href: '/dashboard/weather' },
    { label: 'Market Value', value: marketPrices.length > 0 ? `₹${marketPrices[0].price}` : '₹2,450', icon: TrendingUp, color: 'bg-yellow-50 text-yellow-600', trend: 'Live from Mandi', href: '/dashboard/market' },
  ];

  const container = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { staggerChildren: 0.1 } }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  };

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold tracking-tight mb-2 italic">Krishi Mitram! 👋</h1>
          <p className="text-foreground/50 font-medium">Here&apos;s what&apos;s happening in your farm today.</p>
        </div>
        <div className="flex bg-card p-1.5 rounded-2xl border border-border shadow-sm">
          <button 
            onClick={() => setActiveTab('overview')}
            className={`px-4 py-2 rounded-xl font-bold text-sm transition-all ${
              activeTab === 'overview' ? 'bg-primary text-white' : 'text-foreground/50 hover:text-primary'
            }`}
          >
            Overview
          </button>
          <button 
            onClick={() => setActiveTab('yield')}
            className={`px-4 py-2 rounded-xl font-bold text-sm transition-all ${
              activeTab === 'yield' ? 'bg-primary text-white' : 'text-foreground/50 hover:text-primary'
            }`}
          >
            Yield Tracking
          </button>
        </div>
      </div>

      {/* Main Grid */}
      <motion.div variants={container} initial="hidden" animate="show" className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Quick Stats */}
        {stats.map((stat, idx) => (
          <Link key={idx} href={stat.href} className="lg:col-span-4">
            <motion.div variants={item} className="bg-card p-6 rounded-3xl border border-border shadow-sm hover:shadow-md transition-shadow group cursor-pointer h-full">
              <div className="flex items-center justify-between mb-4">
                <div className={`${stat.color} p-3 rounded-2xl`}>
                  <stat.icon size={24} />
                </div>
                <ChevronRight size={18} className="text-foreground/20 group-hover:text-primary transition-colors" />
              </div>
              <p className="text-sm font-bold text-foreground/50 mb-1 uppercase tracking-wider">{stat.label}</p>
              <h3 className="text-3xl font-extrabold mb-2 tracking-tight">{stat.value}</h3>
              <p className="text-xs font-bold text-primary">{stat.trend}</p>
            </motion.div>
          </Link>
        ))}

        {/* Weather Card */}
        <motion.div variants={item} className="lg:col-span-8 bg-card rounded-3xl border border-border shadow-sm overflow-hidden flex flex-col md:flex-row relative">
          <div className="flex-1 p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-yellow-100 text-yellow-600 rounded-xl flex items-center justify-center">
                <CloudSun size={24} />
              </div>
              <div>
                <h4 className="font-bold text-lg">Hyper-local Weather</h4>
                <p className="text-foreground/40 text-sm font-medium flex items-center gap-1">
                  <MapPin size={14} />
                  {loading ? "Detecting location..." : (weather?.current?.location || "Loading...")}
                </p>
              </div>
            </div>

            {loading ? (
              <div className="h-32 flex items-center justify-center">
                <Loader2 className="w-8 h-8 animate-spin text-primary" />
              </div>
            ) : (
              <>
                <div className="flex items-end gap-6 mb-8">
                  <div className="text-6xl font-black tracking-tighter">{weather?.current?.temp}°C</div>
                  <div className="flex flex-col mb-1 text-foreground/60 font-semibold uppercase text-xs tracking-widest">
                    <span>{weather?.current?.condition}</span>
                    <span className="text-primary italic lowercase">
                      {weather?.current?.description}
                    </span>
                  </div>
                </div>

                <div className="grid grid-cols-3 gap-4 border-t border-border pt-6">
                  <div className="flex items-center gap-3">
                    <Thermometer size={18} className="text-orange-500" />
                    <div className="text-xs">
                      <p className="text-foreground/40 font-bold uppercase tracking-tighter">Humidity</p>
                      <p className="font-extrabold">{weather?.current?.humidity}%</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 border-x border-border/50 px-4">
                    <Wind size={18} className="text-blue-500" />
                    <div className="text-xs">
                      <p className="text-foreground/40 font-bold uppercase tracking-tighter">Wind</p>
                      <p className="font-extrabold">{weather?.current?.windSpeed} km/h</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <Calendar size={18} className="text-green-500" />
                    <div className="text-xs">
                       <p className="text-foreground/40 font-bold uppercase tracking-tighter">Day</p>
                       <p className="font-extrabold">{new Date().toLocaleDateString("hi-IN", { weekday: "short" })}</p>
                    </div>
                  </div>
                </div>
              </>
            )}
          </div>

          <div className="md:w-64 bg-primary/5 p-8 border-l border-border/50 flex flex-col justify-between">
            <div className="space-y-4">
               <h5 className="font-bold text-primary uppercase text-[10px] tracking-widest pl-1 border-l-2 border-primary">Live Advisor</h5>
               <p className="text-xs font-semibold leading-relaxed text-foreground/70">
                 {weather?.alerts?.[0] || "Optimized farming conditions detected. Maintain your irrigation schedule."}
               </p>
            </div>
            <Link href="/dashboard/weather">
              <button className="w-full bg-primary text-white py-3 rounded-xl font-bold text-sm shadow-lg shadow-primary/20 hover:scale-[1.02] active:scale-95 transition-transform">
                Full Insights
              </button>
            </Link>
          </div>
        </motion.div>

        {/* Market Table Mini View */}
        <motion.div variants={item} className="lg:col-span-4 bg-card rounded-3xl border border-border shadow-sm p-8 h-full">
          <div className="flex items-center justify-between mb-8">
            <h4 className="font-bold text-lg tracking-tight">Market Pulse</h4>
            <TrendingUp size={18} className="text-primary" />
          </div>

          <div className="space-y-6">
            {loading ? (
              [1, 2, 3].map((i) => (
                <div key={i} className="animate-pulse flex flex-col gap-1.5">
                  <div className="h-4 w-1/2 bg-muted rounded" />
                  <div className="h-3 w-3/4 bg-muted/50 rounded" />
                </div>
              ))
            ) : (
              marketPrices.slice(0, 4).map((price, idx) => (
                <div key={idx} className="flex items-center justify-between">
                  <div>
                    <h5 className="font-bold text-sm">{price.crop}</h5>
                    <p className="text-[10px] text-foreground/40 font-bold">{price.mandi}</p>
                  </div>
                  <div className="text-right">
                    <p className="font-bold text-sm">₹{price.price}</p>
                    <p className={`text-[9px] font-bold ${price.trend === 'up' ? 'text-green-500' : 'text-red-500'}`}>
                      {price.trend === 'up' ? '▲' : '▼'} {price.trend.toUpperCase()}
                    </p>
                  </div>
                </div>
              ))
            )}
          </div>

          <div className="mt-12 bg-muted/40 p-5 rounded-2xl border border-border/50 text-center">
            <p className="text-xs font-bold text-foreground/40 mb-3 uppercase tracking-widest leading-loose">Check other Mandis?</p>
            <Link href="/dashboard/market">
              <button className="flex items-center justify-center gap-2 w-full bg-white border border-border text-primary py-3 rounded-xl font-bold text-sm shadow-sm hover:shadow-md transition-shadow active:scale-95">
                Market Full View
              </button>
            </Link>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
}
