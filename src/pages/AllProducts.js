import React, { useState, useEffect } from 'react';
import { fetchProducts } from '../api';
import ProductCard from '../components/ProductCard';

const AllProducts = () => {
  const [products, setProducts] = useState([]);
  const [filters, setFilters] = useState({
    company: 'AZD',
    category: 'Laptop',
    minPrice: 0,
    maxPrice: 10000,
    n: 10,
  });

  useEffect(() => {
    const getProducts = async () => {
      try {
        const data = await fetchProducts(
          filters.company,
          filters.category,
          filters.minPrice,
          filters.maxPrice,
          filters.n
        );
        setProducts(data);
      } catch (error) {
        console.error('Failed to fetch products:', error);
      }
    };
    getProducts();
  }, [filters]);

  return (
    <div className="all-products">
      <h1>All Products</h1>
      <div className="product-list">
        {products.map((product, index) => (
          <ProductCard key={index} product={product} />
        ))}
      </div>
    </div>
  );
};

export default AllProducts;
