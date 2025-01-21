import { Link } from "react-router-dom";
import { useState , useEffect,useContext } from "react";
import Footer from "./Footer";
import { fetchProducts } from '../services/productService';
import Product from '../components/Product';
import { CartContext } from '../context/CartContext';
import { FavoritesContext } from '../context/FavoritesContext';



export default function Accessoires (){

    const [dis,setDis]=useState(true);
    const [filter,setFilter] = useState(false);
    const [items,setCat]=useState([]);
    const [products, setProducts] = useState([]);
    const { dispatch: cartDispatch } = useContext(CartContext);
    const { dispatch: favoritesDispatch } = useContext(FavoritesContext);
    const closeFilter = ()=> {
        setFilter (false)
    }
    const showFilter =()=>{
        setFilter (true)
    }
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
    
        const filterResult = (catItem)=>{
            const filterData = products.filter((Accesoire) =>  Accesoire.categories === catItem )
                setCat(filterData);
                setDis(false)
        }

    return (
        <div>
        <div className='container'>
                <div className="bread">
                        <p>Accueil <i class="fa-solid fa-angle-right"></i> Accessoires</p>
                </div>
                
            <h2 className="header__accessories">Accessoires </h2>
            <div className="part__products__header">
                <div className="part__products__header__images">
                <img src="https://tpc.googlesyndication.com/simgad/15905478928241312474" alt="" />
                </div>
                {/* <p className="container--header">Accessoires</p> */}
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
                <h2 class="accordion-header" id="flush-headingSeven">
                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseSeven" aria-expanded="false" aria-controls="flush-collapseSeven">
                        STABILISATEUR
                </button>
                </h2>
                <div id="flush-collapseSeven" class="accordion-collapse collapse" aria-labelledby="flush-headingSeven" data-bs-parent="#accordionFlushExample">
                <div class="accordion-body">
                        <p className="btn__filter" onClick={()=>{filterResult('Visage')}}>Stabilisateur</p>
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
                <h2 class="accordion-header" id="flush-headingSeven">
                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseSeven" aria-expanded="false" aria-controls="flush-collapseSeven">
                        STABILISATEUR
                </button>
                </h2>
                <div id="flush-collapseSeven" class="accordion-collapse collapse" aria-labelledby="flush-headingSeven" data-bs-parent="#accordionFlushExample">
                <div class="accordion-body">
                        <p className="btn__filter" onClick={()=>{filterResult('Visage')}}>Stabilisateur</p>
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
                                        <img src="https://pisces.bbystatic.com/image2/BestBuy_US/dam/SOL-105011-dp-hero-sv-3687ade8-4b42-491a-a339-5e5a4a232bfd.jpg" alt="" />
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