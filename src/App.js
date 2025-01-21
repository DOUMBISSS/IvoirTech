import './App.css';
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import HomePage from './Pages/HomePage';
import CartPage from './Pages/CartPage';
import FavoritesPage from './Pages/FavoritesPage';
import ProductPage from './Pages/ProductPage';
import NotFoundPage from './Pages/NotFoundPage';
import CartContextProvider from './context/CartContext';
import FavoritesContextProvider from './context/FavoritesContext';
import ProductDetail from './components/ProductDetail';
import Formulaire from './Pages/Formulaire';
import Accessoires from './Pages/Accessoires';
import Climatisation from './Pages/Climatisation';
import Electromenager from './Pages/Electromenager';
import Smartphones from './Pages/Smartphones';
import All from './Pages/All';
import Store from './Pages/Store';
import Identification from './Pages/Identification';
import Informatiques from './Pages/Informatiques';
import Beauty from './Pages/Beauty';
import House from './Pages/House';
import Fashion from './Pages/Fashion';
import Game from './Pages/Game';
import Electronique from './Pages/Electronique';
import Contact from './Pages/Contact';
import { UserProvider } from './context/UserContext';
import Login from './components/Login';
import LogPage from './components/LogPage';
import Register from './components/Register';
import CategoryPage from './Pages/CategoryPage';
import GroupPage from './Pages/GroupPage';
import Return from './Pages/Return';

const App = () => {
    const [user, setUser] = useState(null);
    const [selectedCategory, setSelectedCategory] = useState(null);

    const handleLogin = (userData) => {
        setUser(userData);
        localStorage.setItem('user', JSON.stringify(userData));
    };

    const handleRegister = (userData) => {
        setUser(userData);
        localStorage.setItem('user', JSON.stringify(userData));
    };

    const handleLogout = () => {
        setUser(null);
        localStorage.removeItem('user');
    };

    useEffect(() => {
        const storedUser = localStorage.getItem('user');
        if (storedUser) {
            setUser(JSON.parse(storedUser));
        }
    }, []);

    const handleSelectCategory = (categoryId) => {
        setSelectedCategory(categoryId);
    };

    return (
        <UserProvider>
            <CartContextProvider>
                <FavoritesContextProvider>
                    <Router>
                        <Navbar user={user} onLogout={handleLogout} />
                        <Routes>
                            <Route path="/" element={<HomePage />} />
                            <Route 
                                path="/smartphones" 
                                element={<Smartphones selectedCategory={selectedCategory} onSelectCategory={handleSelectCategory}/>} 
                            />
                            <Route path="/product/:id" element={<ProductDetail />} />
                            <Route path="/cart" element={<CartPage />} />
                            <Route path="/favorites" element={<FavoritesPage />} />
                            <Route path='/informatiques' element={<Informatiques />} />
                            <Route path='/beauty' element={<Beauty />} />
                            <Route path='/houses' element={<House />} />
                            <Route path='/fashion' element={<Fashion />} />
                            <Route path='/electronique' element={<Electronique />} />
                            <Route path='/game' element={<Game />} />
                            <Route path='/accessoires' element={<Accessoires />} />
                            <Route path='/climatisation' element={<Climatisation />} />
                            <Route path='/electromenager' element={<Electromenager />} />
                            <Route path='/recherche__piece' element={<Identification />} />
                            <Route path='/all' element={<All />} />
                            <Route path='/contact' element={<Contact />} />
                            <Route path='/store-all' element={<Store />} />
                            <Route path='/formulaire' element={<Formulaire />} />
                            <Route path='/loginPage' element={<LogPage onLogin={handleLogin} />} />
                            <Route path="/category/:categoryId" element={<CategoryPage />} />
                            <Route path="*" element={<NotFoundPage />} />
                            <Route path="/login" element={<Login onLogin={handleLogin} />} />
                            <Route path="/register" element={<Register onRegister={handleRegister} />} />
                            <Route path="/group/:groupName" element={<GroupPage />} />
                            <Route path="/category/:categoryId" element={<CategoryPage />} />
                            <Route path="/return" element={<Return/>} />
                        </Routes>
                    </Router>
                </FavoritesContextProvider>
            </CartContextProvider>
        </UserProvider>
    );
};

export default App;