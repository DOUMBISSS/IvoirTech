// import Navbar from "./Navbar";
// import Footer from "./Footer";
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {Link, useParams} from 'react-router-dom';
import { AddArticle, DeleteArticle } from '../Redux/actions';
import Footer from './Footer';
import Navbar from './Navbar';


export default function Commandes (){

    const carts = useSelector(state => state.cartReducer.carts);
    const [quantity,setQuantity]=useState(1)
    const totalPrice = 0;
    let id = useParams().id;

    const dispatch = useDispatch()
    
    const removeArticle = (id) =>{
        dispatch(DeleteArticle(id))
      }
    
    //   const decreaseQty = (id)=>{
    //     if (quantity > 1){
    //         setQuantity(prevCount => prevCount - 1);
    //     }
    // }
    const increaseQty = (id)=>{
        if (quantity < 10){
            setQuantity(prevCount => prevCount + 1);
        }
    }

    const decreaseQty = (id) => {
        setQuantity((prevCount) => {
          let tempQty = prevCount - 1;
          if(tempQty < 1) tempQty = 1;
          return tempQty;
        })
      }

    return (
        <div>
             <Navbar/>
            <div className="container">
            <nav aria-label="breadcrumb">
            <ol class="breadcrumb">
                <li class="breadcrumb-item"><Link to='/'>Home</Link></li>
                <li class="breadcrumb-item active" aria-current="page">Smartphone</li>
            </ol>
            </nav>
            <h2>Votre panier</h2>
            <div className="main--orders">
            <div className="main--orders--container">
                <div className="main--orders--container--left">
                {carts.map((cart)=> <div key={cart.id} className="cart--articles">
                            {/* const totalPrice = carts.price * quantity */}
                                    <div className="button-block">
                                        <div className="handle--quantity">
                                        <div className="minus" onClick={()=>decreaseQty(id)}><h5>-</h5></div>
                                        <div className="qty"><h5>{quantity}</h5></div>
                                        <div className="plus" onClick={()=>increaseQty(id)}><h5>+</h5></div>
                                        </div>
                                    </div>
                        
                                    <div className="cart--articles--descriptions">
                                        <div className="block--articles">
                                            <div className="articles">
                                                <img src={cart.image} alt="" />
                                            </div>
                        
                                            <div className="articles--details">
                                                <p className="names--articles">{cart.title}</p>
                                                <p className="names--articles">{cart.categorie}</p>
                                                <p className="quantity">{quantity} unité (s)</p>
                                                <p className="price--articles"> {(cart.price * quantity)} F CFA</p>
                                            </div>
                                        </div>
                                    </div>
                        
                                    <div className="btn--remove--article" onClick={removeArticle}>
                                        <i className="fa-solid fa-trash"></i>
                                    </div>
                                </div>
                             )}

                </div>

                <div className="main--orders--container--right">
                      <h6 className='main--orders--container--right--header'>Résumé du panier</h6> 
                      <div className='main--orders--container--right--body'>
                            <div className='article__details__order'>
                                <div className='article__details__order__content'>
                                    <h5>Sous-total</h5>
                                    <p>{totalPrice}</p>
                                </div>
                                <div className='article__details__order__content'>
                                    <h5>Frais de livraison</h5>
                                    <p>5 000 FCFA</p>
                                </div>
                                <div className='article__details__order__content'>
                                    <h5>Coupon</h5>
                                    <div class="form-floating mb-3">
                                        <input type="email" class="form-control" id="floatingInput" placeholder="name@example.com"/>
                                        <label for="floatingInput">Email address</label>
                                        </div>
                                </div>
                                <div className='article__details__order__content'>
                                    <h5>Coupon</h5>
                                    <p>5 000 FCFA</p>
                                </div>
                            </div>
                            <div className='user__part'>
                                <h4>Vos coordonnés</h4>
                         <form class="row g-3 needs-validation" novalidate>
                                <div class="col-md-6">
                                    <label for="validationCustom01" class="form-label">Noms complets</label>
                                    <input type="text" class="form-control" id="validationCustom01" required />
                                </div>

                                <div class="col-md-6">
                                    <label for="validationCustom03" class="form-label">Addresse</label>
                                    <input type="text" class="form-control" id="validationCustom03" required />
                                </div>

                                <div class="col-md-4">
                                    <label for="validationCustom03" class="form-label">Nº Tel</label>
                                    <input type="text" class="form-control" id="validationCustom03" required />
                                </div>
                        </form>
                            </div>
                            <div className='payment__part'>
                            <h4>Option de paiement</h4>
                            <div className='payment__part__content'>
                            <div class="form-check">
                                <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1"/>
                                <label class="form-check-label" for="flexRadioDefault1">
                                    Cash à la livraison
                                </label>
                                </div>
                                <div class="form-check">
                                <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" checked />
                                <label class="form-check-label" for="flexRadioDefault2">
                                    Paiement par Money
                                </label>
                                </div>
                            </div>
                            </div>
                      </div>
                </div>
        </div>     
    </div>
    <button className='btn__payment'>Procéder au paiement</button>  

        </div>
        <Footer/>
        </div>
    );
}