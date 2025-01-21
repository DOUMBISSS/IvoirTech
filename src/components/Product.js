// src/components/Product.js
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../context/CartContext';
import { FavoritesContext } from '../context/FavoritesContext';

const Product = ({ product }) => {
    const { dispatch: cartDispatch } = useContext(CartContext);
    const { dispatch: favoritesDispatch } = useContext(FavoritesContext);

    return (
        <div className="product">
            <Link to={`/product/${product._id}`}><img src={product.image} alt={product.title} />
                <h3>{product.title}</h3>
            </Link>
            <p>{product.price} $</p>
            <button onClick={() => cartDispatch({ type: 'ADD_TO_CART', payload: product })}>Add to Cart</button>
            <button onClick={() => favoritesDispatch({ type: 'ADD_TO_FAVORITES', payload: product })}>Add to Favorites</button>
        </div>
    );
};

export default Product;