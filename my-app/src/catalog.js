import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './index.js';
import './assets/fonts.css'; 


const Index = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
  
    // Функция для открытия модального окна
    const openModal = () => {
      setIsModalOpen(true);
    };
  
    // Функция для закрытия модального окна
    const closeModal = () => {
      setIsModalOpen(false);
    };
  
    return (
      <div>
        {/* Кнопка для открытия каталога */}
        <button onClick={openModal} className="catalog-buttons">Каталог</button>
        {/* Модальное окно для каталога */}
        {isModalOpen && (
          <div className="modal-overlay">
            <div className="modal-content">
              <h2>Каталог</h2>
              {/* Рендеринг категорий и продуктов в модальном окне */}
              {categories.map((category, index) => (
                <div key={index}>
                  <h3>{category.name}</h3>
                  <ul>
                    {category.products.map((product, productIndex) => (
                      <li key={productIndex}>{product}</li>
                    ))}
                  </ul>
                </div>
              ))}
              <button onClick={closeModal} className="close-button">Закрыть</button>
            </div>
          </div>
        )}
      </div>
    );
  };
  
export default Index;
ReactDOM.render(<Index />, document.getElementById("catalog-button"));
