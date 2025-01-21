import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "./Footer";
import ProductList from '../components/ProductList';
import Cart from '../components/Cart';
import Favorites from '../components/Favorites';
import React, { useEffect, useState, useContext } from 'react';
import { fetchProducts } from '../services/productService';
import Product from '../components/Product';
import { CartContext } from '../context/CartContext';
import { FavoritesContext } from '../context/FavoritesContext';
import Notification from "../components/Notification";
import axios from "axios";

export default function Smartphones() {
    const [dis, setDis] = useState(true);
    const [filter, setFilter] = useState(false);
    const [items, setItems] = useState([]);
    const [products, setProducts] = useState([]);
    const [categories, setCategories] = useState([]);
    const [selectedCategories, setSelectedCategories] = useState([]);
    const [priceRange, setPriceRange] = useState([0, 100000]);
    const [sortOrder, setSortOrder] = useState('asc');
    const [recommendedProducts, setRecommendedProducts] = useState([]);
    const { dispatch: cartDispatch } = useContext(CartContext);
    const { dispatch: favoritesDispatch } = useContext(FavoritesContext);
    const [notification, setNotification] = useState('');
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState(1);
    const [loading, setLoading] = useState(true);
    const [brands, setBrands] = useState([]);
const [selectedBrands, setSelectedBrands] = useState([]);
const [isRecommended, setIsRecommended] = useState(false);

    useEffect(() => {
        fetch('https://back-fodex-ecommerce.onrender.com/products')
            .then(response => response.json())
            .then(items => {
                setItems(items);
                setProducts(items);
                setCategories([...new Set(items.map(item => item.categorie))]);
                setBrands([...new Set(items.map(item => item.brand))]);
                setRecommendedProducts(items.filter(item => item.isRecommended)); // Assuming `isRecommended` property
            })
            .catch(error => console.error('Error:', error));
    }, []);

    const filterResult = () => {
        let filteredData = items;

        if (selectedCategories.length > 0) {
            filteredData = filteredData.filter(item => selectedCategories.includes(item.categorie));
        }
        if (selectedBrands.length > 0) {
            filteredData = filteredData.filter(item => selectedBrands.includes(item.marque));
        }

        filteredData = filteredData.filter(item => item.price >= priceRange[0] && item.price <= priceRange[1]);

        filteredData.sort((a, b) => sortOrder === 'asc' ? a.price - b.price : b.price - a.price);

        setProducts(filteredData);
        setDis(false);
    };

    useEffect(() => {
        filterResult();
    }, [selectedCategories, priceRange, sortOrder,isRecommended]);

    const handleCategoryChange = (category) => {
        setSelectedCategories(prevCategories => 
            prevCategories.includes(category) 
            ? prevCategories.filter(cat => cat !== category) 
            : [...prevCategories, category]
        );
    };

    const handlePriceRangeChange = (event) => {
        const { value, name } = event.target;
        setPriceRange(prevRange => name === 'min' 
            ? [Number(value), prevRange[1]] 
            : [prevRange[0], Number(value)]
        );
    };
    const handleBrandChange = (brand) => {
        setSelectedBrands(prevBrands => 
            prevBrands.includes(brand) 
            ? prevBrands.filter(b => b !== brand) 
            : [...prevBrands, brand]
        );
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
                    <div className="col-12 col-md-12">
                        <p className="container--header">Nos partenaires</p>
                        <div className="section__partenaires">
                            {/* Partner logos */}
                        </div>
                    </div>
                </div>
                <div className="container-contents">
                    <div className="sidebar">
                        <div className="filter--container">
                            <h4>CATÉGORIE</h4>
                            <h6>{products.length} résultat(s)</h6>
                            <button className="btn__all" onClick={() => setProducts(items)}>All</button>
                            <h6 className="filter__title">Categories</h6>
                            <div className="filter-group">
                                <div className="filter-group-content">
                                {categories.map(cat => (
                                    <label key={cat} className="label__key">
                                        <input type="checkbox" checked={selectedCategories.includes(cat)} onChange={() => handleCategoryChange(cat)}  />
                                        {cat}
                                    </label>
                                ))}
                                </div>
                            </div >
                            <div className="filter-group">
                            <h6 className="filter__title">Brands</h6>
                            {brands.map(brand => (
                                <label key={brand} className="label__key">
                                    <input type="checkbox" checked={selectedBrands.includes(brand)} onChange={() => handleBrandChange(brand)} />
                                    {brand}
                                </label>
                            ))}
                        </div>
                            <h6 className="filter__title">Price Range</h6>
                            <div className="filter-group">
                                <input type="number"  name="min" value={priceRange[0]} onChange={handlePriceRangeChange}  placeholder="Min price" />
                                <input type="number" name="max" value={priceRange[1]} onChange={handlePriceRangeChange} placeholder="Max price" />
                            </div>
                            <h6 className="filter__title">Sort By</h6>
                            
                            <div className="filter-group">
                                <select value={sortOrder} onChange={(e) => setSortOrder(e.target.value)}>
                                    <option value="asc">Price Low to High</option>
                                    <option value="desc">Price High to Low</option>
                                </select>
                            </div>
                        </div>
                    </div>
                    <div className="part__products">
                        {dis ? (
                            <div className="section__part__presentaions">
                                <div className="part__presentaions">
                                    <div className="part__presentaions__pictures">
                                        <img src="https://nasco.ci/assets/images/categories/banners/fridge_1.jpg" alt="" />
                                    </div>
                                </div>
                                <div className="section__part__presentaions__description">
                                    <h5 className="desc__header">Pourquoi acheter votre matériel informatique sur EasyShopping Côte d’Ivoire ?</h5>
                                    <p>L’informatique, encore appelé traitement automatique de l’information...</p>
                                </div>
                            </div>
                        ) : (
                           <div>
                             <div className="container__sort__filter">
                                <div className="content__sort__filter">
                                <div className="filter-group">
                                <select value={sortOrder} onChange={(e) => setSortOrder(e.target.value)}>
                                    <option value="asc">Price Low to High</option>
                                    <option value="desc">Price High to Low</option>
                                </select>
                            </div>
                                </div>
                            </div>
                            <div className="part__accessories">
                                {products.map(item => (
                                    <div key={item._id} className='featured__product__cards'>
                                        <div className='product__cards__header'>
                                            <p className='sales'>{item.title}</p>
                                            <div className='featured__product__cards__header__images'>
                                                {/* <img src={item.image} alt="" /> */}
                                                 {/* <Link to={`/product/${item._id}`}><img src={`${process.env.PUBLIC_URL}/${item.image}`} alt="" /></Link> */}
                                                 <Link to={`/product/${item._id}`}><img src={item.image} alt="" /></Link>
                                            </div>
                                        </div>
                                        <div className='featured__product__cards__body'>
                                            <p className='product__desc'>{item.description}</p>
                                            <p className='brand'>{item.marque}</p>
                                            <h5 className='product__categorie'>Smartphone</h5>
                                            <p className="reference">Réf:ECMHDEDIPACCHCB3</p>
                                            <p className="info">2 en stock</p>
                                            <p className='product__price'>{item.price} FCFA</p>
                                            <div className='button--block'>
                                                <Link className='link__btn' to={`/product/${item._id}`}>
                                                    <button className='btn__buy'>Acheter</button>
                                                </Link>
                                                <button className='btn__add' onClick={() => cartDispatch({ type: 'ADD_TO_CART', payload: item })}>+</button>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                           </div>
                        )}
                        <div className="recommended-products">
                            <h3>Recommended Products</h3>
                            {recommendedProducts.map(item => (
                                <div key={item._id} className='recommended__product__card'>
                                    <img src={item.image} alt={item.title} />
                                    <p>{item.title}</p>
                                    <p>{item.price} FCFA</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
              
            </div>
            <Footer />
        </div>
    );
}