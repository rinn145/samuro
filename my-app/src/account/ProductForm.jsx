import React, { useState } from 'react';
import '../account/account.css';
import '../account/Account';
import '../assets/fonts.css';
import './ProductForm.css'; // Ensure this path is correct for your project structure

const categories = [
  { id: 1, name: "Bot telegram" },
  { id: 2, name: "Website template" },
  { id: 3, name: "Mobile app" },
];

const ProductForm = ({ onAddProduct }) => {
  const [productData, setProductData] = useState({
    name: '',
    description: '',
    price: '',
    currency: 'USD', // Default currency
    category: '', // Default category (empty)
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setProductData({ ...productData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (productData.name && productData.description && productData.price && productData.category) {
      onAddProduct(productData);  // Call the parent function to add the product
      setProductData({ name: '', description: '', price: '', currency: 'USD', category: '' });  // Reset form
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

      <label htmlFor="currency" className="product-form__label">Currency</label>
      <select
        id="currency"
        name="currency"
        value={productData.currency}
        onChange={handleInputChange}
        className="product-form__select"
      >
        <option value="USD">USD</option>
        <option value="EUR">EUR</option>
        <option value="GBP">GBP</option>
        {/* Add more currencies as needed */}
      </select>

      <label htmlFor="category" className="product-form__label">Category</label>
      <select
        id="category"
        name="category"
        value={productData.category}
        onChange={handleInputChange}
        className="product-form__select"
      >
        <option value="">Select Category</option>
        {categories.map(category => (
          <option key={category.id} value={category.name}>{category.name}</option>
        ))}
      </select>

      <button onClick={handleSubmit} className="product-form__save-button">Save</button>
    </div>
  );
};

export default ProductForm;
