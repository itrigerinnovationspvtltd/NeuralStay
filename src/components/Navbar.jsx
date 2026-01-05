import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 backdrop-blur-lg bg-white/10 border-b border-white/20 shadow-xl">

      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">

        {/* Logo */}
        <h1
          onClick={() => navigate("/")}
          className="text-2xl font-extrabold tracking-wide bg-linear-to-r from-indigo-400 via-pink-400 to-purple-500 bg-clip-text text-transparent cursor-pointer"
        >
          NeuralStay
        </h1>

        {/* Desktop Buttons */}
        <div className="hidden md:flex items-center gap-4">

          <button onClick={() => navigate("/login")} className="px-6 py-2 rounded-full font-semibold text-white 
            bg-linear-to-r from-indigo-500 via-purple-500 to-pink-500 hover:scale-105 transition shadow-lg">
            Login
          </button>

          <button onClick={() => navigate("/signup")} className="relative px-6 py-2 rounded-full font-semibold text-white 
            bg-linear-to-r from-indigo-500 via-purple-500 to-pink-500 hover:scale-105 transition shadow-lg">
            Signup
          </button>
        </div>

        {/* Mobile Icon */}
        <button onClick={() => setOpen(!open)} className="md:hidden text-indigo-500">
          {open ? <X size={28} /> : <Menu size={28} />}
        </button>

      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden px-6 pb-6 flex flex-col gap-3 animate-slideDown backdrop-blur-xl bg-black/40">

          <button onClick={() => {navigate("/login"); setOpen(false)}} className="w-full py-2 rounded-xl font-semibold text-white 
            bg-linear-to-r from-indigo-500 via-purple-500 to-pink-500">
            Login
          </button>

          <button onClick={() => {navigate("/signup"); setOpen(false)}} className="w-full py-2 rounded-xl font-semibold text-white 
            bg-linear-to-r from-indigo-500 via-purple-500 to-pink-500">
            Signup
          </button>
        </div>
      )}

    </nav>
  );
};

export default Navbar;
