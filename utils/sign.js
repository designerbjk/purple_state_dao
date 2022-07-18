// import { ethers } from "ethers";
// import { useState, useEffect } from "react";

// export const sign = () => {
//   const MUMBAI_RPC =
//     "https://polygon-mumbai.g.alchemy.com/v2/ri5-bp57V1pbos1phihPgwZ5sdxb8Ezp";
//   const provider = new ethers.providers.JsonRpcProvider(MUMBAI_RPC); //**PLEASE Change it to mainnet RPC later */
//   const USDC_ABI = [
//     "function name() view returns (string)",
//     "function symbol() view returns (string)",
//     "function totalSupply() view returns (uint256)",
//     "function balanceOf(address) view returns (uint)",
//   ];
//   const address = "0xFd0E74abB13DEe7298feCe4050DFB69dC3538449"; //PASTE USDC contract ADDRESS/ need to Swithc to mainnet contract later
//   const USDC_contract = new ethers.USDC_contract(address, USDC_ABI, provider);
//   const signer = provider.getSigner();

//   const [txs, setTxs] = useState([]);
//   const [contractListened, setContractListened] = useState();
//   const [error, setError] = useState();
//   const [contractInfo, setContractInfo] = useState({
//     address: "-",
//     tokenName: "-",
//     tokenSymbol: "-",
//     totalSupply: "-"
//   });
//   const [balanceInfo, setBalanceInfo] = useState({
//     address: "-",
//     balance: "-"
//   });

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     const data = new FormData(e.target);
//     const provider = new ethers.providers.Web3Provider(window.ethereum);

//     const erc20 = new ethers.Contract(data.get("addr"), erc20abi, provider);

//     const tokenName = await erc20.name();
//     const tokenSymbol = await erc20.symbol();
//     const totalSupply = await erc20.totalSupply();
// }

// const handleTransfer = async (e) => {
//   e.preventDefault();
//   const data = new FormData(e.target);
//   const provider = new ethers.providers.Web3Provider(window.ethereum);
//   await provider.send("eth_requestAccounts", []);
//   const signer = await provider.getSigner();
//   const erc20 = new ethers.Contract(contractInfo.address, erc20abi, signer);
//   await erc20.transfer(data.get("recipient"), data.get("amount"));
// };

// };
