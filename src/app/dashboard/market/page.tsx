"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { 
  TrendingUp, TrendingDown, Search, ArrowLeft, 
  Loader2, Filter, IndianRupee, Map, ShoppingBag,
  ExternalLink, BarChart3
} from "lucide-react";
import Link from "next/link";
import axios from "axios";

export default function MarketPage() {
  const [marketData, setMarketData] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [state, setState] = useState("Maharashtra");
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    fetchMarketData(state);
  }, [state]);

  const fetchMarketData = async (targetState: string) => {
    setLoading(true);
    try {
      const res = await axios.get(`/api/market?state=${targetState}`);
      setMarketData(res.data.records || []);
    } catch (error) {
      console.error("Market Data Error", error);
    } finally {
      setLoading(false);
    }
  };

  const filteredData = marketData.filter(item => 
    item.commodity.toLowerCase().includes(searchQuery.toLowerCase()) ||
    item.market.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-background p-6 md:p-10 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(circle_at_100%_0%,rgba(16,185,129,0.08),transparent)] pointer-events-none" />

      <header className="max-w-7xl mx-auto flex flex-col md:flex-row md:items-center justify-between gap-6 mb-12 relative z-10">
        <div className="flex items-center gap-4">
          <Link href="/dashboard" className="p-3 glass rounded-2xl hover:bg-white/5 transition-all">
            <ArrowLeft className="w-5 h-5 text-muted-foreground" />
          </Link>
          <div>
            <h1 className="text-3xl font-black tracking-tight uppercase">Mandi <span className="text-primary">Pulse</span></h1>
            <p className="text-muted-foreground flex items-center gap-2 text-sm font-bold">
               <Map className="w-3.5 h-3.5 text-primary" />
               Live prices across {state}
            </p>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-4">
          <div className="relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500" />
            <input 
              type="text" 
              placeholder="Search Crop (e.g. Cotton)" 
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="bg-white/5 border border-border rounded-2xl py-4 pl-12 pr-6 focus:outline-none focus:border-primary transition-all w-full sm:w-64 font-bold"
            />
          </div>
          <select 
            value={state}
            onChange={(e) => setState(e.target.value)}
            className="bg-white/5 border border-border rounded-2xl py-4 px-6 focus:outline-none focus:border-primary font-bold appearance-none cursor-pointer"
          >
            <option value="Maharashtra">Maharashtra</option>
            <option value="Gujarat">Gujarat</option>
            <option value="Punjab">Punjab</option>
            <option value="Karnataka">Karnataka</option>
            <option value="Uttar Pradesh">Uttar Pradesh</option>
          </select>
        </div>
      </header>

      {loading ? (
        <div className="flex flex-col items-center justify-center py-40 gap-4">
          <Loader2 className="w-12 h-12 text-primary animate-spin" />
          <p className="text-muted-foreground font-black uppercase tracking-widest text-xs text-center">Synchronizing with Mandi OGD Servers...</p>
        </div>
      ) : (
        <main className="max-w-7xl mx-auto relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
             <MarketStat icon={<TrendingUp className="text-emerald-400" />} label="Top Gainer" value="Cotton" trend="+4.2%" />
             <MarketStat icon={<TrendingDown className="text-red-400" />} label="Top Loser" value="Onion" trend="-2.8%" />
             <MarketStat icon={<BarChart3 className="text-primary" />} label="Avg Price (Gold)" value="₹6,450" trend="Stable" />
          </div>

          <div className="glass rounded-[2.5rem] overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full text-left">
                <thead>
                  <tr className="border-b border-border bg-white/5 uppercase text-[10px] font-black tracking-widest text-muted-foreground">
                    <th className="px-8 py-6">Commodity</th>
                    <th className="px-8 py-6">Mandi / District</th>
                    <th className="px-8 py-6 text-right">Modal Price (₹)</th>
                    <th className="px-8 py-6 text-right">Action</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border">
                  {filteredData.slice(0, 20).map((record, idx) => (
                    <motion.tr 
                      key={idx}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: idx * 0.05 }}
                      className="hover:bg-white/5 transition-colors group"
                    >
                      <td className="px-8 py-6">
                        <div className="flex items-center gap-3">
                           <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center">
                              <ShoppingBag className="w-4 h-4 text-primary" />
                           </div>
                           <span className="font-bold">{record.commodity}</span>
                        </div>
                      </td>
                      <td className="px-8 py-6">
                        <p className="text-sm font-medium">{record.market}</p>
                        <p className="text-[10px] text-muted-foreground uppercase font-bold">{record.district}</p>
                      </td>
                      <td className="px-8 py-6 text-right">
                        <div className="flex items-center justify-end gap-1.5 text-primary font-black text-lg">
                           <IndianRupee className="w-4 h-4" />
                           {record.modal_price}
                        </div>
                        <p className="text-[10px] text-muted-foreground">per Quintal</p>
                      </td>
                      <td className="px-8 py-6 text-right">
                        <button className="p-3 hover:bg-primary hover:text-white rounded-xl transition-all border border-border group-hover:border-primary">
                          <ExternalLink className="w-4 h-4" />
                        </button>
                      </td>
                    </motion.tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
          
          {filteredData.length === 0 && (
            <div className="text-center py-24 glass rounded-[2.5rem] mt-8">
              <Filter className="w-12 h-12 text-muted-foreground mx-auto mb-6 opacity-20" />
              <p className="text-muted-foreground font-bold">No records found for your search criteria.</p>
            </div>
          )}
        </main>
      )}
    </div>
  );
}

function MarketStat({ icon, label, value, trend }: { icon: React.ReactNode, label: string, value: string, trend: string }) {
  return (
    <div className="glass p-8 rounded-[2rem] border border-white/5 flex items-center justify-between">
       <div className="flex items-center gap-5">
          <div className="w-14 h-14 bg-white/5 rounded-2xl flex items-center justify-center">
             {icon}
          </div>
          <div>
             <p className="text-[10px] uppercase font-black tracking-widest text-muted-foreground mb-1">{label}</p>
             <h3 className="text-2xl font-black">{value}</h3>
          </div>
       </div>
       <span className={`text-xs font-bold px-3 py-1 rounded-full ${trend.includes("+") ? "bg-emerald-500/10 text-emerald-400" : trend.includes("-") ? "bg-red-500/10 text-red-400" : "bg-white/5 text-gray-400"}`}>
          {trend}
       </span>
    </div>
  );
}
