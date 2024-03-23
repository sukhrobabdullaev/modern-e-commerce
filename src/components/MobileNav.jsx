import React from "react";
import { FaRegUser } from "react-icons/fa";
import { IoBagHandleOutline } from "react-icons/io5";
import { FaRegHeart } from "react-icons/fa";
import { GoHome } from "react-icons/go";
import { GrCatalog, GrUserAdmin } from "react-icons/gr";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "@clerk/clerk-react";
import { UserButton } from "@clerk/clerk-react";
import "./Nav.css";

const MobileNav = () => {
  const { userId } = useAuth();
  const navigate = useNavigate();

  return (
    <ul className="md:flex md:items-center md:justify-between md:static flex items-center justify-between fixed md:shadow-none md:border-none shadow-md bg-white left-0 w-full bottom-0 z-50 border-t px-4">
      <Link
        to={"/"}
        className="md:hidden flex flex-col items-center hover:bg-gray-300 p-2 rounded-sm transition ease-in-out delay-300"
      >
        <GoHome size={20} />
        <span className="md:text-base text-[12px] block">Bosh Sahifa</span>
      </Link>
      <Link
        to={"/"}
        className="md:hidden flex flex-col space-x-2 items-center hover:bg-gray-300 p-2 rounded-sm transition ease-in-out delay-300"
      >
        <GrCatalog size={20} />
        <span className="md:text-base text-[12px] block">Katalog</span>
      </Link>
      {!userId ? (
        <div className="relative">
          <Link
            to={"/sign-in"}
            className="flex flex-col md:flex-row space-x-2  items-center hover:bg-gray-300 p-2 rounded-sm transition ease-in-out delay-300"
          >
            <FaRegUser size={20} />
            <span className="md:text-base text-[12px] block">Kirish</span>
          </Link>
          <button
            className="md:text-base text-[12px] flex gap-1 rounded-bl-md rounded-br-md border p-3 items-center absolute top-10 left-4 opacity-0 transition-opacity duration-300"
            onClick={() => navigate("/admin")}
          >
            <GrUserAdmin size={20} /> admin
          </button>
        </div>
      ) : (
        <div className="border border-green-300 rounded-full mr-3">
          <UserButton afterSignOutUrl="/" />
        </div>
      )}
      <Link
        to={"/"}
        className="flex flex-col md:flex-row  space-x-2 items-center hover:bg-gray-300 p-2 rounded-sm transition ease-in-out delay-300"
      >
        <FaRegHeart size={20} />
        <span className="md:text-base text-[12px] block">Saralanganlar</span>
      </Link>
      <Link
        to={"/"}
        className="flex flex-col md:flex-row  space-x-2 items-center hover:bg-gray-300 p-2 rounded-sm transition ease-in-out delay-300"
      >
        <IoBagHandleOutline size={20} />
        <span className="md:text-base text-[12px] block">Savat</span>
      </Link>
    </ul>
  );
};

export default MobileNav;
