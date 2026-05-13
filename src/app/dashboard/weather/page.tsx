"use client";

import React from "react";
import { 
  Cloud, Sun, CloudRain, Wind, Droplets, 
  MapPin, ThermometerSun, Calendar, Sprout, ChevronRight
} from "lucide-react";

export default function WeatherPage() {
  return (
    <div className="max-w-6xl mx-auto space-y-8">
      {/* Page Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
        <div>
           <p className="text-[10px] font-black uppercase tracking-widest text-[#1e5128] mb-1 flex items-center gap-1.5">
              <MapPin className="w-3 h-3" />
              Hyper-local Tracking
           </p>
           <h1 className="text-3xl font-bold text-gray-900 mb-1">Weather Advisory</h1>
           <p className="text-gray-400 font-medium">Barauli Village, Uttar Pradesh, India</p>
        </div>

        <div className="flex bg-white rounded-full p-1 border border-gray-100 shadow-sm self-start">
           <button className="px-6 py-2 bg-[#1e5128] text-white rounded-full text-sm font-bold">Celsius</button>
           <button className="px-6 py-2 text-gray-400 text-sm font-bold">Fahrenheit</button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Main Weather Card */}
        <div className="lg:col-span-2 bg-white rounded-[2.5rem] border border-gray-100 p-10 shadow-sm relative overflow-hidden">
           <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div>
                 <div className="flex items-start gap-4 mb-2">
                    <h2 className="text-[8rem] font-black leading-none tracking-tighter text-gray-900">32°</h2>
                 </div>
                 <div className="flex items-center gap-3 text-2xl font-bold text-gray-700">
                    <Sun className="w-8 h-8 text-yellow-500" />
                    Mainly Sunny
                 </div>
              </div>

              <div className="grid grid-cols-1 gap-4">
                 <div className="p-6 bg-gray-50 rounded-3xl flex items-center justify-between">
                    <div className="flex items-center gap-4">
                       <div className="w-10 h-10 bg-blue-500/10 rounded-xl flex items-center justify-center">
                          <Droplets className="w-5 h-5 text-blue-500" />
                       </div>
                       <span className="text-xs font-bold uppercase tracking-widest text-gray-400">Humidity</span>
                    </div>
                    <span className="text-2xl font-black">45%</span>
                 </div>
                 <div className="p-6 bg-gray-50 rounded-3xl flex items-center justify-between">
                    <div className="flex items-center gap-4">
                       <div className="w-10 h-10 bg-orange-500/10 rounded-xl flex items-center justify-center">
                          <Wind className="w-5 h-5 text-orange-500" />
                       </div>
                       <span className="text-xs font-bold uppercase tracking-widest text-gray-400">Wind Speed</span>
                    </div>
                    <span className="text-2xl font-black">12 km/h</span>
                 </div>
              </div>
           </div>

           {/* Hourly Forecast */}
           <div className="mt-20 flex justify-between items-center px-4 overflow-x-auto pb-4">
              <HourlyItem time="10 AM" temp="28°" icon={<Sun className="text-yellow-500" />} />
              <HourlyItem time="12 PM" temp="31°" icon={<Sun className="text-yellow-500" />} />
              <HourlyItem time="02 PM" temp="33°" icon={<Sun className="text-yellow-500" />} />
              <HourlyItem time="04 PM" temp="30°" icon={<Cloud className="text-gray-400" />} />
              <HourlyItem time="06 PM" temp="27°" icon={<Cloud className="text-gray-400" />} />
              <HourlyItem time="08 PM" temp="25°" icon={<CloudRain className="text-blue-400" />} />
           </div>
        </div>

        {/* 7-Day Forecast */}
        <div className="bg-white rounded-[2.5rem] border border-gray-100 p-8 shadow-sm">
           <div className="flex items-center gap-3 mb-8">
              <Calendar className="w-5 h-5 text-gray-400" />
              <h3 className="text-sm font-black uppercase tracking-widest text-gray-400">7-Day Forecast</h3>
           </div>

           <div className="space-y-6">
              <ForecastItem day="Mon" tempLow="22" tempHigh="32" icon={<Sun className="text-yellow-500" />} />
              <ForecastItem day="Tue" tempLow="23" tempHigh="34" icon={<Sun className="text-yellow-500" />} />
              <ForecastItem day="Wed" tempLow="21" tempHigh="31" icon={<CloudRain className="text-blue-400" />} />
              <ForecastItem day="Thu" tempLow="19" tempHigh="29" icon={<Cloud className="text-gray-400" />} />
              <ForecastItem day="Fri" tempLow="18" tempHigh="27" icon={<CloudRain className="text-blue-400" />} />
              <ForecastItem day="Sat" tempLow="20" tempHigh="30" icon={<Sun className="text-yellow-500" />} />
              <ForecastItem day="Sun" tempLow="22" tempHigh="33" icon={<Sun className="text-yellow-500" />} />
           </div>

           <button className="w-full mt-10 py-4 bg-gray-50 text-gray-500 rounded-2xl font-bold text-sm hover:bg-gray-100 transition-all">
              Full 30-Day Analysis
           </button>
        </div>
      </div>

      {/* Irrigation Advisory */}
      <div className="bg-[#1e5128] rounded-3xl p-6 flex items-center justify-between text-white shadow-xl shadow-emerald-900/10">
         <div className="flex items-center gap-6">
            <div className="w-12 h-12 bg-white/20 rounded-2xl flex items-center justify-center">
               <Sprout className="w-6 h-6" />
            </div>
            <div>
               <h3 className="text-lg font-bold uppercase tracking-tight">Smart Irrigation Advisory</h3>
               <p className="text-white/60 text-sm font-medium">Optimal conditions for sowing today. Soil moisture is sufficient.</p>
            </div>
         </div>
         <ChevronRight className="w-6 h-6 opacity-50" />
      </div>
    </div>
  );
}

function HourlyItem({ time, temp, icon }: { time: string, temp: string, icon: React.ReactNode }) {
  return (
    <div className="flex flex-col items-center gap-3 min-w-[80px]">
       <p className="text-[10px] font-black uppercase text-gray-400">{time}</p>
       <div className="w-10 h-10 flex items-center justify-center">{icon}</div>
       <p className="text-lg font-black text-gray-900">{temp}</p>
    </div>
  );
}

function ForecastItem({ day, tempLow, tempHigh, icon }: { day: string, tempLow: string, tempHigh: string, icon: React.ReactNode }) {
  return (
    <div className="flex items-center justify-between">
       <span className="w-10 text-sm font-bold text-gray-900">{day}</span>
       <div className="w-6 h-6 flex items-center justify-center">{icon}</div>
       <div className="flex-1 mx-6 h-1 bg-gray-100 rounded-full relative">
          <div className="absolute left-1/4 right-1/4 h-1 bg-emerald-500 rounded-full" />
       </div>
       <div className="flex items-center gap-2">
          <span className="text-sm font-bold text-gray-900">{tempHigh}°</span>
          <span className="text-[10px] font-bold text-gray-400">{tempLow}°</span>
       </div>
    </div>
  );
}
