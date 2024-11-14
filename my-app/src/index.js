import React from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter,
  Routes,
  Route,
} from 'react-router-dom';
import './index.css';
import './assets/fonts.css';
import Navbar from './navbar';
import Footer from './footer';
import Content from './content';
import ProductCard from './productCard';

function App() {


  return (
    <BrowserRouter>
      <Routes>
        <div className="App">

          <Navbar />
          <ProductCard />
          <Content />
          <Footer />

        </div>
      </Routes>
    </BrowserRouter>

  );
}





export default App;
ReactDOM.render(<App />, document.getElementById('root'));
