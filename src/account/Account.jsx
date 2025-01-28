import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../account/account.css';
import '../assets/fonts.css';
import ProductForm from './ProductForm';  // Импортируем компонент формы

function ShoppingTable() {
  const [activeTab, setActiveTab] = useState('shopping');
  const [products, setProducts] = useState([]);

  const handleAddProduct = (product) => {
    setProducts([...products, product]);  // Добавляем новый продукт в список
  };

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
                    <Link to="/UserInfo">
                      <div className="shopping-table__seller-image"></div>
                    </Link>
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
            {products.map((product, index) => (
              <tr key={index}>
                <td>11.11.2024, 20:23</td>
                <td>{product.name}</td>
                <td>{product.description}</td>
                <td>
                  <div className="shopping-table__seller-image"></div>
                  <span className="shopping-table__seller-name">Nickname</span>
                </td>
                <td>{product.price}$</td>
              </tr>
            ))}
          </tbody>
        </table>
      );
    } else if (activeTab === 'add-product') {
      return (
        <ProductForm onAddProduct={handleAddProduct} />  // Передаем функцию добавления продукта
      );
    }
  };

  return (
    <div className="shopping-table">
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
          {/* <Link to='/ProductForm'> */}
          <button
            className={`shopping-table__tab ${activeTab === 'add-product' ? 'active' : ''}`}
            onClick={() => setActiveTab('add-product')}
          >
            Add product
          </button>
          {/* </Link> */}
        </div>

        {renderTableContent()}
      </div>
    </div>
  );
}

export default ShoppingTable;
