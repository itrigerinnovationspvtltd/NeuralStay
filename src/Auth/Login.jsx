import React from "react";
import { useNavigate } from "react-router-dom";

const Login = ({ onLogin }) => {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault(); // prevent page refresh
    onLogin(); // loggedIn state → sidebar + dashboard visible
    navigate("/dashboard");
  };

  return (
    <div className="min-h-screen pt-20 flex items-center justify-center bg-[#F3F4F6] dark:bg-[#0F172A]">

      {/* Main Glass Card */}
      <div className="w-[95%]  max-w-4xl h-140 rounded-3xl md:bg-white/40 md:backdrop-blur-2xl md:shadow-2xl md:border md:border-white/40 overflow-hidden grid grid-cols-1 md:grid-cols-2">
       
        {/* Left side */}
        <div className="hidden md:flex flex-col justify-center items-center text-center bg-[#0F172A] text-white p-10">
          <h1 className="text-sm tracking-widest">WELCOME TO</h1>
          <h2 className="text-4xl font-extrabold mt-2">NeuralStay</h2>

          <img src="/admin.png" className="w-48 mt-8 drop-shadow-xl" alt="" />

          <p className="mt-6 text-sm opacity-90 max-w-xs">
            Login to manage your dashboard, hotel profile and analytics from one
            place.
          </p>
        </div>

        {/* Right side form */}
        <div className="flex items-center justify-center  md:dark:bg-gray-600  p-6">
          <div className="w-full max-w-sm p-8 rounded-2xl  md:bg-white/60 dark:bg-white backdrop-blur-xl shadow-xl">
            <h2 className="text-2xl font-bold text-center text-[#0F172A] mb-6">
              Login
            </h2>

            <form className="space-y-4" onSubmit={handleSubmit}>
              {/* Username / Email */}
              <div>
                <label
                  htmlFor="username"
                  className="block text-sm font-medium text-gray-600 mb-1"
                >
                  Username / Email
                </label>
                <input
                  id="username"
                  name="username"
                  className="w-full px-4 py-2.5 rounded-xl outline-none bg-white text-gray-800 border border-gray-300 focus:ring-2 focus:ring-gray-500"
                />
              </div>

              {/* Password */}
              <div>
                <label
                  htmlFor="password"
                  className="block text-sm font-medium text-gray-600 mb-1"
                >
                  Password
                </label>
                <input
                  type="password"
                  name="password"
                  id="password"
                  className="w-full px-4 py-2.5 rounded-xl outline-none bg-white text-gray-800 border border-gray-300 focus:ring-2 focus:ring-gray-500"
                />
              </div>

              {/* Role */}
              <div>
                <label
                  htmlFor="role"
                  className="block text-sm font-medium text-gray-600 mb-1"
                >
                  Select Role
                </label>
                <select
                  id="role"
                  name="role"
                  className="w-full px-4 py-2.5 rounded-xl outline-none bg-white text-gray-800 border border-gray-300 focus:ring-2 focus:ring-gray-500"
                >
                  <option>User</option>
                  <option>Admin</option>
                  <option>Manager</option>
                </select>
              </div>

              {/* Remember / Forgot */}
              <div className="flex items-center justify-between text-xs text-gray-600">
                <label className="flex items-center gap-2">
                  <input
                    type="checkbox"
                    className="accent-gray-800 cursor-pointer"
                  />
                  Remember Me
                </label>
                <span
                  onClick={() => navigate("/forgot-password")}
                  className="hover:underline cursor-pointer"
                >
                  Forgot?
                </span>
              </div>
              <button
                type="submit"
                className="w-full py-2.5 rounded-xl text-sm font-semibold text-white bg-[#0F172A] cursor-pointer shadow-lg"
              >
                Login
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
