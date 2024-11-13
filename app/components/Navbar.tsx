'use client'

import { useState } from 'react';
import { FaSearch, FaBars, FaHome } from 'react-icons/fa';
import { IoMdArrowDropdown } from 'react-icons/io';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex items-center justify-between">
        
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <div className="bg-gray-600 rounded-full w-10 h-10 flex items-center justify-center">
            <span className="text-gray-400 text-2xl">⚪⚪</span>
          </div>
          <span className="text-white font-semibold text-lg">GameManiac</span>
        </div>

        {/* Right icons: Search and Burger menu */}
        <div className="flex items-center space-x-4">
          <FaSearch className="text-gray-300 hover:text-white cursor-pointer" />

          {/* Burger Menu Icon */}
          <FaBars
            className="text-gray-300 hover:text-white cursor-pointer"
            onClick={() => setMenuOpen(!menuOpen)}
          />
        </div>
      </div>

      {/* Dropdown Menu */}
      {menuOpen && (
        <div className="bg-gray-700 mt-2 p-4 rounded-md">
          <a href="#" className="block text-gray-300 hover:text-white py-1 flex items-center">
            <FaHome className="mr-1" />
            Beranda
          </a>
          <a href="#" className="block text-gray-300 hover:text-white py-1 flex items-center">
            <FaSearch className="mr-1" />
            Lacak Pesanan
          </a>

          {/* Language Option */}
          <div className="flex items-center text-gray-300 hover:text-white mt-2 cursor-pointer">
            <span className="inline-block w-4 h-4 bg-red-600 rounded-full mr-1"></span>
            <span>ID-ID</span>
            <IoMdArrowDropdown className="ml-1" />
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;