import { useState } from "react";
import ConnectWallet2 from "./connectWallet2";

const CalcPurple = () => {
  const [trustSeedToken, update] = useState();

  const listenInput = (event) => {
    update(event.target.value);
  };

  // Trust Seed Token IDO, 5 cent for V1 SWAP

  return (
    <div className="flex justify-center pt-10">
      <div className="bg-gradient-to-r from-blue-800 via-violet-900 to-purple-800 card w-96 shadow-xl">
        <div className="card-body">
          <h2 className="card-title text-slate-300">From</h2>
          <p className="">USDC</p>
          <input
            className="input input-bordered input-primary w-full max-w-xs text-right text-xl h-18"
            type="number"
            id="message"
            name="message"
            onChange={listenInput}
            placeholder="0.0"
          />

          <h2 className="card-title pt-10 text-slate-300">To</h2>
          <p className="">Trust Seed Token</p>

          <input
            className="input input-bordered input-primary w-full max-w-xs text-right text-xl h-18"
            type="number"
            id="message"
            value={trustSeedToken * 20}
            placeholder="0.0"
            readOnly
          />

          <p className="text-center pt-3 pb-3">1 PURPLE = 0.05 USDC</p>
          <ConnectWallet2 />
        </div>
      </div>
    </div>
  );
};

export default CalcPurple;
