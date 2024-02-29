import React from "react";
import TopBar from "../components/TopBar";
import Navbar from "../components/Navbar";
import Categories from "../components/categories/Categories";
import Main from "../components/main/Swiper";
import CatagoryProducts from "../components/products/CatagoryProducts";
import ProductList from "../components/products/ProductList";

const Home = () => {
  return (
    <div className="">
      <header className="">
        <TopBar />
      </header>
      <div className="max-w-[1200px] mx-auto">
        <Navbar />
        <aside>
          <Categories />
        </aside>
        <main className="mt-4">
          <Main />
        </main>
        <section className="mt-4">
          <ProductList />
        </section>
        <section className="mt-4">
          <CatagoryProducts />
        </section>
      </div>
    </div>
  );
};

export default Home;
