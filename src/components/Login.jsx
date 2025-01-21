import { useNavigate } from "react-router-dom";
import { useState } from "react"; 



export default function Login (){
  const [email,setEmail]=useState();
  const [password,setPassword]=useState();
  const [loading,setLoading] =useState(false);
  const navigate = useNavigate();

  const handleEmail =(event)=>{
      setEmail(event.target.value)
  }

  const handlePassword = (event)=>{
    setPassword(event.target.value)
  }

  const [msg, setMsg]= useState();
  
  const Connexion= (e) =>{
    e.preventDefault();
    const dataLogin = {
      email,
      password
    }
    fetch('http://backdev.mayedo.ci/login',{
          method:"POST",
          headers :{'Content-Type':"application/json"},
          body: JSON.stringify(dataLogin)
      }).then((res)=>res.json())
       .then((userData)=> {
        localStorage.clear();
        localStorage.setItem("user",JSON.stringify(userData));
        navigate('/Accueil');
        setLoading(true);
        setTimeout(()=>{
          setLoading(false)
        },5000);
        // notify("")    
        }).catch(err => {setMsg(err.msg)})
  };

    return (
              <div>
                  <div className='login--content'>
                  <h2 className='login--content--header'>Se connecter</h2>
                      <form onSubmit={Connexion}>
                      {/* <div className="alert alert-danger" role="alert">
                        {msg}
                      </div> */}
                      <div className="form-floating mb-3">
                          <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com" required  onChange={handleEmail}/>
                          <label htmlFor="floatingInput">Email </label>
                        </div>
                        <div className="form-floating">
                          <input type="password" className="form-control" id="floatingPassword" placeholder="Password" required  onChange={handlePassword}/>
                          <label htmlFor="floatingPassword">Mot de passe</label>
                        </div>
                        <button type="submit" className="btn__login" >Connexion</button>
                          {/* { 
                          loading ? <ClipLoader color={"#36d7b7"} loading={loading}  size={100}  /> : (<button type="submit" className="btn btn-primary btn-block shadow">Connexion</button>)
                          } */}
                      </form>
                  </div>
                  <div>
                    <p>En passant votre commande, vous acceptez les Conditions générales de vente d’Amazon. 
                      Veuillez consulter notre Notice Protection de vos informations personnelles, 
                      notre Notice Cookies et notre Notice Annonces publicitaires basées sur vos centres d’intérêt.</p>
                  </div>

            </div>
    )
}