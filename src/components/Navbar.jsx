import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Menu, X, Moon, Sun } from "lucide-react";
import useTheme from "../context/useTheme";

const Navbar = () => {
  const navigate = useNavigate();
  const { theme, toggleTheme } = useTheme();
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 backdrop-blur-lg bg-white/10 border-b border-white/20 shadow-xl">

      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">

        {/* Logo */}
        <h1
          onClick={() => navigate("/")}
          className="text-2xl font-extrabold tracking-wide text-gray-800 dark:text-white cursor-pointer"
        >
          NeuralStay
        </h1>

        {/* Desktop Buttons */}
        <div className="hidden md:flex items-center gap-4">

          {/* Theme Toggle */}
                  <button onClick={toggleTheme} className=" relative w-10 h-10 bg-gray-800 dark:bg-white backdrop-blur-sm border border-white/20 rounded-full flex items-center justify-center text-white dark:text-gray-800 hover:dark:bg-gray-200 hover:bg-gray-700">
                    {theme === "dark" ? <Sun size={20} /> : <Moon size={20} />}
                  </button>

          <button onClick={() => navigate("/login")} className="px-6 py-2 rounded-full font-semibold dark:text-gray-800 text-white bg-gray-800 dark:bg-white
             hover:scale-105 transition shadow-lg cursor-pointer">
            Login
          </button>

          <button onClick={() => navigate("/signup")} className="px-6 py-2 rounded-full font-semibold dark:text-gray-800 text-white bg-gray-800 dark:bg-white
             hover:scale-105 transition shadow-lg cursor-pointer">
            Signup
          </button>
        </div>

        {/* Mobile Icon */}
        <div className="md:hidden flex gap-4">
        {/* Theme Toggle */}
          <button onClick={toggleTheme} className="md:hidden relative w-8 h-8 bg-gray-800 dark:bg-white backdrop-blur-sm borderbackdrop-blur-sm border border-white/20 rounded-full flex items-center justify-center text-white dark:text-gray-800 hover:dark:bg-gray-200 hover:bg-gray-700">
           {theme === "dark" ? <Sun size={20} /> : <Moon size={20} />}
           </button>
        <button onClick={() => setOpen(!open)} className="md:hidden text-gray-800 dark:text-white">
          {open ? <X size={28} /> : <Menu size={28} />}
        </button>
        </div>

      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden px-6 pb-6 flex flex-col gap-3 animate-slideDown backdrop-blur-xl bg-white/10 dark:bg-black/40">

          <button onClick={() => {navigate("/login"); setOpen(false)}} className="w-full py-2 rounded-xl font-semibold dark:text-gray-800 text-white bg-gray-800 dark:bg-white ">
            Login
          </button>

          <button onClick={() => {navigate("/signup"); setOpen(false)}} className="w-full py-2 rounded-xl font-semibold dark:text-gray-800 text-white bg-gray-800 dark:bg-white">
            Signup
          </button>
        </div>
      )}

    </nav>
  );
};

export default Navbar;
