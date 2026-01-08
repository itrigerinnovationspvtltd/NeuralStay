import React from "react";

const summaryRows = [
  { label:"Room Total (3 nights)", value:"3000.00" },
  { label:"Extra Person", value:"0.00" },
  { label:"Extras", value:"500.00" },
  { label:"Subtotal", value:"1500.00" },
  { label:"Discount", value:"-200.00", highlight:true }
];

const Booking = () => {
  return (
    <div className="md:pl-72 pt-20 px-6 pb-6 min-h-screen bg-gray-100 dark:bg-[#0B0F1A] text-gray-800 dark:text-gray-100">

      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <div>
          <h1 className="text-3xl font-bold">Add New Booking</h1>
        </div>
        <div className="flex gap-3">
          <button className="btn-outline">Reset</button>
          <button className="btn-outline">Close</button>
        </div>
      </div>

      <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">

        {/* Left form */}
        <div className="xl:col-span-2 card space-y-6">

          <div className="grid md:grid-cols-3 gap-4">
            <Input label="Check in" type="date"/>
            <Input label="Duration" placeholder="2 Nights"/>
            <Input label="Check out" type="date"/>
          </div>

          <Section title="Room Details">
            <div className="grid md:grid-cols-3 gap-4">
              <Select label="Room Type" options={["Room"]}/>
              <Select label="Room Plan" options={["Extra Bed","Extra Pillows"]}/>
              <Select label="Room #" options={["Room 101","Room 102","Room 103"]}/>
            </div>
            <div className="mt-4">
              <Select label="Guest" options={[ "1 Adult","2 Adult(s)"]}/>
            </div>
          </Section>

          <Section title="Guest Details">
            <div className="grid md:grid-cols-3 gap-4">
              <Input label="Full Name" placeholder="Name"/>
              <Input label="Email" placeholder="Email"/>
              <Input label="Phone Number" placeholder="Mobile No."/>
            </div>

            <div className="grid md:grid-cols-2 gap-4 mt-4">
              <Input label="Address" placeholder="Address"/>
              <Select label="Country" options={["India","USA"]}/>
            </div>
          </Section>

          <Section title="Guest Comment / Request">
            <textarea className="input h-20" placeholder="Requests"/>
          </Section>

          <Section title="Payment Method">
            <div className="grid md:grid-cols-3 gap-4">
              <Select label="Payment Type" options={["Debit Card","Cash","UPI"]}/>
              <Select label="Bank" options={["Bank"]}/>
              <Input label="Card Number" placeholder="1234-5678-9101"/>
            </div>
          </Section>
        </div>

        {/* Summary */}
        <div className="card h-fit space-y-4">
          <h2 className="font-semibold">Booking Summary</h2>

          {summaryRows.map((r,i)=>(
            <SummaryRow key={i} {...r}/>
          ))}

          <hr className="dark:border-white/10"/>

          <div className="flex justify-between font-bold text-lg text-blue-700">
            <span>Total</span>
            <span>5,000.00</span>
          </div>
          <button className=" w-full py-3 text-white rounded-2xl bg-blue-700">Book Room</button>
        </div>
      </div>
    </div>
  );
};

/* Reusable ui */

const Section = ({ title, children }) => (
  <div>
    <h3 className="font-semibold mb-3">{title}</h3>
    {children}
  </div>
);

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
      {options.map((opt) => (
        <option key={opt}>{opt}</option>
      ))}
    </select>
  </div>
);

const SummaryRow = ({ label, value, highlight, badge }) => (
  <div className="flex justify-between text-sm">
    <div>
      <span>{label}</span>
      {badge && (
        <span className="ml-2 text-xs px-2 py-0.5 rounded bg-green-100 text-green-600">
          {badge}
        </span>
      )}
    </div>
    <span className={highlight ? "text-green-500" : ""}>{value}</span>
  </div>
);


export default Booking;
