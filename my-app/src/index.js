import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './assets/fonts.css'; 

function App() {
  const categories = [
    {
      id: 1,
      name: "Bot telegram",
      products: [
        { id: 1, name: "Bot telegram", price: "20$", description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis voluptatibus, perspiciatis incidunt quidem ducimus sint quibusdam, voluptatem voluptate voluptates, aut recusandae maxime modi alias minus! Nobis accusantium at quasi facere." },
        { id: 2, name: "Bot telegram", price: "20$", description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis voluptatibus, perspiciatis incidunt quidem ducimus sint quibusdam, voluptatem voluptate voluptates, aut recusandae maxime modi alias minus! Nobis accusantium at quasi facere." },
        { id: 3, name: "Bot telegram", price: "20$", description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis voluptatibus, perspiciatis incidunt quidem ducimus sint quibusdam, voluptatem voluptate voluptates, aut recusandae maxime modi alias minus! Nobis accusantium at quasi facere." },
        { id: 4, name: "Bot telegram", price: "20$", description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis voluptatibus, perspiciatis incidunt quidem ducimus sint quibusdam, voluptatem voluptate voluptates, aut recusandae maxime modi alias minus! Nobis accusantium at quasi facere." },
        { id: 5, name: "Bot telegram", price: "20$", description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis voluptatibus, perspiciatis incidunt quidem ducimus sint quibusdam, voluptatem voluptate voluptates, aut recusandae maxime modi alias minus! Nobis accusantium at quasi facere." },
      ]
    },
    {
      id: 2,
      name: "Website template",
      products: [
        { id: 6, name: "Website template", price: "30$", description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis voluptatibus, perspiciatis incidunt quidem ducimus sint quibusdam, voluptatem voluptate voluptates, aut recusandae maxime modi alias minus! Nobis accusantium at quasi facere." },
        { id: 7, name: "Website template", price: "30$", description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis voluptatibus, perspiciatis incidunt quidem ducimus sint quibusdam, voluptatem voluptate voluptates, aut recusandae maxime modi alias minus! Nobis accusantium at quasi facere." },
        { id: 8, name: "Website template", price: "30$", description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis voluptatibus, perspiciatis incidunt quidem ducimus sint quibusdam, voluptatem voluptate voluptates, aut recusandae maxime modi alias minus! Nobis accusantium at quasi facere." },
        { id: 9, name: "Website template", price: "30$", description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis voluptatibus, perspiciatis incidunt quidem ducimus sint quibusdam, voluptatem voluptate voluptates, aut recusandae maxime modi alias minus! Nobis accusantium at quasi facere." },
        { id: 10, name: "Website template", price: "30$", description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis voluptatibus, perspiciatis incidunt quidem ducimus sint quibusdam, voluptatem voluptate voluptates, aut recusandae maxime modi alias minus! Nobis accusantium at quasi facere." },
      ]
    },
    {
      id: 3,
      name: "Mobile app",
      products: [
        { id: 11, name: "Mobile app", price: "50$", description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis voluptatibus, perspiciatis incidunt quidem ducimus sint quibusdam, voluptatem voluptate voluptates, aut recusandae maxime modi alias minus! Nobis accusantium at quasi facere." },
        { id: 12, name: "Mobile app", price: "50$", description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis voluptatibus, perspiciatis incidunt quidem ducimus sint quibusdam, voluptatem voluptate voluptates, aut recusandae maxime modi alias minus! Nobis accusantium at quasi facere." },
        { id: 13, name: "Mobile app", price: "50$", description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis voluptatibus, perspiciatis incidunt quidem ducimus sint quibusdam, voluptatem voluptate voluptates, aut recusandae maxime modi alias minus! Nobis accusantium at quasi facere." },
        { id: 14, name: "Mobile app", price: "50$", description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis voluptatibus, perspiciatis incidunt quidem ducimus sint quibusdam, voluptatem voluptate voluptates, aut recusandae maxime modi alias minus! Nobis accusantium at quasi facere." },
        { id: 15, name: "Mobile app", price: "50$", description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis voluptatibus, perspiciatis incidunt quidem ducimus sint quibusdam, voluptatem voluptate voluptates, aut recusandae maxime modi alias minus! Nobis accusantium at quasi facere." },
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
      <img src="./tgCard.svg" alt={product.name} className="product-image" />
      <h3>{product.name}</h3>
      <p>{product.description}</p>
      <div className="product-price">{product.price}</div>
    </div>
  );
}

export default App;
ReactDOM.render(<App />, document.getElementById('root'));
