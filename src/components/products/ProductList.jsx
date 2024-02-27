import React from "react";
import Product from "./Product";

const ProductList = () => {
  return (
    <>
      <h3>Prodcuts</h3>
      <div className="flex gap-6 items-center flex-wrap">
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
      </div>
    </>
  );
};

export default ProductList;
