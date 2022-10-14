import Image from "next/image";
import React from "react";
import HeaderContent from "./HeaderContent";

const Footer = () => {
  return (
    <footer className="relative overflow-hidden">
      <div className="absolute bottom-0 right-0 ">
        <Image src={"/img/lights.png"} width={365} height={288} alt="Lights" />
      </div>
      <div className="border-t border-white/10">
        <HeaderContent className="lg:!pt-[42px]" />
      </div>
      <div className="container_lg">
        <p className="text-sm text-white/60 pb-7 pt-4 lg:pb-20 lg:pt-8">
          The Purple State DAO 2022
        </p>
      </div>
    </footer>
  );
};

export default Footer;
