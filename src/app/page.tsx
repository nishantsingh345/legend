"use client";

import type { RootState } from "./Redux/store";
import { useSelector, useDispatch } from "react-redux";
import { decrement, increment, incrementByAmount } from "./Redux/Feauters/counter/counterSlice";

export default function Home() {
  const count = useSelector((state: RootState) => state.counter.value);
  const dispatch = useDispatch();
  return (
    <div className="flex flex-col gap-3 items-center justify-center">
      <button
        className="bg-white text-gray-900 px-4 py-3 rounded-2xl hover:bg-slate-400 "
        onClick={() => dispatch(increment())}
      >
        Increment
      </button>
      <span className="bg-blue-900 rounded-full p-5">{count}</span>
      <button
        className="bg-white text-gray-900 px-4 py-3 rounded-2xl hover:bg-slate-400 "
        onClick={() => dispatch(decrement())}
      >
        Decrement
      </button>
      <button
        className="bg-white text-gray-900 px-4 py-3 rounded-2xl hover:bg-slate-400 "
        onClick={() => dispatch(incrementByAmount(5))}
      >
        Increment by 
      </button>
    </div>
  );
}
