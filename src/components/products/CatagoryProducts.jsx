import React, { useEffect, useState } from "react";
import CategoryPro from "./CategoryPro";
import { client } from "../../api";
import { useNavigate, useSearchParams } from "react-router-dom";
import AppLoader from "../AppLoader";

const CatagoryProducts = () => {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [selectId, setSelectId] = useState(null);
  const [loading, setLoading] = useState(false);

  let [searchParams] = useSearchParams();
  const navigate = useNavigate();

  const handleClick = (name) => {
    localStorage.setItem("filter", name);
    searchParams.set("filter", name);
    setSelectId(name);
    const newUrl = `${window.location.pathname}?filter=${name}`;
    navigate(newUrl);
  };

  // console.log(searchParams.get("filter"));

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const res = await client.get("categories/");
        if (res.status === 200) {
          setCategories(res.data);
        }
      } catch (error) {
        console.error(error.message);
      }

      try {
        setLoading(true);
        const res = await client.get(
          `products/?categoryId=${searchParams.get("filter") || "1"}`
        );
        if (res.status === 200) {
          setLoading(false);
          setProducts(res.data);
        }
      } catch {
        console.log("xatolik");
        setLoading(false);
      }
    };

    fetchCategories();
  }, [searchParams.get("filter")]);

  return (
    <div className=" ">
      <div className="flex sm:gap-4 gap-2 sm:items-center my-8 sm:justify-center smm:flex-col md:flex-row">
        {categories.map((category, index) => (
          <button
            key={category.id}
            className={`text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br shadow-lg  rounded-lg px-4 py-1 md:px-8 md:py-2 text-center md:text-lg sm:text-md text-sm  transiton-all ${
              selectId === null && index === 0
                ? "from-green-500 via-green-600 to-green-700"
                : category.id === selectId &&
                  "from-green-500 via-green-600 to-green-700"
            }`}
            onClick={() => handleClick(category.id)}
          >
            {category.name}
          </button>
        ))}
      </div>

      {loading ? (
        <AppLoader />
      ) : (
        <div className="flex gap-6 items-center md:justify-between  justify-center flex-wrap mb-8">
          {products.map((product) => (
            <CategoryPro product={product} key={product.id} />
          ))}
        </div>
      )}
    </div>
  );
};

export default CatagoryProducts;
