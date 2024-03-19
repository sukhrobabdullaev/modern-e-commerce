import React from "react";
import { FaRegUser } from "react-icons/fa";
import { IoBagHandleOutline } from "react-icons/io5";
import { FaRegHeart } from "react-icons/fa";
import { GoHome } from "react-icons/go";
import { GrCatalog } from "react-icons/gr";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "@clerk/clerk-react";
import { SignedOut, UserButton } from "@clerk/clerk-react";
// import SignInLoading from "./suspenses/SignInLoading";

const MobileNav = () => {
  const { userId, isLoaded } = useAuth();
  const navigate = useNavigate();

  // React.useEffect(() => {
  //   if (!userId) {
  //     navigate("/sign-in");
  //   }
  // }, [userId]);

  // if (!isLoaded) return <SignInLoading />;

  // console.log(userId);
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
        <Link
          to={"/sign-in"}
          className="flex flex-col md:flex-row  space-x-2 items-center hover:bg-gray-300 p-2 rounded-sm transition ease-in-out delay-300"
        >
          <FaRegUser size={20} />
          <span className="md:text-base text-[12px] block">Kirish</span>
        </Link>
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
