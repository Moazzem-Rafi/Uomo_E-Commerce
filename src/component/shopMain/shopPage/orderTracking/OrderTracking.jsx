import React, { useState } from "react";

const OrderTracking = () => {
  const [orderId, setOrderId] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="flex flex-col items-center">
      
      <p className="text-center text-[14px] text-second leading-6 max-w-125 mb-5 ">
        To track your order please enter your Order ID in the box below and press the "Track" button. This was given to you on your receipt and in the confirmation email you should have received.
      </p>

      <div className="w-full max-w-125 flex flex-col gap-4">
        {/* Order ID */}
        <input
          type="text"
          value={orderId}
          onChange={(e) => setOrderId(e.target.value)}
          placeholder="Order ID"
          className="w-full border border-gray-300 px-4 py-3 text-[13px] text-gray-700 placeholder:text-gray-400 outline-none focus:border-gray-500 transition-colors"
        />

        {/* Billing Email */}
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Billing email"
          className="w-full border border-gray-300 px-4 py-3 text-[13px] text-gray-700 placeholder:text-gray-400 outline-none focus:border-gray-500 transition-colors"
        />

        {/* Track Button */}
        <button
          type="submit"
          onClick={handleSubmit}
          className="w-full bg-head text-white py-3.5 text-[12px] font-medium uppercase tracking-widest hover:bg-[#DB4444] transition-all mt-1"
        >
          Track
        </button>
      </div>
    </div>
  );
};

export default OrderTracking;