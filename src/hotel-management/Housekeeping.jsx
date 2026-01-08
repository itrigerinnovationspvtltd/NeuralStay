import React, { useState } from "react";
import { Search, ChevronDown } from "lucide-react";

const Housekeeping = () => {

  const [rooms, setRooms] = useState([
    { id:1, number:"101", status:"Ready", staff:"Ramesh", date:"2026-01-06" },
    { id:2, number:"102", status:"Cleaning", staff:"Pooja", date:"2026-01-06" },
    { id:3, number:"103", status:"Needs Cleaning", staff:"Abhishek", date:"2026-01-05" },
    { id:4, number:"104", status:"Ready", staff:"Neha", date:"2026-01-05" },
    { id:5, number:"105", status:"Cleaning", staff:"Rahul", date:"2026-01-05" },
  ]);

  const statusColor = (s) => {
    if(s==="Ready") return "bg-green-100 text-green-600";
    if(s==="Cleaning") return "bg-blue-100 text-blue-600";
    return "bg-red-100 text-red-500";
  };

  return (
    <div className="md:pl-72 p-6 pt-20 bg-gray-50 dark:bg-[#0F172A] text-gray-800 dark:text-gray-100 min-h-screen">

      <h1 className="text-3xl font-bold mb-5">Housekeeping</h1>

      {/* Filters */}
      <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-white/10 rounded-xl p-4 flex flex-wrap gap-3 mb-5">
        <div className="flex items-center gap-2 bg-gray-100 dark:bg-gray-700 px-3 py-2 rounded-lg">
          <Search size={16}/>
          <input placeholder="Search room..." className="bg-transparent outline-none"/>
        </div>
        <button className="bg-blue-800 text-white px-4 py-2 rounded-lg flex items-center gap-1 text-sm">
          All Status <ChevronDown size={14}/>
        </button>
      </div>

      {/* Table */}
      <div className="bg-white dark:bg-gray-600 border border-gray-200 dark:border-white/10 rounded-xl overflow-hidden">
        <table className="w-full table-fixed text-sm">
          <thead className="bg-gray-50 dark:bg-gray-700 text-gray-500 dark:text-white text-base">
            <tr>
              <th className="w-1/5 px-4 py-3 text-left font-bold">Room</th>
              <th className="w-1/5 px-4 py-3 text-left font-bold">Status</th>
              <th className="w-1/5 px-4 py-3 text-left font-bold">Assigned Staff</th>
              <th className="w-1/5 px-4 py-3 text-left font-bold">Last Cleaned</th>
              <th className="w-1/5 px-4 py-3 text-left font-bold">Update</th>
            </tr>
          </thead>

          <tbody>
            {rooms.map(r=>(
              <tr key={r.id} className="border-b hover:bg-gray-50 dark:hover:bg-gray-400 transition">
                <td className="px-4 py-3 font-semibold">Room {r.number}</td>

                <td className="px-4 py-3">
                  <span className={`px-3 py-1 rounded-full text-xs ${statusColor(r.status)}`}>
                    {r.status}
                  </span>
                </td>

                <td className="px-4 py-3">
                  <input
                    value={r.staff}
                    onChange={e=>setRooms(prev=>prev.map(x=>x.id===r.id?{...x,staff:e.target.value}:x))}
                    className="w-full font-bold "
                  />
                </td>

                <td className="px-4 py-3">
                  <input type="date"
                    value={r.date}
                    onChange={e=>setRooms(prev=>prev.map(x=>x.id===r.id?{...x,date:e.target.value}:x))}
                    className="w-full px-2 py-1 border rounded-md"
                  />
                </td>

                <td className="px-4 py-3">
                  <select
                    value={r.status}
                    onChange={e=>setRooms(prev=>prev.map(x=>x.id===r.id?{...x,status:e.target.value}:x))}
                    className="w-full px-2 py-1 border rounded-md dark:bg-gray-400"
                  >
                    <option>Ready</option>
                    <option>Cleaning</option>
                    <option>Needs Cleaning</option>
                  </select>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

    </div>
  );
};

export default Housekeeping;
