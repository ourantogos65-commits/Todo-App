"use client";
import { useState } from "react";

export default function Home() {
  const [number, setNumber] = useState(0);

  const handleIncrement = () => setNumber(number + 1);
  const handleDecrement = () => setNumber(number - 1);

  return (
    <div className="w-full h-screen flex items-center justify-center bg-gray-900">
      <div className="w-[420px] bg-gray-800 rounded-3xl p-8 flex flex-col items-center shadow-[0_0_30px_rgba(0,255,255,0.3)]">
        <h1 className="text-3xl font-bold text-cyan-400 drop-shadow-[0_0_10px_rgba(0,255,255,0.7)]">
          Add a Task
        </h1>

        <div className="mt-10 w-full text-center py-8 rounded-2xl bg-gray-900 )]">
          <p className="text-gray-400 text-sm">Current Number</p>
          <p className="text-7xl font-extrabold text-cyan-300 drop-shadow-[0_0_20px_rgba(0,255,255,0.8)]">
            {number}
          </p>
        </div>

        <div className="flex gap-8 mt-12">
          <button
            onClick={handleDecrement}
            className="px-8 py-4 rounded-2xl bg-pink-500 text-white font-semibold text-lg shadow-[0_0_15px_rgba(255,0,128,0.8)] hover:scale-110 transition transform"
          >
            - Decrease
          </button>
          <button
            onClick={handleIncrement}
            className="px-8 py-4 rounded-2xl bg-green-500 text-white font-semibold text-lg shadow-[0_0_15px_rgba(0,255,128,0.8)] hover:scale-110 transition transform"
          >
            + Increase
          </button>
        </div>
      </div>
    </div>
  );
}
