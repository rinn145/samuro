import React from 'react';
import { Link } from 'react-router-dom';
import './userInfo.css';

const UserInfo = () => {
  return (
    <div className="user-info">
      <div className="user-avatar">
        <img src="https://via.placeholder.com/100" alt="User Avatar" />
      </div>
      <div className="user-details">
        <h1>IvanGenius</h1>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley.
        </p>
      </div>
    </div>
  );
};

export default UserInfo;
