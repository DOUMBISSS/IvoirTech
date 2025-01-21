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



export default function Electromenager (){
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
                        <p>Accueil <i class="fa-solid fa-angle-right"></i> Electroménager</p>
                </div>
                <h2 className="header__accessories">Electroménager </h2>

                <div className="part__products__header">
                <div className="part__products__header__images">
                <img src="https://tpc.googlesyndication.com/simgad/15905478928241312474" alt="" />
                </div>
                {/* <p className="container--header">Electroménager</p> */}
                <p>Découvrez les nouveautés de notre collection pour homme. Vous trouverez des must-haves de tous les jours tels que hauts et t-shirts, ensembles décontractés et sous-vêtements.
                         Et pour ce qui est des pantalons pour homme, il y a des joggings et des pantalons cargo de toutes les couleurs. 
                        </p>
                        <div className="col-12 col-md-12">
                            <p className="container--header">Nos partenaires </p>
                            <div className="section__partenaires">
                                <div className="section__partenaires__content">
                                    <img src="https://img.freepik.com/icones-gratuites/mac-os_318-10374.jpg" alt="" />
                                    <img src="https://www.1min30.com/wp-content/uploads/2018/10/Embl%C3%A8me-Huawei.jpg" alt="" />
                                    <img src="https://logos-marques.com/wp-content/uploads/2021/01/logo-Xiaomi.jpg" alt="" />
                                    <img src="https://static.vecteezy.com/ti/vecteur-libre/p3/20927489-infinix-marque-logo-telephone-symbole-nom-noir-conception-chine-mobile-vecteur-illustration-gratuit-vectoriel.jpg" alt="" />
                                    <img src="https://logos-marques.com/wp-content/uploads/2022/04/Oppo-logo.png" alt="" />
                                    <img src="https://images.samsung.com/is/image/samsung/assets/africa_fr/about-us/brand/logo/mo/360_197_1.png?$FB_TYPE_B_PNG$" alt="" />
                                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/7a/Wiko_logo.svg/1200px-Wiko_logo.svg.png" alt="" />
                                </div>
                            </div>
                        </div>
                </div>
                <div>
             <div className="filter" onMouseOver={showFilter}>
                        <i className="fa-solid fa-arrow-up-wide-short"></i>
                        <p>Filtre</p>
            </div>
                <div className={filter ? "filterbar show--filterbar" : "filterbar" }>
                        <div className='filterbar--content' onMouseLeave={closeFilter}>
                          <div className='btn--close--sidebar'onClick={closeFilter}> <i className="fa-solid fa-xmark"></i></div>

                          <div className='filter--sidebar'>
                         <div className="filter--container">
                                <h4>CATÉGORIE PAR PRODUIT</h4>
                                <div class="accordion accordion-flush" id="accordionFlushExample">
            <div class="accordion-item">
                <h2 class="accordion-header" id="flush-headingOne">
                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                        REFRIGERATEUR
                </button>
                </h2>
                <div id="flush-collapseOne" class="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
                <div class="accordion-body">
                        <p className="btn__filter" onClick={()=>{filterResult('Visage')}}>Americain (Side by Side)</p>
                        <p className="btn__filter" onClick={()=>{filterResult('Rouge à Lèvres')}}>Combiné</p>
                        <p className="btn__filter" onClick={()=>{filterResult('Visage')}}>Multi-Portes</p>
                </div>
                </div>
                </div>
                <div class="accordion-item">
                <h2 class="accordion-header" id="flush-headingThree">
                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
                        CAPACITE
                </button>
                </h2>
                <div id="flush-collapseThree" class="accordion-collapse collapse" aria-labelledby="flush-headingThree" data-bs-parent="#accordionFlushExample">
                <div class="accordion-body">
                <p className="btn__filter"  onClick={()=>{filterResult('Parfums homme')}}>150 - 300 Litres</p>
                        <p className="btn__filter"  onClick={()=>{filterResult('Parfums homme')}}>300 - 450 Litres</p>
                        <p className="btn__filter"  onClick={()=>{filterResult('Parfums femme')}}>450 - 600 Litres</p>
                        <p className="btn__filter"  onClick={()=>{filterResult('Parfums homme')}}>600 Litres et plus </p>
                </div>
                </div>
                </div>
                <div class="accordion-item">
                <h2 class="accordion-header" id="flush-headingFive">
                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseFive" aria-expanded="false" aria-controls="flush-collapseFive">
                        CONGELATEUR
                </button>
                </h2>
                <div id="flush-collapseFive" class="accordion-collapse collapse" aria-labelledby="flush-headingFive" data-bs-parent="#accordionFlushExample">
                <div class="accordion-body">
                        <p className="btn__filter" onClick={()=>{filterResult('Jouets')}}>Vertical</p>
                        <p className="btn__filter" onClick={()=>{filterResult('Préservatifs')}}>Horizontal</p>
                </div>
                </div>
                </div>

                <div class="accordion-item">
                <h2 class="accordion-header" id="flush-headingSix">
                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseSix" aria-expanded="false" aria-controls="flush-collapseSix">
                        CUISSON
                </button>
                </h2>
                <div id="flush-collapseSix" class="accordion-collapse collapse" aria-labelledby="flush-headingSix" data-bs-parent="#accordionFlushExample">
                <div class="accordion-body">
                        <p className="btn__filter" onClick={()=>{filterResult('Jouets')}}>Cuisinière</p>
                        <p className="btn__filter" onClick={()=>{filterResult('Préservatifs')}}>Micro-ondes</p>
                        <p className="btn__filter" onClick={()=>{filterResult('Jouets')}}>Cuiseur de riz</p>
                        <p className="btn__filter" onClick={()=>{filterResult('Préservatifs')}}>Mixeur & Blender</p>
                        <p className="btn__filter" onClick={()=>{filterResult('Jouets')}}>Cafetière</p>
                </div>
                </div>
                </div>
                <div class="accordion-item">
                <h2 class="accordion-header" id="flush-headingSeven">
                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseSeven" aria-expanded="false" aria-controls="flush-collapseSeven">
                        LAVAGE & ENTRETIEN
                </button>
                </h2>
                <div id="flush-collapseSeven" class="accordion-collapse collapse" aria-labelledby="flush-headingSeven" data-bs-parent="#accordionFlushExample">
                <div class="accordion-body">
                        <p className="btn__filter" onClick={()=>{filterResult('Jouets')}}>Lave ling</p>
                        <p className="btn__filter" onClick={()=>{filterResult('Préservatifs')}}>Sèche linge</p>
                        <p className="btn__filter" onClick={()=>{filterResult('Jouets')}}>Aspirateur</p>
                </div>
                </div>
                </div>

                <div class="accordion-item">
                <h2 class="accordion-header" id="flush-headingSeven">
                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseSeven" aria-expanded="false" aria-controls="flush-collapseSeven">
                        FORMAT
                </button>
                </h2>
                <div id="flush-collapseSeven" class="accordion-collapse collapse" aria-labelledby="flush-headingSeven" data-bs-parent="#accordionFlushExample">
                <div class="accordion-body">
                        <p className="btn__filter" onClick={()=>{filterResult('Visage')}}>Allège</p>
                        <p className="btn__filter" onClick={()=>{filterResult('Rouge à Lèvres')}}>Armoire</p>
                        <p className="btn__filter" onClick={()=>{filterResult('Visage')}}>Mural</p>
                        <p className="btn__filter" onClick={()=>{filterResult('Rouge à Lèvres')}}>Portable</p>
                </div>
                </div>
                </div>


                <p className="title__cat">Autres categories</p>
                        <p className="btn__filter"  onClick={()=>{filterResult('Parfums homme')}}>Télévision</p>
                        <p className="btn__filter"  onClick={()=>{filterResult('Parfums femme')}}>Audios et Hifi</p>
                        <p className="btn__filter"  onClick={()=>{filterResult('Parfums homme')}}>Climatisation</p>
                        <p className="btn__filter"  onClick={()=>{filterResult('Deo')}}>Chauffage et traitement d'air</p>
                        <p className="btn__filter"  onClick={()=>{filterResult('Parfums homme')}}>Réfrigerateur</p>
                        <p className="btn__filter"  onClick={()=>{filterResult('Parfums femme')}}>Congélateur</p>
                        <p className="btn__filter"  onClick={()=>{filterResult('Parfums homme')}}>Cuisine et Maison</p>
                        <p className="btn__filter"  onClick={()=>{filterResult('Deo')}}>Lavage et Entretien</p>
                        <p className="btn__filter"  onClick={()=>{filterResult('Deo')}}>Accessoires</p>
                        <p className="btn__filter"  onClick={()=>{filterResult('Parfums homme')}}>Réfroidisseur</p>

                </div>
                                </div>
                                    </div>
                                </div>
                        </div>

             </div> 
          <div className="container-contents">
          <div className="sidebar">
          <div className="filter--container">
                <h4>CATÉGORIE</h4>
            {/* <h6>{items.length} résultat(s)</h6> */}
            <div class="accordion accordion-flush" id="accordionFlushExample">
            <div class="accordion-item">
                <h2 class="accordion-header" id="flush-headingOne">
                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                        Réfriferateur
                </button>
                </h2>
                <div id="flush-collapseOne" class="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
                <div class="accordion-body">
                        <p className="btn__filter" onClick={()=>{filterResult('Réfrigerateur')}}>Americain (Side by Side)</p>
                        <p className="btn__filter" onClick={()=>{filterResult('Réfrigerateur combiné')}}>Combiné</p>
                        <p className="btn__filter" onClick={()=>{filterResult('Réfrigerateur multi')}}>Multi-Portes</p>
                </div>
                </div>
                </div>
                {/* <div class="accordion-item">
                <h2 class="accordion-header" id="flush-headingThree">
                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
                        Capacité
                </button>
                </h2>
                <div id="flush-collapseThree" class="accordion-collapse collapse" aria-labelledby="flush-headingThree" data-bs-parent="#accordionFlushExample">
                <div class="accordion-body">
                <p className="btn__filter"  onClick={()=>{filterResult('Parfums homme')}}>150 - 300 Litres</p>
                        <p className="btn__filter"  onClick={()=>{filterResult('Parfums homme')}}>300 - 450 Litres</p>
                        <p className="btn__filter"  onClick={()=>{filterResult('Parfums femme')}}>450 - 600 Litres</p>
                        <p className="btn__filter"  onClick={()=>{filterResult('Parfums homme')}}>600 Litres et plus </p>
                </div>
                </div>
                </div> */}
                <div class="accordion-item">
                <h2 class="accordion-header" id="flush-headingFive">
                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseFive" aria-expanded="false" aria-controls="flush-collapseFive">
                        Congélateur
                </button>
                </h2>
                <div id="flush-collapseFive" class="accordion-collapse collapse" aria-labelledby="flush-headingFive" data-bs-parent="#accordionFlushExample">
                <div class="accordion-body">
                        <p className="btn__filter" onClick={()=>{filterResult('Congélateur vertical')}}>Vertical</p>
                        <p className="btn__filter" onClick={()=>{filterResult('Congélateur horizontal')}}>Horizontal</p>
                </div>
                </div>
                </div>  

                <div class="accordion-item">
                <h2 class="accordion-header" id="flush-headingSix">
                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseSix" aria-expanded="false" aria-controls="flush-collapseSix">
                        Cuisson
                </button>
                </h2>
                <div id="flush-collapseSix" class="accordion-collapse collapse" aria-labelledby="flush-headingSix" data-bs-parent="#accordionFlushExample">
                <div class="accordion-body">
                        <p className="btn__filter" onClick={()=>{filterResult('Cuisinière')}}>Cuisinière</p>
                        <p className="btn__filter" onClick={()=>{filterResult('Micro-ondes')}}>Micro-ondes</p>
                        <p className="btn__filter" onClick={()=>{filterResult('Cuiseur')}}>Cuiseur de riz</p>
                        <p className="btn__filter" onClick={()=>{filterResult('Mixeur')}}>Mixeur & Blender</p>
                        <p className="btn__filter" onClick={()=>{filterResult('Cafetière')}}>Cafetière</p>
                </div>
                </div>
                </div>
                <div class="accordion-item">
                <h2 class="accordion-header" id="flush-headingSeven">
                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseSeven" aria-expanded="false" aria-controls="flush-collapseSeven">
                        Lavage & Entretien
                </button>
                </h2>
                <div id="flush-collapseSeven" class="accordion-collapse collapse" aria-labelledby="flush-headingSeven" data-bs-parent="#accordionFlushExample">
                <div class="accordion-body">
                        <p className="btn__filter" onClick={()=>{filterResult('Lave Linge')}}>Lave linge</p>
                        <p className="btn__filter" onClick={()=>{filterResult('Sèche Linge')}}>Sèche linge</p>
                        <p className="btn__filter" onClick={()=>{filterResult('Aspirateur')}}>Aspirateur</p>
                </div>
                </div>
                </div>


                <p className="title__cat">Autres categories</p>
                        <p className="btn__filter"  onClick={()=>{filterResult('Parfums homme')}}>Télévision</p>
                        <p className="btn__filter"  onClick={()=>{filterResult('Parfums femme')}}>Audios et Hifi</p>
                        <p className="btn__filter"  onClick={()=>{filterResult('Parfums homme')}}>Climatisation</p>
                        <p className="btn__filter"  onClick={()=>{filterResult('Deo')}}>Chauffage et traitement d'air</p>
                        <p className="btn__filter"  onClick={()=>{filterResult('Parfums homme')}}>Réfrigerateur</p>
                        <p className="btn__filter"  onClick={()=>{filterResult('Parfums femme')}}>Congélateur</p>
                        <p className="btn__filter"  onClick={()=>{filterResult('Parfums homme')}}>Cuisine et Maison</p>
                        <p className="btn__filter"  onClick={()=>{filterResult('Deo')}}>Lavage et Entretien</p>
                        <p className="btn__filter"  onClick={()=>{filterResult('Deo')}}>Accessoires</p>
                        <p className="btn__filter"  onClick={()=>{filterResult('Parfums homme')}}>Réfroidisseur</p>

                </div>
                </div>
                </div>
                <div className="part__products">
        { dis  ? (   <div className="section__part__presentaions">
                            <div className="part__presentaions">
                                <div className="part__presentaions__pictures">
                                        <img src="https://nasco.ci/assets/images/categories/banners/fridge_1.jpg" alt="" />
                                </div>
                        </div>
                        <div className="section__part__presentaions__description">
                            <h5 className="desc__header">Pourquoi acheter votre matériel informatique sur EasyShopping Côte d’Ivoire ?</h5>
                            <p>L’informatique, encore appelé traitement automatique de l’information, n’a plus de frontière de nos jours. 
                                Elle est bien lointaine la création du tout premier ordinateur en 1946 ! Nombre d’améliorations technologiques ont eu lieu et il est clair de nos jours que l’informatique tient une place prépondérante dans notre vie quotidienne. 
                                Professionnels, particuliers et entreprises, avec EasyShopping Côte d’Ivoire le leader de la vente en ligne, renouvelez votre matériel informatique et améliorez votre productivité. Le leader de la vente en ligne en Côte d’Ivoire vous offre des articles informatiques variés : 
                                PC portables et ordinateurs de bureaux, imprimantes, stockage, antivirus et pleins d’autres matériels à moindre coût.</p>
                        </div>

                        </div>
         ) : (
       <div className="part__accessories">
         {products.map((product) => <div key={product._id}className='featured__product__cards'>
                        <div className='product__cards__header'>
                        <p className='sales'>{product.title}</p>
                           <div className='featured__product__cards__header__images'>
                           <Link to={`/product/${product._id}`}><img src={product.image} alt={product.title} /></Link>
                           {/* <Link to={`/detail/${product._id}`}><img src={`${process.env.PUBLIC_URL}/${product.image}`} alt="" /></Link> */}
                           </div>
                        </div>
                        <div className='featured__product__cards__body'>
                                {/* <h5 className='product__title'>{article.title}</h5> */}
                                <p className='product__desc'>{product.description}</p>
                                <p className='brand'>{product.marque}</p>
                               <h5 className='product__categorie'>Smartphone</h5>
                               <p className="reference">Réf:ECMHDEDIPACCHCB3</p>
                                <p className="info">2 en stock</p>
                               <p className='product__price'>{product.price} FCFA</p>
                               <div className='button--block'>
                                <Link className='link__btn' to={`/product/${product._id}`}><button className='btn__buy'>Acheter</button></Link>
                                <button className='btn__add' onClick={() => cartDispatch({ type: 'ADD_TO_CART', payload: product })}>+</button>
                                </div>
                                <div>
                                <button className='btn__fav' onClick={() => favoritesDispatch({ type: 'ADD_TO_FAVORITES', payload: product })}>Ajouter Favoris</button>
                                </div>
                        </div>
                    </div> 

                    
                        )}
                    
          </div>
         )} 
       </div>
        </div>
        </div>
        <Footer/>
     </div>
    );
}