import React from "react";
import { Building2, Phone, Mail, Clock, MapPin } from "lucide-react";

const HotelProfile = () => {

  const fields = [
    { label: "Hotel Name", placeholder: "NeuralStay Resort" },
    { label: "GST Number", placeholder: "12ABCDEEFGHIJ" },
    { label: "Contact Number", placeholder: "+91 98765 43210" },
    { label: "Email Address", placeholder: "info@neuralstay.com" },
    { label: "Check-in Time", placeholder: "12:00 PM", type: "time" },
    { label: "Check-out Time", placeholder: "11:00 AM", type: "time" },
    { label: "Address", placeholder: "jaipur, Rajasthan" },
  ];

  return (
    <div className="md:ml-64 py-20 px-6 text-white">

      <h1 className="text-3xl font-bold mb-6">Hotel Profile</h1>

      <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">

        {/* Profile Form */}
        <div className="xl:col-span-2 bg-white/10 border border-white/20 rounded-xl p-6 space-y-4">

          {fields.map((f, i) => (
            <div key={i}>
              <label className="text-sm text-gray-400">{f.label}</label>
              <input
                type={f.type || "text"}
                placeholder={f.placeholder}
                className="w-full mt-1 px-4 py-2 rounded-lg bg-white/10 border border-white/20 focus:outline-none focus:ring-2 focus:ring-purple-500"
              />
            </div>
          ))}

          <button className="mt-4 px-6 py-2 bg-linear-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-lg shadow hover:scale-105 transition">
            Save Profile
          </button>
        </div>

        {/* Info Card */}
        <div className="bg-white/10 border border-white/20 rounded-xl p-6 space-y-4">
          <div className="flex items-center gap-3 text-indigo-400">
            <Building2 /> Business Details
          </div>
          <div className="flex items-center gap-3 text-gray-300"><Phone /> Customer Support: 24x7</div>
          <div className="flex items-center gap-3 text-gray-300"><Mail /> support@neuralstay.com</div>
          <div className="flex items-center gap-3 text-gray-300"><Clock /> Check-in: 12 PM</div>
          <div className="flex items-center gap-3 text-gray-300"><MapPin /> Rajasthan, India</div>
        </div>

      </div>
    </div>
  );
};

export default HotelProfile;
