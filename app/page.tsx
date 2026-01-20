"use client";

import { useState } from "react";
import { Bebas_Neue, Inter } from "next/font/google";

const bebasNeue = Bebas_Neue({
  weight: "400",
  subsets: ["latin"],
});

const inter = Inter({
  weight: ["400", "600"],
  subsets: ["latin"],
});

export default function Home() {
  const [count, setCount] = useState(0);

  const increment = () => setCount(count + 1);
  const decrement = () => setCount(count - 1);
  const reset = () => setCount(0);

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg w-72">
        <h1
          className={`${bebasNeue.className} text-5xl text-center mb-8 text-gray-800`}
        >
          Counter
        </h1>

        <div
          className={`${bebasNeue.className} text-6xl font-bold text-center mb-8 text-blue-600`}
        >
          {count}
        </div>

        <div className="flex gap-3 mb-4">
          <button
            onClick={decrement}
            className={`${inter.className} flex-1 bg-red-500 hover:bg-red-600 text-white py-2 px-4 rounded cursor-pointer`}
          >
            −
          </button>

          <button
            onClick={increment}
            className={`${inter.className} flex-1 bg-green-500 hover:bg-green-600 text-white py-2 px-4 rounded cursor-pointer`}
          >
            +
          </button>
        </div>

        <button
          onClick={() => reset()}
          className={`${inter.className} w-full bg-gray-500 hover:bg-gray-600 text-white py-2 px-4 rounded cursor-pointer`}
        >
          Reset
        </button>
      </div>
    </div>
  );
}
