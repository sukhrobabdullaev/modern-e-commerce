import React from "react";
import { IoIosSearch } from "react-icons/io";
import { FaRegUser } from "react-icons/fa";
import { IoBagHandleOutline } from "react-icons/io5";
import { FaRegHeart } from "react-icons/fa";
const Navbar = () => {
  return (
    <div className="flex items-center justify-between py-3">
      <img src="/uzum-logo.png" alt="uzum logo" className="w-32" />
      <ul className="flex items-center gap-2">
        <li>
          <form className="flex relative">
            <input
              className="px-2 md:w-[400px] w-[200px] py-1 pr-8 ring-gray-300 ring-1 rounded-sm focus:outline-none "
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
        </li>
        <div className="md:flex  md:items-center md:justify-between">
          <li className="md:flex hidden space-x-2 items-center hover:bg-gray-300 p-2 rounded-sm transition ease-in-out delay-300">
            <FaRegUser size={20} />
            <span>Kirish</span>
          </li>
          <li className="md:flex hidden space-x-2 items-center hover:bg-gray-300 p-2 rounded-sm transition ease-in-out delay-300">
            <FaRegHeart size={20} />
            <span>Saralanganlar</span>
          </li>
          <li className="md:flex hidden space-x-2 items-center hover:bg-gray-300 p-2 rounded-sm transition ease-in-out delay-300">
            <IoBagHandleOutline size={20} />
            <span>Savat</span>
          </li>
        </div>
      </ul>
    </div>
  );
};

export default Navbar;
