import React, { useEffect, useState } from "react";
import CategoryPro from "./CategoryPro";
import { client } from "../../api";
import { useNavigate, useSearchParams } from "react-router-dom";

const CatagoryProducts = () => {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);

  let [searchParams] = useSearchParams();
  const navigate = useNavigate();

  const handleClick = (name) => {
    localStorage.setItem("filter", name);
    searchParams.set("filter", name);
    const newUrl = `${window.location.pathname}?filter=${name}`;
    navigate(newUrl);
  };

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const res = await client.get("products/categories");
        if (res.status === 200) {
          setCategories(res.data);
        }
      } catch (error) {
        console.error(error.message);
      }

      try {
        const res = await client.get(
          `products/category/${searchParams.get("filter")}`
        );
        if (res.status === 200) {
          setProducts(res.data);
        }
      } catch {
        console.log("catolik");
      }
    };

    fetchCategories();
  }, [searchParams.get("filter")]);

  return (
    <div className=" ">
      <div className="flex gap-4 items-center">
        {categories.map((category) => (
          <button
            key={category}
            className="font-semibold text-lg mb-4 text-white bg-black rounded-lg p-3"
            onClick={() => handleClick(category)}
          >
            {category}
          </button>
        ))}
      </div>
      <div className="flex gap-6 items-center flex-wrap">
        {products.map((product) => {
          return (
            <>
              <CategoryPro product={product} key={product.id} />
            </>
          );
        })}
      </div>
    </div>
  );
};

export default CatagoryProducts;
