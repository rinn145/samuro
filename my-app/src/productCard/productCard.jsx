import React from 'react';
import { Link } from 'react-router-dom';
import '../productCard/productCard.css';
import '../assets/fonts.css';
import tgCard from '../tgCard.svg';

function ProductCard({ }) {

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
  ]




 
  return (
    <div className="category-grid">
      {categories.map((category) => (
        <Link
          key={category.id}
          to={`/category/${category.id}`}
          className="category-card"
        >
          <img src={tgCard} alt={category.name} className="category-image" />
          <h3>{category.name}</h3>
        </Link>
      ))}
    </div>
  );
}

export default ProductCard;