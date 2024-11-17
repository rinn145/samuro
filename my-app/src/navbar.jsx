import React from 'react';
import { Link } from 'react-router-dom';
import './index.css';
import './assets/fonts.css';
import Samurai from './Frame.svg';

function Navbar() {
  return (
    <div>
      <section className="navbar">
        <div className="logo">Samuro<br />Studio</div>
        <div className="catalog-button">
          <i className="fas fa-list"></i>
          <span>Catalog</span>
        </div>
        <div className="search-bar">
          <input type="text" placeholder="Search" />
          <i className="fas fa-search"></i>
        </div>
        <div className="nav-icons">
          <i className="fas fa-user"><span>Account</span></i>
          <i className="fas fa-comments"><span>Chat</span></i>
        </div>
      </section>
      <section className="logo-frame">
        <img src={Samurai} alt="samuro" className="samuro-frame" />
      </section>
    </div>
  );
}

export default Navbar;
