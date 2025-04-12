import React from 'react';
import ProductList from './ProductList';
import '../styles/Products.css'; // Assuming you have a CSS file for styling

const Products = () => {
  return (
    <div className="container mt-5">
      <h2 className="section-title">Our Treats</h2>
      <ProductList />
    </div>
  );
};

export default Products;



