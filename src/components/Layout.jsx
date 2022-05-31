import React from 'react'

import {
  Routes,
  Route,
} from "react-router-dom";

import Header from './Header';
import Footer from './Footer';
import Home from '../pages/Home';
import Catalog from '../pages/Catalog'
import Cart from '../pages/Cart'
import Product from '../pages/Product'
import ProductViewModal from './ProductViewModal';

const Layout = () => {
  return (
     <div>
        <Header />
        <div className='container'>
          <div className="main">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/catalog/:slug" element={<Product />}/>
              <Route path="/catalog" element={<Catalog />}/>
              <Route path="/cart" element={<Cart />}/>
            </Routes>
          </div>
        </div>
        <Footer />
        <ProductViewModal/>
      </div>
  )
}

export default Layout