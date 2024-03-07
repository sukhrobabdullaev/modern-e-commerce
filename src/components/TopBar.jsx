import { useState, useEffect } from "react";
import { CiLocationOn } from "react-icons/ci";

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
  return (
    <div className="bg-gray-200 py-1 px-6">
      <div className="flex items-center justify-between max-w-[1200px] mx-auto">
        <div className="flex gap-4">
          <div className="flex gap-1 items-center">
            <CiLocationOn />
            <div className="flex gap-1 items-center">
              <span>Shahar:</span>
              <span className="font-semibold underline-offset-2 underline">
                {userLocation || "Loading..."}
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
