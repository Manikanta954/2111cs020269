
import axios from 'axios';

const BASE_URL = 'http://20.244.56.144/test/companies/AMZ/categories/Laptop/products?top=18&minPrice=1&maxPrice=10000';
const ACCESS_TOKEN = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJNYXBDbGFpbXMiOnsiZXhwIjoxNzIzODc2NzczLCJpYXQiOjE3MjM4NzY0NzMsImlzcyI6IkFmZm9yZG1lZCIsImp0aSI6IjIyNjE3NDM3LTc2MGQtNGVlNC05ZmE3LWY2MzE0NDVhODA3NSIsInN1YiI6InRhbGFnYW1hbWFuaWthbnRhOThAZ21haWwuY29tIn0sImNvbXBhbnlOYW1lIjoiQWZmb3JkbWVkIiwiY2xpZW50SUQiOiIyMjYxNzQzNy03NjBkLTRlZTQtOWZhNy1mNjMxNDQ1YTgwNzUiLCJjbGllbnRTZWNyZXQiOiJOT3hOcFFXU2JNTXBpdHNOIiwib3duZXJOYW1lIjoiTWFuaWthbnRhIiwib3duZXJFbWFpbCI6InRhbGFnYW1hbWFuaWthbnRhOThAZ21haWwuY29tIiwicm9sbE5vIjoiMjExMUNTMDIwMjY5In0.ulzuI8XpwdMp1Pm6a3demv2KqL-rrdJB7H9Anf7F6pE'; // Your actual token

export const fetchProducts = async (top = 18, minPrice = 1, maxPrice = 10000) => {
  try {
    const response = await axios.get(`${BASE_URL}`, {
      headers: {
        'Authorization': `Bearer ${ACCESS_TOKEN}`
      },
      params: {
        top,
        minPrice,
        maxPrice
      }
    });
    return response.data;
  } catch (error) {
    console.error('Error fetching products:', error);
    throw error;
  }
};
