import { FaHome, FaSearch } from 'react-icons/fa';
import { IoMdArrowDropdown } from 'react-icons/io';

const Navbar = () => (
  <nav className="bg-gray-800 p-4">
    <div className="container mx-auto flex items-center justify-between">
      <div className="flex items-center space-x-2">
        <div className="bg-gray-600 rounded-full w-10 h-10 flex items-center justify-center">
          <span className="text-gray-400 text-2xl">⚪⚪</span>
        </div>
        <span className="text-white font-semibold text-lg">GameManiac</span>
      </div>

      <div className="flex items-center space-x-4">
        <a href="#" className="flex items-center text-gray-300 hover:text-white">
          <FaHome className="mr-1" />
          Beranda
        </a>
        <a href="#" className="flex items-center text-gray-300 hover:text-white">
          <FaSearch className="mr-1" />
          Lacak Pesanan
        </a>
      </div>

      {/* Search and Language Dropdown */}
      <div className="flex items-center space-x-4">
        <FaSearch className="text-gray-300 hover:text-white cursor-pointer" />

        {/* Divider */}
        <div className="h-6 border-l border-gray-500 mx-2"></div>

        {/* Language Dropdown */}
        <div className="flex items-center text-gray-300 hover:text-white cursor-pointer">
          <div className="flex items-center">
            <span className="inline-block w-4 h-4 bg-red-600 rounded-full mr-1"></span>
            <span>ID-ID</span>
          </div>
          <IoMdArrowDropdown className="ml-1" />
        </div>
      </div>
    </div>
  </nav>
);

export default Navbar;