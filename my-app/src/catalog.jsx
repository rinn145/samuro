import React, { useState } from "react";
import ProductCard from "./productCard";

const Catalog = () => {
  const [selectedCategories, setSelectedCategories] = useState([]);

  const handleFilterChange = (categoryId) => {
    setSelectedCategories((prev) =>
      prev.includes(categoryId)
        ? prev.filter((id) => id !== categoryId)
        : [...prev, categoryId]
    );
  };

  return (
    <div>
      {/* Панель фильтра */}
      <div
        style={{
          padding: "10px",
          boxSizing: "border-box",
          position: "fixed",
          top: "80px",
          left: "0",
          background: "#fff",
          zIndex: "10",
          overflowY: "auto",
        }}
      >
        <h2 style={{ fontSize: "1.2em", margin: "0" }}>Catalog</h2>
        <ul style={{ listStyle: "none", padding: "0", margin: "0" }}>
          {Array(7)
            .fill("Category")
            .map((_, index) => (
              <li key={index} style={{ padding: "5px 0", borderBottom: "1px solid #eee" }}>
                <label>
                  <input
                    type="checkbox"
                    onChange={() => handleFilterChange(index)}
                  />
                  Category {index + 1}
                </label>
              </li>
            ))}
        </ul>
      </div>

    </div>
  );
};

export default Catalog;
