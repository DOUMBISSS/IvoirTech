import React, { useEffect, useState, useContext } from 'react';
import { useParams } from 'react-router-dom';
import { fetchProductById } from '../services/productService';
import { CartContext } from '../context/CartContext';
import { FavoritesContext } from '../context/FavoritesContext';
import Footer from "../Pages/Footer";
import Zoom from "react-medium-image-zoom";
import "react-medium-image-zoom/dist/styles.css";
import { Link } from "react-router-dom";


const ProductDetail = () => {
    const { id } = useParams();
    const [product, setProduct] = useState(null);
    const { dispatch: cartDispatch } = useContext(CartContext);
    const [selectedImage, setSelectedImage] = useState('');
    const [items, setItems] = useState([]);
    const [recommendedProducts, setRecommendedProducts] = useState([]);
    const [loading, setLoading] = useState(true);

    // Charger tous les produits au premier montage
    useEffect(() => {
        const fetchAllProducts = async () => {
            try {
                const response = await fetch('https://back-fodex-ecommerce.onrender.com/products');
                const allProducts = await response.json();
                setItems(allProducts);
            } catch (error) {
                console.error('Error fetching products:', error);
            } finally {
                setLoading(false);
            }
        };
        fetchAllProducts();
    }, []);

    // Charger le produit sélectionné et ses recommandations
    useEffect(() => {
        const getProductAndRecommendations = async () => {
            try {
                setLoading(true);
                const fetchedProduct = await fetchProductById(id);
                setProduct(fetchedProduct);
                setSelectedImage(fetchedProduct.img);

                // Filtrer les recommandations par catégorie
                const filteredRecommendations = items.filter(item =>
                    item.categorie === fetchedProduct.categorie && item._id !== fetchedProduct._id
                );
                setRecommendedProducts(filteredRecommendations);
            } catch (error) {
                console.error("Error fetching product or recommendations:", error);
            } finally {
                setLoading(false);
            }
        };

        if (items.length > 0) {
            getProductAndRecommendations();
        }
    }, [id, items]);

    if (loading) {
        return <div>Chargement...</div>;
    }

    if (!product) {
        return <div>Aucun produit trouvé</div>;
    }


    return (
        <div>
            <div className='container'>
                <div className="bread">
                    <p>Accueil <i className="fa-solid fa-angle-right"></i> {product.categorie} <i className="fa-solid fa-angle-right"></i> {product.description} </p>
                </div>
                <div className="container--header"></div>
                <div className="container--article">
                    <div className="container--article--left--part">
                        <div className="container--article--left--part--content">
                        <div className='container--thumbnail--gallery'>
                          <div className="thumbnail-gallery">
                            {product.images && product.images.map((img, index) => (
                                <img
                                    key={index}
                                    src={`${process.env.PUBLIC_URL}/${img}`}
                                    alt={`Thumbnail ${index + 1}`}
                                    className={`thumbnail ${selectedImage === img ? 'active' : ''}`}
                                    onClick={() => setSelectedImage(img)}
                                />
                            ))}
                        </div>
                          </div>
                            <div className="container--article--left--part--content--image">  
                                {/* <img src={selectedImage} alt={product.title} className="main-image" /> */}
                                <Zoom>
                                    <img src={`${process.env.PUBLIC_URL}/${selectedImage}`} alt={product.title} className="main-image" />
                                </Zoom>
                            </div> 
                         
                        </div> 
                    </div>

                    <div key={id} className="container--article--right--part">
                        <h5 className='label'>{product.title}</h5>
                        <h4 className="name--article">{product.description}</h4>
                        <h6>Intel Core i7-8550U (8M Cache, 1.8 GHz), 16GB LPDDR3 2133MHz, 512GB PCIe SSD, 13.3'' 4K Ultra HD Touch 3840 x 2160 InfinityEdge, WLAN, Bluetooth, WebCam, Windows 10 Pro 64-bit</h6>
                        <p className='label'>Marque : {product.label}</p>
                        <p className='reference--article'>Référence: {product.reference}</p>
                        <p className='rating'>3 ratings</p>
                        <p className='availability'>En stock</p>
                        <p className='warranty'> Garantie: 1 mois </p>
                        <p className="price"> {product.price} F CFA</p>
                        <button className='btn__add__product' onClick={() => cartDispatch({ type: 'ADD_TO_CART', payload: product })}>
                            <i className="fa-solid fa-cart-shopping"></i> Ajouter au panier
                        </button>
                    </div>         
                </div>
                {/* <div className='pub'>
                    <img src="https://tpc.googlesyndication.com/simgad/4694351202817707795" alt="" />
                </div> */}
                <div className='section__explain__warranty'>
                   <div className='section__explain__warranty__container'>
                   <div className='section__explain__warranty__box'>
                        <div className='section__explain__warranty__box__left'>
                            <img src={`${process.env.PUBLIC_URL}/logphone.jpg`} alt="" />
                        </div>
                        <div className='section__explain__warranty__box__right'>
                         <h6>Plus de 3 000 produits</h6>
                         <p>En stock ou sur commande retrouvez toutes les références au meilleur prix</p>
                        </div>
                    </div>

                    <div className='section__explain__warranty__box'>
                        <div className='section__explain__warranty__box__left'>
                            <img src={`${process.env.PUBLIC_URL}/5790765.png`} alt="" />
                        </div>
                        <div className='section__explain__warranty__box__right'>
                         <h6>Paiement Sécurisé</h6>
                         <p>Paiement 3 ou 4 fois, CB, Visa, MasterCard</p>
                        </div>
                    </div>
                    <div className='section__explain__warranty__box'>
                        <div className='section__explain__warranty__box__left'>
                            <img src={`${process.env.PUBLIC_URL}/garantie.avif`} alt="" />
                        </div>
                        <div className='section__explain__warranty__box__right'>
                         <h6>Garantie 1 an</h6>
                         <p>Tous nos produits sont sous garantie</p>
                        </div>
                    </div>
                    <div className='section__explain__warranty__box'>
                        <div className='section__explain__warranty__box__left'>
                            <img src={`${process.env.PUBLIC_URL}/istock.jpg`} alt="" />
                        </div>
                        <div className='section__explain__warranty__box__right'>
                         <h6>Click & Collect</h6>
                         <p>Achetez sur notre site et récuperez votre commande dans notre boutique</p>
                        </div>
                    </div>
                    <div className='section__explain__warranty__box'>
                        <div className='section__explain__warranty__box__left'>
                            <img src={`${process.env.PUBLIC_URL}/calling.avif`} alt="" />
                        </div>
                        <div className='section__explain__warranty__box__right'>
                         <h6>Service Client</h6>
                         <p>Une équipe à votre ecoute 24h/2h</p>
                        </div>
                    </div>
                   </div>
                </div>
                <div className='section__product__recommanded'>
    <h4 className='Product__recommanded__header'>Produits recommandés pour vous</h4>
    <div className='section__product__recommanded__content'>
        {recommendedProducts
            .filter(item => 
                item.categorie === product.categorie && // Filtrer par catégorie
                item._id !== product._id // Exclure l'article actuel
            )
            .map(item => (
                <div key={item._id} className='featured__product__cards'>
                    <div className='product__cards__header'>
                        <p className='sales'>{item.title}</p>
                        <div className='featured__product__cards__header__images'>
                            <Link to={`/product/${item._id}`}>
                                <img src={`${process.env.PUBLIC_URL}/${item.img}`} alt={item.title} />
                            </Link>
                        </div>
                    </div>
                    <div className='featured__product__cards__body'>
                        <p className='product__desc'>{item.description}</p>
                        <p className='brand'>{item.label}</p>
                        <h5 className='product__categorie'>{item.categorie}</h5>
                        <p className="reference">{item.reference}</p>
                        <p className='product__price'>{item.price} FCFA</p>
                        <div className='button--block'>
                            <button className='btn__buy'>
                                <Link className='link__btn' to={`/product/${item._id}`}>Acheter</Link>
                            </button>
                            <button
                                className='btn__add'
                                onClick={() => cartDispatch({ type: 'ADD_TO_CART', payload: item })}
                            >
                                +
                            </button>
                        </div>
                    </div>
                </div>
            ))}
        {/* Message si aucun produit recommandé n'est trouvé */}
        {recommendedProducts.filter(item => item.categorie === product.categorie && item._id !== product._id).length === 0 && (
            <p>Aucun produit recommandé dans cette catégorie pour le moment.</p>
        )}
    </div>
</div>
                <div className='section__comment__container'>
                    <div className='section__comment__header'>
                        <h5 className='section__comment__title'>Commentaires clients vérifiés</h5>
                    </div>
                    <div className='section__comment__content'>
                        <div className='section__comment__left__part'>
                            <button className='btn__comment'>Laisser un commentaire</button>
                        </div>
                        <div className='section__comment__right__part'>
                            <div className='section__comment__right__content'>
                                <h5>Commentaires (500)</h5>
                                <h5>Note 5/20</h5>
                                <h6>un refrigerateur impecable. Glace et forme</h6>
                                <p>02/20/2024 par : Doumbia Fode</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer/>
        </div>
    );
};

export default ProductDetail;