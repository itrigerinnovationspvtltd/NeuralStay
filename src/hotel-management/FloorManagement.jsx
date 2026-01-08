import React, { useState } from "react";
import { Layers, Pencil, Trash2, Plus } from "lucide-react";

const FloorManagement = () => {
  const [floors, setFloors] = useState([
    { id: 1, name: "Ground Floor", desc: "Reception, Lobby" },
    { id: 2, name: "First Floor", desc: "Standard Rooms" },
    { id: 3, name: "Second Floor", desc: "Standard Rooms" },
    { id: 4, name: "Third Floor", desc: "Standard Rooms" },
  ]);

  const [form, setForm] = useState({ id: null, name: "", desc: "" });

  const saveFloor = () => {
    if (!form.name) return;
    if (form.id) {
      setFloors(floors.map(f => f.id === form.id ? form : f));
    } else {
      setFloors([...floors, { ...form, id: Date.now() }]);
    }
    setForm({ id: null, name: "", desc: "" });
  };

  return (
    <div className="md:pl-70 min-h-screen py-20 px-6 bg-[#F3F4F6] dark:bg-[#0F172A] text-gray-800 dark:text-gray-100">
      <h1 className="text-3xl font-bold mb-6">Floor Management</h1>

      <div className="grid xl:grid-cols-3 gap-6">

        {/* Floor list */}
        <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow">
          <h2 className="font-semibold mb-4">Floors</h2>
          <div className="space-y-3">
            {floors.map(f => (
              <div key={f.id} className="p-4 border rounded-xl flex justify-between items-center hover:shadow-md transition">
                <div>
                  <p className="font-semibold">{f.name}</p>
                  <p className="text-xs text-gray-500">{f.desc}</p>
                </div>
                <div className="flex gap-2">
                  <button onClick={() => setForm(f)} className="p-2 rounded-lg bg-indigo-100 text-indigo-600"><Pencil size={16}/></button>
                  <button onClick={() => setFloors(floors.filter(x => x.id !== f.id))} className="p-2 rounded-lg bg-red-100 text-red-600"><Trash2 size={16}/></button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Floor details */}
        <div className="xl:col-span-2 bg-white dark:bg-gray-800 rounded-2xl p-6 shadow">
          <h2 className="font-semibold mb-4 flex items-center gap-2"><Layers size={18}/> Floor Details</h2>

          <div className="grid md:grid-cols-2 gap-4">
            <Field label="Floor Name / Number" value={form.name} onChange={e=>setForm({...form,name:e.target.value})}/>
            <Field label="Description" value={form.desc} onChange={e=>setForm({...form,desc:e.target.value})}/>
          </div>

          <button onClick={saveFloor} className="mt-5 px-6 py-2 bg-blue-800 rounded-xl text-white">
            Add Floor
          </button>
        </div>

      </div>
    </div>
  );
};

const Field = ({ label, ...props }) => (
  <div>
    <label className="text-sm text-gray-500">{label}</label>
    <input {...props} className="w-full mt-1 px-4 py-2 rounded-xl border bg-gray-50 dark:bg-gray-700 outline-none"/>
  </div>
);

export default FloorManagement;
