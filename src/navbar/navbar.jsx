import React from 'react';
import { Link } from 'react-router-dom';
import '../navbar/navbar.css';
import '../assets/fonts.css';

function Navbar() {
  return (
    <div>
      <section className="navbar">
        <button>
          <Link to="/" className='nav-link'>
            <div className="logo">Samuro<br />Studio</div>
          </Link>
        </button>
        <div className="search-bar">
          <input type="text" placeholder="Search" />
          <i className="fas fa-search"></i>
        </div>
        <div className="nav-icons">
          <Link to="/account" className="nav-link">
            <i className="fas fa-user">
              <span>Account</span>
            </i>
          </Link>
          <Link to="/chat" className="nav-link">
            <i className="fas fa-comments"></i>
            <span>Chat</span>
          </Link>
        </div>
      </section>

    </div>
  );
}

export default Navbar;
