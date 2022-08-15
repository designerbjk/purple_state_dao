import Image from "next/image";
import logo from "../public/Union.png";
import ConnectWallet from "./connectWallet";
import Link from "next/link";

export default function Nav() {
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
              <Link href="/">
                <a>Thank You</a>
              </Link>
            </li>
            <li>
              <a href="https://purple-state.gitbook.io/purple-state-dao/">
                Docs
              </a>
            </li>
            {/* <li>
              <Link href="/stat">
                <a>Stats</a>
              </Link>
            </li> */}
            <li>
              <a href="https://purplestatedao.notion.site/CRYPPUR-0c24cbd2bca443c79e45d4ad249063e2">
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
