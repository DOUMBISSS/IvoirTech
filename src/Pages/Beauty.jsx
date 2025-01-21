import React, { useEffect, useState, useContext } from 'react';
import { Link } from "react-router-dom";
import { CartContext } from '../context/CartContext';
import { FavoritesContext } from '../context/FavoritesContext';
import Footer from "./Footer";
import { Blocks } from "react-loader-spinner";

export default function Beauty () {
    const [dis, setDis] = useState(true);
    const [filter,setFilter] = useState(false);
    const [items, setItems] = useState([]);
    const [products, setProducts] = useState([]);
    const [categories, setCategories] = useState([]);
    const [brands, setBrands] = useState([]);
    const [groups, setGroups] = useState(['Beauté','Mode']);
    const [selectedCategories, setSelectedCategories] = useState([]);
    const [selectedBrands, setSelectedBrands] = useState([]);
    const [selectedGroup, setSelectedGroup] = useState('Beauté'); // Default to "Électronique"
    const [priceRange, setPriceRange] = useState([0, 10000000]);
    const [sortOrder, setSortOrder] = useState('asc');
    const [recommendedProducts, setRecommendedProducts] = useState([]);
    const { dispatch: cartDispatch } = useContext(CartContext);
    const { dispatch: favoritesDispatch } = useContext(FavoritesContext);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch('https://back-fodex-ecommerce.onrender.com/products')
            .then(response => response.json())
            .then(items => {
                const filteredItems = items.filter(item => item.groupe === 'Beauté' || item.groupe === 'Mode');
                setItems(filteredItems);
                setProducts(filteredItems.filter(item => item.groupe === selectedGroup));
                setCategories([...new Set(filteredItems.filter(item => item.groupe === selectedGroup).map(item => item.categorie))]);
                setBrands([...new Set(filteredItems.filter(item => item.groupe === selectedGroup).map(item => item.label))]);
                setRecommendedProducts(filteredItems.filter(item => item.isRecommended));
                setLoading(false);
            })
            .catch(error => {
                console.error('Error:', error);
                setLoading(false);
            });
    }, [selectedGroup]);

    const filterResult = () => {
        let filteredData = items.filter(item => item.groupe === selectedGroup);

        if (selectedCategories.length > 0) {
            filteredData = filteredData.filter(item => selectedCategories.includes(item.categorie));
        }

        if (selectedBrands.length > 0) {
            filteredData = filteredData.filter(item => selectedBrands.includes(item.label));
        }

        filteredData = filteredData.filter(item => item.price >= priceRange[0] && item.price <= priceRange[1]);

        filteredData.sort((a, b) => {
            if (sortOrder === 'asc') {
                return a.price - b.price;
            } else if (sortOrder === 'desc') {
                return b.price - a.price;
            } else if (sortOrder === 'nameAsc') {
                return a.title.localeCompare(b.title);
            }
        });

        setProducts(filteredData);
        setDis(false);
    };

    useEffect(() => {
        filterResult();
    }, [selectedCategories, selectedBrands, selectedGroup, priceRange, sortOrder]);

    const handleCategoryChange = (category) => {
        setSelectedCategories(prevCategories =>
            prevCategories.includes(category)
                ? prevCategories.filter(categorie => categorie !== category)
                : [...prevCategories, category]
        );
    };

    const handleBrandChange = (brand) => {
        setSelectedBrands(prevBrands =>
            prevBrands.includes(brand)
                ? prevBrands.filter(br => br !== brand)
                : [...prevBrands, brand]
        );
    };

    const handleGroupChange = (group) => {
        setSelectedGroup(group);
    };

    const handlePriceRangeChange = (event) => {
        const { value, name } = event.target;
        setPriceRange(prevRange => name === 'min'
            ? [Number(value), prevRange[1]]
            : [prevRange[0], Number(value)]
        );
    };

    const closeFilter = ()=> {
        setFilter (false)
    }
    const showFilter =()=>{
        setFilter (true)
    }

    return (
        <div>
            <div className='container'>
                <div className="bread">
                    <p>Accueil <i className="fa-solid fa-angle-right"></i> {selectedGroup}</p>
                </div>
                <h2 className="header__accessories">{selectedGroup}</h2>
                <div className="part__products__header">
                    <div className="section__partner">
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
                <div className="container-contents">
                    <div className="sidebar">
                        <div className="filter--container">
                            <h6>{products.length} résultat(s)</h6>
                            {/* <button className="btn__all" onClick={() => { setSelectedGroup('Electronique'); setProducts(items.filter(item => item.groupe === 'Électronique')); }}>All</button> */}
                            <h6 className="filter__title"> Filtrer par :</h6>
                            <div className="filter-group">
                                {groups.map((group, index) => (
                                    <label key={index} className="label__key">
                                        <input
                                            type="checkbox"
                                            name="group"
                                            checked={selectedGroup === group}
                                            onChange={() => handleGroupChange(group)}
                                        />
                                        {group}
                                    </label>
                                ))}
                            </div>
                            <h6 className="filter__title">Categories</h6>
                            <div className="filter-group">
                                {categories.map((categorie, index) => (
                                    <label key={index} className="label__key">
                                        <input
                                            type="checkbox"
                                            checked={selectedCategories.includes(categorie)}
                                            onChange={() => handleCategoryChange(categorie)}
                                        />
                                        {categorie}
                                    </label>
                                ))}
                            </div>
                            <h6 className="filter__title">Marques</h6>
                            <div className="filter-group">
                                {brands.map((brand, index) => (
                                    <label key={index} className="label__key">
                                        <input
                                            type="checkbox"
                                            checked={selectedBrands.includes(brand)}
                                            onChange={() => handleBrandChange(brand)}
                                        />
                                        {brand}
                                    </label>
                                ))}
                            </div>
                            <h6 className="filter__title">Price Range</h6>
                            <div className="filter-group">
                                <input
                                    type="number"
                                    name="min"
                                    value={priceRange[0]}
                                    onChange={handlePriceRangeChange}
                                    placeholder="Min price"
                                />
                                <input
                                    type="number"
                                    name="max"
                                    value={priceRange[1]}
                                    onChange={handlePriceRangeChange}
                                    placeholder="Max price"
                                />
                            </div>
                            {/* <h6 className="filter__title">Sort By</h6>
                            <div className="filter-group">
                                <select value={sortOrder} onChange={(e) => setSortOrder(e.target.value)}>
                                <option value="asc">Price Low to High</option>
                                    <option value="desc">Price High to Low</option>
                                    <option value="nameAsc">Name A-Z</option>
                                </select>
                            </div> */}
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
                                    <option value="nameAsc">Name A-Z</option>
                                    </select>
                               </div>
                                   </div>
                               </div>

                               <div className="filter" >
                                <div className="box__filter" onMouseOver={showFilter}>
                                <i className="fa-solid fa-arrow-up-wide-short"></i>
                                <p>Filtre</p>
                                </div>
                                <div>
                                <div className="filter-group--display">
                                   <select value={sortOrder} onChange={(e) => setSortOrder(e.target.value)}>
                                    <option value="asc">Price Low to High</option>
                                    <option value="desc">Price High to Low</option>
                                    <option value="nameAsc">Name A-Z</option>
                                    </select>
                               </div>
                                </div>
                                </div>

                <div className={filter ? "filterbar show--filterbar" : "filterbar" }>
                        <div className='filterbar--content' onMouseLeave={closeFilter}>
                        <h4>CATÉGORIE PAR PRODUIT</h4>
                          <div className='btn--close--sidebar'onClick={closeFilter}> <i className="fa-solid fa-xmark"></i></div>         
                          <div className='filter--sidebar'>
                          <div className="filter--container">
                            <h6>{products.length} résultat(s)</h6>
                            {/* <button className="btn__all" onClick={() => { setSelectedGroup('Electronique'); setProducts(items.filter(item => item.groupe === 'Électronique')); }}>All</button> */}
                            <h6 className="filter__title"> Filtrer par :</h6>
                            <div className="filter-group">
                                {groups.map((group, index) => (
                                    <label key={index} className="label__key">
                                        <input
                                            type="checkbox"
                                            name="group"
                                            checked={selectedGroup === group}
                                            onChange={() => handleGroupChange(group)}
                                        />
                                        {group}
                                    </label>
                                ))}
                            </div>
                            <h6 className="filter__title">Categories</h6>
                            <div className="filter-group">
                                {categories.map((categorie, index) => (
                                    <label key={index} className="label__key">
                                        <input
                                            type="checkbox"
                                            checked={selectedCategories.includes(categorie)}
                                            onChange={() => handleCategoryChange(categorie)}
                                        />
                                        {categorie}
                                    </label>
                                ))}
                            </div>
                            <h6 className="filter__title">Marques</h6>
                            <div className="filter-group">
                                {brands.map((brand, index) => (
                                    <label key={index} className="label__key">
                                        <input
                                            type="checkbox"
                                            checked={selectedBrands.includes(brand)}
                                            onChange={() => handleBrandChange(brand)}
                                        />
                                        {brand}
                                    </label>
                                ))}
                            </div>
                            <h6 className="filter__title">Price Range</h6>
                            <div className="filter-group">
                                <input
                                    type="number"
                                    name="min"
                                    value={priceRange[0]}
                                    onChange={handlePriceRangeChange}
                                    placeholder="Min price"
                                />
                                <input
                                    type="number"
                                    name="max"
                                    value={priceRange[1]}
                                    onChange={handlePriceRangeChange}
                                    placeholder="Max price"
                                />
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
                                </div>
                        </div>

                            {loading ? (
                                <div className='load'>
                                    <Blocks visible={true} height="100" width="100%" ariaLabel="blocks-loading" wrapperStyle={{}} wrapperClass="blocks-wrapper" />
                                </div>
                            ) : (
                                <div className="part__accessories">
                                    {products.map(item => (
                                        <div key={item._id} className='featured__product__cards'>
                                            <div className='product__cards__header'>
                                                <p className='sales'>{item.title}</p>
                                                <div className='featured__product__cards__header__images'>
                                                    <Link to={`/product/${item._id}`}><img src={`${process.env.PUBLIC_URL}/${item.img}`}alt="" /></Link>
                                                </div>
                                            </div>
                                            <div className='featured__product__cards__body'>
                                                <p className='product__desc'>{item.description}</p>
                                                <p className='brand'>{item.label}</p>
                                                <h5 className='product__categorie'>{item.categorie}</h5>
                                                <p className="reference">{item.reference}</p>
                                                <p className='product__price'>{item.price} FCFA</p>
                                                <div className='button--block'>
                                                    <button className='btn__buy'><Link className='link__btn' to={`/product/${item._id}`}></Link>Acheter</button>
                                                    <button className='btn__add' onClick={() => cartDispatch({ type: 'ADD_TO_CART', payload: item })}>+</button>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            )}
                        </div>
                    )}
                    {/* Uncomment if you want to display recommended products */}
                    {/* <div className="recommended-products">
                        <h3>Recommended Products</h3>
                        {recommendedProducts.map(item => (
                            <div key={item._id} className='recommended__product__card'>
                                <img src={item.image} alt={item.title} />
                                <p>{item.title}</p>
                                <p>{item.price} FCFA</p>
                            </div>
                        ))}
                    </div> */}
                </div>
            </div>
        </div>
        <Footer />
    </div>
);}