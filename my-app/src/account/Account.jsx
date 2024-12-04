import React, { useState } from 'react';
import '../account/account.css';
import '../assets/fonts.css';

function ShoppingTable() {
  const [activeTab, setActiveTab] = useState('shopping'); // Track the active tab

  const renderTableContent = () => {
    if (activeTab === 'shopping') {
      return (
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
      );
    } else if (activeTab === 'product') {
      return (
        <table className="shopping-table__table">
          <thead>
            <tr>
              <th>Date</th>
              <th>Product Name</th>
              <th>Description</th>
              <th>Seller</th>
              <th>Price</th>
            </tr>
          </thead>
          <tbody>
            {Array(3)
              .fill()
              .map((_, index) => (
                <tr key={index}>
                  <td>11.11.2024, 20:23</td>
                  <td>Product #{index + 1}</td>
                  <td>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                  </td>
                  <td>
                    <div className="shopping-table__seller-image"></div>
                    <span className="shopping-table__seller-name">IvanGenius</span>
                  </td>
                  <td>15$</td>
                </tr>
              ))}
          </tbody>
        </table>
      );
    }
  };

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

      {/* Content Section */}
      <div className="shopping-table__content">
        <div className="shopping-table__tabs">
          <button
            className={`shopping-table__tab ${activeTab === 'shopping' ? 'active' : ''}`}
            onClick={() => setActiveTab('shopping')}
          >
            My shopping
          </button>
          <button
            className={`shopping-table__tab ${activeTab === 'product' ? 'active' : ''}`}
            onClick={() => setActiveTab('product')}
          >
            My product
          </button>
        </div>

        {renderTableContent()}
      </div>
    </div>
  );
}

export default ShoppingTable;
