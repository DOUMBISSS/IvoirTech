import React, { useContext } from 'react';
import { FavoritesContext } from '../context/FavoritesContext';

const Favorites = () => {
    const { favorites, dispatch } = useContext(FavoritesContext);

    return (
        <div className="favorites">
            <h2>Your Favorites</h2>
            {favorites.length === 0 ? (
                <p>You have no favorites yet</p>
            ) : (
                <ul>
                    {favorites.map(item => (
                        <li key={item._id}>
                            {item.title}
                            <button onClick={() => dispatch({ type: 'REMOVE_FROM_FAVORITES', payload: item.id })}>Remove</button>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default Favorites;