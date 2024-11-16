// components/Footer.tsx
import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-10">
      <div className="container mx-auto flex justify-between items-start">
        <div className="flex items-center">
          <div className="bg-gray-300 rounded-full w-16 h-16"></div>
          <span className="ml-4 text-xl font-bold">H2H Logo</span>
        </div>
        <div className="flex flex-col space-y-4 md:flex-row md:space-x-20">
          <div>
            <h3 className="font-bold mb-4">PETA SITUS</h3>
            <ul>
              <li className="mb-2"><a href="#" className="hover:underline">Beranda</a></li>
              <li className="mb-2"><a href="#" className="hover:underline">Semua Game</a></li>
              <li className="mb-2"><a href="#" className="hover:underline">Masuk</a></li>
              <li className="mb-2"><a href="#" className="hover:underline">Daftar</a></li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold mb-4">TOP UP LAINNYA</h3>
            <ul>
              <li className="mb-2"><a href="#" className="hover:underline">Mobile Legends</a></li>
              <li className="mb-2"><a href="#" className="hover:underline">Free Fire</a></li>
              <li className="mb-2"><a href="#" className="hover:underline">Pubg Mobile</a></li>
              <li className="mb-2"><a href="#" className="hover:underline">Undawn</a></li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold mb-4">IKUTI KAMI</h3>
            <div className="flex space-x-4 mb-4">
              <a href="#" className="text-gray-300 hover:text-white">
                <i className="fab fa-instagram fa-2x"></i>
              </a>
              <a href="#" className="text-gray-300 hover:text-white">
                <i className="fab fa-tiktok fa-2x"></i>
              </a>
              <a href="#" className="text-gray-300 hover:text-white">
                <i className="fab fa-youtube fa-2x"></i>
              </a>
            </div>
            <h3 className="font-bold mb-2">PERTANYAAN BISNIS</h3>
            <p>contact@email.id</p>
          </div>
        </div>
      </div>
      <div className="border-t border-gray-700 mt-10 pt-4 text-center text-sm">
        <p>© PT BERMAIN BERSAMA INDONESIA, 2023</p>
        <div className="flex justify-center space-x-10 mt-2">
          <a href="#" className="hover:underline">Kebijakan Privasi</a>
          <a href="#" className="hover:underline">Terms of Service</a>
          <a href="#" className="hover:underline">Hubungi Kami</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;