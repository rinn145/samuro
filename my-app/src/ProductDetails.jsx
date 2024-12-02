import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import './index.css';
import './assets/fonts.css';
import tgCard from './tgCard.svg';

function ProductDetails() {
  const { id } = useParams();

  // Продукты
  const products = [
     { id: 1, name: "Bot telegram", price: "20$", description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis voluptatibus, perspiciatis incidunt quidem ducimus sint quibusdam, voluptatem voluptate voluptates, aut recusandae maxime modi alias minus! Nobis accusantium at quasi facere." },
     { id: 2, name: "Bot telegram", price: "20$", description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis voluptatibus, perspiciatis incidunt quidem ducimus sint quibusdam, voluptatem voluptate voluptates, aut recusandae maxime modi alias minus! Nobis accusantium at quasi facere." },
     { id: 3, name: "Bot telegram", price: "20$", description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis voluptatibus, perspiciatis incidunt quidem ducimus sint quibusdam, voluptatem voluptate voluptates, aut recusandae maxime modi alias minus! Nobis accusantium at quasi facere." },
     { id: 4, name: "Bot telegram", price: "20$", description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis voluptatibus, perspiciatis incidunt quidem ducimus sint quibusdam, voluptatem voluptate voluptates, aut recusandae maxime modi alias minus! Nobis accusantium at quasi facere." },
     { id: 5, name: "Bot telegram", price: "20$", description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis voluptatibus, perspiciatis incidunt quidem ducimus sint quibusdam, voluptatem voluptate voluptates, aut recusandae maxime modi alias minus! Nobis accusantium at quasi facere." },
     { id: 6, name: "Website template", price: "30$", description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis voluptatibus, perspiciatis incidunt quidem ducimus sint quibusdam, voluptatem voluptate voluptates, aut recusandae maxime modi alias minus! Nobis accusantium at quasi facere." },
     { id: 7, name: "Website template", price: "30$", description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis voluptatibus, perspiciatis incidunt quidem ducimus sint quibusdam, voluptatem voluptate voluptates, aut recusandae maxime modi alias minus! Nobis accusantium at quasi facere." },
     { id: 8, name: "Website template", price: "30$", description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis voluptatibus, perspiciatis incidunt quidem ducimus sint quibusdam, voluptatem voluptate voluptates, aut recusandae maxime modi alias minus! Nobis accusantium at quasi facere." },
     { id: 9, name: "Website template", price: "30$", description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis voluptatibus, perspiciatis incidunt quidem ducimus sint quibusdam, voluptatem voluptate voluptates, aut recusandae maxime modi alias minus! Nobis accusantium at quasi facere." },
    { id: 10, name: "Website template", price: "30$", description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis voluptatibus, perspiciatis incidunt quidem ducimus sint quibusdam, voluptatem voluptate voluptates, aut recusandae maxime modi alias minus! Nobis accusantium at quasi facere." },
    { id: 11, name: "Mobile app", price: "50$", description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis voluptatibus, perspiciatis incidunt quidem ducimus sint quibusdam, voluptatem voluptate voluptates, aut recusandae maxime modi alias minus! Nobis accusantium at quasi facere." },
    { id: 12, name: "Mobile app", price: "50$", description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis voluptatibus, perspiciatis incidunt quidem ducimus sint quibusdam, voluptatem voluptate voluptates, aut recusandae maxime modi alias minus! Nobis accusantium at quasi facere." },
    { id: 13, name: "Mobile app", price: "50$", description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis voluptatibus, perspiciatis incidunt quidem ducimus sint quibusdam, voluptatem voluptate voluptates, aut recusandae maxime modi alias minus! Nobis accusantium at quasi facere." },
    { id: 14, name: "Mobile app", price: "50$", description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis voluptatibus, perspiciatis incidunt quidem ducimus sint quibusdam, voluptatem voluptate voluptates, aut recusandae maxime modi alias minus! Nobis accusantium at quasi facere." },
    { id: 15, name: "Mobile app", price: "50$", description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis voluptatibus, perspiciatis incidunt quidem ducimus sint quibusdam, voluptatem voluptate voluptates, aut recusandae maxime modi alias minus! Nobis accusantium at quasi facere." },     
  ];

  // Найти продукт по ID
  const product = products.find((p) => p.id === parseInt(id));
  if (!product) {
    return <h2>Продукт не найден.</h2>;
  }

  // Состояние комментариев
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState("");

  // Состояние рейтинга
  const [rating, setRating] = useState(0);

  const handleAddComment = () => {
    if (newComment.trim()) {
      const comment = {
        author: "User", // Здесь можно подставить имя авторизованного пользователя
        text: newComment,
        date: new Date().toLocaleDateString(),
      };
      setComments([...comments, comment]);
      setNewComment("");
    }
  };

  const updateRating = (newRating) => {
    setRating(newRating);
  };

  return (
    <div className="product-details">
      {/* Изображение продукта */}
      <img src={tgCard} alt={product.name} className="product-image-pers" />
      <h2>{product.name}</h2>
      <p>{product.description}</p>
      <div className="product-price-details">Цена: {product.price}</div>
      <button className="buy-button">Купить</button>

      {/* Блок с рейтингом */}
      <div className="rating-section">
        <h3>Рейтинг продукта</h3>
        <div className="rating-stars">
          {[1, 2, 3, 4, 5].map((star) => (
            <span
              key={star}
              className={`star ${star <= rating ? 'star--filled' : ''}`}
              onClick={() => updateRating(star)}
            >
              ★
            </span>
          ))}
        </div>
        <p>Ваш рейтинг: {rating} из 5</p>
      </div>

      {/* Раздел с комментариями */}
      <div className="comments-section">
        <h3>Комментарии</h3>
        {comments.length === 0 ? (
          <p>Пока нет комментариев.</p>
        ) : (
          comments.map((comment, index) => (
            <div key={index} className="comment">
              <div className="comment-header">
                <strong>{comment.author}</strong> <span>{comment.date}</span>
              </div>
              <p>{comment.text}</p>
            </div>
          ))
        )}

        {/* Добавить комментарий */}
        <div className="add-comment">
          <textarea
            value={newComment}
            onChange={(e) => setNewComment(e.target.value)}
            placeholder="Напишите комментарий..."
          />
          <button onClick={handleAddComment}>Добавить</button>
        </div>
      </div>

      {/* Чат */}
      <div className="chat-section">
        <h3>Чат</h3>
        <div className="chat-box">
          {/* Пример сообщений */}
          <div className="message">Привет, как работает этот бот?</div>
          <div className="message response">Этот бот автоматизирует задачи!</div>
        </div>
        <div className="chat-input">
          <input type="text" placeholder="Введите сообщение..." />
          <button>Отправить</button>
        </div>
      </div>
    </div>
  );
}

export default ProductDetails;
