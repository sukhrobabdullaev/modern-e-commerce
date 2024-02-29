import React, { useEffect, useState } from "react";
import { IoBagHandleOutline } from "react-icons/io5";
import { formatNumberWithoutCommas } from "../../helpers";
import { FaRegHeart } from "react-icons/fa";

const CategoryPro = ({ product }) => {
  const [sum, setSum] = useState(product.price);

  useEffect(() => {
    async function convertDollarsToSum(dollars) {
      const apiKey = "d44adfd7fd5430ecf7e84c99";
      const apiUrl = `https://api.exchangerate-api.com/v4/latest/USD?api_key=${apiKey}`;

      try {
        const response = await fetch(apiUrl);
        const data = await response.json();

        const exchangeRate = data.rates.UZS; // Assuming UZS is the code for Uzbekistani sum
        const sum = dollars * exchangeRate;

        return sum;
      } catch (error) {
        console.error("Error fetching exchange rate:", error);
        return null;
      }
    }
    // Call the function and update the state with the converted sum
    convertDollarsToSum(product.price).then((convertedSum) => {
      if (convertedSum !== null) {
        setSum(convertedSum);
      } else {
        setSum(12503 * sum);
      }
    });
  }, [product.price]);

  return (
    <>
      <div className="flex flex-col gap-2 w-[276px] rounded-lg hover:shadow-md transition ease-in-out delay-300 ">
        <div className="border rounded-lg hover:rounded-bl-none hover:rounded-br-none transition ease-in-out delay-300 relative">
          <img
            src={product.image}
            alt={product.description}
            className="h-[300px] mx-auto transition ease-in-out delay-300 hover:scale-95"
            title={product.title}
          />
          <FaRegHeart
            size={20}
            color="#fff000"
            className="absolute top-2 right-2"
          />
        </div>
        <div className="p-2">
          <h4 className="text-sm line-clamp-1">{product.title}</h4>
          <div className="text-gray-400 text-[12px] flex gap-1 mt-1">
            <span>⭐</span>
            <span>
              {product?.rating?.rate} ({product?.rating?.count} ta sharh)
            </span>
          </div>
          <div className="text-[12px] mt-1 font-semibold inline-block rounded-md bg-[#fff000] p-1">
            <span>{formatNumberWithoutCommas((sum / 12).toFixed(0))}</span>
            <span> so'm/oyiga</span>
          </div>
          <div className="prices mt-4 flex justify-between items-center">
            <div className="flex flex-col text-sm font-semibold">
              <span>{formatNumberWithoutCommas(sum.toFixed(0))} so'm</span>
            </div>
            <div>
              <IoBagHandleOutline size={24} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CategoryPro;
