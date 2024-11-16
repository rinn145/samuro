// CatalogPage.js
import React, { useState } from 'react';
import ProductCard from './productCard';

function CatalogPage() {
  const [selectedCategories, setSelectedCategories] = useState([]);

  const products = [
    { id: 1, name: "Bot Telegram", category: "Category1", price: "20$" },
    // Добавьте другие товары
  ];

  const categories = ["Category1", "Category2", "Category3"]; // Пример категорий

  const handleCategoryChange = (category) => {
    setSelectedCategories((prev) =>
      prev.includes(category)
        ? prev.filter((cat) => cat !== category)
        : [...prev, category]
    );
  };

  const filteredProducts = products.filter((product) =>
    selectedCategories.length > 0 ? selectedCategories.includes(product.category) : true
  );

  return (
    <div>
      <h2>Catalog</h2>
      <div className="filter-container">
        <h3>Filter products</h3>
        <ul>
          {categories.map((category) => (
            <li key={category}>
              <label>
                <input
                  type="checkbox"
                  checked={selectedCategories.includes(category)}
                  onChange={() => handleCategoryChange(category)}
                />
                {category}
              </label>
            </li>
          ))}
        </ul>
      </div>
      <div className="product-grid">
        {filteredProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}

export default CatalogPage;
