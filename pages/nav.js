import React from 'react'
import Image from 'next/image'
import logo from '../public/Union.png'

export default function nav() {
  return (
    <div className="navbar bg-base-100">
    <div className="navbar-start">
    <Image src={logo} alt={"Purple State DAO"}/>
      <a className="btn btn-ghost normal-case text-xl">Purple State DAO</a>
    </div>
    <div className="navbar-center hidden lg:flex">
      <ul className="menu menu-horizontal p-0">
        <li><a>Swap V1</a></li>
        <li><a>Docs</a></li>
        <li><a>Stats</a></li>
        <li><a>Newsletter</a></li>
      </ul>
    </div>
    <div className="navbar-end">
      <a className="btn btn-primary">Connect Wallet</a>
    </div>
  </div>
  )
}
