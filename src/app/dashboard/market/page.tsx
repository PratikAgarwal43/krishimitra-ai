"use client";

import { 
  TrendingUp, Map, BarChart3, Package, 
  ChevronRight, FileText, ShoppingBag, 
  ArrowUpRight, Info
} from "lucide-react";

export default function MarketPage() {
  return (
    <div className="max-w-6xl mx-auto space-y-10">
      {/* Page Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-8">
        <div>
           <h1 className="text-3xl font-bold text-[#1e5128] tracking-tight uppercase mb-2">Market Intelligence</h1>
           <p className="text-gray-500 font-medium">Real-time Mandi prices & AI-driven trade insights.</p>
        </div>

        <div className="flex items-center gap-4">
           <button className="flex items-center gap-2 px-6 py-3 bg-gray-50 border border-gray-100 rounded-2xl text-sm font-bold text-gray-700 hover:bg-gray-100 transition-all">
              <Map className="w-4 h-4" />
              Nearby Mandis
           </button>
           <button className="flex items-center gap-2 px-6 py-3 bg-[#1e5128] text-white rounded-2xl text-sm font-bold hover:bg-[#194322] transition-all shadow-lg shadow-emerald-900/10">
              <TrendingUp className="w-4 h-4" />
              Price Prediction
           </button>
        </div>
      </div>

      {/* Main Smart Insight Card */}
      <div className="bg-[#1e5128] rounded-[2.5rem] p-10 text-white relative overflow-hidden shadow-2xl shadow-emerald-900/20">
         <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-500/20 rounded-full -translate-y-1/2 translate-x-1/4 blur-3xl pointer-events-none" />
         
         <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
            <div className="flex flex-col md:flex-row items-center gap-8 text-center md:text-left">
               <div className="w-24 h-24 bg-white/10 rounded-[2rem] flex items-center justify-center shrink-0 border border-white/10 shadow-inner">
                  <Package className="w-10 h-10 text-yellow-400" />
               </div>
               <div>
                  <span className="text-[10px] font-black uppercase tracking-widest bg-white/10 px-3 py-1 rounded-full mb-4 inline-block">AI Smart Insight</span>
                  <h2 className="text-4xl md:text-5xl font-bold mb-4 leading-tight">
                     Best time to sell: <br />
                     <span className="text-yellow-400">Next 5 Days</span>
                  </h2>
               </div>
            </div>

            <div className="space-y-8">
               <div className="bg-white/5 border border-white/10 backdrop-blur-md rounded-3xl p-8">
                  <div className="flex items-center justify-between mb-2">
                     <p className="text-[10px] font-black uppercase tracking-widest text-white/50">Current Confidence</p>
                     <Info className="w-4 h-4 text-white/30" />
                  </div>
                  <p className="text-4xl font-black italic tracking-tighter">89.4%</p>
               </div>
               
               <p className="text-lg text-white/80 font-medium leading-relaxed">
                  Market demand for Potatoes is peaking due to lower supply from cooling zones. We predict a 12% price hike by Friday.
               </p>

               <button className="w-full py-5 bg-yellow-400 text-[#1e5128] rounded-2xl font-black text-sm hover:bg-yellow-300 transition-all flex items-center justify-center gap-3">
                  Generate Detailed Report
                  <FileText className="w-5 h-5" />
               </button>
            </div>
         </div>
      </div>

      {/* Market Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
         <div className="bg-white rounded-3xl p-8 border border-gray-100 shadow-sm flex items-center gap-6">
            <div className="w-14 h-14 bg-emerald-50 rounded-2xl flex items-center justify-center text-emerald-600">
               <ShoppingBag className="w-6 h-6" />
            </div>
            <div>
               <p className="text-[10px] font-black uppercase tracking-widest text-gray-400 mb-1">Top Volume</p>
               <h4 className="text-xl font-bold">Cotton</h4>
            </div>
         </div>
         <div className="bg-white rounded-3xl p-8 border border-gray-100 shadow-sm flex items-center gap-6">
            <div className="w-14 h-14 bg-blue-50 rounded-2xl flex items-center justify-center text-blue-600">
               <BarChart3 className="w-6 h-6" />
            </div>
            <div>
               <p className="text-[10px] font-black uppercase tracking-widest text-gray-400 mb-1">Price Trend</p>
               <h4 className="text-xl font-bold text-emerald-500 flex items-center gap-1">
                  Bullish
                  <ArrowUpRight className="w-5 h-5" />
               </h4>
            </div>
         </div>
         <div className="bg-white rounded-3xl p-8 border border-gray-100 shadow-sm flex items-center gap-6 group cursor-pointer hover:border-emerald-500/30 transition-all">
            <div className="w-14 h-14 bg-gray-50 rounded-2xl flex items-center justify-center text-gray-400 group-hover:bg-emerald-500 group-hover:text-white transition-all">
               <ChevronRight className="w-6 h-6" />
            </div>
            <div>
               <p className="text-[10px] font-black uppercase tracking-widest text-gray-400 mb-1">Historical</p>
               <h4 className="text-xl font-bold">View Data</h4>
            </div>
         </div>
      </div>
    </div>
  );
}
