import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import {
  Menu,
  X,
  Home,
  BedDouble,
  Calendar,
  User,
  DollarSign,
  Utensils,
  Users,
  BarChart2,
  Settings,
  LogOut,
  ChevronDown,
} from "lucide-react";

const Sidebar = ({ onLogout }) => {
  const navigate = useNavigate();

  const [open, setOpen] = useState(false);
  const [submenu, setSubmenu] = useState(null);

  const menuItems = [
    { title: "Dashboard", icon: <Home />, path: "/dashboard" },

    {
      title: "Hotel Management",
      icon: <BedDouble />,
      path: "/hotel",
      submenu: [
        { title: "Hotel Profile", path: "/hotel/profile" },
        { title: "Floor Management", path: "/floor" },
        { title: "Seasonal & special pricing", path: "/pricing" },
        { title: "Add-on Services", path: "/add-on" },
        { title: "Housekeeping", path: "/housekeeping" },
      ],
    },

    { title: "Reservation & Booking", icon: <Calendar />, path: "/bookings" },

    {
      title: "Guest Management",
      icon: <User />,
      submenu: [
        { title: "Guest List", path: "/guests" },
        { title: "Foreign Guest Management", path: "/foreign-guests" },
        { title: "VIP Guests", path: "/vip-guests" },
        { title: "Corporate Guests", path: "/corporate-guest" },
        { title: "Blacklisted Guests", path: "/blacklisted-guest" },
      ],
    },

    { title: "Front Office & Billing", icon: <DollarSign />, path: "/billing" },

    {
      title: "Restaurant Management",
      icon: <Utensils />,
      path: "/restaurant",
    },

    { title: "Staff & Role Management", icon: <Users />, path: "/staff" },

    {
      title: "Reports & Analytics",
      icon: <BarChart2 />,
      path: "/report",
    },

    { title: "Admin & System Config", icon: <Settings />, path: "/settings" },
  ];

  return (
    <>
      {/* Mobile Header */}
      <div className="md:hidden fixed top-0 w-full bg-gray-900 p-4 flex justify-between z-50">
        <h1 className="text-xl font-bold text-white">NeuralStay</h1>
        <button className="text-white" onClick={() => setOpen(!open)}>
          {open ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Sidebar */}
      <aside
        className={`fixed top-0 left-0 h-screen bg-gray-900 text-white w-64 z-40 transition-transform
        ${open ? "translate-x-0" : "-translate-x-full md:translate-x-0"}`}
      >
        <div className="flex flex-col h-full">
          <div className="h-16 flex items-center justify-center border-b border-white/20">
            <h1 className="text-2xl font-bold bg-linear-to-r from-indigo-400 via-pink-400 to-purple-500 bg-clip-text text-transparent">
              NeuralStay
            </h1>
          </div>

          <nav className="flex-1 overflow-y-auto p-1 space-y-1">
            {menuItems.map((item, i) => (
              <div key={i}>
                {item.submenu ? (
                  <>
                    <button
                      onClick={() => {
                        setSubmenu(submenu === i ? null : i);
                        if (item.path) navigate(item.path);
                      }}
                      className="w-full flex items-center justify-between px-4 py-2 rounded-lg hover:bg-white/10"
                    >
                      <span className="flex items-center gap-2 whitespace-nowrap">
                        {item.icon} {item.title}
                      </span>
                      <ChevronDown
                        size={16}
                        className={`${
                          submenu === i && "rotate-180"
                        } transition`}
                      />
                    </button>

                    {submenu === i && (
                      <div className="ml-8 mt-1 space-y-1">
                        {item.submenu.map((sub, j) => (
                          <NavLink
                            key={j}
                            to={sub.path}
                            className={({ isActive }) =>
                              `block px-3 py-1.5 rounded hover:bg-white/10 ${
                                isActive && "bg-white/20"
                              }`
                            }
                          >
                            {sub.title}
                          </NavLink>
                        ))}
                      </div>
                    )}
                  </>
                ) : (
                  <NavLink
                    to={item.path}
                    className={({ isActive }) =>
                      `flex items-center gap-3 px-4 py-2 rounded-lg hover:bg-white/10 ${
                        isActive && "bg-white/20"
                      }`
                    }
                  >
                    {item.icon} {item.title}
                  </NavLink>
                )}
              </div>
            ))}
          </nav>

          {/* Logout */}
          <div className="p-3 border-t border-white/20">
            <button
              onClick={onLogout}
              className="w-full flex items-center gap-2 px-4 py-2 hover:bg-red-600 rounded-lg"
            >
              <LogOut size={18} /> Logout
            </button>
          </div>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;
