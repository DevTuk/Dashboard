"use client";
import { useState } from "react";

export default function CounterPage() {
  const [counter, setCounter] = useState(10);

  const increment = () => {
    setCounter(counter + 1);
  };

  const decrement = () => {
    setCounter(counter - 1);
  };

  return (
    <div className="flex flex-col items-center justify-center w-full h-full">
      <span className="text-9xl">{counter}</span>
      <div className="flex">
        <button
          className="flex item just rounded-xl bg-slate-600 text-white hover:bg-slate-400 mr-2 p-2 transition-all "
          onClick={increment}
        >
          Increment
        </button>
        <button
          className="flex item just rounded-xl bg-slate-600 text-white hover:bg-slate-400 mr-2 p-2 transition-all "
          onClick={decrement}
        >
          Decrement
        </button>
      </div>
    </div>
  );
}
