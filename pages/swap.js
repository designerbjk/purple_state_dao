import ConnectWallet2 from "./connectWallet2";
import { useState } from "react";

const PurpleCounter = () => {
  const [count, setCount] = useState(0);
  return <input className="{counter}"></input>;
};

export default function swap() {
  return (
    <div className="flex justify-center pt-10">
      <div className="bg-gradient-to-r from-blue-800 via-violet-900 to-purple-800 card w-96 shadow-xl">
        <div className="card-body">
          <h2 className="card-title text-slate-300">From</h2>
          <p className="">USDC</p>
          <input
            type="number"
            pattern="[+-]?\d+(?:[.,]\d+)?"
            placeholder="0.0"
            min="0"
            className="input input-bordered input-primary w-full max-w-xs text-right text-xl h-18 "
          />
          <h2 className="card-title pt-10 text-slate-300">To</h2>
          <p className="">Trust Seed Token</p>
          <input
            type="number"
            placeholder="0.0"
            min="0"
            className="input input-bordered input-primary w-full max-w-xs text-right text-xl h-18"
          />
          <p className="text-center pt-3 pb-3">1 PURPLE = 0.05 USDC</p>
          <ConnectWallet2 />
        </div>
      </div>
    </div>
  );
}
