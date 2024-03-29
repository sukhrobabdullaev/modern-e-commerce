import { useEffect, useState } from "react";
import { client } from "../../api";
import { useSelector, useDispatch } from "react-redux";
import { decrement, increment } from "../../features/counter/counterSlice";
import { handleOpen, handleClose } from "../../features/mobileMenuSlice";

const Categories = () => {
  const count = useSelector((state) => state.counter.value);
  const isOpen = useSelector((state) => state.mobileMenu.isOpen);
  // console.log(isOpen);
  const dispatch = useDispatch();

  const [categories, setCategories] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function getCategories() {
      try {
        const res = await client.get("categories/");
        // console.log(res.data);products
        // if (!res.ok) {
        //   throw new Error("Error fetching categories");
        // }
        setCategories(res.data);
      } catch (error) {
        console.error(error); // Handle errors appropriately
      } finally {
        setIsLoading(false); // Set isLoading to false after fetching data, whether successful or not
      }
    }

    getCategories();
  }, []);

  return (
    <div>
      {/* <span className="mb-4 text-[20px]">{count}</span>
      <button onClick={() => dispatch(increment())}>Increment</button>
      <button onClick={() => dispatch(decrement())}>Decrement</button> */}
      {isLoading ? (
        // Skeleton loading UI
        <ul className="md:flex md:items-center smm:hidden  md:space-x-4 md:flex-wrap">
          {[...Array(10)].map((_, index) => (
            <li
              className="animate-pulse text-gray-500 md:text-base text-sm"
              key={index}
            >
              <div className="bg-gray-300 h-6 w-24 rounded-md"></div>
            </li>
          ))}
        </ul>
      ) : (
        <ul
          className={`md:flex md:items-center smm:${
            isOpen ? "flex" : "hidden"
          } md:space-x-4 md:flex-wrap`}
        >
          {categories.map((category) => (
            <li
              className="text-gray-500 md:text-base text-sm"
              key={category.id}
            >
              <a
                href="#"
                className="transition ease-in-out delay-300 hover:text-black"
              >
                {category?.name}
              </a>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Categories;
