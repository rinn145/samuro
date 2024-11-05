import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './assets/fonts.css';
import Navbar from './navbar';
import Footer from './footer';
import Content from './content';
import ProductCard from './productCard';

function App() {



  
  return (

    <div className="App">

      <Navbar />
      <ProductCard />
      <Content />
      <Footer />
    </div>
  ); 
}





export default App;
ReactDOM.render(<App />, document.getElementById('root'));
