import { useState, useEffect } from "react";
import { ethers } from "ethers";

const MUMBAI_RPC =
  "https://polygon-mumbai.g.alchemy.com/v2/ri5-bp57V1pbos1phihPgwZ5sdxb8Ezp";
const provider = new ethers.providers.JsonRpcProvider(MUMBAI_RPC); //**PLEASE Change it to mainnet RPC later */
const USDC_ABI = [
  "function name() view returns (string)",
  "function symbol() view returns (string)",
  "function totalSupply() view returns (uint256)",
  "function balanceOf(address) view returns (uint)",
];

const address = "0xFd0E74abB13DEe7298feCe4050DFB69dC3538449"; //PASTE USDC contract ADDRESS/ need to Swithc to mainnet contract later
const USDC_contract = new ethers.USDC_contract(address, USDC_ABI, provider);

export default async function send_USDC() {
  const name = await USDC_contract.name();
  const symbol = await USDC_contract.symbol();
  const totalSupply = await USDC_contract.totalSupply();
  const format = await ethers.utils.formatUnits(totalSupply, 6); //check USDC Decimal = 6

  console.log(address);
  console.log(name);
  console.log(symbol);
  console.log(totalSupply);
  console.log(format);
}
