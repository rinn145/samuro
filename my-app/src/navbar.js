import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './assets/fonts.css';
import Samurai from './Frame.svg';

function Navbar() {
    return (
    <div>
        <section class="navbar">
        <div class="logo">Samuro<br />Studio</div>
        <div class="catalog-button">
            <i class="fas fa-list"></i> 
            <span>Catalog</span>
        </div>
        <div class="search-bar">
            <input type="text" placeholder="Search" />
            <i class="fas fa-search"></i>
        </div>
        <div class="nav-icons">
            <i class="fas fa-user"><span>Account</span></i>
            <i class="fas fa-comments"><span>Chat</span></i>
            <i class="fas fa-shopping-cart"><span>Shopping cart</span></i>
        </div>
     </section>

      <section class="logo-frame">
        <img src={Samurai} alt="samuro" class="samuro-frame" />
        </section>
    </div>
    )
}

export default Navbar;
