import { useState, useEffect } from "react";
import { CiLocationOn } from "react-icons/ci";
import { Select } from "antd";
import "/node_modules/flag-icons/css/flag-icons.min.css";

const { Option } = Select;

const TopBar = () => {
  const [userLocation, setUserLocation] = useState(null);

  useEffect(() => {
    getUserLocation();
  }, []);

  const getUserLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        async (position) => {
          const { latitude, longitude } = position.coords;
          try {
            const response = await fetch(
              `https://nominatim.openstreetmap.org/reverse?lat=${latitude}&lon=${longitude}&format=json`
            );
            const data = await response.json();
            const loc = data?.address?.city;
            setUserLocation(loc);
          } catch (error) {
            console.error("Error fetching location:", error);
          }
        },
        (error) => {
          console.error("Error getting user location:", error);
        }
      );
    } else {
      console.error("Geolocation is not supported by this browser.");
    }
  };

  function handleChange(value) {
    console.log(`Selected language: ${value}`);
    // You can implement your logic here for language change
  }

  return (
    <div className="bg-gray-200 py-1 px-6">
      <div className="flex items-center justify-between max-w-[1200px] mx-auto">
        <div className="flex items-center gap-4">
          <div className="flex gap-1 items-center">
            <CiLocationOn />
            <div className="flex gap-1 items-center">
              <span>Shahar:</span>
              <span className="font-semibold underline-offset-2 underline">
                {userLocation || "Loading..."}
              </span>
            </div>
          </div>
          <h3 className="sm:text-[13px] md:text-base">Topshirish punktlari</h3>
        </div>
        {/* right */}
        <ul className="items-center gap-2 smm:hidden sm:flex">
          <li className="text-gray-500 hover:text-gray-900 transition ease-in-out delay-300 sm:text-[13px] md:text-base">
            Savol-javoblar
          </li>
          <li className="text-gray-500 hover:text-gray-900 transition ease-in-out delay-300 sm:text-[13px] md:text-base">
            Buyurtmalarim
          </li>
          <li className="font-semibold">
            <Select
              defaultValue="uz"
              onChange={handleChange}
              // className="bg-none border-none"
              style={{ width: 120 }}
            >
              <Option value="uz">
                <div className="flex gap-1 items-center">
                  <span className="fi fi-uz block"></span>
                  <span>Uzbek</span>
                </div>
              </Option>
              <Option value="en">
                <div className="flex gap-1 items-center">
                  <span className="fi fi-us block"></span>
                  <span>English</span>
                </div>
              </Option>
              <Option value="ru">
                <div className="flex gap-1 items-center">
                  <span className="fi fi-ru block"></span>
                  <span>Русский</span>
                </div>
              </Option>
            </Select>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default TopBar;
