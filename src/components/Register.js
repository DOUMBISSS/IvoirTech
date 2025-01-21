import { useNavigate,Link } from "react-router-dom";
import { useState } from 'react';
import Footer from "../Pages/Footer";
import { registerUser } from '../api';




export default function Register ({onRegister}){
  const [name,setName]= useState();
  const [email,setEmail]=useState();
  const [numero,setNumero]=useState();
  const [password,setPassword]=useState();
  const [password2,setPassword2]=useState();
  const navigate = useNavigate();
  const [error, setError] = useState(null);

  const handleName = (event)=>{
    setName(event.target.value)
  }
  const handleEmail =(event)=>{
      setEmail(event.target.value)
  }
  const handleNumero =(event)=>{
    setNumero(event.target.value)
}

  const handlePassword = (event)=>{
    setPassword(event.target.value)
  }
  const handlePassword2 = (event)=>{
    setPassword2(event.target.value)
  }

 
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const user = await registerUser({ name, email,numero, password ,password2});
      onRegister(user);
    } catch (err) {
      setError('Registration failed');
    }
  };


  const handleRegister = ()=>{
    const registerData ={
      name,
      email,
      numero,
      password,
      password2
    }
    fetch('http://localhost:8080/register',{
          method:"POST",
          headers :{'Content-Type':"application/json"},
          body: JSON.stringify(registerData)
      }).then((res)=>res.json())
       .then((userData)=>{
        localStorage.clear();
        localStorage.setItem("user",JSON.stringify(userData));
        navigate('/Accueil');
       }).catch(err => {alert(err.message)})
  }

    return (

        <div>
          <div className='container'>  
        <div className="log__page">
            <div className="login--container">
            <div className='container--login'>
            <div className='login--content'>
            <h2 className='login--content--header'>Créer mon compte</h2>
            {error && <p>{error}</p>}
                      <form onSubmit={handleSubmit}>
                      <div className="form-floating mb-3">
                          <input type="text" className="form-control" id="floatingInput" placeholder="Name" value={name} onChange={handleName}/>
                          <label htmlFor="floatingInput">Username</label>
                        </div>
                      <div className="form-floating mb-3">
                          <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com" required value={email} onChange={handleEmail}/>
                          <label htmlFor="floatingInput">Email</label>
                        </div>
                        <div className="form-floating mb-3">
                          <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com" required value={numero} onChange={handleNumero}/>
                          <label htmlFor="floatingInput">Numero de téléphone</label>
                        </div>
                        <div className="form-floating">
                          <input type="password" className="form-control" id="floatingPassword" placeholder="Password" required value={password} onChange={handlePassword}/>
                          <label htmlFor="floatingPassword">Mot de passe </label>
                        </div>
                        <div className="form-floating ">
                          <input type="password" className="form-control" id="floatingPassword" placeholder="Confirm Password" required value={password2} onChange={handlePassword2}/>
                          <label htmlFor="floatingPassword">Mot de passe (confirmation)</label>
                        </div>
                          <button type="submit" className="btn__login" onClick={handleRegister}>Inscription</button>
                      </form>
              </div>
              <div>
                  <p>En créant un compte, vous acceptez les conditions générales de vente d’Amazon. 
                    Veuillez consulter notre notice Protection de vos Informations Personnelles, 
                    notre notice Cookies et notre notice Annonces publicitaires basées sur vos centres d’intérêt.</p>
                </div>
              
            </div>
            <div className='container__register__btn'>
                <Link to='/login' className='link__register' > <p>Se connecter</p></Link>
            </div>
            </div>
            </div>
            </div>
      <Footer/>  
        </div>
    )
}