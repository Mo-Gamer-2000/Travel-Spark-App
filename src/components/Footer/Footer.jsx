// Footer.jsx
import React from "react";
import { FaHeart } from "react-icons/fa";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-purple-700 to-pink-500 py-3 md:py-4 md:px-4 lg:py-5">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <p className="text-white text-sm md:text-base lg:text-lg">
            © 2023 Travel Spark. All rights reserved.
          </p>
          <div className="flex items-center mt-2 md:mt-0">
            <p className="text-white text-sm md:text-base lg:text-lg mr-3">
              Made with <FaHeart className="text-red-500" /> by Moeez Abdul
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
