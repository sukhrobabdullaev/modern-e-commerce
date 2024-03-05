import React from "react";

const AppLoader = () => {
  return (
    <div className="flex items-center h-[300px] justify-center animate-spin animate-infinite ">
      <img src="./loader.svg" alt="" className="size-32 " />
    </div>
  );
};

export default AppLoader;
