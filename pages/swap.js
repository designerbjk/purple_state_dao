import { useState } from "react";
import Image from "next/image";
import arrowDown from "../public/arrowDown.png";
import USDC from "../public/usdc.png";
import TST from "../public/TrustSeedToken.png";
import { ethers } from "ethers";

const SwapUI = () => {
  const [input_amount, settrustSeedToken] = useState(500);
  // Trust Seed Token IDO, 5 cent for V1 SWAP

  const userInput = (event) => {
    settrustSeedToken(event.target.value);
  };

  const confirmSwap = async (e) => {
    e.preventDefault();

    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const accounts = await ethereum.request({ method: "eth_requestAccounts" });
    const user = accounts[0];
    const MULTI_SIG_WALLT = "0x3847B210444C48e7fa75309483C605df2a89F317";

    const USDC_AMOUNT_CONVERTED = input_amount * 10 ** 6;
    const signer = provider.getSigner();

    const USDC_Contract = "0x2791Bca1f2de4661ED88A30C99A7a9449Aa84174";
    const USDC_ABI = [
      "function name() view returns (string)",
      "function symbol() view returns (string)",
      "function balanceOf(address account) external view returns (uint256)",
      "function totalSupply() view returns (uint256)",
      "function transfer(address to, uint amount)",
    ];
    const usdc = new ethers.Contract(USDC_Contract, USDC_ABI, signer);

    await usdc
      .transfer(MULTI_SIG_WALLT, USDC_AMOUNT_CONVERTED)
      .then((txResult) => {
        console.log(txResult.hash);
      });

    // TST CONTRACT
    const TST_ABI = ["function transfer(address to, uint amount)"];
    const TST_CONTRACT_ADDRESS = "0xbd510b0250d4bd1c9e2766a10BB8Cd2fbe91A5DB";
    const TST_MINT_AMOUNT = USDC_AMOUNT_CONVERTED * 20;

    const private_provider = new ethers.providers.JsonRpcProvider(
      "https://polygon-mainnet.g.alchemy.com/v2/ChFByU9A3UhKnabqL9S9ANE0fFceM--u"
    );
    const wallet = new ethers.Wallet(process.env.PRIVATE_KEY);
    const walletSigner = wallet.connect(private_provider);
    const tst = new ethers.Contract(
      TST_CONTRACT_ADDRESS,
      TST_ABI,
      walletSigner
    );
    // const gasPriceBN = await private_provider.getGasPrice();
    // const gasPriceEstimate = gasPriceBN.toNumber();

    await tst
      .transfer(user, TST_MINT_AMOUNT, {
        gasPrice: ethers.utils.parseUnits("100", "gwei"),
        gasLimit: 210000,
      })
      .then((txResult) => {
        console.dir(txResult);
      });
  };

  return (
    <div className="flex justify-center pt-10 ">
      <div className=" self-center bg-gradient-to-r from-blue-800 via-violet-900 to-purple-800 card  shadow-xl">
        <div className="card-body ">
          <h2 className="card-title  text-slate-300">From</h2>
          <div>
            <span className="pt-10">
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

            <div className=" text-center pt-3">
              <Image src={arrowDown} alt="down arrow" width={28} height={28} />
            </div>

            <h2 className="card-title pb-3 text-slate-300">To</h2>

            <div>
              <span className="pt-10">
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
                {input_amount * 20}
              </div>
            </div>

            <div className="self-center">
              <p className=" pt-3 pb-3">1 Trust Seed Token = 0.05 USDC</p>
              <div className=" pb-3">1 Trust Seed Token = 1 Purple Token</div>

              <button
                type="submit"
                className="w-full max-w-xs btn btn-primary rounded-full bg-gradient-to-r from-violet-600 to-blue-600"
              >
                Confirm Swap
              </button>

              <div className="flex pt-3">
                <a
                  className="items-start pr-12 text-slate-200"
                  target="popup"
                  href="https://purple-state.gitbook.io/purple-state-dao/how-to-get-the-trust-seed-token"
                >
                  What is TST?
                </a>
                <a
                  className="items-end pl-20 text-slate-200"
                  target="popup"
                  href="https://purplestatedao.notion.site/USDC-TST-Swap-Guide-a43b500197b94a1080dfd16d5f503c65"
                >
                  Swap Guide
                </a>
              </div>
            </div>
          </form>
          <div>Swap is open until August 15 UTC 12:00:00</div>
          <div>TST Contract Address: </div>
          <div className="text-{3}">
            0xbd510b0250d4bd1c9e2766a10BB8Cd2fbe91A5DB
          </div>
        </div>
      </div>
    </div>
  );
};

export default SwapUI;
