import Image from "next/image";
import logo from "../public/Union.png";
import ConnectWallet from "./connectWallet";

export default function nav() {
  return (
    <div className="flex justify-center">
      <div className="navbar bg-base-100 pl-10 pr-10 pt-3">
        <div className="navbar-start">
          <Image src={logo} alt={"Purple State DAO"} />
          <a className="btn btn-ghost normal-case text-xl">Purple State DAO</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal p-0">
            <li>
              <a className="font-bold text-slate-100">Swap V1</a>
            </li>
            <li>
              <a href="https://purple-state.gitbook.io/purple-state-dao/">
                Docs
              </a>
            </li>
            <li>
              <a>Stats</a>
            </li>
            <li>
              <a href="https://resolute-floor-a8e.notion.site/CRYPPUR-0c24cbd2bca443c79e45d4ad249063e2">
                Newsletter
              </a>
            </li>
          </ul>
        </div>
        <div className="navbar-end">
          <ConnectWallet />
        </div>
      </div>
    </div>
  );
}
