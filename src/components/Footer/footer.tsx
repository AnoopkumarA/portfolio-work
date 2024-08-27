import React from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css';

const Footer: React.FC = () => {
  return (
    <footer className=" text-white py-12 ">
      <div className="justify-center items-center grid md:grid-cols-3 ">
        {/* Left Side - Logo */}
        <div className="flex items-center justify-center">
          <div className="relative w-36 h-36 md:w-48 md:h-48 flex items-center justify-center">
            <div className="absolute inset-0 flex items-center justify-center">
             <img src='src/assets/logo.png'></img>
            </div>
          
          </div>
        </div>

        {/* Middle Section - Navigation Links */}
        <nav className="flex flex-col space-y-2 ml-8 relative justify-center items-center text-xl -top-12 md:top-0 mt-28 md:mt-0">
          <a href="#" className=" hover:text-gray-400">Home</a>
          <a href="#" className=" hover:text-gray-400">About</a>
          <a href="#" className=" hover:text-gray-400">Services</a>
          <a href="#" className=" hover:text-gray-400">Skills</a>
          <a href="#" className=" hover:text-gray-400">Portfolio</a>
          <a href="#" className=" hover:text-gray-400">Contact</a>
        </nav>

        {/* Right Side - Social Icons */}
        <div className="flex space-x-8 ml-8 md:ml-16">
          <a href="#" className="hover:text-gray-400">
            <i className="fab fa-instagram text-3xl"></i>
          </a>
          <a href="#" className="hover:text-gray-400">
            <i className="fab fa-linkedin text-3xl"></i>
          </a>
          <a href="#" className="hover:text-gray-400">
            <i className="fab fa-github text-3xl"></i>
          </a>
          <a href="#" className="hover:text-gray-400">
            <i className="fab fa-twitter text-3xl"></i>
          </a>
        </div>
      </div>

      {/* Bottom Section - Copyright */}
      <div className="text-center mt-8 relative top-5 text-sm">
        <p>© 2024 All rights are reserved</p>
      </div>
    </footer>
  );
};

export default Footer;
