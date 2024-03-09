import React from "react";
import { FaRegUser } from "react-icons/fa";
import { IoBagHandleOutline } from "react-icons/io5";
import { FaRegHeart } from "react-icons/fa";
import { GoHome } from "react-icons/go";
import { GrCatalog } from "react-icons/gr";

const MobileNav = () => {
  return (
    <ul className="md:flex md:items-center md:justify-between md:static flex items-center justify-between fixed md:shadow-none md:border-none shadow-md bg-white left-0 w-full bottom-0 z-50 border-t px-4">
      <li className="md:hidden flex flex-col space-x-2 items-center hover:bg-gray-300 p-2 rounded-sm transition ease-in-out delay-300">
        <GoHome size={20} />
        <span className="md:text-base text-sm">Bosh Sahifa</span>
      </li>
      <li className="md:hidden flex flex-col space-x-2 items-center hover:bg-gray-300 p-2 rounded-sm transition ease-in-out delay-300">
        <GrCatalog size={20} />
        <span className="md:text-base text-sm">Katalog</span>
      </li>
      <li className="flex flex-col md:flex-row  space-x-2 items-center hover:bg-gray-300 p-2 rounded-sm transition ease-in-out delay-300">
        <FaRegUser size={20} />
        <span className="md:text-base text-sm">Kirish</span>
      </li>
      <li className="flex flex-col md:flex-row  space-x-2 items-center hover:bg-gray-300 p-2 rounded-sm transition ease-in-out delay-300">
        <FaRegHeart size={20} />
        <span className="md:text-base text-sm">Saralanganlar</span>
      </li>
      <li className="flex flex-col md:flex-row  space-x-2 items-center hover:bg-gray-300 p-2 rounded-sm transition ease-in-out delay-300">
        <IoBagHandleOutline size={20} />
        <span className="md:text-base text-sm">Savat</span>
      </li>
    </ul>
  );
};

export default MobileNav;
