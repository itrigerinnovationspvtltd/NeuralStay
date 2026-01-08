import React from "react";
import { BedDouble, PlusCircle, IndianRupee, ShieldCheck } from "lucide-react";

/* Services list */
const services = [
  { name:"Extra Bed", price:"₹800", tax:"Yes", desc:"Additional bed for extra guest" },
  { name:"Airport Pickup", price:"₹1500", tax:"Yes", desc:"Pickup & drop facility" },
  { name:"Laundry", price:"₹300", tax:"No", desc:"Same day laundry service" },
];

const AddOnServices = () => {
  return (
    <div className="md:pl-72 pt-20 px-6 min-h-screen bg-gray-100 dark:bg-[#0B0F1A] text-gray-800 dark:text-gray-100 space-y-6">

      <h1 className="text-3xl font-bold">Extra Bed & Add-on Services</h1>

      {/* Add form */}
      <div className="card space-y-4">
        <h2 className="font-semibold">Add New Service</h2>

        <div className="grid md:grid-cols-4 gap-4">
          <Input label="Service Name" placeholder="Extra Bed"/>
          <Input label="Description" placeholder="Additional guest bed"/>
          <Input label="Price" placeholder="800"/>
          <Select label="Tax Applicable" options={["Yes","No"]}/>
        </div>

        <button className="btn-green w-fit flex items-center gap-2">
          <PlusCircle size={18}/> Save Service
        </button>
      </div>

      {/* Service list */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
        {services.map((s,i)=>(
          <div key={i} className="card hover:shadow-lg transition">
            <div className="flex justify-between items-center">
              <div className="flex items-center gap-2 text-green-500">
                <BedDouble size={18}/> <span className="font-semibold">{s.name}</span>
              </div>
              <span className="text-lg font-bold text-indigo-500">{s.price}</span>
            </div>
            <p className="text-sm text-gray-500 dark:text-gray-400 mt-2">{s.desc}</p>
            <div className="mt-3 flex justify-between text-sm">
              <span>Tax:</span>
              <span className={`px-2 py-1 rounded-full text-xs ${s.tax==="Yes" ? "bg-green-500/20 text-green-500":"bg-yellow-500/20 text-yellow-500"}`}>
                {s.tax}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AddOnServices;

/* Reusable ui */

const Input = ({ label, placeholder }) => (
  <div>
    <label className="text-sm text-gray-500 dark:text-gray-400">{label}</label>
    <input placeholder={placeholder} className="input"/>
  </div>
);

const Select = ({ label, options }) => (
  <div>
    <label className="text-sm text-gray-500 dark:text-gray-400">{label}</label>
    <select className="input">
      {options.map(o=><option key={o}>{o}</option>)}
    </select>
  </div>
);
