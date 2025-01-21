// src/components/ProductList.js
import React, { useEffect, useState } from 'react';
import { fetchProducts } from '../services/productService';
import Product from './Product';

const ProductList = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const getProducts = async () => {
            const products = await fetchProducts();
            setProducts(products);
        };
        getProducts();
    }, []);

    return (
        <div className="product-list">
            {products.map(product => (
                <Product key={product._id} product={product} />
            ))}
        </div>
    );
};

export default ProductList;