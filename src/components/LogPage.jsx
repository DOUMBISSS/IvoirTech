import React, { useState } from "react";
import Login from "./Login";
import Register from "./Register";


export default function LogPage (){
    const [signUp,setSignUp] = useState(true);
    const [user, setUser] = useState(null);

    React.useEffect(() => {
        const storedUser = localStorage.getItem('user');
        if (storedUser) {
          setUser(JSON.parse(storedUser));
        }
      }, []);

    const handleLogin = (userData) => {
        setUser(userData);
        localStorage.setItem('user', JSON.stringify(userData));
      };
    

    return (
        <div>
            <div className="log__page">
            <div className="login--container">
            <div className='container--login'>
              <div className='container--login--header'>
                  <button className='btn--header' style={{background :signUp ? "coral" :"#031b4e" }} onClick={()=>setSignUp(true)}>Se connecter</button>
                  <button className='btn--header' style={{background :signUp ? "#031b4e" :"coral" }} onClick={()=>setSignUp(false)}>S'inscrire</button>
              </div>
              {signUp ? <Login onLogin={handleLogin} /> : <Register/>}
            </div>
            </div>
            </div>
            
        </div>
    )
}