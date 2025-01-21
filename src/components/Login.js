import React, { useState } from 'react';
import { Navigate, useNavigate } from 'react-router';
import { loginUser } from '../api'; // Assure-toi que le chemin est correct
import Footer from '../Pages/Footer';
import { Link } from 'react-router-dom';

const Login = ({ onLogin }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);
  const navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const user = await loginUser(email, password);
      onLogin(user);
      navigate('/')
    } catch (err) {
      setError('Invalid credentials');
    }
  };

  console.log(email,password)

  return (
    <div>
    <div className='container'>  
        <div className="log__page">
            <div className="login--container">
            <div className='container--login'>
            <div className='login--content'>
              <h2 className='login--content--header'>Se connecter</h2>
            {error && <p>{error}</p>}
              <form onSubmit={handleSubmit}>
                <div className="form-floating mb-3">
                      <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com" value={email} onChange={(e) => setEmail(e.target.value)} required/>
                      <label htmlFor="floatingInput">Email </label>
                    </div>
                    <div className="form-floating">
                      <input type="password" className="form-control" id="floatingPassword" placeholder="Password" rvalue={password} onChange={(e) => setPassword(e.target.value)} required />
                      <label htmlFor="floatingPassword">Mot de passe</label>
                    </div>
                <button type="submit" className="btn__login" >Login</button>
              </form>
              </div>
              <div>
                <p>En passant votre commande, vous acceptez les Conditions générales de vente d’Amazon. 
                  Veuillez consulter notre Notice Protection de vos informations personnelles, 
                  notre Notice Cookies et notre Notice Annonces publicitaires basées sur vos centres d’intérêt.</p>
              </div>
              
            </div>
            <div className='container__register__btn'>
                <Link to='/register' className='link__register' > <p>S'inscrire</p></Link>
            </div>
            </div>
            </div>
            </div>
      <Footer/>
  </div>
  );
};

export default Login;