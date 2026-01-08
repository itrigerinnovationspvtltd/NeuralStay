import React, { useState } from "react";
import { BedDouble, Users, IndianRupee, Plus, Upload, CheckCircle, XCircle, Trash2
} from "lucide-react";

const dummyRooms = [
  { id:1, name:"Deluxe Suite", price:3000, floor:"2nd floor", guests:3, beds:"1 King Bed", status:"Available", img:"https://images.unsplash.com/photo-1611892440504-42a792e24d32?q=80&w=1170&auto=format&fit=crop" },
  { id:2, name:"Superior Room", price:5000, floor:"3rd floor", guests:2, beds:"1 Queen Bed", status:"Booked", img:"https://images.unsplash.com/photo-1618773928121-c32242e63f39?q=80&w=1170&auto=format&fit=crop" },
  { id:3, name:"Premium Deluxe", price:4000, floor:"4th floor", guests:3, beds:"1 King Bed", status:"Available", img:"https://images.unsplash.com/photo-1568495248636-6432b97bd949?q=80&w=1074&auto=format&fit=crop" }
];

export default function RoomManagement() {
  const [selected,setSelected]=useState(dummyRooms[0]);
  const [open,setOpen]=useState(false);
  const [images,setImages]=useState([]);

  return (
    <div className="md:pl-70 p-6 pt-20 bg-gray-50 dark:bg-[#0F172A] text-gray-800 dark:text-gray-100 min-h-screen">

      <div className="flex justify-between mb-10">
        <h1 className="text-3xl font-bold dark:text-white">Room Management</h1>
        <button onClick={()=>setOpen(true)} className="flex items-center gap-2 bg-blue-800 hover:bg-blue-600 text-white px-4 py-2 rounded-lg">
          <Plus size={18}/> Add New Room
        </button>
      </div>

      <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">

{/* Room list */}
<div className="xl:col-span-2 space-y-4">
  {dummyRooms.map(r=>(
    <div key={r.id} onClick={()=>setSelected(r)}
      className="flex bg-white dark:bg-gray-800 border border-gray-200 dark:border-white/10 rounded-xl  hover:shadow cursor-pointer overflow-hidden">

      <img src={r.img} className="w-40 object-cover"/>

      <div className="p-6 flex-1">
        <div className="flex justify-between">
          <h3 className="font-semibold text-lg">{r.name}</h3>
          <span className={`px-3 py-1 text-xs rounded-full ${
            r.status==="Available" ? "bg-green-100 text-green-600":"bg-red-100 text-red-500"}`}>
            {r.status}
          </span>
        </div>

        <div className="flex gap-6 text-sm text-gray-500 dark:text-white mt-2">
          <span className="flex gap-1 items-center"><BedDouble size={14}/> {r.beds}</span>
          <span className="flex gap-1 items-center"><Users size={14}/> {r.guests} Guests</span>
          <span>{r.floor}</span>
        </div>

        <div className="text-right font-bold text-lg mt-2 flex items-center justify-end gap-1">
          <IndianRupee size={16}/> {r.price}/night
        </div>
      </div>
    </div>
  ))}
</div>

{/* Details */}
<div className="bg-white dark:bg-gray-800 border-gray-200 dark:border-white/10 rounded-xl p-6 border">
  <img src={selected.img} className="rounded-xl mb-4"/>
  <h2 className="text-xl font-bold mb-2">{selected.name}</h2>
  <p className="text-sm text-gray-500 dark:text-white mb-3">{selected.floor} • {selected.beds} • {selected.guests} Guests</p>
  <p className="font-bold flex items-center gap-1"><IndianRupee size={16}/> {selected.price} / night</p>
</div>
</div>

{/* Add room modal */}
{open && (
<div className="fixed inset-0 bg-black/40 flex justify-center items-start pt-8 overflow-auto z-50">
<div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-white/10 w-full max-w-4xl rounded-xl p-3 space-y-6">

{/* Header */}
<div className="flex justify-between items-center border-b pb-2">
  <h2 className="text-2xl font-bold flex items-center gap-2 text-blue-800 dark:text-white">
    <BedDouble className="text-blue-800 dark:text-white"/> Add New Room
  </h2>
  <button onClick={()=>setOpen(false)}>
    <XCircle className="text-gray-400 hover:text-red-500"/>
  </button>
</div>

<div className="grid md:grid-cols-2 gap-6">

{/* Basic */}
<div className="space-y-4">
  <div>
    <label className="text-sm pr-3 text-gray-900 dark:text-white ">Room Name</label>
    <input className=" mt-1 ml-12 border p-2 rounded-xl dark:text-black dark:bg-white" placeholder="Deluxe Suite"/>
  </div>

  <div>
    <label className="text-sm text-gray-900 dark:text-white">Floor</label>
    <input className=" mt-1 ml-27.5 border p-2 rounded-xl dark:text-black dark:bg-white" placeholder="2nd Floor"/>
  </div>

  <div>
    <label className="text-sm text-gray-900 dark:text-white">Max Occupancy</label>
    <input className=" mt-1 ml-10 border p-2 rounded-xl dark:text-black dark:bg-white" placeholder="3 Guests"/>
  </div>

  <div>
    <label className="text-sm text-gray-900 dark:text-white">Base Price</label>
      <input className=" mt-1 ml-20 border p-2 rounded-xl dark:text-black dark:bg-white" placeholder="Price"/>
    
  </div>

  <select className=" mt-2 border p-1 dark:bg-white dark:text-black">
    <option>Status</option>
    <option>Available</option>
    <option>Booked</option>
  </select>
</div>

{/* Amenities*/}
<div>
  <h3 className="font-semibold mb-3 dark:text-white">Amenities</h3>
  <div className="grid grid-cols-2 gap-3">
    {["Wi-Fi","AC","TV","Balcony"].map(a=>(
      <label key={a} className="flex items-center gap-2 border rounded-lg px-3 py-2 cursor-pointer hover:border-blue-600 dark:bg-gray-700">
        <input type="checkbox" className="text-blue-600 dark:bg-gray-700"/>
        {a}
      </label>
    ))}
  </div>
</div>

</div>

{/* upload image */}
<div className="border-2 border-dashed rounded-xl p-3 text-center space-y-3 hover:border-blue-600 dark:hover:border-white">
  <Upload className="mx-auto text-blue-800 dark:text-white"/>
  <p className="text-sm text-blue-800 dark:text-white">Upload Room Images</p>

  <input
    type="file"
    multiple
    id="roomImages"
    className="hidden"
    onChange={e=>setImages([...e.target.files])}
  />
  <label htmlFor="roomImages" className="cursor-pointer px-4 py-2 bg-lime-100 text-blue-700 rounded-lg inline-block">
    Choose Images
  </label>

  <div className="flex gap-2 flex-wrap justify-center mt-4">
    {images && [...images].map((img,i)=>(
      <div key={i} className="relative">
        <img src={URL.createObjectURL(img)} className="w-20 h-20 object-cover rounded-lg"/>
        <Trash2 size={16} className="absolute -top-2 -right-2 bg-white rounded-full p-1 text-red-500 cursor-pointer"/>
      </div>
    ))}
  </div>
</div>


<div className="flex justify-end gap-4 pt-4 border-t">
  <button onClick={()=>setOpen(false)} className="px-4 py-2 rounded hover:cursor-pointer bg-gray-200 hover:bg-gray-400 dark:text-white dark:bg-gray-700 ">
    Cancel
  </button>
  <button onClick={()=>setOpen(false)} className="px-5 py-2 rounded bg-blue-800 text-white hover:bg-blue-600 hover:cursor-pointer flex items-center gap-2">
    <CheckCircle size={18}/> Save Room
  </button>
</div>

</div>
</div>
)}
</div>
);
}
