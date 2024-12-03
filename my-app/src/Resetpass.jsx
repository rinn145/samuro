import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import './index.css';
import './assets/fonts.css';



const PasswordReset = () => {
  return (
    <div>
      {/* Password Reset Form */}
      <div className="container">
        <h2 className="container__title">PASSWORD RESET</h2>
        <div className="input-container">
          <input type="email" className="input-container__input" placeholder="Email" />
        </div>
        <div className="button-group">
          <button className="btn btn--reset">Password reset</button>
          <button className="btn btn--remembered">I remembered the password</button>
        </div>
      </div>

      {/* Enter New Password Form */}
      <div className="container">
        <h2 className="container__title">ENTER A NEW PASSWORD</h2>
        <div className="input-container">
          <input type="password" className="input-container__input" placeholder="Password" />
          <span className="input-container__icon">✈️</span>
        </div>
        <div className="input-container">
          <input type="password" className="input-container__input" placeholder="Repeat the password" />
          <span className="input-container__icon">✈️</span>
        </div>
        <button className="btn btn--verify">Verify password</button>
      </div>
    </div>
  );
};

export default PasswordReset;

