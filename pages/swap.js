import { useState, useEffect } from "react";
import Image from "next/image";
import arrowDown from "../public/arrowDown.png";
import USDC from "../public/usdc.png";
import TST from "../public/TrustSeedToken.png";
import { ethers } from "ethers";

const SwapUI = () => {
  const [trustSeedToken, settrustSeedToken] = useState(500);
  // Trust Seed Token IDO, 5 cent for V1 SWAP
  const [txHash, setTXHash] = useState(null);

  const userInput = (event) => {
    settrustSeedToken(event.target.value);
  };

  const confirmSwap = async (e) => {
    e.preventDefault();
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const accounts = await ethereum.request({ method: "eth_requestAccounts" });
    const account = accounts[0];
    const multiSig = "0x4e12bA2C402b12CFF7001dae353164d6c4B54730";
    const USDC_AMOUNT = trustSeedToken * 10 ** 6;
    const signer = provider.getSigner();
    const usdcAddress = "0x2791Bca1f2de4661ED88A30C99A7a9449Aa84174";
    const usdcABI = [
      "function name() view returns (string)",
      "function symbol() view returns (string)",
      "function decimals() view returns (uint8)",
      "function balanceOf(address account) external view returns (uint256)",
      "function totalSupply() view returns (uint256)",
      "function transfer(address to, uint amount)",
    ];
    const usdc = new ethers.Contract(usdcAddress, usdcABI, signer);

    await usdc.transfer(multiSig, USDC_AMOUNT);
    setTXHash(tx.hash);
  };
  return (
    <div className="flex justify-center pt-10">
      <div className="bg-gradient-to-r from-blue-800 via-violet-900 to-purple-800 card w-96 shadow-xl">
        <div className="card-body items-start">
          <h2 className="card-title  text-slate-300">From</h2>
          <div>
            <span className="mt-10">
              <Image src={USDC} alt="USDC Icon" width={24} height={24} />
            </span>
            <span className="pl-2 align-top">USDC</span>
          </div>
          <form onSubmit={confirmSwap}>
            <input
              className="input input-bordered input-primary w-full max-w-xs text-right text-xl h-18 pd-10"
              type="number"
              id="message"
              name="message"
              onChange={userInput}
              minLength="1"
              placeholder="0.0"
              pattern="^[0-9]*[.,]?[0-9]*$"
              defaultValue={500}
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

            <div>
              <div
                className="bg-slate-800 border-green-700 
            rounded border w-80 h-11 text-right text-xl pt-2 pr-3"
              >
                {trustSeedToken * 20}
              </div>
            </div>

            <div className="self-center">
              <p className="text-center pt-3 pb-3">
                1 Trust Seed Token = 0.05 USDC
              </p>
              <div className="text-center pb-3">
                1 Trust Seed Token = 1 Purple Token
              </div>
              <p className="text-center pb-2">What is Trust Seed Token?</p>
              <button
                type="submit"
                className="w-full max-w-xs btn btn-primary rounded-full bg-gradient-to-r from-violet-600 to-blue-600"
              >
                Confirm Swap
              </button>
              <p className="text-center pt-4">
                A fee is associated with this request.
              </p>
              <p>hello {txHash} </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SwapUI;
