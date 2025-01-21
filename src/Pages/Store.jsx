import { Link} from "react-router-dom";
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

export default function Store (){
    const [dis,setDis]=useState(true);
    const [filter,setFilter] = useState(false);
    const [items,setCat]=useState([]);
    const [products, setProducts] = useState([]);
    const { dispatch: cartDispatch } = useContext(CartContext);
    const { dispatch: favoritesDispatch } = useContext(FavoritesContext);
    const [notification, setNotification] = useState('');

    useEffect(() => {
        const getProducts = async () => {
            const productsFromAPI = await fetchProducts();
            setProducts(productsFromAPI);
        };

        getProducts();
    }, []);

    const addToCart = (product) => {
        cartDispatch({ type: 'ADD_TO_CART', payload: product });
        setNotification('Product added to cart!');
    };

    const addToFavorites = (product) => {
        favoritesDispatch({ type: 'ADD_TO_FAVORITES', payload: product });
        setNotification('Product added to favorit!');
    };

    // useEffect(() => {
    //     fetch('https://back-doc.onrender.com/products')
        // 		.then(response => response.json())
        // 		.then(items =>  setCat(items))
        // 		.catch(error => console.error('Error:', error));

    //     })
        console.log(items)
    const closeFilter = ()=> {
          setFilter (false)
      }
      const showFilter =()=>{
          setFilter (true)
      }

    const filterResult = (catItem)=>{
        const filterData = products.filter((products) =>  products.marque === catItem )
            setCat(filterData);
            setDis(false);
    }



    return (
        <div>

        <div className='container'>
        <div className="bread">
                        <p>Accueil <i class="fa-solid fa-angle-right"></i> Nos magasins</p>
                </div>

                <div className="container-contents">
          <div className="sidebar">
          <div className="filter--container">
                <h5>Affiner votre recherche</h5>
                <h6>Communes</h6>
                <p className="link__store">Abobo (2)</p>
                <p className="link__store">Adjamé (3)</p>
                <p className="link__store">Cocody (3)</p>
                <p className="link__store">Odienné (8)</p>
                <p className="link__store">Plateau (8)</p>
                <p className="link__store">Yopougon (8)</p>
                </div>
                </div>
                <div className="main__part__store">
                        <h1 className="store__header">Trouver un magasin</h1>
                        <div className="container__store">
                            <div className="store__box">
                                <h4 className="title__store">ELECTROSHOP 7 - Yopougon</h4>
                                <p><i className="fa-solid fa-phone"></i> : 07 49 85 75 57 / 01 71 74 53 57</p>
                                <p><i className="fa-solid fa-location-dot"></i> : Yopougon Garde de sable</p>
                                <p><i className="fa-solid fa-calendar-days"></i> : 08H - 18H</p>
                            </div>

                            <div className="store__box">
                                <h4 className="title__store">ELECTROSHOP 8 - Treichville</h4>
                                <p><i className="fa-solid fa-phone"></i> : 07 49 85 75 57 / 01 71 74 53 57</p>
                                <p><i className="fa-solid fa-location-dot"></i> : Treichville Avenue 16 Rue 12</p>
                                <p><i className="fa-solid fa-calendar-days"></i> : 08H - 18H</p>
                            </div>

                            <div className="store__box">
                                <h4 className="title__store">ELECTROSHOP 9 - Plateau</h4>
                                <p><i className="fa-solid fa-phone"></i> : 07 49 85 75 57 / 01 71 74 53 57</p>
                                <p><i className="fa-solid fa-location-dot"></i> : Plateau Rue du Commerce</p>
                                <p><i className="fa-solid fa-calendar-days"></i> : 08H - 18H</p>
                            </div>

                            <div className="store__box">
                                <h4 className="title__store">ELECTROSHOP 10 - Abobo</h4>
                                <p><i className="fa-solid fa-phone"></i> : 07 49 85 75 57 / 01 71 74 53 57</p>
                                <p><i className="fa-solid fa-location-dot"></i> : Abobo Mairie (carrefour Marché)</p>
                                <p><i className="fa-solid fa-calendar-days"></i> : 08H - 18H</p>
                            </div>

                            <div className="store__box">
                                <h4 className="title__store">ELECTROSHOP 11 - Adjamé</h4>
                                <p><i className="fa-solid fa-phone"></i> : 07 49 85 75 57 / 01 71 74 53 57</p>
                                <p><i className="fa-solid fa-location-dot"></i> : Adjamé Boulevard Carde, Marché Gouro</p>
                                <p><i className="fa-solid fa-calendar-days"></i> : 08H - 18H</p>
                            </div>

                            <div className="store__box">
                                <h4 className="title__store">ELECTROSHOP 12 - Marcory</h4>
                                <p><i className="fa-solid fa-phone"></i> : 07 49 85 75 57 / 01 71 74 53 57</p>
                                <p><i className="fa-solid fa-location-dot"></i> : Yopougon Garde de sable</p>
                                <p><i className="fa-solid fa-calendar-days"></i> : 08H - 18H</p>
                            </div>

                        </div>
                    </div>

        </div>
                </div>
     </div>
    );
}