import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const navigate = useNavigate();

  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");
  const [showRules, setShowRules] = useState(false);

  const rules = {
    length: password.length >= 8,
    upper: /[A-Z]/.test(password),
    number: /[0-9]/.test(password),
    special: /[^A-Za-z0-9]/.test(password),
  };

  const allValid = Object.values(rules).every(Boolean);
  const match = password === confirm && confirm.length > 0;

  return (
    <div className="min-h-screen pt-16 flex items-center justify-center bg-[#F3F4F6] dark:bg-[#0F172A]">

      <div className="w-[95%] max-w-4xl  rounded-3xl md:bg-white/40 md:backdrop-blur-2xl md:shadow-2xl md:border md:border-white/40 overflow-hidden grid grid-cols-1 md:grid-cols-2">

        {/* Left side */}
        <div className="hidden md:flex flex-col justify-center items-center text-center  bg-[#0F172A] text-white p-10">
          <h1 className="text-sm tracking-widest">CREATE YOUR</h1>
          <h2 className="text-4xl font-extrabold mt-2">ACCOUNT</h2>

          <img
            src="/admin.png"
            className="w-44 mt-8 drop-shadow-xl"
            alt=""
          />

          <p className="mt-6 text-sm opacity-90 max-w-xs">
            Join our platform and manage everything from a single dashboard.
          </p>
        </div>

        {/* Right side form */}
        <div className="flex items-center justify-center  md:dark:bg-gray-600  p-3">
          <div className="w-full max-w-sm p-3 rounded-2xl  md:bg-white/60 dark:bg-white backdrop-blur-xl shadow-xl">

            <h2 className="text-2xl font-bold text-center text-[#0F172A] mb-4">
              Create Account
            </h2>

            <form className="space-y-3">

              <input className="w-full px-4 py-2.5 rounded-xl outline-none bg-white text-gray-800 border border-gray-300 focus:ring-2 focus:ring-gray-500" placeholder="Full Name" />
              <input className="w-full px-4 py-2.5 rounded-xl outline-none bg-white text-gray-800 border border-gray-300 focus:ring-2 focus:ring-gray-500" placeholder="Email Address" />
              <input className="w-full px-4 py-2.5 rounded-xl outline-none bg-white text-gray-800 border border-gray-300 focus:ring-2 focus:ring-gray-500" placeholder="Mobile Number" />
              <input className="w-full px-4 py-2.5 rounded-xl outline-none bg-white text-gray-800 border border-gray-300 focus:ring-2 focus:ring-gray-500" placeholder="Username" />

              <input
                type="password"
                placeholder="Password"
                className="w-full px-4 py-2.5 rounded-xl outline-none bg-white text-gray-800 border border-gray-300 focus:ring-2 focus:ring-gray-500"
                value={password}
                onFocus={() => setShowRules(true)}
                onChange={(e) => setPassword(e.target.value)}
              />

              {showRules && password && (
                <div className="text-[11px] space-y-1 flex">
                  <p className={rules.length ? "text-green-500" : "text-red-500"}>• Minimum 8 characters</p>
                  <p className={rules.upper ? "text-green-500" : "text-red-500"}>• At least 1 uppercase</p>
                  <p className={rules.number ? "text-green-500" : "text-red-500"}>• At least 1 number</p>
                  <p className={rules.special ? "text-green-500" : "text-red-500"}>• At least 1 special character</p>
                </div>
              )}

              <input
                type="password"
                placeholder="Confirm Password"
                className={`w-full px-4 py-2.5 rounded-xl outline-none bg-white text-gray-800 border border-gray-300 focus:ring-2 focus:ring-gray-500 ${confirm && (match ? "ring-1 ring-green-500" : "ring-1 ring-red-500")}`}
                value={confirm}
                onChange={(e) => setConfirm(e.target.value)}
              />

              {confirm && (
                <p className={`text-[12px] ${match ? "text-green-500" : "text-red-500"}`}>
                  {match ? "Passwords match" : "Passwords do not match"}
                </p>
              )}

              <select className="w-full px-4 py-2.5 rounded-xl outline-none bg-white text-gray-800 border border-gray-300 focus:ring-2 focus:ring-gray-500">
                <option>User</option>
                <option>Admin</option>
                <option>Manager</option>
              </select>

              <div className="flex items-center gap-4 text-xs text-gray-600">
                <label className="flex items-center gap-2">
                  <input type="radio" name="status" defaultChecked className="accent-green-500" /> Active
                </label>
                <label className="flex items-center gap-2">
                  <input type="radio" name="status" className="accent-red-500" /> Inactive
                </label>
              </div>

              <button
                onClick={() => navigate("/login")}
                disabled={!allValid || !match}
                className={`w-full py-2.5 rounded-xl text-sm font-semibold text-white transition-all shadow-lg 
                ${allValid && match ? "bg-[#0F172A] hover:scale-105" : "bg-gray-700 cursor-not-allowed"}`}
              >
                Create Account
              </button>

            </form>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Signup;
