import React from "react";
import { BedDouble, LogIn, LogOut, IndianRupee, Utensils } from "lucide-react";

const Dashboard = () => {
  return (
    <div className="min-h-screen pt-24 px-6 bg-linear-to-br from-gray-900 via-black to-gray-900 text-white">

      <h1 className="text-3xl font-bold mb-6">Hotel Dashboard</h1>

      {/* Top Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-5 mb-6">

        <Summary title="Available Rooms" value="42" icon={<BedDouble />} color="from-green-500 to-emerald-500" />
        <Summary title="Occupied Rooms" value="18" icon={<BedDouble />} color="from-red-500 to-pink-500" />
        <Summary title="Cleaning" value="6" icon={<BedDouble />} color="from-yellow-500 to-orange-500" />
        <Summary title="Maintenance" value="3" icon={<BedDouble />} color="from-purple-500 to-indigo-500" />

      </div>

      {/* Checkin Checkout */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-6">

        <ListCard title="Today's Check-ins" icon={<LogIn />}>
          <Guest name="Amit" room="101" />
          <Guest name="Abhishek" room="102" />
          <Guest name="Rahul" room="103" />
        </ListCard>

        <ListCard title="Today's Check-outs" icon={<LogOut />}>
          <Guest name="Aditiya" room="110" />
          <Guest name="Arjun" room="106" />
        </ListCard>

      </div>

      {/* Revenue & Restaurant */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">

        <InfoCard title="Revenue Overview" icon={<IndianRupee />}>
          <p>Today: ₹ 20,000</p>
          <p>This Month: ₹ 4,00,000</p>
          <p>This Year: ₹ 40,00,000</p>
        </InfoCard>

        <InfoCard title="Restaurant Sales Overview" icon={<Utensils />}>
          <p>Today: ₹ 5,000</p>
          <p>Top Item: Paneer Butter Masala</p>
          <p>Orders: 30</p>
        </InfoCard>

      </div>

    </div>
  );
};

const Summary = ({ title, value, icon, color }) => (
  <div className={`p-5 rounded-2xl bg-linear-to-r ${color} shadow-lg`}>
    <div className="flex justify-between items-center">
      <div>
        <p className="text-sm opacity-80">{title}</p>
        <h2 className="text-3xl font-bold">{value}</h2>
      </div>
      <div className="opacity-70">{icon}</div>
    </div>
  </div>
);

const ListCard = ({ title, icon, children }) => (
  <div className="p-5 rounded-2xl bg-white/10 backdrop-blur-xl border border-white/20">
    <div className="flex items-center gap-2 mb-3">
      {icon}
      <h2 className="font-semibold">{title}</h2>
    </div>
    {children}
  </div>
);

const Guest = ({ name, room }) => (
  <div className="flex justify-between py-2 border-b border-white/10 text-sm">
    <span>{name}</span>
    <span className="text-purple-400">Room {room}</span>
  </div>
);

const InfoCard = ({ title, icon, children }) => (
  <div className="p-5 rounded-2xl bg-white/10 backdrop-blur-xl border border-white/20">
    <div className="flex items-center gap-2 mb-3">
      {icon}
      <h2 className="font-semibold">{title}</h2>
    </div>
    <div className="space-y-1 text-sm">{children}</div>
  </div>
);

export default Dashboard;
