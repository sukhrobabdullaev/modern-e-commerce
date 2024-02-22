const TopBar = () => {
  return (
    <div className="bg-gray-200 p-1">
      <div className="flex items-center justify-between max-w-[1200px] mx-auto">
        <div className="flex gap-2">
          <h3>
            🪧Shahar: <span>Toshkent</span>
          </h3>
          <h3>Topshirish punktlari</h3>
        </div>
        {/* right */}
        <ul className="flex gap-2">
          <li>Savol-javoblar</li>
          <li>Buyurtmalarim</li>
          <li>⭐O'zbekcha</li>
        </ul>
      </div>
    </div>
  );
};

export default TopBar;
