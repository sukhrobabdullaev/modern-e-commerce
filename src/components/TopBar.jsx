import { CiLocationOn } from "react-icons/ci";

const TopBar = () => {
  return (
    <div className="bg-gray-200 p-1">
      <div className="flex items-center justify-between max-w-[1200px] mx-auto">
        <div className="flex gap-4">
          <div className="flex gap-1 items-center">
            <CiLocationOn />
            <div className="flex gap-1 items-center">
              <span>Shahar:</span>
              <span className="font-semibold underline-offset-2 underline">
                Toshkent
              </span>
            </div>
          </div>
          <h3>Topshirish punktlari</h3>
        </div>
        {/* right */}
        <ul className="flex gap-2">
          <li className="text-gray-500 hover:text-gray-900 transition ease-in-out delay-300">
            Savol-javoblar
          </li>
          <li className="text-gray-500 hover:text-gray-900 transition ease-in-out delay-300">
            Buyurtmalarim
          </li>
          <li className="font-semibold">⭐O'zbekcha</li>
        </ul>
      </div>
    </div>
  );
};

export default TopBar;
