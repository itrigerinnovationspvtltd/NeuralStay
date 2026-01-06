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
    <div className="min-h-screen pt-12 md:pt-28 flex items-center justify-center bg-gray-50 dark:bg-linear-to-br from-gray-900 via-black to-gray-900 text-gray-800 dark:text-gray-100
      "
    >
      {/* Card */}
      <div className="w-[90%] md:w-full max-w-sm p-6 rounded-2xl bg-linear-to-br from-gray-900 via-black to-gray-900 text-gray-800 dark:bg-white/10 backdrop-blur-xl border border-gray-200 dark:border-white/20 shadow-2xl"
      >
        <h2 className="text-2xl font-bold text-center mb-5 bg-linear-to-r from-indigo-400 via-pink-400 to-purple-500 bg-clip-text text-transparent"
        >
          Login
        </h2>

        <form className="space-y-4" onSubmit={handleSubmit}>
          {/* Username */}
          <input className="w-full px-4 py-2.5 rounded-xl outline-none bg-white dark:bg-black/40
              text-gray-800 dark:text-white border border-gray-300 dark:border-white/10
              focus:ring-2 focus:ring-purple-500"
            placeholder="Username / Email"
          />

          {/* Password */}
          <input type="password" className="w-full px-4 py-2.5 rounded-xl outline-none bg-white dark:bg-black/40 text-gray-800 dark:text-white border border-gray-300 dark:border-white/10 focus:ring-2 focus:ring-purple-500"
            placeholder="Password"
          />

          {/* Role */}
          <select className="w-full px-4 py-2.5 rounded-xl outline-none bg-white dark:bg-black/40
              text-gray-800 dark:text-white border border-gray-300 dark:border-white/10
              focus:ring-2 focus:ring-purple-500"
          >
            <option className="bg-black text-white">User</option>
            <option className="bg-black text-white">Admin</option>
            <option className="bg-black text-white">Manager</option>
          </select>

          {/* Remember / Forgot */}
          <div className="flex items-center justify-between text-xs">
            <label className="flex items-center gap-2 text-white">
              <input type="checkbox" className="accent-purple-400" />
              Remember Me
            </label>
            <span className="text-white hover:underline cursor-pointer">
              Forgot?
            </span>
          </div>

          {/* Submit */}
          <button type="submit" className="w-full py-2.5 rounded-xl text-sm font-semibold text-white bg-linear-to-r from-indigo-500 via-purple-500 to-pink-500            hover:scale-105 transition-all shadow-lg"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
