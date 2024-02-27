import React from "react";
import { IoBagHandleOutline } from "react-icons/io5";

const Product = () => {
  return (
    <div className="flex flex-col gap-2 w-[266px] rounded-lg hover:shadow-md transition ease-in-out delay-300 ">
      <div>
        <img
          src="https://images.uzum.uz/cnemuk125kub33f5f2m0/t_product_540_high.jpg#1709051356392"
          alt=""
          className="rounded-lg hover:rounded-bl-none hover:rounded-br-none transition ease-in-out delay-300"
          title="oshxona jihozlari"
        />
      </div>
      <div className="p-2">
        <h4 className="text-sm ">
          Oshxona anjomlari to'plami Kukmara, Granit Ultra liniyasi AP
        </h4>
        <div className="text-gray-400 text-[12px] flex gap-1 mt-1">
          <span>⭐</span>
          <span>5.0</span>
        </div>
        <div className="text-[12px] mt-1 font-semibold inline-block rounded-md bg-[#fff000] p-1">
          <span>47 880 </span>
          <span>so'm/oyiga</span>
        </div>
        <div className="prices mt-4 flex justify-between items-center">
          <div className="flex flex-col text-sm font-semibold">
            <span className="text-gray-400 text-[12px] line-through leading-[9px]">
              598 000 so'm
            </span>
            <span>399 000 so'm</span>
          </div>
          <div>
            <IoBagHandleOutline size={24} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
