import React, { useState } from "react";
import { Bell, Moon, Sun, User, LogOut, Settings, Menu } from "lucide-react";
import useTheme from "../context/useTheme";

const Topbar = ({ onLogout, toggleSidebar }) => {
  
  const { theme, toggleTheme } = useTheme();
  const [open, setOpen] = useState(false);

  return (
    <div className="fixed top-0 left-0 md:left-64 right-0 h-16
      bg-gray-50 dark:bg-gray-900
      text-gray-900 dark:text-white
      border-b border-black/10 dark:border-white/10
      z-40 flex items-center justify-between px-4 md:px-8"
    >

      {/* Mobile Sidebar Toggle */}
      <button onClick={toggleSidebar} className="md:hidden">
        <Menu size={22} />
      </button>

      <div className="flex items-center gap-6 ml-auto">

        {/* Theme Toggle */}
                          <button onClick={toggleTheme} className=" relative w-10 h-10 bg-gray-600 dark:bg-white/10 backdrop-blur-sm border border-white/20 rounded-full flex items-center justify-center text-white dark:text-white hover:dark:bg-white/20 hover:bg-gray-700">
                            {theme === "dark" ? <Sun size={20} /> : <Moon size={20} />}
                          </button>

        {/* Notifications */}
        <div className="relative cursor-pointer">
          <Bell size={20} />
          <span className="absolute -top-1 -right-1 bg-red-500 text-xs rounded-full px-1">
            1
          </span>
        </div>

        {/* Profile */}
        <div className="relative">
          <button
            onClick={() => setOpen(!open)}
            className="flex items-center gap-2"
          >
            <User />
            <span className="hidden sm:block">Admin</span>
          </button>

          {open && (
            <div className="absolute right-0 mt-3 w-44
              bg-white dark:bg-gray-800
              border border-black/10 dark:border-white/10
              rounded-lg shadow-xl overflow-hidden"
            >
              <button className="flex w-full items-center gap-2 px-4 py-2 hover:bg-black/5 dark:hover:bg-white/10">
                <Settings size={14} /> Settings
              </button>

              <button
                onClick={onLogout}
                className="flex w-full items-center gap-2 px-4 py-2 hover:bg-red-600 text-red-600 hover:text-white"
              >
                <LogOut size={14} /> Logout
              </button>
            </div>
          )}
        </div>

      </div>
    </div>
  );
};

export default Topbar;
