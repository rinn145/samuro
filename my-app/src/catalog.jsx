import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './CatalogPage.css';

const products = Array(12).fill({
  id: 1,
  title: "Bot telegram",
  description: "Lorem ipsum is simply dummy text of the printing industry.",
  price: "20$",
  imageUrl: "/path/to/image.png" // укажите путь к изображению
});

function CatalogPage() {
  const [selectedCategory, setSelectedCategory] = useState(null);

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
  };

  return (
    <div className="catalog">
      <aside className="filter">
        <h3>Filter products</h3>
        <ul>
          {["Category 1", "Category 2", "Category 3"].map((category, index) => (
            <li key={index}>
              <label>
                <input
                  type="checkbox"
                  onChange={() => handleCategoryChange(category)}
                />
                {category}
              </label>
            </li>
          ))}
        </ul>
      </aside>
      <section className="product-grid">
        {products.map((product, index) => (
          <div className="product-card" key={index}>
            <img src={product.imageUrl} alt={product.title} />
            <h3>{product.title}</h3>
            <p>{product.description}</p>
            <span>{product.price}</span>
            <Link to={`/product/${product.id}`}>View details</Link>
          </div>
        ))}
      </section>
    </div>
  );
}

export default CatalogPage;
