import React from 'react';
import ReactDOM from 'react-dom';
import './index.css'; 

function App() {
  const categories = [
    {
      id: 1,
      name: "Category 1",
      products: [
        { id: 1, name: "Bot telegram", price: "20$", description: "Описание товара" },
        { id: 2, name: "Bot telegram", price: "20$", description: "Описание товара" },
        { id: 3, name: "Bot telegram", price: "20$", description: "Описание товара" },
        { id: 4, name: "Bot telegram", price: "20$", description: "Описание товара" },
        { id: 5, name: "Bot telegram", price: "20$", description: "Описание товара" },
      ]
    },
    {
      id: 2,
      name: "Category 2",
      products: [
        { id: 6, name: "Website template", price: "30$", description: "Описание товара" },
        { id: 7, name: "Website template", price: "30$", description: "Описание товара" },
        { id: 8, name: "Website template", price: "30$", description: "Описание товара" },
        { id: 9, name: "Website template", price: "30$", description: "Описание товара" },
        { id: 10, name: "Website template", price: "30$", description: "Описание товара" },
      ]
    },
    {
      id: 3,
      name: "Category 3",
      products: [
        { id: 11, name: "Mobile app", price: "50$", description: "Описание товара" },
        { id: 12, name: "Mobile app", price: "50$", description: "Описание товара" },
        { id: 13, name: "Mobile app", price: "50$", description: "Описание товара" },
        { id: 14, name: "Mobile app", price: "50$", description: "Описание товара" },
        { id: 15, name: "Mobile app", price: "50$", description: "Описание товара" },
      ]
    }
  ];

  return (
    <div className="App">
      {categories.map((category) => (
        <div key={category.id} className="category-section">
          <h2>{category.name}</h2>
          <div className="product-grid">
            {category.products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
          <a href="#" className="see-more">See more</a>
        </div>
      ))}
    </div>
  );
}

function ProductCard({ product }) {
  return (
    <div className="product-card">
      <img src="path/to/image.jpg" alt={product.name} className="product-image" />
      <h3>{product.name}</h3>
      <p>{product.description}</p>
      <div className="product-price">{product.price}</div>
    </div>
  );
}

export default App;
ReactDOM.render(<App />, document.getElementById('root'));
