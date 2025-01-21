// src/context/FavoritesContext.js
import React, { createContext, useReducer, useEffect } from 'react';
import { favoritesReducer } from '../reducers/favoritesReducer';

export const FavoritesContext = createContext();

const FavoritesContextProvider = (props) => {
    const [favorites, dispatch] = useReducer(favoritesReducer, [], () => {
        const localData = localStorage.getItem('favorites');
        return localData ? JSON.parse(localData) : [];
    });

    useEffect(() => {
        localStorage.setItem('favorites', JSON.stringify(favorites));
    }, [favorites]);

    return (
        <FavoritesContext.Provider value={{ favorites, dispatch }}>
            {props.children}
        </FavoritesContext.Provider>
    );
};

export default FavoritesContextProvider;