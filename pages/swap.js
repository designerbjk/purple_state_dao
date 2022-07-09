import { useState } from "react";
import ConnectWallet2 from "./connectWallet2";
import Image from "next/image";
import arrowDown from "../public/arrowDown.png";
import USDC from "../public/usdc.png";
import TST from "../public/TrustSeedToken.png";

const CalcPurple = () => {
  const [trustSeedToken, update] = useState();

  const listenInput = (event) => {
    update(event.target.value);
  };

  // Trust Seed Token IDO, 5 cent for V1 SWAP

  return (
    <div className="flex justify-center pt-10">
      <div className="bg-gradient-to-r from-blue-800 via-violet-900 to-purple-800 card w-96 shadow-xl">
        <div className="card-body items-start">
          <h2 className="card-title pt-3 text-slate-300">From</h2>
          <div>
            <span className="mt-10">
              <Image src={USDC} alt="USDC Icon" width={24} height={24} />
            </span>
            <span className="pl-2 align-top">USDC</span>
          </div>

          <input
            className="input input-bordered input-primary w-full max-w-xs text-right text-xl h-18 pd-10"
            type="number"
            id="message"
            name="message"
            onChange={listenInput}
            placeholder="0.0"
          />

          <div className="self-center pt-5">
            <Image src={arrowDown} alt="down arrow" width={28} height={28} />
          </div>

          <h2 className="card-title  text-slate-300">To</h2>

          <div>
            <span className="mt-10">
              <Image
                src={TST}
                alt="Trust Seed Token Icon"
                width={24}
                height={24}
              />
            </span>
            <span className="pl-2 align-top">Trust Seed Token</span>
          </div>

          <input
            className="input input-bordered input-primary w-full max-w-xs text-right text-xl h-18"
            type="number"
            id="message"
            value={trustSeedToken * 20}
            placeholder="0.0"
            readOnly
          />

          <div className="self-center">
            <div className="text-center pt-3 pb-3">1 PURPLE = 0.05 USDC</div>
            <ConnectWallet2 />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CalcPurple;
