import React from "react";
import { BedDouble, LogIn, LogOut, TrendingUp } from "lucide-react";

/* DATA */
const stats = [
  { title: "Total Rooms", value: "150", sub: "120 Occupied", icon: <BedDouble />, color: "bg-blue-500" },
  { title: "Today's Check-ins", value: "24", sub: "18 Completed", icon: <LogIn />, color: "bg-green-500" },
  { title: "Today's Check-outs", value: "19", sub: "5 Pending", icon: <LogOut />, color: "bg-orange-500" },
  { title: "Occupancy Rate", value: "80%", sub: "+5% vs last week", icon: <TrendingUp />, color: "bg-purple-500" },
];

const bookings = [
  { name: "Amit Kumar", room: "101", time: "Today 1:00 PM", status: "Confirmed" },
  { name: "Abhishek", room: "103", time: "Today 2:00 PM", status: "Pending" },
  { name: "Rahul Sharma", room: "106", time: "Tomorrow 1:00 PM", status: "Confirmed" },
  { name: "Raj", room: "108", time: "Tomorrow 2:00 PM", status: "Confirmed" },
];

const alerts = [
  { text: "Room 102 maintenance pending", time: "10 mins ago" },
  { text: "New booking from Booking.com", time: "25 mins ago" },
  { text: "Payment gateway issue reported", time: "1 hour ago" },
];

const revenue = [
  { label: "Room Revenue", amount: "₹4,00,000", percent: "80%", color: "bg-green-400" },
  { label: "Food & Beverage", amount: "₹2,50,000", percent: "60%", color: "bg-blue-400" },
  { label: "Other Services", amount: "₹50,000", percent: "40%", color: "bg-purple-400" },
];

const restaurant = [
  { label: "Today's Orders", value: "100" },
  { label: "Completed", value: "80", color: "text-green-500 dark:text-green-400" },
  { label: "Pending", value: "8", color: "text-yellow-600 dark:text-yellow-400" },
  { label: "Cancelled", value: "12", color: "text-red-500 dark:text-red-400" },
  { label: "Today's Revenue", value: "₹50,000", percent: "70%", bar: true },
];

const Dashboard = () => {
  return (
    <div className="space-y-8 px-6 md:pl-70 py-20 w-full bg-[#F3F4F6] dark:bg-[#0F172A] text-gray-800 dark:text-gray-100">

      <div>
        <h1 className="text-3xl font-bold">Dashboard</h1>
        <p className="text-gray-500 dark:text-gray-400">Welcome back!</p>
      </div>

      {/* STAT CARDS */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
        {stats.map((s, i) => (
          <div
            key={i}
            className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-white/10 rounded-xl p-5 flex justify-between items-center"
          >
            <div>
              <p className="text-sm text-gray-500 dark:text-gray-400">{s.title}</p>
              <h2 className="text-3xl font-bold">{s.value}</h2>
              <p className="text-xs text-gray-500 dark:text-gray-400">{s.sub}</p>
            </div>
            <div className={`p-3 rounded-lg text-white ${s.color}`}>
              {s.icon}
            </div>
          </div>
        ))}
      </div>

      {/* BOOKINGS & ALERTS */}
      <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">

        {/* BOOKINGS */}
        <div className="xl:col-span-2 bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-white/10 p-5">
          <h2 className="text-lg font-semibold mb-4">Recent Bookings</h2>
          <div className="space-y-4">
            {bookings.map((b, i) => (
              <div
                key={i}
                className="flex justify-between items-center border-b border-gray-200 dark:border-white/10 pb-3"
              >
                <div>
                  <p className="font-medium">{b.name}</p>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    Room {b.room} • {b.time}
                  </p>
                </div>
                <span
                  className={`text-xs px-3 py-1 rounded-full ${
                    b.status === "Confirmed"
                      ? "bg-green-500/20 text-green-600 dark:text-green-400"
                      : "bg-yellow-500/20 text-yellow-600 dark:text-yellow-400"
                  }`}
                >
                  {b.status}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* ALERTS */}
        <div className="bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-white/10 p-5">
          <h2 className="text-lg font-semibold mb-4">Alerts</h2>
          <div className="space-y-4">
            {alerts.map((a, i) => (
              <div
                key={i}
                className="border-b border-gray-200 dark:border-white/10 pb-3"
              >
                <p className="text-sm">{a.text}</p>
                <p className="text-xs text-gray-500 dark:text-gray-400">
                  {a.time}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* REVENUE & RESTAURANT */}
      <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">

        {/* REVENUE */}
        <div className="bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-white/10 p-6">
          <h2 className="text-lg font-semibold mb-4">Revenue Overview</h2>
          <div className="space-y-4">
            {revenue.map((r, i) => (
              <div key={i}>
                <div className="flex justify-between text-sm mb-1">
                  <span>{r.label}</span>
                  <span>{r.amount}</span>
                </div>
                <div className="w-full h-2 bg-gray-200 dark:bg-white/10 rounded">
                  <div
                    className={`h-2 rounded ${r.color}`}
                    style={{ width: r.percent }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* RESTAURANT */}
        <div className="bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-white/10 p-6">
          <h2 className="text-lg font-semibold mb-4">Restaurant Sales Overview</h2>
          <div className="space-y-2 text-sm">
            {restaurant.map((r, i) =>
              r.bar ? (
                <div key={i} className="pt-3">
                  <div className="flex justify-between mb-1">
                    <span>{r.label}</span>
                    <span>{r.value}</span>
                  </div>
                  <div className="w-full h-2 bg-gray-200 dark:bg-white/10 rounded">
                    <div
                      className="h-2 bg-green-400 rounded"
                      style={{ width: r.percent }}
                    />
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

export default Dashboard;
