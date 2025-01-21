import { NavLink,Link } from 'react-router-dom';
import { CartContext } from '../context/CartContext';
import React, { useContext, useState } from 'react';
import { UserContext } from '../context/UserContext';

const Nav = ({ user, onLogout }) => {
  const [nav, setNav] = useState(false);
  const [cartShop, setCartShop] = useState(false);
  const [display, setDisplay] = useState(false);
  const [menu, setMenu] = useState(false);
  const [search, setSearch] = useState("");

  const { cart, dispatch } = useContext(CartContext);

  const totalAmount = cart.reduce((total, item) => total + item.price * item.quantity, 0);

  return (
    <div>
      <div className='navbar'>
        <div className="navbar--left">
          <div className='icon--menu'>
            <i className="fa-solid fa-bars"></i>
          </div>
          <div className="navbar--logo">
            <div className='nav__icon'>
              <i className="fa-solid fa-bars"></i>
            </div>
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
            <NavLink className='liste' to="/store-all"><i className="fa-solid fa-house"></i>  Nos magasins</NavLink>
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
      <div className='header__bar'>
        <NavLink  to="/" className={({ isActive }) => isActive ? 'active' : ''}><i className="fa-solid fa-bars"></i> Accueil</NavLink>
        <NavLink  to='/Smartphones' className={({ isActive }) => isActive ? 'active' : ''}><i className="fa-solid fa-mobile"></i> Smartphones & Tablettes</NavLink>
        <NavLink  to='/informatiques' className={({ isActive }) => isActive ? 'active' : ''}><i className="fa-solid fa-laptop"></i> Informatiques</NavLink>
        <NavLink  to='/electromenager' className={({ isActive }) => isActive ? 'active' : ''}><i className="fa-solid fa-layer-group"></i> Electroménager</NavLink>
        <NavLink  to='/electronique' className={({ isActive }) => isActive ? 'active' : ''}><i className="fa-solid fa-business-time"></i> Electronique</NavLink>
        <NavLink  to='/fashion' className={({ isActive }) => isActive ? 'active' : ''}><i className="fa-solid fa-person-dress"></i> Mode & Accessoires</NavLink>
        <NavLink  to='/Beauty' className={({ isActive }) => isActive ? 'active' : ''}><i className="fa-solid fa-wand-magic-sparkles"></i> Beauté & Hygiènes</NavLink>
        <NavLink  to='/game' className={({ isActive }) => isActive ? 'active' : ''}><i className="fa-solid fa-gamepad"></i> Jeux Vidéo & Consoles</NavLink>
        <NavLink  to='/houses' className={({ isActive }) => isActive ? 'active' : ''}><i className="fa-solid fa-house"></i> Maison & Déco</NavLink>
        <NavLink  to="/favorites" className={({ isActive }) => isActive ? 'active' : ''}><i className="fa-solid fa-heart"></i> Favorites</NavLink>
        <NavLink to='/recherche__piece' className={({ isActive }) => isActive ? 'active' : ''}><i className="fa-solid fa-magnifying-glass"></i> Trouver la pièce</NavLink>
      </div>
    </div>
  );
};

export default Navbar;