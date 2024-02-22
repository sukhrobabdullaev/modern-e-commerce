import React from "react";

const Navbar = () => {
  return (
    <div className="flex items-center justify-between py-3">
      <img src="/uzum-logo.png" alt="uzum logo" className="w-32" />
      <ul className="flex items-center gap-4">
        <li>
          <input
            className="border"
            type="search"
            name="search"
            id="search"
            placeholder="izlash.."
          />
        </li>
        <li>Kirish</li>
        <li>Saralanganlar</li>
        <li>Savat</li>
      </ul>
    </div>
  );
};

export default Navbar;
