import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

const ForgotPassword = () => {
  const navigate = useNavigate();

  const [step, setStep] = useState(1);
  const [email, setEmail] = useState("");
  const [otp, setOtp] = useState("");
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");

  const sendResetLink = (e) => {
    e.preventDefault();
    toast.success("OTP has been sent to your email");
    // API call for otp send
    setStep(2);
  };

  const verifyOtp = (e) => {
    e.preventDefault();
    toast.success("OTP Verified");
    // API call for OTP verification
    setStep(3);
  };

  const resetPassword = (e) => {
    e.preventDefault();
    if (password !== confirm) {
      toast.error("Passwords do not match");
      return;
    }
    // API call for password reset
    toast.success("Password reset successfully!");
    navigate("/login");
  };

  return (
    <div className="min-h-screen pt-20 flex items-center justify-center bg-[#F3F4F6] dark:bg-[#0F172A]">
      <div className="w-[95%] h-96 max-w-4xl rounded-3xl md:bg-white/40 md:backdrop-blur-2xl md:shadow-2xl md:border md:border-white/40 overflow-hidden grid grid-cols-1 md:grid-cols-2">
        {/* LEFT */}
        <div className="hidden md:flex flex-col justify-center items-center text-center bg-[#0F172A] text-white p-10">
          <h1 className="text-sm tracking-widest">RESET YOUR</h1>
          <h2 className="text-4xl font-extrabold mt-2">PASSWORD</h2>
          <p className="mt-6 text-sm opacity-90 max-w-xs">
            {step === 1 && "Enter your registered email"}
            {step === 2 && "Enter the OTP sent to your email"}
            {step === 3 && "Create your new password"}
          </p>
        </div>

        {/* RIGHT FORM */}
        <div className="flex items-center justify-center md:dark:bg-gray-600 p-6">
          <div className="w-full max-w-sm p-8 rounded-2xl bg-white/60 dark:bg-white backdrop-blur-xl shadow-xl">

            <h2 className="text-2xl font-bold text-center text-[#0F172A] mb-6">
              {step === 1 && "Forgot Password"}
              {step === 2 && "Verify OTP"}
              {step === 3 && "Reset Password"}
            </h2>

            {/* STEP 1 */}
            {step === 1 && (
              <form onSubmit={sendResetLink} className="space-y-4">
                <input
                  type="email"
                  placeholder="Registered Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-4 py-2.5 rounded-xl border"
                  required
                />
                <button className="w-full py-2.5 rounded-xl bg-[#0F172A] text-white">
                  Send Reset Link
                </button>
              </form>
            )}

            {/* STEP 2 */}
            {step === 2 && (
              <form onSubmit={verifyOtp} className="space-y-4">
                <input
                  type="text"
                  placeholder="Enter OTP"
                  value={otp}
                  onChange={(e) => setOtp(e.target.value)}
                  className="w-full px-4 py-2.5 rounded-xl border"
                  required
                />
                <button className="w-full py-2.5 rounded-xl bg-[#0F172A] text-white">
                  Verify OTP
                </button>
              </form>
            )}

            {/* STEP 3 */}
            {step === 3 && (
              <form onSubmit={resetPassword} className="space-y-4">
                <input
                  type="password"
                  placeholder="New Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full px-4 py-2.5 rounded-xl border"
                  required
                />
                <input
                  type="password"
                  placeholder="Confirm Password"
                  value={confirm}
                  onChange={(e) => setConfirm(e.target.value)}
                  className="w-full px-4 py-2.5 rounded-xl border"
                  required
                />
                <button className="w-full py-2.5 rounded-xl bg-[#0F172A] text-white">
                  Reset Password
                </button>
              </form>
            )}

            <p
              onClick={() => navigate("/login")}
              className="text-xs mt-4 text-center cursor-pointer hover:underline"
            >
              ← Back to Login
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;
