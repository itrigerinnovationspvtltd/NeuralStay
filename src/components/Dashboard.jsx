import React from "react";
import { BedDouble, LogIn, LogOut, DoorOpen, DoorClosed, IndianRupee, Utensils} from "lucide-react";
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, PieChart, Pie, Cell,
  Legend} from "recharts";

/* stats data */
const overviewStats = [
  {
    title: "Total Rooms",
    value: "150",
    color: "bg-blue-500",
    icon: <BedDouble size={22} />,
  },
  {
    title: "Available Rooms",
    value: "30",
    color: "bg-green-500",
    icon: <DoorOpen size={22} />,
  },
  {
    title: "Occupied Rooms",
    value: "120",
    color: "bg-red-500",
    icon: <DoorClosed size={22} />,
  },
  {
    title: "Today's Check-ins",
    value: "24",
    color: "bg-indigo-500",
    icon: <LogIn size={22} />,
  },
  {
    title: "Today's Check-outs",
    value: "19",
    color: "bg-yellow-500",
    icon: <LogOut size={22} />,
  },
  {
    title: "Today's Revenue",
    value: "₹4,50,000",
    color: "bg-emerald-500",
    icon: <IndianRupee size={22} />,
  },
  {
    title: "Restaurant Sales",
    value: "₹50,000",
    color: "bg-purple-500",
    icon: <Utensils size={22} />,
  },
];

const bookings = [
  {
    name: "Amit Kumar",
    room: "101",
    time: "Today 1:00 PM",
    status: "Confirmed",
  },
  { name: "Abhishek", room: "103", time: "Today 2:00 PM", status: "Pending" },
  {
    name: "Rahul Sharma",
    room: "106",
    time: "Tomorrow 1:00 PM",
    status: "Confirmed",
  },
  { name: "Raj", room: "108", time: "Tomorrow 2:00 PM", status: "Confirmed" },
];

const alerts = [
  { text: "Room 102 maintenance pending", time: "10 mins ago" },
  { text: "New booking from Booking.com", time: "25 mins ago" },
  { text: "Payment gateway issue reported", time: "1 hour ago" },
];

const revenueChart = [
  { name: "Rooms", value: 400000 },
  { name: "Food", value: 250000 },
  { name: "Services", value: 50000 },
];

const COLORS = ["#22c55e", "#facc15", "#ef4444"];

const restaurantChart = [
  { name: "Completed", value: 80 },
  { name: "Pending", value: 8 },
  { name: "Cancelled", value: 12 },
];

const quickLinks = [
  { name: "Rooms", path: "/rooms" },
  { name: "Bookings", path: "/bookings" },
  { name: "Guests", path: "/guests" },
  { name: "Restaurant", path: "/restaurant" },
  { name: "Staff", path: "/staff" },
  { name: "Reports", path: "/reports" },
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
        {overviewStats.map((s, i) => (
          <div
            key={i}
            className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-white/10 rounded-xl p-5 flex items-center justify-between hover:shadow-lg transition"
          >
            <div>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                {s.title}
              </p>
              <h2 className="text-2xl font-bold mt-1">{s.value}</h2>
            </div>

            <div className={`p-3 rounded-xl text-white ${s.color}`}>
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
          <div className="w-full min-h-75">
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={revenueChart}>
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Bar dataKey="value" radius={[6, 6, 0, 0]} fill="#4ade80" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* RESTAURANT */}
        <div className="bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-white/10 p-6">
          <h2 className="text-lg font-semibold mb-4">
            Restaurant Sales Overview
          </h2>

          <div className="w-full min-h-75">
            <ResponsiveContainer width="100%" height={300}>
              <PieChart>
                <Pie
                  data={restaurantChart}
                  dataKey="value"
                  innerRadius={60}
                  outerRadius={100}
                  paddingAngle={5}
                >
                  {restaurantChart.map((_, i) => (
                    <Cell key={i} fill={COLORS[i]} />
                  ))}
                </Pie>
                <Tooltip />
                <Legend />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>

      {/* Quick links */}
      <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-6 gap-4">
        {quickLinks.map((q, i) => (
          <button
            key={i}
            className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-white/10 rounded-xl py-4 text-sm font-medium hover:bg-indigo-50 dark:hover:bg-indigo-500/10 transition"
          >
            {q.name}
          </button>
        ))}
      </div>

      {/* Quick Actions */}
      <div className="bg-[#1E3A8A] text-white rounded-xl p-6 flex flex-wrap gap-4 items-center justify-between">
        <div>
          <h2 className="text-xl font-semibold">Quick Actions</h2>
          <p className="text-sm opacity-90">
            Navigate to important modules instantly
          </p>
        </div>

        <div className="flex gap-3 flex-wrap">
          <button className="px-5 py-2 bg-white/20 rounded-lg hover:bg-white/30 cursor-pointer">
            New Booking
          </button>
          <button className="px-5 py-2 bg-white/20 rounded-lg hover:bg-white/30 cursor-pointer">
            Check-in
          </button>
          <button className="px-5 py-2 bg-white/20 rounded-lg hover:bg-white/30 cursor-pointer">
            Check-out
          </button>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
