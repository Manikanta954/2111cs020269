import axios from 'axios';

const BASE_URL = 'http://29.244.56.144/test';

export const fetchProducts = async (company, category, minPrice, maxPrice, n) => {
  try {
    const response = await axios.get(
      `${BASE_URL}/companies/${company}/categories/${category}/products/top-${n}minPrice-${minPrice}maxPrice-${maxPrice}`
    );
    return response.data;
  } catch (error) {
    console.error('Error fetching products:', error);
    throw error;
  }
};
