import React from "react";
import { Layers, BedDouble, Sparkles, Wrench, Hotel, Percent } from "lucide-react";

/* STATS */
const stats = [
  { title: "Total Floors", value: "6", sub: "120 Rooms", icon: <Layers />, color: "bg-indigo-500" },
  { title: "Total Rooms", value: "120", sub: "68 Available", icon: <BedDouble />, color: "bg-green-500" },
  { title: "Active Services", value: "18", sub: "Spa, Pickup, Laundry", icon: <Sparkles />, color: "bg-pink-500" },
  { title: "Pending Housekeeping", value: "9", sub: "Cleaning Due", icon: <Wrench />, color: "bg-orange-500" },
];

/* QUICK MODULES */
const bookings = [
  { name: "Hotel Profile", room: "Edit hotel details", time: "Profile Setup", status: "Manage" },
  { name: "Floor Management", room: "Assign rooms", time: "Floor Control", status: "Manage" },
  { name: "Add-On Services", room: "Extra facilities", time: "Service Setup", status: "Manage" },
  { name: "Seasonal Pricing", room: "Festival pricing", time: "Rate Control", status: "Manage" },
];

/* ALERTS */
const alerts = [
  { text: "Room 202 pending housekeeping", time: "15 mins ago" },
  { text: "Inventory running low for laundry", time: "45 mins ago" },
  { text: "Special pricing active for New Year", time: "2 hours ago" },
];

/* SERVICES REVENUE */
const revenue = [
  { label: "Room Tariff", amount: "₹3,80,000", percent: "75%", color: "bg-green-400" },
  { label: "Add-On Services", amount: "₹1,20,000", percent: "55%", color: "bg-blue-400" },
  { label: "Other Charges", amount: "₹40,000", percent: "30%", color: "bg-purple-400" },
];

/* HOUSEKEEPING */
const restaurant = [
  { label: "Rooms Cleaned Today", value: "48" },
  { label: "Pending Cleaning", value: "9", color: "text-yellow-500" },
  { label: "Maintenance Required", value: "6", color: "text-red-400" },
  { label: "Staff On Duty", value: "12" },
  { label: "Cleaning Progress", value: "80%", percent: "80%", bar: true },
];

const HotelManagement = () => {
  return (
    <div className="space-y-8 px-6 md:pl-70 py-20 bg-gray-50 dark:bg-linear-to-br from-gray-900 via-black to-gray-900 text-gray-800 dark:text-gray-100">

      <div>
        <h1 className="text-3xl font-bold">Hotel Management</h1>
        <p className="text-gray-500">Manage rooms, services and operations</p>
      </div>

      {/* STATS */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
        {stats.map((s, i) => (
          <div key={i} className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-white/10 rounded-xl p-5 flex justify-between items-center">
            <div>
              <p className="text-sm text-gray-500 dark:text-gray-400">{s.title}</p>
              <h2 className="text-3xl font-bold">{s.value}</h2>
              <p className="text-xs text-gray-500 dark:text-gray-400">{s.sub}</p>
            </div>
            <div className={`p-3 rounded-lg text-white ${s.color}`}>{s.icon}</div>
          </div>
        ))}
      </div>

      {/* MODULES & ALERTS */}
      <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">

        {/* MODULES */}
        <div className="xl:col-span-2 bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-white/10 p-5">
          <h2 className="text-lg font-semibold mb-4">Hotel Modules</h2>
          <div className="space-y-4">
            {bookings.map((b, i) => (
              <div key={i} className="flex justify-between items-center border-b border-gray-200 dark:border-white/10 pb-3">
                <div>
                  <p className="font-medium">{b.name}</p>
                  <p className="text-sm text-gray-500 dark:text-gray-400">{b.room} • {b.time}</p>
                </div>
                <span className="bg-indigo-500/20 text-indigo-400 text-xs px-3 py-1 rounded-full">
                  {b.status}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* ALERTS */}
        <div className="bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-white/10 p-5">
          <h2 className="text-lg font-semibold mb-4">Housekeeping Alerts</h2>
          <div className="space-y-4">
            {alerts.map((a, i) => (
              <div key={i} className="border-b border-gray-200 dark:border-white/10 pb-3">
                <p className="text-sm">{a.text}</p>
                <p className="text-xs text-gray-500 dark:text-gray-400">{a.time}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* REVENUE & HOUSEKEEPING */}
      <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">

        {/* REVENUE */}
        <div className="bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-white/10 p-6">
          <h2 className="text-lg font-semibold mb-4">Service Revenue Overview</h2>
          <div className="space-y-4">
            {revenue.map((r, i) => (
              <div key={i}>
                <div className="flex justify-between text-sm mb-1">
                  <span>{r.label}</span>
                  <span>{r.amount}</span>
                </div>
                <div className="w-full h-2 bg-gray-200 dark:bg-white/10 rounded">
                  <div className={`h-2 rounded ${r.color}`} style={{ width: r.percent }}></div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* HOUSEKEEPING */}
        <div className="bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-white/10 p-6">
          <h2 className="text-lg font-semibold mb-4">Housekeeping Status</h2>
          <div className="space-y-2 text-sm">
            {restaurant.map((r, i) =>
              r.bar ? (
                <div key={i} className="pt-3">
                  <div className="flex justify-between mb-1">
                    <span>{r.label}</span>
                    <span>{r.value}</span>
                  </div>
                  <div className="w-full h-2 bg-gray-200 dark:bg-white/10  rounded">
                    <div className="h-2 bg-green-400 rounded" style={{ width: r.percent }}></div>
                  </div>
                </div>
              ) : (
                <div key={i} className="flex justify-between">
                  <span>{r.label}</span>
                  <span className={r.color}>{r.value}</span>
                </div>
              )
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HotelManagement;
