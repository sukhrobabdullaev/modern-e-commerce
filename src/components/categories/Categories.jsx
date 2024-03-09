import { useEffect, useState } from "react";
import { client } from "../../api";

const Categories = () => {
  const [categories, setCategories] = useState(null);

  useEffect(() => {
    async function getCategories() {
      const res = await client.get("products/categories");
      setCategories(res.data);
    }

    getCategories();
  }, []);

  return (
    <div>
      <ul className="md:flex md:items-center md:space-x-4 md:flex-wrap hidden">
        {categories &&
          categories.map((category) => (
            <li className="text-gray-500 md:text-base text-sm" key={category}>
              <a
                href="#"
                className="transition ease-in-out delay-300 hover:text-black"
              >
                {category.toUpperCase()}
              </a>
            </li>
          ))}
      </ul>
    </div>
  );
};

export default Categories;
