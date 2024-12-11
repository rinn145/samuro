import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../account/account.css';
import '../assets/fonts.css';
import '../account/ProductForm.css'

const ProductForm = ({ onAddProduct }) => {
  const [productData, setProductData] = useState({
    name: '',
    description: '',
    price: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setProductData({ ...productData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (productData.name && productData.description && productData.price) {
      onAddProduct(productData);  // Вызываем переданную функцию для добавления продукта
      setProductData({ name: '', description: '', price: '' });  // Сбрасываем форму
      alert('Product added successfully!');
    } else {
      alert('Please fill out all fields.');
    }
  };

  return (
    <div className="product-form__container">
      <h1 className="product-form__title">Adding a Product</h1>
      
      <label htmlFor="name" className="product-form__label">Product Name</label>
      <input
        type="text"
        id="name"
        name="name"
        value={productData.name}
        onChange={handleInputChange}
        className="product-form__input"
        placeholder="Product Name"
      />

      <label htmlFor="description" className="product-form__label">Description</label>
      <textarea
        id="description"
        name="description"
        value={productData.description}
        onChange={handleInputChange}
        className="product-form__textarea"
        placeholder="Product Description"
      ></textarea>

      <label htmlFor="price" className="product-form__label">Price</label>
      <input
        type="text"
        id="price"
        name="price"
        value={productData.price}
        onChange={handleInputChange}
        className="product-form__input product-form__input--price"
        placeholder="Price"
      />

      <button onClick={handleSubmit} className="product-form__save-button">Save</button>
    </div>
  );
};

export default ProductForm;

