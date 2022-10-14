import React from "react";
import HeaderContent from "./HeaderContent";

const Header = () => {
  return (
    <header className="border-b border-white/10 fixed top-0 left-0 w-full z-50 bg-dark">
      <HeaderContent />
    </header>
  );
};

export default Header;
