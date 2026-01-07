import React from "react";
import { useNavigate } from "react-router-dom";

const ForgotPassword = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen pt-20 flex items-center justify-center bg-[#F3F4F6] dark:bg-[#0F172A]">
      {/* Main Glass Card */}
      <div className="w-[95%] max-w-4xl rounded-3xl md:bg-white/40 md:backdrop-blur-2xl md:shadow-2xl md:border md:border-white/40 overflow-hidden grid grid-cols-1 md:grid-cols-2">

        {/* LEFT */}
        <div className="hidden md:flex flex-col justify-center items-center text-center bg-[#0F172A] text-white p-10">
          <h1 className="text-sm tracking-widest">RESET YOUR</h1>
          <h2 className="text-4xl font-extrabold mt-2">PASSWORD</h2>
          <p className="mt-6 text-sm opacity-90 max-w-xs">
            Enter your registered email and we will send you a reset link.
          </p>
        </div>

        {/* RIGHT FORM */}
        <div className="flex items-center justify-center md:dark:bg-gray-600 p-6">
          <div className="w-full max-w-sm p-8 rounded-2xl bg-white/60 dark:bg-white backdrop-blur-xl shadow-xl">

            <h2 className="text-2xl font-bold text-center text-[#0F172A] mb-6">
              Forgot Password
            </h2>

            <form className="space-y-4">

              {/* Email */}
              <div>
                <label className="block text-sm font-medium text-gray-600 mb-1">
                  Registered Email
                </label>
                <input
                  type="email"
                  className="w-full px-4 py-2.5 rounded-xl outline-none bg-white text-gray-800 border border-gray-300 focus:ring-2 focus:ring-gray-500"
                />
              </div>

              <p className="text-xs text-gray-500">
                We will send a password reset link to your email.
              </p>

              <button
                type="submit"
                className="w-full py-2.5 rounded-xl text-sm font-semibold text-white bg-[#0F172A] cursor-pointer shadow-lg"
              >
                Send Reset Link
              </button>

              <p
                onClick={() => navigate("/login")}
                className="text-xs text-center text-gray-600 hover:underline cursor-pointer"
              >
                ← Back to Login
              </p>

            </form>

          </div>
        </div>

      </div>
    </div>
  );
};

export default ForgotPassword;
