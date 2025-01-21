import { NavLink,Link } from 'react-router-dom';
import { CartContext } from '../context/CartContext';
import React, { useContext, useState } from 'react';
import { UserContext } from '../context/UserContext';

const Navbar = ({ user, onLogout }) => {
  const [nav, setNav] = useState(false);
  const [cartShop, setCartShop] = useState(false);
  const [display, setDisplay] = useState(false);
  const [menu, setMenu] = useState(false);
  const [search, setSearch] = useState("");

  const { cart, dispatch } = useContext(CartContext);

  const totalAmount = cart.reduce((total, item) => total + item.price * item.quantity, 0);

  const showProfil =()=>{
    setDisplay(true)
  }
  const closeProfil =()=>{
    setDisplay(false)
  }
  const showMenu = () =>{
    setDisplay(true)
}
const affi = ()=> {
  setDisplay (false)
}
  return (
    <div>
      <div className='navbar'>
        <div className="navbar--left">
          <div className='icon--menu' onClick={showMenu}>
            <i className="fa-solid fa-bars"></i>
          </div>
          <div className="navbar--logo">
            <div className='nav__icon'>
              <i className="fa-solid fa-bars"></i>
            </div>
            {/* <NavLink to="/" className="logo__box"> <img src={`${process.env.PUBLIC_URL}/b6221fc5-7168-422f-a1f3-f37c98789ed3.JPG`} alt="" /></NavLink> */}
            
            <NavLink to="/" className='header__title'><h5>ELETRO<span>SHOP</span></h5></NavLink>
          </div>
        </div>
        <div className="navbar--center">
          <div className="navbar--center--content">
            <div className="col-3 col-md-8">
              <form className="d-flex" role="search">
                <input className="form-control me-3" type="search" placeholder="Cherchez un produit, une marque ou une catégorie..." aria-label="Search" />
                <button className="btn btn-outline-success">Search</button>
              </form>
            </div>
          </div>
          <div className='logo--resp'>
            <div className="navbar--logo--resp">
              <NavLink to="/" className='header__title'><h5>ELECTRO<span>SHOP</span></h5></NavLink>
            </div>
          </div>
        </div>

        <div className="navbar--right">
          <div className="navbar--right--content">
            {/* <NavLink className='liste' to="/store-all"><i className="fa-solid fa-house"></i>  Nos magasins</NavLink> */}
            <div className='icons'>
              <div>
                <NavLink to="/cart"><i className="fa-solid fa-cart-shopping"></i> </NavLink>
                <NavLink to="/cart"> <div className="icon__counter">({cart.length})</div></NavLink>
              </div>
            </div>
            {user ? (
              <>
                <div className='user__profil__box'>
                  <p className='user__name'><i className="fa-solid fa-user"></i> {user.name}</p>
                  <button className='user__btn__logout' onClick={onLogout}>Logout <i className="fa-solid fa-arrow-left"></i></button>
                </div>
              </>
            ) : (
              <NavLink className='liste' to="/login"><button className="btn--connexion"><i className="fa-solid fa-user"></i> Connexion </button></NavLink>
            )}
          </div>
        </div>
      </div>

      <div className={display ? "menu show--menu" : "menu"}>
                    <div className='sidebar--menu'>
                        <div className='btn--close--sidebar' onClick={affi}>
                            <i className="fa-solid fa-xmark"></i>
                        </div>
                        <div className='menu__content'>
                          <div className='menu__content__liste'>
                            <NavLink  to="/" className={({ isActive }) => isActive ? 'active' : ''}><i className="fa-solid fa-bars"></i> Accueil</NavLink>
                          </div>
                          <div className='menu__content__liste'>
                            <NavLink  to='/Smartphones' className={({ isActive }) => isActive ? 'active' : ''}><i className="fa-solid fa-mobile"></i> Smartphones & Informatiques & Electronique</NavLink>
                          </div>
                          <div className='menu__content__liste'>
                            <NavLink  to='/Beauty' className={({ isActive }) => isActive ? 'active' : ''}><i className="fa-solid fa-wand-magic-sparkles"></i> Mode & Accessoires & Beauté </NavLink>
                          </div>
                            <div className='menu__content__liste'>
                            <NavLink  to='/houses' className={({ isActive }) => isActive ? 'active' : ''}><i className="fa-solid fa-house"></i> Electroménager & Maison & Déco</NavLink>
                            </div>
                            <div className='menu__content__liste'>
                            <NavLink  to="/favorites" className={({ isActive }) => isActive ? 'active' : ''}><i className="fa-solid fa-heart"></i> Favorites</NavLink>
                            </div>
                            <div className='menu__content__liste'>
                              <NavLink  to='/store-all' className={({ isActive }) => isActive ? 'active' : ''}><i className="fa-solid fa-house"></i>  Nos magasins</NavLink>
                            </div>
                            <div className='menu__content__liste'>
                            <NavLink to='/recherche__piece' className={({ isActive }) => isActive ? 'active' : ''}><i className="fa-solid fa-magnifying-glass"></i> Trouver la pièce</NavLink>
                            </div>
                          <div className="col-12 col-md-12">
                            <form class="d-flex" role="search">
                            <input class="form-control me-2" type="search" placeholder="Cherchez un produit , une marque ou une categorie..." aria-label="Search"/>
                            <button class="btn btn-outline-success" type="submit">Search</button>
                          </form>
                          </div>
                        </div>
                        </div>

        </div>


      <div className='header__bar'>
        <NavLink  to="/" className={({ isActive }) => isActive ? 'active' : ''}><i className="fa-solid fa-bars"></i> Accueil</NavLink>
        <NavLink  to='/Smartphones' className={({ isActive }) => isActive ? 'active' : ''}><i className="fa-solid fa-mobile"></i> Smartphones & Informatiques & Electronique</NavLink>
        {/* <NavLink  to='/informatiques' className={({ isActive }) => isActive ? 'active' : ''}><i className="fa-solid fa-laptop"></i> Informatiques</NavLink> */}
        {/* <NavLink  to='/electromenager' className={({ isActive }) => isActive ? 'active' : ''}><i className="fa-solid fa-layer-group"></i> Electroménager</NavLink> */}
        {/* <NavLink  to='/electronique' className={({ isActive }) => isActive ? 'active' : ''}><i className="fa-solid fa-business-time"></i> Electronique</NavLink> */}
        {/* <NavLink  to='/fashion' className={({ isActive }) => isActive ? 'active' : ''}><i className="fa-solid fa-person-dress"></i> Mode & Accessoires</NavLink> */}
        <NavLink  to='/Beauty' className={({ isActive }) => isActive ? 'active' : ''}><i className="fa-solid fa-wand-magic-sparkles"></i> Mode & Accessoires & Beauté</NavLink>
        {/* <NavLink  to='/game' className={({ isActive }) => isActive ? 'active' : ''}><i className="fa-solid fa-gamepad"></i> Jeux Vidéo & Consoles</NavLink> */}
        <NavLink  to='/houses' className={({ isActive }) => isActive ? 'active' : ''}><i className="fa-solid fa-house"></i> Electroménager & Maison & Déco</NavLink>
        <NavLink  to="/favorites" className={({ isActive }) => isActive ? 'active' : ''}><i className="fa-solid fa-heart"></i> Favorites</NavLink>
        <NavLink  to='/store-all' className={({ isActive }) => isActive ? 'active' : ''}><i className="fa-solid fa-house"></i>  Nos magasins</NavLink>
        <NavLink to='/recherche__piece' className={({ isActive }) => isActive ? 'active' : ''}><i className="fa-solid fa-magnifying-glass"></i> Trouver la pièce</NavLink>
      </div>
    </div>
  );
};

export default Navbar;