import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import './index.css';
import './assets/fonts.css';
import ResetPass from './Resetpass';

const LoginRegistrationForm = () => {
  const [activeForm, setActiveForm] = useState('login'); // Стейт для активной формы

  const showForm = (formType) => {
    setActiveForm(formType);
  };

  return (
    <div className="form-container">
      {/* Верхняя панель с вкладками Login и Registration */}
      <div className="tabs">
        <div
          id="loginTab"
          className={`tabs__tab ${activeForm === 'login' ? 'tabs__tab--active' : ''}`}
          onClick={() => showForm('login')}
        >
          LOGIN
        </div>
        <div
          id="registrationTab"
          className={`tabs__tab ${activeForm === 'registration' ? 'tabs__tab--active' : ''}`}
          onClick={() => showForm('registration')}
        >
          REGISTRATION
        </div>
      </div>

      {/* Форма входа */}
      <div id="loginForm" className={`form ${activeForm === 'login' ? 'form--active' : ''}`}>
        <h2 className="form__heading">Login with password and user name</h2>
        <div className="form-group">
          <input type="text" className="form__input" placeholder="User name or email" />
        </div>
        <div className="form-group">
          <input type="password" className="form__input" placeholder="Password" />
          <Link to='/ResetPass' className="form__forgot-password">Forgot your username or password?</Link>
        </div>
        <button className="form__submit-button">Log-in</button>
      </div>

      {/* Форма регистрации */}
      <div id="registrationForm" className={`form ${activeForm === 'registration' ? 'form--active' : ''}`}>
        <h2 className="form__heading">Register with your details</h2>
        <div className="form-group">
          <input type="text" className="form__input" placeholder="Username" />
        </div>
        <div className="form-group">
          <input type="email" className="form__input" placeholder="Email" />
        </div>
        <div className="form-group">
          <input type="password" className="form__input" placeholder="Password" />
        </div>
        <button className="form__submit-button">Register</button>
      </div>
    </div>
  );
};

export default LoginRegistrationForm;
