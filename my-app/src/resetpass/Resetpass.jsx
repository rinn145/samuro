import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import '../resetpass/resetpass.css';
import '../assets/fonts.css';



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
         <Link to='/Newpass' className='nav-link'><button className="btn btn--remembered">I remembered the password</button></Link>
        </div>
      </div>
    </div>
  );
};

export default PasswordReset;

