"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { 
  Cloud, Sun, CloudRain, Wind, Droplets, 
  MapPin, Search, ArrowLeft, Loader2, ThermometerSun,
  AlertTriangle, Navigation, Calendar
} from "lucide-react";
import Link from "next/link";
import axios from "axios";

export default function WeatherPage() {
  const [weather, setWeather] = useState<any>(null);
  const [forecast, setForecast] = useState<any>([]);
  const [loading, setLoading] = useState(true);
  const [city, setCity] = useState("");
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    // Initial fetch based on Geolocation
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (pos) => fetchWeather(pos.coords.latitude, pos.coords.longitude),
        () => fetchWeather(20.5937, 78.9629) // Default India
      );
    } else {
      fetchWeather(20.5937, 78.9629);
    }
  }, []);

  const fetchWeather = async (lat: number, lon: number, cityName?: string) => {
    setLoading(true);
    try {
      const url = cityName 
        ? `/api/weather?city=${cityName}` 
        : `/api/weather?lat=${lat}&lon=${lon}`;
      
      const res = await axios.get(url);
      setWeather(res.data);
      setCity(res.data.name);
      
      // Simulating forecast data for 5 days
      setForecast([
        { day: "Tomorrow", temp: 32, cond: "Sunny" },
        { day: "Friday", temp: 28, cond: "Cloudy" },
        { day: "Saturday", temp: 24, cond: "Rainy" },
        { day: "Sunday", temp: 30, cond: "Partly Cloudy" },
        { day: "Monday", temp: 33, cond: "Sunny" },
      ]);
    } catch (error) {
      console.error("Weather Fetch Error", error);
    } finally {
      setLoading(false);
    }
  };

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery) fetchWeather(0, 0, searchQuery);
  };

  const getFarmingAdvice = (cond: string) => {
    if (cond.includes("Rain")) return "Prepare drainage systems. Avoid pesticide spray today.";
    if (cond.includes("Sun")) return "Ideal for harvesting. Ensure adequate irrigation for young saplings.";
    return "Standard monitoring. Good day for soil testing.";
  };

  return (
    <div className="min-h-screen bg-background p-6 md:p-10 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_0%_0%,rgba(16,185,129,0.1),transparent)] pointer-events-none" />

      <header className="max-w-7xl mx-auto flex flex-col md:flex-row md:items-center justify-between gap-6 mb-12 relative z-10">
        <div className="flex items-center gap-4">
          <Link href="/dashboard" className="p-3 glass rounded-2xl hover:bg-white/5 transition-all">
            <ArrowLeft className="w-5 h-5 text-muted-foreground" />
          </Link>
          <div>
            <h1 className="text-3xl font-black tracking-tight uppercase">Climate <span className="text-primary">Intelligence</span></h1>
            <p className="text-muted-foreground flex items-center gap-2 text-sm font-bold">
              <Navigation className="w-3.5 h-3.5 text-primary" />
              {loading ? "Locating..." : city}
            </p>
          </div>
        </div>

        <form onSubmit={handleSearch} className="relative">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500" />
          <input 
            type="text" 
            placeholder="Search City (e.g. Nashik)" 
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="bg-white/5 border border-border rounded-2xl py-4 pl-12 pr-6 focus:outline-none focus:border-primary transition-all w-full md:w-80 font-bold"
          />
        </form>
      </header>

      {loading ? (
        <div className="flex flex-col items-center justify-center py-40 gap-4">
          <Loader2 className="w-12 h-12 text-primary animate-spin" />
          <p className="text-muted-foreground font-black uppercase tracking-widest text-xs">Analyzing Atmospheric Patterns...</p>
        </div>
      ) : (
        <main className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8 relative z-10">
          {/* Main Weather Card */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="lg:col-span-2 glass-emerald p-10 rounded-[3rem] relative overflow-hidden group"
          >
            <div className="absolute top-0 right-0 p-10 opacity-10 group-hover:opacity-20 transition-opacity">
               <Sun className="w-48 h-48 text-white" />
            </div>
            
            <div className="flex justify-between items-start mb-12">
               <div>
                  <p className="text-primary text-xs font-black uppercase tracking-[0.2em] mb-4">Current Conditions</p>
                  <h2 className="text-8xl font-black tracking-tighter mb-2">{weather?.main?.temp?.toFixed(1)}°</h2>
                  <p className="text-2xl font-bold capitalize">{weather?.weather?.[0]?.description}</p>
               </div>
               <div className="text-right">
                  <p className="text-sm font-black uppercase text-muted-foreground">{new Date().toLocaleDateString('en-GB', { weekday: 'long', day: 'numeric', month: 'long' })}</p>
               </div>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
               <WeatherDetail icon={<Droplets />} label="Humidity" value={`${weather?.main?.humidity}%`} />
               <WeatherDetail icon={<Wind />} label="Wind Speed" value={`${weather?.wind?.speed} m/s`} />
               <WeatherDetail icon={<ThermometerSun />} label="RealFeel" value={`${weather?.main?.feels_like?.toFixed(1)}°`} />
               <WeatherDetail icon={<Cloud />} label="Visibility" value={`${(weather?.visibility / 1000).toFixed(1)} km`} />
            </div>
          </motion.div>

          {/* Farming Advisor Sidebar */}
          <div className="space-y-8">
             <motion.div 
               initial={{ opacity: 0, x: 20 }}
               animate={{ opacity: 1, x: 0 }}
               className="glass p-8 rounded-[2.5rem] border-l-4 border-l-primary"
             >
                <div className="flex items-center gap-3 mb-6">
                   <AlertTriangle className="w-6 h-6 text-primary" />
                   <h3 className="text-lg font-black uppercase">Krishi Recommendation</h3>
                </div>
                <p className="text-sm font-medium leading-relaxed text-muted-foreground mb-6">
                   {getFarmingAdvice(weather?.weather?.[0]?.main)}
                </p>
                <div className="p-4 bg-primary/10 rounded-2xl flex items-center gap-3">
                   <Sprout className="w-5 h-5 text-primary" />
                   <span className="text-xs font-bold">Soil moisture is optimal for sowing today.</span>
                </div>
             </motion.div>

             {/* 5-Day Forecast */}
             <motion.div 
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.1 }}
                className="glass p-8 rounded-[2.5rem]"
             >
                <div className="flex items-center gap-3 mb-6">
                   <Calendar className="w-5 h-5 text-muted-foreground" />
                   <h3 className="text-lg font-black uppercase">5-Day Forecast</h3>
                </div>
                <div className="space-y-4">
                   {forecast.map((f: any, idx: number) => (
                      <div key={idx} className="flex items-center justify-between p-3 bg-white/5 rounded-2xl">
                         <span className="text-xs font-bold w-20">{f.day}</span>
                         {f.cond === "Sunny" && <Sun className="w-4 h-4 text-yellow-500" />}
                         {f.cond === "Cloudy" && <Cloud className="w-4 h-4 text-gray-400" />}
                         {f.cond === "Rainy" && <CloudRain className="w-4 h-4 text-blue-400" />}
                         <span className="text-sm font-black">{f.temp}°C</span>
                      </div>
                   ))}
                </div>
             </motion.div>
          </div>
        </main>
      )}
    </div>
  );
}

function WeatherDetail({ icon, label, value }: { icon: React.ReactNode, label: string, value: string }) {
  return (
    <div className="space-y-2">
       <div className="flex items-center gap-2 text-primary/60">
          {icon}
          <span className="text-[10px] font-black uppercase tracking-widest">{label}</span>
       </div>
       <p className="text-lg font-bold">{value}</p>
    </div>
  );
}
