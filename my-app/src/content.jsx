import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './assets/fonts.css';
import SamuraiFooter from'./samura.svg'

function content() {
    return (
        <div class="samuro-studio-section">
        <div class="samuro-studio-content">
            <h1>SAMURO STUDIO</h1>
            <p>Do you want to sell your programs with us?</p>
            <button class="join-button">Join us</button>
        </div>
        <div class="samuro-studio-image">
            <img src={SamuraiFooter} alt="Samurai" />
        </div>
    </div>
    )
}

export default content;