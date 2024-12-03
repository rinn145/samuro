import React from 'react';
import { Link } from 'react-router-dom';
import './index.css';
import './assets/fonts.css';
import SamuraiFooter from './samura.svg';

function Content() {
  return (
    <div className="samuro-studio-section">
      <div className="samuro-studio-content">
        <h1>SAMURO STUDIO</h1>
        <p>Do you want to sell your programs with us?</p>
        <button className="join-button">
          {/* Используем Link для навигации на страницу регистрации */}
          <Link to="/registor" className="nav-link-a">
            Join us
          </Link>
        </button>
      </div>
      <div className="samuro-studio-image">
        <img src={SamuraiFooter} alt="Samurai" />
      </div>
    </div>
  );
}

export default Content;
