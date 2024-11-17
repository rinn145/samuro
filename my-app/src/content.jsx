import React from 'react';
import './index.css';
import './assets/fonts.css';
import SamuraiFooter from './samura.svg';

function Content() {
  return (
    <div className="samuro-studio-section">
      <div className="samuro-studio-content">
        <h1>SAMURO STUDIO</h1>
        <p>Do you want to sell your programs with us?</p>
        <button className="join-button">Join us</button>
      </div>
      <div className="samuro-studio-image">
        <img src={SamuraiFooter} alt="Samurai" />
      </div>
    </div>
  );
}

export default Content;
