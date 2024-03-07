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
      <ul className="flex items-center space-x-4 flex-wrap">
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
