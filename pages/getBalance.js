import React from "react";
import { ethers, Wallet } from "ethers";

export default function GetBalance() {
  async function getBalance() {
    const balance = await signer.getBalance();
  }

  const usdcAddress = "0x2791Bca1f2de4661ED88A30C99A7a9449Aa84174";
  const usdcABI = [
    "function name() view returns (string)",
    "function symbol() view returns (string)",
    "function decimals() view returns (uint8)",
    "function balanceOf(address account) external view returns (uint256)",
    "function totalSupply() view returns (uint256)",
    "function transfer(address to, uint amount)",
  ];

  async function readBalance() {
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    let usdcContract = new ethers.Contract(usdcAddress, usdcABI, provider);
    const name = await usdcContract.name();
    const balance = await usdcContract.balanceOf(
      "0xD96E61b6C6E1c0805565Cc580e920a123529e05E"
    );
    const userAddress = await window.ethereum.request({
      method: "eth_requestAccounts",
    }); //get address of signed account

    console.log(`get name ${name}`);
    console.log(`get balance ${balance}`);
    console.log(`get balance ${userAddress}`);
  }

  async function sendUSDC(usdcAmount, toAddress) {
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    let signer = provider.getSigner();
    ethers.utils.getAddress(toAddress);
    let usdcContract = new ethers.Contract(usdcAddress, usdcABI, provider);
    const tx = {
      to: toAddress,
      value: ethers.utils.formatUnits(usdcAmount, 6),
    };
  }
  return (
    <div>
      <button className="btn" onClick={readBalance}>
        readBalance
      </button>
      <button className="btn" onClick={readBalance}>
        readBalance
      </button>
    </div>
  );
}
