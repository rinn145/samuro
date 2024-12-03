// import React from 'react';
// import './ProductForm.css';

// const ProductForm = () => {
//   const handleImageUploadClick = () => {
//     document.getElementById('file-input').click();
//   };

//   return (
//     <div className="product-form__container">
//       <h1 className="product-form__title">Adding a Product</h1>
      
//       <label htmlFor="title" className="product-form__label">Think of a title</label>
//       <input type="text" id="title" className="product-form__input" placeholder="Title" />
      
//       <label htmlFor="category" className="product-form__label">Category</label>
//       <select id="category" className="product-form__select">
//         <option value="" disabled selected>Select a category</option>
//         {/* Add more options as needed */}
//       </select>
      
//       <label htmlFor="short-description" className="product-form__label">Short description</label>
//       <input type="text" id="short-description" className="product-form__input" placeholder="This description will be in the product card" />
      
//       <label htmlFor="description" className="product-form__label">Write what you would like to tell about the product</label>
//       <textarea id="description" className="product-form__textarea" placeholder="Description"></textarea>
      
//       <label htmlFor="price" className="product-form__label">Price, $</label>
//       <input type="text" id="price" className="product-form__input product-form__input--price" placeholder="Price" />
      
//       <div className="product-form__image-upload" onClick={handleImageUploadClick}>
//         <input type="file" id="file-input" style={{ display: 'none' }} />
//         <img src="https://cdn-icons-png.flaticon.com/512/565/565302.png" alt="Upload icon" className="product-form__image-upload-icon" />
//         <span className="product-form__image-upload-text">Click here to add an image</span>
//       </div>
      
//       <button className="product-form__save-button">Save</button>
//     </div>
//   );
// };

// .product-form__container {
//   width: 500px;
//   background-color: #fff;
//   padding: 20px;
//   border-radius: 10px;
//   box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
// }

// .product-form__title {
//   font-size: 24px;
//   margin-bottom: 20px;
// }

// .product-form__label {
//   font-size: 14px;
//   display: block;
//   margin-top: 15px;
//   margin-bottom: 5px;
// }

// .product-form__input,
// .product-form__select,
// .product-form__textarea {
//   width: 100%;
//   padding: 10px;
//   border: 1px solid #ccc;
//   border-radius: 5px;
//   font-size: 14px;
// }

// .product-form__textarea {
//   height: 80px;
// }

// .product-form__input--price {
//   width: calc(100% - 20px);
//   display: inline-block;
// }

// .product-form__image-upload {
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   height: 150px;
//   border: 2px dashed #e0e0e0;
//   border-radius: 5px;
//   margin-top: 20px;
//   color: #e53935;
//   cursor: pointer;
// }

// .product-form__image-upload-icon {
//   width: 50px;
//   height: 50px;
// }

// .product-form__image-upload-text {
//   margin-left: 10px;
// }

// .product-form__save-button {
//   display: block;
//   width: 100%;
//   padding: 12px;
//   font-size: 16px;
//   color: #fff;
//   background-color: #e53935;
//   border: none;
//   border-radius: 5px;
//   cursor: pointer;
//   margin-top: 20px;
// }

// export default ProductForm;
