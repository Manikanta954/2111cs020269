import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchProducts } from '../api';
import ProductDetails from '../components/ProductDetails';

const ProductPage = () => {
  const { companyId, categoryId, productId } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const getProduct = async () => {
      try {
        const data = await fetchProducts(companyId, categoryId, 0, 10000, 1);
        const foundProduct = data.find((p) => p.productId === productId);
        setProduct(foundProduct);
      } catch (error) {
        console.error('Failed to fetch product:', error);
      }
    };
    getProduct();
  }, [companyId, categoryId, productId]);

  return (
    <div className="product-page">
      {product ? <ProductDetails product={product} /> : <p>Loading...</p>}
    </div>
  );
};

export default ProductPage;
