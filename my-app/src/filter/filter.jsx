import React from "react";
import "../filter/filter.css";

const Filter = () => {
  const categories = [
    "Category 1",
    "Category 1",
    "Category 1",
    "Category 1",
    "Category 1",
    "Category 1",
    "Category 1",
    "Category 1",
  ];

  return (
    <div className="filter-container">
      <div className="filter-header">
        <i className="fas fa-filter"></i>
        <span>Filter products</span>
      </div>
      {categories.map((category, index) => (
        <div className="filter-item" key={index}>
          <label>{category}</label>
          <i className="fas fa-check check-icon"></i>
        </div>
      ))}
    </div>
  );
};

export default Filter;
