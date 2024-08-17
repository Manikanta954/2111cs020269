import React, { useEffect, useState } from 'react';
import { fetchProducts } from '../api';

const AllProducts = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProductData = async () => {
      try {
        const productList = await fetchProducts();
        console.log('Fetched products:', productList); // Log data to check
        setProducts(productList);
        setLoading(false);
      } catch (error) {
        setError('Failed to fetch products.');
        setLoading(false);
      }
    };

    fetchProductData();
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div>
      <h1>All Products</h1>
      {products.length > 0 ? (
        <ul>
          {products.map((product, index) => (
            <li key={index}>
              <a href={`/product/AMZ/Laptop/${product.productId}`}>
                {product.productName} - ${product.price}
              </a>
            </li>
          ))}
        </ul>
      ) : (
        <p>No products available</p>
      )}
    </div>
  );
};

export default AllProducts;
