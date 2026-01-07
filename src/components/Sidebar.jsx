import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { Menu, X, Home, BedDouble, Calendar, User, DollarSign, Utensils, Users, BarChart2,
  Settings, LogOut, ChevronDown, Moon, Sun} from "lucide-react";
import useTheme from "../context/useTheme";

const Sidebar = ({ onLogout }) => {
  const { theme, toggleTheme } = useTheme();
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

    { title: "Reservation & Booking", icon: <Calendar />, path: "/bookings" },

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
        <div className="flex gap-4">
          {/* Theme Toggle */}
          <button
            onClick={toggleTheme}
            className="relative w-8 h-8 bg-gray-600 dark:bg-white/10 backdrop-blur-sm border border-white/20 rounded-full flex items-center justify-center text-white dark:text-white hover:dark:bg-white/20 hover:bg-gray-700"
          >
            {theme === "dark" ? <Sun size={20} /> : <Moon size={20} />}
          </button>
          <button className="text-white" onClick={() => setOpen(!open)}>
            {open ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Sidebar */}
      <aside
        className={`fixed top-0 left-0 h-screen w-full md:w-64 bg-[#020617]/95 backdrop-blur-xl border-r border-white/10 text-gray-200 z-40 transition-all duration-500 ease-in-out ${
          open ? "translate-x-0" : "-translate-x-full md:translate-x-0"
        }`}
      >
        <div className="flex flex-col h-full">
          <div className="h-16 flex items-center justify-between px-6 border-b border-white/10 bg-[#0F172A]">
            <h1 className="text-2xl font-extrabold tracking-wide text-[#F3F4F6]">
              NeuralStay
            </h1>
          </div>

          <nav className="flex-1 overflow-y-auto p-2 space-y-1 sidebar-scroll">
            {menuItems.map((item, i) => (
              <div key={i}>
                {item.submenu ? (
                  <>
                    <button onClick={() => {
                                       if (submenu === i) setSubmenu(false);
                                       else setSubmenu(i);
                                       if (item.path) navigate(item.path);
                                     }}
                      className={`group w-full flex items-center justify-between px-4 py-3 rounded-xl transition-all
                         ${ submenu === i 
                          ? "bg-[#1E3A8A] text-white"
                           : "hover:bg-white/10 "
                          }`}
                    >
                      <span className="flex items-center gap-3 transition">
                        {item.icon} {item.title}
                      </span>

                      <ChevronDown
                        size={16}
                        className={`transition-transform duration-300 ${
                          submenu === i
                            ? "rotate-180 text-indigo-400"
                            : "text-gray-400"
                        }`}
                      />
                    </button>

                    {submenu === i && (
                      <div className="ml-8 mt-2 space-y-1 animate-fadeIn">
                        {item.submenu.map((sub, j) => (
                          <NavLink
                            key={j}
                            to={sub.path}
                            end
                            className={({ isActive }) =>
                              `block px-4 py-2 rounded-lg transition
                              ${
                                isActive
                                  ? "bg-white/10 text-white"
                                  : "hover:bg-white/10"
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
                    end
                    onClick={() => setSubmenu(false)}
                    className={({ isActive }) =>
                      `group flex items-center gap-3 px-4 py-3 rounded-xl transition
                      ${
                        isActive
                          ? "bg-[#1E3A8A] shadow-lg shadow-indigo-500/10"
                          : "hover:bg-white/10"
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
              className="group w-full flex items-center gap-3 px-4 py-3 rounded-xl bg-[#1E3A8A]/60 hover:bg-[#1E3A8A] text-white transition"
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
