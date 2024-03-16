import { useEffect, useState } from "react";
import { client } from "../../api";

const Categories = () => {
  const [categories, setCategories] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function getCategories() {
      try {
        const res = await client.get("products/categories");
        console.log(res.data);
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
      {isLoading ? (
        // Skeleton loading UI
        <ul className="md:flex md:items-center md:space-x-4 md:flex-wrap">
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
        <ul className="md:flex md:items-center md:space-x-4 md:flex-wrap">
          {categories.map((category, index) => (
            <li className="text-gray-500 md:text-base text-sm" key={index}>
              <a
                href="#"
                className="transition ease-in-out delay-300 hover:text-black"
              >
                {category.toUpperCase()}
              </a>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Categories;
