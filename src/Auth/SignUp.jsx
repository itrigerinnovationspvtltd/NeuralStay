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
    <div className="min-h-screen pt-16 flex items-center justify-center bg-linear-to-br from-gray-900 via-black to-gray-900 text-white">

      <div className="w-[90%] md:w-full max-w-md p-4 rounded-2xl bg-white/10 backdrop-blur-xl border border-white/20 shadow-2xl">

        <h2 className="text-2xl font-bold text-center mb-4 bg-linear-to-r from-indigo-400 via-pink-400 to-purple-500 bg-clip-text text-transparent">
          Create Account
        </h2>

        <form className="space-y-3">

          <input className="input" placeholder="Full Name" />
          <input className="input" placeholder="Email Address" />
          <input className="input" placeholder="Mobile Number" />
          <input className="input" placeholder="Username" />

          {/* Password */}
          <input
            type="password"
            placeholder="Password"
            className="input"
            value={password}
            onFocus={() => setShowRules(true)}
            onChange={(e) => setPassword(e.target.value)}
          />

          {showRules && password && (
            <div className="text-[11px] space-y-1 flex">
              <p className={rules.length ? "text-green-400" : "text-red-400"}>• Minimum 8 characters</p>
              <p className={rules.upper ? "text-green-400" : "text-red-400"}>• At least 1 uppercase</p>
              <p className={rules.number ? "text-green-400" : "text-red-400"}>• At least 1 number</p>
              <p className={rules.special ? "text-green-400" : "text-red-400"}>• At least 1 special character</p>
            </div>
          )}

          {/* Confirm */}
          <input
            type="password"
            placeholder="Confirm Password"
            className={`input ${confirm && (match ? "ring-1 ring-green-500" : "ring-1 ring-red-500")}`}
            value={confirm}
            onChange={(e) => setConfirm(e.target.value)}
          />

          {confirm && (
            <p className={`text-[11px] ${match ? "text-green-400" : "text-red-400"}`}>
              {match ? "Passwords match" : "Passwords do not match"}
            </p>
          )}

          <select className="input">
            <option className="bg-black">User</option>
            <option className="bg-black">Admin</option>
            <option className="bg-black">Manager</option>
          </select>

          <div className="flex items-center gap-4 text-xs">
            <label className="flex items-center gap-2">
              <input type="radio" name="status" defaultChecked className="accent-green-500" />
              Active
            </label>
            <label className="flex items-center gap-2">
              <input type="radio" name="status" className="accent-red-500" />
              Inactive
            </label>
          </div>

          <button onClick={()=>{navigate('/login')}}
            disabled={!allValid || !match}
            className={`w-full py-2.5 rounded-xl text-sm font-semibold text-white transition-all shadow-lg 
            ${allValid && match
              ? "bg-linear-to-r from-indigo-500 via-purple-500 to-pink-500 hover:scale-105"
              : "bg-gray-600 cursor-not-allowed"}`}
          >
            Create Account
          </button>

        </form>
      </div>
    </div>
  );
};

export default Signup;
