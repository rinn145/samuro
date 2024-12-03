import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './index.css';
import './assets/fonts.css';
import Navbar from './navbar/navbar';
import LogoFrame from './logo_frame';
import Footer from './footer/footer';
import Content from './content/content';
import ProductCard from './productCard/productCard';
import Chat from './chat/chat';
import Account from './account/Account';
import Catalog from './catalog';
import ProductDetailsWrapper from './productDetails/ProductDetails';
import Registor from './registor/registor';
import ResetPass from './resetpass/Resetpass';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<> <LogoFrame /> <ProductCard /> <Content /></>} />
        <Route path="/catalog" element={<><ProductCard /><Catalog /></>} />
        <Route path="/account" element={<Account />} />
        <Route path="/chat" element={<Chat />} />
        {/* <Route path='*' element={<NotFoundPage />} /> */}
        <Route path="/product/:id" element={<ProductDetailsWrapper />} />
        <Route path="/registor" element={<> <Registor /> </>}  />
        <Route path="/Resetpass" element={<ResetPass />} /> 
      </Routes>

      <Footer />
    </BrowserRouter>
  );
}

const root = createRoot(document.getElementById('root')); // Новый метод
root.render(<App />);

