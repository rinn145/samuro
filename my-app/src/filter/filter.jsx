// import React, { useState } from "react";
// import "../filter/filter.css";
// import '../productCard/productCard';

// const Filter = () => {
//   const categories = [
//     { id: 1, name: "Bot telegram" },
//     { id: 2, name: "Website template" },
//     { id: 3, name: "Mobile app" },

//   ];

//   // Состояние для отслеживания выбранных категорий
//   const [selectedCategories, setSelectedCategories] = useState([]);

//   // Обработчик клика по категории
//   const toggleCategory = (id) => {
//     setSelectedCategories((prev) =>
//       prev.includes(id)
//         ? prev.filter((categoryId) => categoryId !== id) // Удалить если уже выбран
//         : [...prev, id] // Добавить если не выбран
//     );
//   };

//   return (
//     <div className="filter-container">
//       <div className="filter-header">
//         <i className="fas fa-filter"></i>
//         <span>Filter products</span>
//       </div>
//       {categories.map((category) => (
//         <div
//           className={`filter-item ${
//             selectedCategories.includes(category.id) ? "active" : ""
//           }`}
//           key={category.id}
//           onClick={() => toggleCategory(category.id)}
//         >
//           <label>{category.name}</label>
//           {selectedCategories.includes(category.id) && (
//             <i className="fas fa-check check-icon"></i>
//           )}
//         </div>
//       ))}
//     </div>
//   );
// };

// export default Filter;
