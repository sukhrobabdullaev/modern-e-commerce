import React, { useEffect, useState } from "react";
import CategoryPro from "./CategoryPro";
import { client } from "../../api";

const CatagoryProducts = () => {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    const fetchCategoryProducts = async (category) => {
      try {
        const res = await client.get(`products/category/${category}`);
        if (res.status === 200) {
          setProducts((prevProducts) => [...prevProducts, ...res.data]);
        } else {
          throw new Error("Xatolik yuz berdi!");
        }
      } catch (error) {
        console.error(error.message);
      }
    };

    const fetchCategories = async () => {
      try {
        const res = await client.get("products/categories");
        if (res.status === 200) {
          setCategories(res.data);
          res.data.forEach((category) => fetchCategoryProducts(category));
        }
      } catch (error) {
        console.error(error.message);
      }
    };

    fetchCategories();
  }, []);

  return (
    <div className=" ">
      {categories.map((category) => (
        <h3>{category}</h3>
      ))}
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
