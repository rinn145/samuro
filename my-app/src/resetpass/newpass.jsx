import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import '../resetpass/resetpass.css';
import '../assets/fonts.css';


const aNewPass = () => {
  return (
    <div>
      <div className="container">
        <h2 className="container__title">ENTER A NEW PASSWORD</h2>
        <div className="input-container">
          <input type="password" className="input-container__input" placeholder="Password" />
        </div>
        <div className="input-container">
          <input type="password" className="input-container__input" placeholder="Repeat the password" />
        </div>
        <button className="btn btn--verify">Verify password</button>
      </div>
      </div>
    );
  };



export default aNewPass;