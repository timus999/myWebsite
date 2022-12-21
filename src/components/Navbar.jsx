import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <section className="py-8 mx-16 sticky top-0 bg-white">
      <nav className="flex justify-between items-center">
        <div className="px-10 flex-1 items-center">
          <Link
            to="/"
            className="text-5xl text-yellow-500 font-sans cursor-pointer"
          >
            Timus<span className="text-black">Kawor</span>
          </Link>
        </div>

        <div className="flex w-1/3 justify-around text-3xl">
          <Link to="/about" className="cursor-pointer">
            About
          </Link>
          <Link to="/contact" className="cursor-pointer">
            Contact
          </Link>
        </div>
      </nav>
    </section>
  );
};

export default Navbar;
