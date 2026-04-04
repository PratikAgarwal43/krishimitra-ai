'use client';

import React, { useState } from 'react';
import { 
  TrendingUp, 
  TrendingDown, 
  MapPin, 
  Calendar, 
  ArrowUpRight, 
  Info,
  Search,
  Filter,
  Package,
  Map,
  X,
  CheckCircle2
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const prices = [
  { crop: 'Potato (Jyoti)', market: 'Agra Mandi', price: '₹1,450', unit: 'per Quintal', trend: 'up', change: '+₹50', color: 'text-green-500' },
  { crop: 'Onion (Red)', market: 'Nashik Mandi', price: '₹2,100', unit: 'per Quintal', trend: 'down', change: '-₹120', color: 'text-red-500' },
  { crop: 'Wheat (Sharbati)', market: 'Indore Mandi', price: '₹2,800', unit: 'per Quintal', trend: 'up', change: '+₹210', color: 'text-green-500' },
  { crop: 'Tomato', market: 'Azadpur Mandi', price: '₹1,800', unit: 'per Quintal', trend: 'up', change: '+₹300', color: 'text-green-500' },
];

export default function MarketPage() {
  const [showModal, setShowModal] = useState<'none' | 'prediction' | 'mandis' | 'report'>('none');
  const [kycStatus, setKycStatus] = useState<'pending' | 'verified'>('pending');

  return (
    <div className="space-y-8">
      {/* Page Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
        <div>
          <h1 className="text-3xl font-bold tracking-tight mb-2 italic uppercase tracking-widest text-primary">Market Intelligence</h1>
          <p className="text-foreground/50 font-semibold">Real-time Mandi prices & AI-driven trade insights.</p>
        </div>
        <div className="flex items-center gap-4">
           <button 
             onClick={() => setShowModal('mandis')}
             className="flex items-center gap-2 px-6 py-3 bg-white border border-border rounded-2xl font-bold text-sm shadow-sm hover:shadow-md transition-all active:scale-95"
           >
             <Map size={18} />
             <span>Nearby Mandis</span>
           </button>
           <button 
             onClick={() => setShowModal('prediction')}
             className="flex items-center gap-2 px-6 py-3 bg-primary text-white rounded-2xl font-bold text-sm shadow-lg shadow-primary/20 hover:scale-105 active:scale-95 transition-all"
           >
             <TrendingUp size={18} />
             <span>Price Prediction</span>
           </button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Market Recommendation Card */}
        <div className="lg:col-span-12 bg-primary rounded-[2rem] p-8 md:p-10 text-white relative overflow-hidden group border border-primary/20">
           <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full translate-x-32 -translate-y-32 blur-3xl group-hover:bg-white/20 transition-all duration-700" />
           <div className="relative z-10 flex flex-col md:flex-row items-center gap-10">
              <div className="bg-white/20 p-6 rounded-[2.5rem] backdrop-blur-md border border-white/30">
                 <Package size={64} className="text-accent" />
              </div>
              <div className="flex-1 text-center md:text-left">
                 <span className="inline-block px-4 py-1 bg-white/20 rounded-full text-[10px] font-bold uppercase tracking-[0.2em] mb-4 border border-white/20">AI Smart Insight</span>
                 <h2 className="text-3xl md:text-4xl font-extrabold mb-4 tracking-tight">Best time to sell: <span className="text-accent italic">Next 5 Days</span></h2>
                 <p className="text-white/80 max-w-xl font-medium leading-relaxed">
                   Market demand for Potatoes is peaking due to lower supply from cooling zones. 
                   We predict a 12% price hike by Friday. Avoid selling before Wednesday.
                 </p>
              </div>
              <div className="flex flex-col gap-4 w-full md:w-auto">
                 <div className="bg-white/10 p-5 rounded-3xl border border-white/20 text-center">
                    <p className="text-[10px] uppercase font-bold text-white/50 mb-1">Current Confidence</p>
                    <p className="text-2xl font-black italic">89.4%</p>
                 </div>
                 <button 
                   onClick={() => setShowModal('report')}
                   className="bg-accent text-primary px-8 py-4 rounded-2xl font-bold text-lg hover:shadow-xl hover:shadow-accent/40 active:scale-95 transition-all shadow-lg"
                 >
                   Generate Detailed Report
                 </button>
              </div>
           </div>
        </div>

        {/* Live Prices Grid */}
        <div className="lg:col-span-8 space-y-6">
           <div className="flex items-center justify-between mb-2 px-2">
              <h3 className="font-bold text-lg flex items-center gap-2">
                Live Mandi Prices
                <span className="w-2 h-2 bg-red-500 rounded-full animate-pulse" />
              </h3>
              <div className="flex items-center gap-2">
                 <div className="bg-card border border-border flex items-center px-4 py-2 rounded-xl">
                   <Search size={14} className="text-foreground/40 mr-2" />
                   <input type="text" placeholder="Search crop..." className="bg-transparent border-none outline-none text-xs font-bold" />
                 </div>
                 <button className="p-2 bg-card border border-border rounded-xl text-foreground/40 hover:text-primary transition-colors">
                    <Filter size={18} />
                 </button>
              </div>
           </div>
           
           <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {prices.map((item, idx) => (
                <motion.div 
                  key={idx}
                  whileHover={{ y: -5 }}
                  className="bg-card p-6 rounded-3xl border border-border shadow-sm hover:shadow-lg transition-all cursor-pointer group h-full flex flex-col justify-between"
                >
                  <div>
                    <div className="flex justify-between items-start mb-6">
                       <div>
                          <h4 className="font-bold text-lg group-hover:text-primary transition-colors">{item.crop}</h4>
                          <div className="flex items-center gap-1.5 text-foreground/40 text-xs font-bold uppercase tracking-wider mt-1">
                            <MapPin size={12} />
                            <span>{item.market}</span>
                          </div>
                       </div>
                       <div className={`p-2 rounded-xl bg-muted/50 ${item.color}`}>
                          {item.trend === 'up' ? <TrendingUp size={20} /> : <TrendingDown size={20} />}
                       </div>
                    </div>
                    <div className="flex items-baseline gap-2 mb-4">
                       <span className="text-3xl font-black tracking-tight">{item.price}</span>
                       <span className="text-xs font-bold text-foreground/30 uppercase">{item.unit}</span>
                    </div>
                  </div>
                  <div className="flex items-center justify-between border-t border-border pt-4 mt-auto">
                     <div className={`flex items-center gap-1.5 text-xs font-bold ${item.color}`}>
                        <ArrowUpRight size={14} />
                        <span>{item.change} from yesterday</span>
                     </div>
                     <button className="text-primary hover:underline text-[10px] font-black uppercase tracking-widest">
                       History
                     </button>
                  </div>
                </motion.div>
              ))}
           </div>
        </div>

        {/* Market Alerts & News */}
        <div className="lg:col-span-4 space-y-6">
           <div className="bg-white border border-border rounded-3xl p-8 shadow-sm">
              <h3 className="font-bold text-lg mb-8 tracking-tight border-b border-border pb-4">Government Subsidies</h3>
              <div className="space-y-6">
                 <div className="flex gap-4">
                    <div className="w-12 h-12 bg-secondary rounded-2xl flex items-center justify-center shrink-0">
                       <Calendar size={20} className="text-primary" />
                    </div>
                    <div className="flex-1">
                       <h5 className="font-bold text-sm mb-1 leading-tight">PM-Kisan 16th Installment</h5>
                       <p className="text-xs text-foreground/50 font-medium">Coming next Monday. Ensure KYC is updated.</p>
                       <button 
                         onClick={() => setKycStatus(kycStatus === 'pending' ? 'verified' : 'pending')}
                         className={`text-[10px] font-black uppercase mt-2 tracking-widest flex items-center gap-1.5 transition-colors ${
                           kycStatus === 'verified' ? 'text-green-600' : 'text-primary hover:underline'
                         }`}
                       >
                         {kycStatus === 'verified' ? (
                           <>
                             <CheckCircle2 size={12} />
                             KYC Verified
                           </>
                         ) : 'Verify KYC'}
                       </button>
                    </div>
                 </div>
                 <div className="flex gap-4">
                    <div className="w-12 h-12 bg-yellow-50 rounded-2xl flex items-center justify-center shrink-0">
                       <Info size={20} className="text-yellow-600" />
                    </div>
                    <div>
                       <h5 className="font-bold text-sm mb-1 leading-tight">Fertilizer Subsidy (DAP)</h5>
                       <p className="text-xs text-foreground/50 font-medium">New scheme for Rabi season fertilizers announced.</p>
                       <button className="text-primary text-[10px] font-black uppercase mt-2 tracking-widest hover:underline">Apply Now</button>
                    </div>
                 </div>
              </div>
           </div>

           <div className="bg-card rounded-3xl p-8 border border-border relative overflow-hidden">
              <div className="absolute top-0 right-0 p-4">
                 <div className="w-3 h-3 bg-primary rounded-full blur-[4px] animate-pulse" />
              </div>
              <h4 className="font-bold text-sm uppercase tracking-[0.2em] text-foreground/30 mb-6">Expert's Voice</h4>
              <p className="text-sm italic font-medium leading-relaxed text-foreground/70 mb-6">
                "The current rainfall in Southern India might affect the next harvest of Onions. Expect prices to remain volatile for 3 weeks."
              </p>
              <div className="flex items-center gap-3">
                 <div className="w-8 h-8 rounded-full bg-primary/10 border border-border shadow-sm shrink-0 flex items-center justify-center text-primary font-bold text-[10px]">SK</div>
                 <div>
                    <p className="text-xs font-bold leading-none mb-1">Dr. S. K. Sharma</p>
                    <p className="text-[10px] font-bold text-primary uppercase">Agri Economist</p>
                 </div>
              </div>
           </div>
        </div>
      </div>

      {/* Interactivity Modals */}
      <AnimatePresence>
        {showModal !== 'none' && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/40 backdrop-blur-sm">
            <motion.div 
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              className="bg-card max-w-xl w-full rounded-[2.5rem] p-8 md:p-10 shadow-2xl relative overflow-hidden border border-border"
            >
              <button 
                onClick={() => setShowModal('none')}
                className="absolute top-6 right-6 p-2 rounded-full hover:bg-muted transition-colors text-foreground/40"
              >
                <X size={24} />
              </button>

              {showModal === 'prediction' && (
                <div className="text-center">
                  <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                    <TrendingUp size={40} className="text-primary" />
                  </div>
                  <h3 className="text-3xl font-extrabold italic tracking-tight mb-2 uppercase tracking-wide">AI Price Prediction</h3>
                  <p className="text-foreground/50 font-medium mb-8">Expected Market Movement for <span className="text-primary font-bold">Potato (Jyoti)</span></p>
                  
                  <div className="bg-muted/30 p-6 rounded-3xl border border-border/50 text-left mb-6">
                    <div className="flex justify-between items-end mb-4">
                       <span className="text-[10px] font-black uppercase text-foreground/40">Market Trend</span>
                       <span className="text-lg font-black text-green-600">Bullish (+12.4%)</span>
                    </div>
                    <div className="h-2 w-full bg-muted rounded-full overflow-hidden mb-2">
                       <div className="h-full bg-green-500 w-[89%]" />
                    </div>
                    <p className="text-xs font-semibold text-foreground/40 italic">Accuracy Confidence: 89.4%</p>
                  </div>
                  
                  <button onClick={() => setShowModal('none')} className="w-full bg-primary text-white py-4 rounded-2xl font-bold text-lg hover:scale-[1.02] active:scale-95 transition-all">Got it!</button>
                </div>
              )}

              {showModal === 'mandis' && (
                <div>
                  <h3 className="text-2xl font-extrabold mb-6 flex items-center gap-2">
                    <MapPin className="text-primary" />
                    Nearby Mandis
                  </h3>
                  <div className="space-y-4 mb-8">
                     {[
                       { name: 'Agra Mandi', dist: '4.2 km', price: '₹1450' },
                       { name: 'Firozabad Mandi', dist: '12.8 km', price: '₹1420' },
                       { name: 'Mathura Mandi', dist: '28.1 km', price: '₹1480' }
                     ].map((m, i) => (
                       <div key={i} className="flex items-center justify-between p-4 bg-muted/20 rounded-2xl hover:bg-muted/40 transition-all cursor-pointer border border-transparent hover:border-border">
                          <div>
                             <p className="font-bold text-sm">{m.name}</p>
                             <p className="text-xs font-semibold text-foreground/40 italic">{m.dist} from you</p>
                          </div>
                          <div className="text-right">
                             <p className="font-black text-primary">{m.price}</p>
                             <p className="text-[10px] font-bold text-foreground/40 uppercase">Current Max</p>
                          </div>
                       </div>
                     ))}
                  </div>
                  <button onClick={() => setShowModal('none')} className="w-full border-2 border-border py-4 rounded-2xl font-bold hover:bg-muted transition-colors">Close</button>
                </div>
              )}

              {showModal === 'report' && (
                <div className="text-center">
                  <div className="w-16 h-16 bg-accent/20 rounded-2xl flex items-center justify-center mx-auto mb-6 rotate-12">
                     <CheckCircle2 size={32} className="text-primary" />
                  </div>
                  <h3 className="text-2xl font-extrabold mb-2 italic">Report Generated!</h3>
                  <p className="text-foreground/50 font-medium mb-8 leading-relaxed">
                    A comprehensive harvest-to-market analysis for your Potato crop has been sent to your WhatsApp.
                  </p>
                  <div className="bg-primary/5 p-4 rounded-2xl border border-primary/10 text-xs font-bold text-primary mb-8 italic">
                     "Maximize your profit by diversifying sales across Agra and Mathura markets this season."
                  </div>
                  <button onClick={() => setShowModal('none')} className="w-full bg-primary text-white py-4 rounded-2xl font-bold hover:scale-[1.02] active:scale-95 transition-all">View Report (PDF)</button>
                </div>
              )}
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}
