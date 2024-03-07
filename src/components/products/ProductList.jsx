import React, { useEffect, useState } from "react";
import Product from "./Product";
import { client } from "../../api";

const ProductList = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    async function getProducts() {
      try {
        const res = await client.get("/products");
        if (res.status === 200) {
          setProducts(res.data);
        } else {
          throw new Error("Xatolik yuz berdi.");
        }
      } catch (err) {
        console.log(err.message);
      }
    }
    getProducts();
  }, []);

  return (
    <>
      <h3 className="md:text-3xl text-lg font-semibold mb-4">Tavsiyalar</h3>
      <div className="flex gap-6 items-center md:justify-between justify-center flex-wrap">
        {products.map((product) => (
          <Product product={product} key={product.id} />
        ))}
      </div>
    </>
  );
};

export default ProductList;
