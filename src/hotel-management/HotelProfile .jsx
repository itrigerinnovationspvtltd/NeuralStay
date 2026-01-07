import React from "react";
import {Building2, Phone, Mail, MapPin, Clock, IndianRupee, Upload} from "lucide-react";

const HotelProfile = () => {

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="md:pl-70 py-20 px-6 bg-gray-50 dark:bg-[#0F172A] text-gray-800 dark:text-gray-100">

      <h1 className="text-3xl font-bold mb-6">Hotel Profile</h1>

      <form onSubmit={handleSubmit} className="grid grid-cols-1 xl:grid-cols-3 gap-6">

        {/* Left side form */}
        <div className="xl:col-span-2 space-y-6">

          {/* Basic information */}
          <section className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-white/10 rounded-xl p-6">
            <h2 className="font-semibold text-lg mb-4">Basic Information</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Input label="Hotel Name" name="hotelName" placeholder="NeuralStay Resort" icon={<Building2 size={16}/>}/>
              <FileUpload label="Logo Upload" name="logo"/>
              <Input label="Address" name="address" placeholder="MI Road" icon={<MapPin size={16}/>}/>
              <Input label="City" name="city" placeholder="Jaipur"/>
              <Input label="State" name="state" placeholder="Rajasthan"/>
              <Input label="Country" name="country" placeholder="India"/>
            </div>
          </section>

          {/* Contact information */}
          <section className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-white/10 rounded-xl p-6">
            <h2 className="font-semibold text-lg mb-4">Contact Information</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Input label="Phone Number" name="phone" placeholder="+91 98765 43210" icon={<Phone size={16}/>}/>
              <Input label="Email" name="email" placeholder="info@neuralstay.com" icon={<Mail size={16}/>}/>
            </div>
          </section>

          {/* Configuration */}
          <section className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-white/10 rounded-xl p-6">
            <h2 className="font-semibold text-lg mb-4">Configuration</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Select label="Time Zone" name="timezone" icon={<Clock size={16}/>}>
                <option>Asia/Kolkata</option>
                <option>Asia/Dubai</option>
                <option>Europe/London</option>
              </Select>

              <Select label="Currency" name="currency" icon={<IndianRupee size={16}/>}>
                <option>INR</option>
                <option>USD</option>
                <option>EUR</option>
              </Select>
            </div>
          </section>

          <button type="submit" className="w-full py-3 bg-gray-800 text-white rounded-lg font-semibold hover:opacity-90 transition cursor-pointer">
            Save Hotel Profile
          </button>
        </div>

        {/* Right side */}
        <aside className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-white/10 rounded-xl p-6 space-y-4">
          <div className="flex items-center gap-3"><Building2 /><h2 className="font-semibold">Business Details</h2></div>
          <div className="flex items-center gap-3 text-gray-500 dark:text-gray-400 hover:text-blue-600 cursor-pointer"><Phone size={16}/> Customer Support: 24x7</div>
          <div className="flex items-center gap-3 text-gray-500 dark:text-gray-400 hover:text-blue-600 cursor-pointer"><Mail size={16}/> support@neuralstay.com</div>
          <div className="flex items-center gap-3 text-gray-500 dark:text-gray-400 hover:text-blue-600 cursor-pointer"><Clock size={16}/> Rajasthan , India</div>
        </aside>

      </form>
    </div>
  );
};

/* Input components */
const Input = ({ label, name, placeholder, icon }) => (
  <div>
    <label className="text-sm font-medium text-gray-500">{label}</label>
    <div className="flex items-center border border-gray-200 dark:border-white/10 rounded-lg mt-1 px-3 bg-white dark:bg-gray-800">
      {icon && <span className="mr-2 text-gray-400">{icon}</span>}
      <input name={name} placeholder={placeholder} className="w-full py-2 bg-transparent outline-none"/>
    </div>
  </div>
);

const Select = ({ label, name, icon, children }) => (
  <div>
    <label className="text-sm font-medium text-gray-500">{label}</label>
    <div className="flex items-center border border-gray-200 dark:border-white/10 rounded-lg mt-1 px-3 bg-white dark:bg-gray-800">
      {icon && <span className="mr-2 text-gray-400">{icon}</span>}
      <select name={name} className="w-full py-2 bg-transparent cursor-pointer outline-none">{children}</select>
    </div>
  </div>
);

const FileUpload = ({ label, name }) => (
  <div>
    <label className="text-sm font-medium text-gray-500">{label}</label>
    <label className="flex items-center justify-center border-2 border-dashed border-gray-300 dark:border-white/10 rounded-lg h-10 cursor-pointer mt-1 text-gray-400 hover:border-indigo-500 transition">
      <Upload size={16} className="mr-2"/> Upload Logo
      <input type="file" name={name} hidden />
    </label>
  </div>
);

export default HotelProfile;
