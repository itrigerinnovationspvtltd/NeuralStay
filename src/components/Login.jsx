import React from "react";
import { useNavigate } from "react-router-dom";

const Login = ({ onLogin }) => {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();   // prevent page refresh
    onLogin();            // loggedIn state → sidebar + dashboard visible
    navigate("/dashboard");  
  };

  return (
    <div className="min-h-screen pt-12  md:pt-28 flex items-center justify-center bg-linear-to-br from-gray-900 via-black to-gray-900 text-white">

      <div className="w-[90%] md:w-full max-w-sm p-6 rounded-2xl bg-white/10 backdrop-blur-xl border border-white/20 shadow-2xl">

        <h2 className="text-2xl font-bold text-center mb-5 bg-linear-to-r from-indigo-400 via-pink-400 to-purple-500 bg-clip-text text-transparent">
          Login
        </h2>

        <form className="space-y-4" onSubmit={handleSubmit}>

          <input className="input" placeholder="Username / Email" />

          <input type="password" className="input" placeholder="Password" />

          <select className="input">
            <option className="bg-black">User</option>
            <option className="bg-black">Admin</option>
            <option className="bg-black">Manager</option>
          </select>

          <div className="flex items-center justify-between text-xs">
            <label className="flex items-center gap-2">
              <input type="checkbox" className="accent-purple-500" />
              Remember Me
            </label>
            <span className="text-purple-400 hover:underline cursor-pointer">Forgot?</span>
          </div>

          <button type="submit" className="w-full py-2.5 rounded-xl text-sm font-semibold text-white bg-linear-to-r from-indigo-500 via-purple-500 to-pink-500 hover:scale-105 transition-all shadow-lg">
            Login
          </button>

        </form>
      </div>
    </div>
  );
};

export default Login;
