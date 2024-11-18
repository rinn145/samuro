import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './index.css';
import './assets/fonts.css';
import Navbar from './navbar';
import LogoFrame from './logo_frame';
import Footer from './footer';
import Content from './content';
import ProductCard from './productCard';
import Chat from './chat';
import Account from './Account';
import Catalog from './catalog';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<> <LogoFrame /> <ProductCard /> <Content /></>} />
        <Route path="/catalog" element={<><ProductCard /><Catalog /></>} />
        <Route path="/account" element={<Account />} />
        <Route path="/chat" element={<Chat />} />
      </Routes>

      <Footer />
    </BrowserRouter>
  );
}

const root = createRoot(document.getElementById('root')); // Новый метод
root.render(<App />);

