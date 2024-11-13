import React from 'react';
import ReactDOM from 'react-dom';
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './index.css';
import './assets/fonts.css';
import Navbar from './navbar';
import Footer from './footer';
import Content from './content';
import ProductCard from './productCard';
// import CatalogPage from './CatalogPage';

function App() {




  return (

    <div className="App">

      <Navbar />
      <ProductCard />
      <Content />
      <Footer />
      {/* <Router>
      <Routes>
        <Route path="/" element={<CatalogPage />} />
        <Route path="/product/:id" element={<ProductCard />} />
      </Routes>
      </Router> */}
    </div>

  );
}





export default App;
ReactDOM.render(<App />, document.getElementById('root'));
