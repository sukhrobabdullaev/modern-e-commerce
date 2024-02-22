import React from "react";
import TopBar from "../components/TopBar";
import Navbar from "../components/Navbar";
import Categories from "../components/categories/Categories";
import Main from "../components/main/Swiper";

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
        <main>
          <Main />
        </main>
      </div>
    </div>
  );
};

export default Home;
