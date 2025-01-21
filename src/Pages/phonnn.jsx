import React, { useEffect, useState, useContext } from 'react';
import { Link } from "react-router-dom";
import { CartContext } from '../context/CartContext';
import { FavoritesContext } from '../context/FavoritesContext';
import Footer from "./Footer";
import { Blocks } from "react-loader-spinner";

export default function Smartphones() {
    const [items, setItems] = useState([]);
    const [products, setProducts] = useState([]);
    const [categories, setCategories] = useState([]);
    const [brands, setBrands] = useState([]);
    const [selectedFilters, setSelectedFilters] = useState({ categories: [], brands: [], priceRange: [0, 100000], sortOrder: 'asc' });
    const [loading, setLoading] = useState(true);
    const { dispatch: cartDispatch } = useContext(CartContext);
    const { dispatch: favoritesDispatch } = useContext(FavoritesContext);

    useEffect(() => {
        fetch('https://back-fodex-ecommerce.onrender.com/products')
            .then(response => response.json())
            .then(items => {
                setItems(items);
                setProducts(items);
                setCategories([...new Set(items.map(item => item.categorie))]);
                setBrands([...new Set(items.map(item => item.label))]);
                setLoading(false);
            })
            .catch(error => {
                console.error('Error:', error);
                setLoading(false);
            });
    }, []);

    useEffect(() => {
        const filterAndSortProducts = () => {
            let filteredData = items.filter(item => 
                (selectedFilters.categories.length === 0 || selectedFilters.categories.includes(item.categorie)) &&
                (selectedFilters.brands.length === 0 || selectedFilters.brands.includes(item.label)) &&
                item.price >= selectedFilters.priceRange[0] &&
                item.price <= selectedFilters.priceRange[1]
            );

            filteredData.sort((a, b) => selectedFilters.sortOrder === 'asc' ? a.price - b.price : b.price - a.price);

            setProducts(filteredData);
        };

        filterAndSortProducts();
    }, [items, selectedFilters]);

    const handleFilterChange = (type, value) => {
        setSelectedFilters(prev => ({
            ...prev,
            [type]: prev[type].includes(value) ? prev[type].filter(item => item !== value) : [...prev[type], value]
        }));
    };

    const handlePriceRangeChange = (event) => {
        const { name, value } = event.target;
        setSelectedFilters(prev => ({
            ...prev,
            priceRange: name === 'min' 
                ? [Number(value), prev.priceRange[1]] 
                : [prev.priceRange[0], Number(value)]
        }));
    };

    const handleSortOrderChange = (event) => {
        setSelectedFilters(prev => ({
            ...prev,
            sortOrder: event.target.value
        }));
    };

    return (
        <div>
            <div className='container'>
                <div className="bread">
                    <p>Accueil <i className="fa-solid fa-angle-right"></i> Smartphones & Tablettes</p>
                </div>
                <h2 className="header__accessories">Smartphones & Tablettes</h2>
                <div className="part__products__header">
                    <div className="part__products__header__images">
                        <img src="https://tpc.googlesyndication.com/simgad/15905478928241312474" alt="" />
                    </div>
                    <p>Découvrez les nouveautés de notre collection pour homme...</p>
                    <div className="section__partner">
                        <p className="container--header">Nos partenaires </p>
                        <div className="section__partenaires">
                            <div className="section__partenaires__content">
                                {/* Partner logos */}
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container-contents">
                    <div className="sidebar">
                        <div className="filter--container">
                            <h6 className="filter__title">Categories</h6>
                            <h6>{products.length} résultat(s)</h6>
                            <button className="btn__all" onClick={() => setProducts(items)}>All</button>
                            <div className="filter-group">
                                {categories.map(cat => (
                                    <label key={cat} className="label__key">
                                        <input type="checkbox" 
                                            checked={selectedFilters.categories.includes(cat)} 
                                            onChange={() => handleFilterChange('categories', cat)} />
                                        {cat}
                                    </label>
                                ))}
                            </div>
                            <h6 className="filter__title">Brands</h6>
                            <div className="filter-group">
                                {brands.map(brand => (
                                    <label key={brand} className="label__key">
                                        <input type="checkbox" 
                                            checked={selectedFilters.brands.includes(brand)} 
                                            onChange={() => handleFilterChange('brands', brand)} />
                                        {brand}
                                    </label>
                                ))}
                            </div>
                            <h6 className="filter__title">Price Range</h6>
                            <div className="filter-group">
                                <input type="number" 
                                    name="min" 
                                    value={selectedFilters.priceRange[0]} 
                                    onChange={handlePriceRangeChange}  
                                    placeholder="Min price" />
                                <input type="number" 
                                    name="max" 
                                    value={selectedFilters.priceRange[1]} 
                                    onChange={handlePriceRangeChange} 
                                    placeholder="Max price" />
                            </div>
                            <h6 className="filter__title">Sort By</h6>
                            <div className="filter-group">
                                <select value={selectedFilters.sortOrder} onChange={handleSortOrderChange}>
                                    <option value="asc">Price Low to High</option>
                                    <option value="desc">Price High to Low</option>
                                </select>
                            </div>
                        </div>
                    </div>
                    <div className="part__products">
                        {loading ? (
                            <div className='load'>
                                <Blocks visible={true} height="100" width="100%" ariaLabel="blocks-loading" wrapperClass="blocks-wrapper" />
                            </div>
                        ) : (
                            <div className="part__accessories">
                                {products.map(item => (
                                    <div key={item._id} className='featured__product__cards'>
                                        <div className='product__cards__header'>
                                            <p className='sales'>{item.title}</p>
                                            <div className='featured__product__cards__header__images'>
                                                <Link to={`/product/${item._id}`}><img src={item.img} alt="" /></Link>
                                            </div>
                                        </div>
                                        <div className='featured__product__cards__body'>
                                            <p className='product__desc'>{item.description}</p>
                                            <p className='brand'>{item.label}</p>
                                            <h5 className='product__categorie'>{item.categorie}</h5>
                                            <p className="reference">{item.reference}</p>
                                            <p className="info">2 en stock</p>
                                            <p className='product__price'>{item.price} FCFA</p>
                                            <div className='button--block'>
                                                <button className='btn__buy'><Link className='link__btn' to={`/product/${item._id}`}>Acheter</Link></button>
                                                <button className='btn__add' onClick={() => cartDispatch({ type: 'ADD_TO_CART', payload: item })}>+</button>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
}