import React from "react";
import { FaSearch } from "react-icons/fa";
import "./Header.css";

const Header = ({ onPlaceChanged, onLoad }) => {
  return (
    <header className="bg-gradient-to-r from-purple-700 to-pink-500 py-3 md:py-4 md:px-4 lg:py-5">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <h1 className="text-pink-200 text-title md:text-title-md lg:text-title-lg font-semibold mb-2 md:mb-0">
            Travel <span className="fancy-title">Spark</span>
          </h1>
          <div className="flex items-center mt-2 md:mt-0">
            <FaSearch
              className="text-white cursor-pointer"
              size={20}
              aria-label="Search"
            />
            <input
              type="text"
              placeholder="Search for places..."
              className="px-3 py-2 md:px-4 md:py-2 lg:px-5 lg:py-2 bg-white text-gray-900 rounded-full outline-none focus:ring-2 focus:ring-blue-500 ml-2"
            />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
