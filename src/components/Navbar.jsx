import React from "react";
import { IoIosSearch } from "react-icons/io";

import MobileNav from "./MobileNav";
const Navbar = () => {
  return (
    <div className="flex items-center justify-between md:py-3 py-2">
      <img src="/uzum-logo.png" alt="uzum logo" className="w-32" />
      <div className="flex items-center gap-2">
        <div>
          <form className="flex relative ">
            <input
              className="px-2 w-[400px] py-1 pr-8 ring-gray-300 ring-1 rounded-sm focus:outline-none "
              type="text"
              name="search"
              id="search"
              placeholder="Mahsulotlar va turkumlar izlash"
            />
            <button
              type="submit"
              className="absolute right-0 bg-gray-200 top-0 bottom-0 flex items-center justify-center md:w-16 w-6"
              // style={{ width: "4rem" }}
            >
              <IoIosSearch size={18} />
            </button>
          </form>
        </div>
        <MobileNav />
      </div>
    </div>
  );
};

export default Navbar;
