import React from "react";
import { IoIosSearch } from "react-icons/io";

const Navbar = () => {
  return (
    <div className="flex items-center justify-between py-3">
      <img src="/uzum-logo.png" alt="uzum logo" className="w-32" />
      <ul className="flex items-center gap-4">
        <li>
          <form className="flex relative">
            {/* <input
    className="px-2 py-1 pr-8" <!-- Add pr-8 to give space for the button -->
    type="search"
    name="search"
    id="search"
    placeholder="Izlash.."
  />
  <button
    type="submit"
    className="absolute right-0 bg-gray-200 top-0 bottom-0 flex items-center justify-center" <!-- Add flex and centering classes -->
    style={{ width: "2.5rem" }} <!-- Set width to adjust button size -->
  >
    <IoIosSearch size={18} />
  </button> */}
          </form>
        </li>
        <li>Kirish</li>
        <li>Saralanganlar</li>
        <li>Savat</li>
      </ul>
    </div>
  );
};

export default Navbar;
