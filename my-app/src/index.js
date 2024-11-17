import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './index.css';
import './assets/fonts.css';
import Navbar from './navbar';
import Footer from './footer';
import Content from './content';
import ProductCard from './productCard';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <ProductCard />
      <Routes>
        <Route path='/product' element={<ProductCard />} />
      </Routes>
      <Content />
      <Footer />
    </BrowserRouter>
  );
}

const root = createRoot(document.getElementById('root')); // Новый метод
root.render(<App />);
