import React from "react";
import { Tag, TrendingUp, CalendarDays, Percent } from "lucide-react";

/* Stats */
const specialStats = [
  { title: "Active Offers", value: 6, icon: <Tag />, color: "bg-indigo-500" },
  {
    title: "Weekend Boost",
    value: "+15%",
    icon: <TrendingUp />,
    color: "bg-green-500",
  },
  {
    title: "Seasonal Deals",
    value: 3,
    icon: <CalendarDays />,
    color: "bg-orange-500",
  },
  {
    title: "Discount Avg",
    value: "12%",
    icon: <Percent />,
    color: "bg-pink-500",
  },
];

/* Offers */
const offers = [
  {
    room: "Deluxe Room",
    type: "Weekend",
    discount: "15%",
    date: "Every Fri–Sun",
    status: "Active",
  },
  {
    room: "Standard",
    type: "Seasonal",
    discount: "20%",
    date: "Dec 20 – Jan 10",
    status: "Active",
  },
  {
    room: "Standard",
    type: "Festival",
    discount: "10%",
    date: "Diwali Week",
    status: "Paused",
  },
];

const SpecialPrices = () => {
  return (
    <div className="md:pl-72 pt-20 px-6 min-h-screen bg-gray-100 dark:bg-[#0B0F1A] text-gray-800 dark:text-gray-100 space-y-6">
      <h1 className="text-3xl font-bold">Special Pricing</h1>

      {/* Stat cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
        {specialStats.map((s, i) => (
          <div key={i} className="card flex justify-between items-center">
            <div>
              <p className="text-sm text-gray-400">{s.title}</p>
              <h2 className="text-3xl font-bold">{s.value}</h2>
            </div>
            <div className={`${s.color} p-3 rounded-xl text-white`}>
              {s.icon}
            </div>
          </div>
        ))}
      </div>

      {/* Offers table */}
      <div className="card">
        <h2 className="font-semibold mb-4">Current Special Offers</h2>
        <table className="w-full text-sm">
          <thead className="border-b dark:border-white/10">
            <tr className="text-left">
              <th className="py-2">Room</th>
              <th>Offer Type</th>
              <th>Discount</th>
              <th>Period</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {offers.map((o, i) => (
              <tr
                key={i}
                className="border-b dark:border-white/5 hover:bg-gray-50 dark:hover:bg-white/5"
              >
                <td className="py-3">{o.room}</td>
                <td>{o.type}</td>
                <td className="text-green-500 font-semibold">{o.discount}</td>
                <td>{o.date}</td>
                <td>
                  <span
                    className={`px-3 py-1 rounded-full text-xs ${
                      o.status === "Active"
                        ? "bg-green-500/20 text-green-500"
                        : "bg-yellow-500/20 text-yellow-500"
                    }`}
                  >
                    {o.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Pricing rules */}
      <div className="card space-y-4">
        <h2 className="font-semibold">Pricing Rules</h2>

        <div className="grid md:grid-cols-3 gap-4">
          <Input label="Season Name" placeholder="Winter Special" />
          <Input label="Start Date" type="date" />
          <Input label="End Date" type="date" />
          <Select label="Room Type" options={["Deluxe", "Suite", "Standard"]} />
          <Input label="Price Adjustment" placeholder="+20% or -10%" />
          <Select
            label="Special Day Indicator"
            options={["Weekend", "Festival", "Holiday"]}
          />
        </div>

        <button className="btn-green w-fit">Save Pricing Rule</button>
      </div>
    </div>
  );
};

export default SpecialPrices;

/* reusable ui  */

const Input = ({ label, type = "text", placeholder }) => (
  <div>
    <label className="text-sm text-gray-500 dark:text-gray-400">{label}</label>
    <input type={type} placeholder={placeholder} className="input" />
  </div>
);

const Select = ({ label, options }) => (
  <div>
    <label className="text-sm text-gray-500 dark:text-gray-400">{label}</label>
    <select className="input">
      {options.map((o) => (
        <option key={o}>{o}</option>
      ))}
    </select>
  </div>
);
