import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

function CategoryPage() {
  const { categoryId } = useParams();
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios.get(`https://back-fodex-ecommerce.onrender.com/categories/${categoryId}/products`)
      .then(response => setProducts(response.data))
      .catch(error => console.error(error));
  }, [categoryId]);

  return (
    <div>
      <h1>Products</h1>
      <ul>
        {products.map(product => (
          <li key={product._id}>
            {product.name} - ${product.price}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default CategoryPage;