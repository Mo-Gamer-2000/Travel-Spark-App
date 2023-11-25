import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-purple-700 to-pink-500 py-3 md:py-4 lg:py-5">
      <div className="container mx-auto flex text-center justify-center">
        <nav className="flex flex-col md:flex-row items-center justify-between">
          <p className="text-white text-sm md:text-base lg:text-lg">
            © 2023, Travel Spark. Website Developed by{" "}
            <a
              href="https://www.linkedin.com/in/moeezabdul/"
              target="_blank"
              rel="noopener noreferrer"
              className="fancy-title"
            >
              Moeez
            </a>
          </p>
        </nav>
      </div>
    </footer>
  );
};

export default Footer;
