import React, { useEffect, useState } from 'react';
import { fetchProducts } from '../api';
import { useParams } from 'react-router-dom';

const ProductPage = () => {
  const { companyId, categoryId, productId } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const productList = await fetchProducts();
        console.log('Fetched products:', productList); // Log data to check
        const foundProduct = productList.find(p => p.productId === productId);
        setProduct(foundProduct);
        setLoading(false);
      } catch (error) {
        setError('Failed to fetch product details.');
        setLoading(false);
      }
    };

    fetchProduct();
  }, [companyId, categoryId, productId]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div>
      {product ? (
        <div>
          <h1>{product.productName}</h1>
          <p>Price: ${product.price}</p>
          <p>Rating: {product.rating}</p>
          <p>Discount: {product.discount}%</p>
          <p>Availability: {product.availability}</p>
        </div>
      ) : (
        <p>Product not found</p>
      )}
    </div>
  );
};

export default ProductPage;
