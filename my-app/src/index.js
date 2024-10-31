import React from 'react';
import ReactDOM from 'react-dom';
import './index.css'; // Импортируйте стили, если они у вас есть

function App() {
  // Пример данных
  const products = [
    { id: 1, name: "Bot telegram", price: "20$", category: "Category 1", description: "Описание товара" },
    { id: 2, name: "Bot telegram", price: "20$", category: "Category 1", description: "Описание товара" },
    { id: 3, name: "Bot telegram", price: "20$", category: "Category 1", description: "Описание товара" },
    // Добавьте больше товаров по мере необходимости
  ];

  return (
    <div className="App">
      <h2>{products[0].category}</h2>
      <div className="product-grid">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
      <a href="#" className="see-more">See more</a>
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

// Рендеринг компонента App в элемент с id="root"
ReactDOM.render(<App />, document.getElementById('root'));
