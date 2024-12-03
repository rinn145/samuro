import React from 'react';
import { Link } from 'react-router-dom';
import '../account/account.css';
import '../assets/fonts.css';


function ShoppingTable() {
  return (
    <div className="shopping-table">
      {/* Profile Section */}
      <div className="shopping-table__profile">
        <img
          src="profile-placeholder.png"
          alt="Profile Picture"
          className="shopping-table__profile-image"
        />
        <div className="shopping-table__nickname">Nickname</div>
        <div className="shopping-table__reg-date">
          Registration date:<br />11.11.2024
        </div>
      </div>

      {/* Shopping Section */}
      <div className="shopping-table__content">
        <h2 className="shopping-table__title">My shopping</h2>
        <table className="shopping-table__table">
          <thead>
            <tr>
              <th>Date</th>
              <th>Order Number</th>
              <th>Description</th>
              <th>Seller</th>
              <th className="shopping-status">Status</th>
              <th>Price</th>
            </tr>
          </thead>
          <tbody>
            {Array(5)
              .fill()
              .map((_, index) => (
                <tr key={index}>
                  <td>11.11.2024, 20:23</td>
                  <td>00895962</td>
                  <td>
                    <strong>Bot telegram</strong><br />
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                  </td>
                  <td>
                    <div className="shopping-table__seller-image"></div>
                    <span className="shopping-table__seller-name">IvanGenius</span>
                  </td>
                  <td>
                    <span className="shopping-table__status shopping-table__status--closed">
                      Closed
                    </span>
                  </td>
                  <td>20$</td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default ShoppingTable;
