"use client";

import React, { useState, useEffect } from "react";
import { 
  User, Bell, Globe, MapPin, 
  Shield, Save, Map, Loader2, 
  CheckCircle2, AlertCircle
} from "lucide-react";

export default function SettingsPage() {
  const [location, setLocation] = useState<{ lat: number; lon: number } | null>(null);
  const [address, setAddress] = useState<string>("Barauli Village, Uttar Pradesh, India");
  const [isFetching, setIsFetching] = useState(false);
  const [status, setStatus] = useState<{ type: "success" | "error" | null; message: string }>({ type: null, message: "" });

  const fetchLocation = () => {
    setIsFetching(true);
    setStatus({ type: null, message: "" });

    if (!navigator.geolocation) {
      setStatus({ type: "error", message: "Geolocation is not supported by your browser." });
      setIsFetching(false);
      return;
    }

    navigator.geolocation.getCurrentPosition(
      (position) => {
        const { latitude, longitude } = position.coords;
        setLocation({ lat: latitude, lon: longitude });
        setAddress(`${latitude.toFixed(4)}°N, ${longitude.toFixed(4)}°E`);
        setStatus({ type: "success", message: "Location updated successfully!" });
        setIsFetching(false);
      },
      (error) => {
        setStatus({ type: "error", message: "Unable to retrieve your location. Please check permissions." });
        setIsFetching(false);
      },
      { enableHighAccuracy: true }
    );
  };

  return (
    <div className="max-w-4xl mx-auto space-y-8 pb-20">
      <div>
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Account Settings</h1>
        <p className="text-gray-500 font-medium">Manage your farm profile and preferences.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Sidebar Nav */}
        <div className="space-y-2">
          <SettingsNavButton icon={<User className="w-5 h-5" />} label="Profile Info" active />
          <SettingsNavButton icon={<MapPin className="w-5 h-5" />} label="Farm Location" />
          <SettingsNavButton icon={<Bell className="w-5 h-5" />} label="Notifications" />
          <SettingsNavButton icon={<Globe className="w-5 h-5" />} label="Language" />
          <SettingsNavButton icon={<Shield className="w-5 h-5" />} label="Security" />
        </div>

        {/* Content */}
        <div className="md:col-span-2 space-y-8">
          {/* Profile Section */}
          <div className="bg-white rounded-[2.5rem] border border-gray-100 p-8 shadow-sm space-y-6">
            <h3 className="text-lg font-bold text-gray-900 border-b border-gray-50 pb-4">Personal Information</h3>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <InputGroup label="Full Name" value="Rajesh Kumar" />
              <InputGroup label="Phone Number" value="+91 98765 43210" />
            </div>
            <InputGroup label="Email Address" value="rajesh@krishimitra.ai" disabled />
          </div>

          {/* Location Section */}
          <div className="bg-white rounded-[2.5rem] border border-gray-100 p-8 shadow-sm space-y-6">
            <div className="flex items-center justify-between border-b border-gray-50 pb-4">
              <h3 className="text-lg font-bold text-gray-900">Farm Location</h3>
              <button 
                onClick={fetchLocation}
                disabled={isFetching}
                className="flex items-center gap-2 px-4 py-2 bg-[#1e5128] text-white rounded-xl text-xs font-bold hover:bg-[#194322] transition-all disabled:opacity-50"
              >
                {isFetching ? <Loader2 className="w-3.5 h-3.5 animate-spin" /> : <Map className="w-3.5 h-3.5" />}
                {isFetching ? "Fetching..." : "Fetch Live Location"}
              </button>
            </div>

            <div className="space-y-4">
              <div className="p-4 bg-gray-50 rounded-2xl flex items-start gap-4">
                <div className="w-10 h-10 bg-white rounded-xl border border-gray-100 flex items-center justify-center text-[#1e5128] shrink-0 shadow-sm">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-[10px] font-black uppercase text-gray-400 mb-1">Current Address</p>
                  <p className="text-sm font-bold text-gray-900">{address}</p>
                </div>
              </div>

              {status.type && (
                <div className={`p-4 rounded-2xl flex items-center gap-3 text-sm font-bold ${status.type === "success" ? "bg-emerald-50 text-emerald-600 border border-emerald-100" : "bg-red-50 text-red-600 border border-red-100"}`}>
                  {status.type === "success" ? <CheckCircle2 className="w-4 h-4" /> : <AlertCircle className="w-4 h-4" />}
                  {status.message}
                </div>
              )}

              <p className="text-xs text-gray-400 font-medium px-2">
                We use your location to provide hyper-local weather advisory and nearby mandi prices.
              </p>
            </div>
          </div>

          {/* Save Button */}
          <div className="flex justify-end">
            <button className="flex items-center gap-3 px-10 py-4 bg-[#1e5128] text-white rounded-2xl font-bold hover:bg-[#194322] transition-all shadow-xl shadow-emerald-900/10">
              <Save className="w-5 h-5" />
              Save All Changes
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

function SettingsNavButton({ icon, label, active = false }: { icon: React.ReactNode, label: string, active?: boolean }) {
  return (
    <button className={`w-full flex items-center gap-4 px-6 py-4 rounded-2xl font-bold text-sm transition-all ${active ? "bg-[#1e5128] text-white shadow-lg shadow-emerald-900/10" : "text-gray-500 hover:bg-white hover:text-gray-900"}`}>
      {icon}
      {label}
    </button>
  );
}

function InputGroup({ label, value, disabled = false }: { label: string, value: string, disabled?: boolean }) {
  return (
    <div className="space-y-2">
      <label className="text-[10px] font-black uppercase tracking-widest text-gray-400 ml-1">{label}</label>
      <input 
        type="text" 
        defaultValue={value}
        disabled={disabled}
        className="w-full bg-gray-50 border border-gray-100 rounded-2xl py-4 px-6 text-sm font-bold text-gray-900 focus:outline-none focus:border-[#1e5128] transition-all disabled:opacity-50"
      />
    </div>
  );
}
