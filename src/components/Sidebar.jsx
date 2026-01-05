import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { Menu, X, Home, BedDouble, Calendar, User, DollarSign, Utensils, Users, BarChart2, Settings, LogOut } from "lucide-react";

const Sidebar = ({ onLogout }) => {
  const [open, setOpen] = useState(false); // sidebar open by default

  const menuItems = [
    { title: "Dashboard", icon: <Home />, path: "/dashboard" },
    { title: "Hotel Management", icon: <BedDouble />, path: "/rooms" },
    { title: "Reservation & Booking", icon: <Calendar />, path: "/bookings" },
    { title: "Guest Management (CRM)", icon: <User />, path: "/guests" },
    { title: "Front Office & Billing", icon: <DollarSign />, path: "/billing" },
    { title: "Restaurant Management", icon: <Utensils />, path: "/services" },
    { title: "Staff & Role Management", icon: <Users />, path: "/staff" },
    { title: "Reports & Analytics", icon: <BarChart2 />, path: "/reports" },
    { title: "Admin & System Config", icon: <Settings />, path: "/settings" },
  ];

  return (
    <>
      {/* Mobile Hamburger */}
      <div className="md:hidden flex justify-between items-center bg-gray-900 p-4 fixed w-full z-50">
        <h1 className="text-xl font-bold text-white">NeuralStay</h1>
        <button onClick={() => setOpen(!open)}>
          {open ? <X size={28} color="white" /> : <Menu size={28} color="white" />}
        </button>
      </div>

      {/* Sidebar */}
      <div
        className={`fixed top-0 left-0 h-full bg-gray-900 text-white shadow-xl transition-all z-40
          ${open ? "w-64" : "w-0 md:w-64"} overflow-hidden md:relative md:translate-x-0`}
      >
        <div className="flex flex-col h-full sm:min-h-screen">
          <div className="flex items-center justify-center h-16 border-b border-white/20">
            <h1 className="text-2xl font-bold bg-clip-text text-transparent bg-linear-to-r from-indigo-400 via-pink-400 to-purple-500">
              NeuralStay
            </h1>
          </div>

          <nav className="flex-1 px-4 py-5 space-y-2 overflow-auto">
            {menuItems.map((item) => (
              <NavLink
                key={item.title}
                to={item.path}
                className={({ isActive }) =>
                  `flex items-center gap-3 px-4 py-2 rounded-lg hover:bg-white/10 transition ${
                    isActive ? "bg-white/20" : ""
                  }`
                }
                onClick={() => setOpen(true)}
              >
                {item.icon}
                <span className="md:block">{item.title}</span>
              </NavLink>
            ))}
          </nav>

          {/* Logout */}
          <div className="p-2 border-t border-white/20">
            <button onClick={onLogout} className="flex items-center gap-2 w-full px-4 py-2 rounded-lg hover:bg-red-600 transition">
              <LogOut />
              <span>Logout</span>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
