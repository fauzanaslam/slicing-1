import React from "react";
import { FaArrowRight } from "react-icons/fa";

const Navbar = () => {
  return (
    <header className="fixed inset-0 container mx-auto flex justify-between items-center h-[60px] bg-dark z-50">
      <div className="font-semibold text-[20px]">SellSpot</div>
      <nav>
        <ul className="flex items-center gap-4">
          <li>Home</li>
          <li>Features</li>
          <li>FAQs</li>
        </ul>
      </nav>
      <button className="btn">
        Start now
        <FaArrowRight />
      </button>
    </header>
  );
};

export default Navbar;
