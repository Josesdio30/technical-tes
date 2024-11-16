'use client'

import React from 'react';
import Footer from '../home/components/Footer';
import Navbar from '../home/components/Navbar';
import ProductDetail from "./components/productDetail";


const ProductPage = () => {
  return (
    <div className='bg-gray-900'>
      <Navbar/>
      <ProductDetail/>
      <Footer/>
    </div>
  );
};

export default ProductPage;