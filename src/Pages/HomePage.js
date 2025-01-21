import React, { useEffect, useState } from 'react';
import {Link} from 'react-router-dom';
import 'animate.css';
import Footer from './Footer';
import Slider from '../components/Slider';

import { Blocks } from "react-loader-spinner";


export default function HomePage () {
  const [display,setDisplay]= useState(false);
  const [loading, setLoading] = useState(true);

  const [cart,setCart]= useState(false);

  const closeCart = ()=> {
    setCart (false)
}
const showCart =()=>{
    setCart (true)
}

//   const [articles,setCat]=useState(categoryArticles);
//   useEffect(() => {
//     fetch('http://127.0.0.1:5000/product')
//     .then((res)=>res.json())
//     .then((categoryArticles)=>{dispatch(getCatArticlesSmart(categoryArticles))
//     })
//     .catch(e => { console.log(e)})
//     }, [])

useEffect(() => {
    setTimeout(()=>{setLoading(false)},1000);   
    }, [])
    return (
       <>
       {loading ? ( <div className='load'>
       <Blocks  visible={true}height="100" width="100%" ariaLabel="blocks-loading" wrapperStyle={{}} wrapperClass="blocks-wrapper"/>
       </div>
    ) :(  <div>
        
         <Slider/>
            <div className="society">
                <h1 className='container--header'>Nos marques</h1>
              </div>
            <div className="society--details animate__animated animate__lightSpeedInLeft">
                <img src="https://logos-marques.com/wp-content/uploads/2021/03/Apple-logo.png" alt="" />
                <img src="https://rouen-informatique.com/wp-content/uploads/2019/02/Logo-Asus.jpg" alt="" />
                <img src="https://guide-images.cdn.ifixit.com/igi/cDZiwSJVRhEXkKCC.large" alt="" />
                <img src="https://www.f3df.com/wp-content/uploads/2018/02/hp-logo-480x480.png" alt="" />
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSueOGkrxm-15qeNhA5lefWu61i-ivS6iDqpSA3PpNssyu8RwEPxzXLZGnq9qItq2AIVs&usqp=CAU" alt="" />
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT0NuTpJ3fKNFdqxJO-pPavhX7tVh6My9fRhOmLwb5Rl7eCx49zu4c4OPBZd6mZungwA8g&usqp=CAU" alt="" />
                <img src="https://phonesdata.com/files/brands/samsung.jpg" alt="" />
                <img src="https://mms.businesswire.com/media/20211114005296/fr/806231/23/Toshiba_logo.jpg" alt="" />
            </div>



          <div className="container">
          <div className='col-12 col-md-12' >
          <div className='mb__container'>
         <h2 className='mb__title'>Nouvel arrivage</h2>
         {/* <div className='mb__block'>
     <Link to="/all"><button className='mb__button'>Tous nos produits</button></Link>
         </div> */}
         </div>
            <div className='part__new__product'>
            <div className='featured__product__cards'>
                        <div className='featured__product__cards__header'>
                        <p className='sales'>Promo -20%</p>
                           <div className='featured__product__cards__header__images'>
                            <img src="https://sociam.ci/gestion/products/a4733a83-995c-4de4-88d3-e1c250d7b63a.jpg" alt="" />
                           </div>
                        </div>
                        <div className='featured__product__cards__body'>
                                <p className='brand'>Nasco</p>
                               <h5 className='product__categorie'>Cuisinière</h5>
                               <p className='product__desc'> GAZINIERE 4 FEUX</p>
                               <p className='product__price'>15 000 FCFA</p>
                                <p className="info">2 en stock</p>
                               <div className='button--block'>
                               <button className='btn__buy'><Link className='link__btn' to=''></Link>Acheter</button>
                               <button className='btn__add'>+</button>
                                </div>  
                        </div>
                    </div> 
                    <div className='featured__product__cards'>
                        <div className='featured__product__cards__header'>
                        <p className='sales'>Promo -20%</p>
                           <div className='featured__product__cards__header__images'>
                            <img src="https://sociam.ci/gestion/products/910b5fc7-e372-4cfd-a2b1-0d35a3b70d07.jpg" alt="" />
                           </div>
                        </div>
                        <div className='featured__product__cards__body'>
                                <p className='brand'>Nasco</p>
                               <h5 className='product__categorie'>Cuisinière</h5>
                               <p className='product__desc'> GAZINIERE 4 FEUX</p>
                               <p className='product__price'>15 000 FCFA</p>
                                <p className="info">2 en stock</p>
                               <div className='button--block'>
                               <button className='btn__buy'><Link className='link__btn' to=''></Link>Acheter</button>
                               <button className='btn__add'>+</button>
                                </div>  
                        </div>
                    </div> 
                    <div className='featured__product__cards'>
                        <div className='featured__product__cards__header'>
                        <p className='sales'>Promo -20%</p>
                           <div className='featured__product__cards__header__images'>
                            <img src="https://sociam.ci/gestion/products/1203d501-0c2f-4468-a34c-b1b0a0c2cbbd.jpg" alt="" />
                           </div>
                        </div>
                        <div className='featured__product__cards__body'>
                                <p className='brand'>Nasco</p>
                               <h5 className='product__categorie'>Chaudière </h5>
                               <p className='product__desc'>Chaudière 5L</p>
                               <p className='product__price'>15 000 FCFA</p>
                                <p className="info">2 en stock</p>
                               <div className='button--block'>
                               <button className='btn__buy'><Link className='link__btn' to=''></Link>Acheter</button>
                               <button className='btn__add'>+</button>
                                </div>  
                        </div>
                    </div> 
                    <div className='featured__product__cards'>
                        <div className='featured__product__cards__header'>
                        <p className='sales'>Promo -20%</p>
                           <div className='featured__product__cards__header__images'>
                            <img src="https://sociam.ci/gestion/products/d960d36a-c19e-48ef-9900-7e58af821f18.jpg" alt="" />
                           </div>
                        </div>
                        <div className='featured__product__cards__body'>
                                <p className='brand'>Nasco</p>
                               <h5 className='product__categorie'>Réfrigerateur</h5>
                               <p className='product__desc'>REFRIGERATEUR 4 PORTES 522L </p>
                               <p className='product__price'>15 000 FCFA</p>
                               <div className='button--block'>
                               <button className='btn__buy'><Link className='link__btn' to=''></Link>Acheter</button>
                               <button className='btn__add'>+</button>
                                </div>  
                        </div>
                    </div> 
                    
                      
            </div>
          </div>
          <div className='container__banner container'>
            <div className='container__banner__left'>
                <div className='banner__content'>
                <h5 className='banner__title'>Machines à laver</h5>
                <h6 lassName='banner__desc'>Le soin suprême <span>du linge</span></h6>
                </div>
            </div>
            <div className='container__banner__right'>
            <div className='banner__content'>
                <h5 className='banner__title'>Son de qualité</h5>
                <h6 lassName='banner__desc'>HOME <span>CINEMA</span></h6>
                </div>
            </div>
          </div>
          <div className='col-12 col-md-12' >
         <div className='mb__container'>
         <h2 className='mb__title'>Nouvel arrivage</h2>
         <div className='mb__block__button'>
          <button className='mb__button'>Climatisation</button>
          <button className='mb__button'>Le Froid</button>
          <button className='mb__button'>Cuisine - Maison</button>
          <button className='mb__button'>Télévision</button>
          <button className='mb__button'>Audio - Enceinte</button>
         </div>
         </div>
            <div className='part__new__product'>
            <div className='featured__product__cards'>
                        <div className='featured__product__cards__header'>
                        <p className='sales'>Promo -20%</p>
                           <div className='featured__product__cards__header__images'>
                            <img src="https://sociam.ci/gestion/products/ea7026e8-72b8-49de-86e5-f233d314c651.jpg" alt="" />
                           </div>
                        </div>
                        <div className='featured__product__cards__body'>
                                <p className='brand'>Nasco</p>
                               <h5 className='product__categorie'>Climatisation</h5>
                               <p className='product__desc'> SPLIT 9.000 BTU R410A</p>
                               <p className='product__price'>15 000 FCFA</p>
                               <div className='button--block'>
                               <button className='btn__buy'><Link className='link__btn' to=''></Link>Acheter</button>
                               <button className='btn__add'>+</button>
                                </div>  
                        </div>
                    </div> 
                    <div className='featured__product__cards'>
                        <div className='featured__product__cards__header'>
                        <p className='sales'>Promo -20%</p>
                           <div className='featured__product__cards__header__images'>
                            <img src="https://sociam.ci/gestion/products/d3cee18f-7e6e-4d79-b857-c5fdfc2c844d.jpg" alt="" />
                           </div>
                        </div>
                        <div className='featured__product__cards__body'>
                                <p className='brand'>Apple</p>
                               <h5 className='product__categorie'>Fer à repasser</h5>
                               <p className='product__desc'>FER A REPASSER VAPEUR 2200W </p>
                               <p className='product__price'>15 000 FCFA</p>
                               <div className='button--block'>
                               <button className='btn__buy'><Link className='link__btn' to=''></Link>Acheter</button>
                               <button className='btn__add'>+</button>
                                </div>  
                        </div>
                    </div> 
                    <div className='featured__product__cards'>
                        <div className='featured__product__cards__header'>
                        <p className='sales'>Promo -20%</p>
                           <div className='featured__product__cards__header__images'>
                            <img src="https://sociam.ci/gestion/products/136bc2d7-3624-4368-aa6f-d3b5df091d05.jpg" alt="" />
                           </div>
                        </div>
                        <div className='featured__product__cards__body'>
                                <p className='brand'>Apple</p>
                               <h5 className='product__categorie'>Télévision</h5>
                               <p className='product__desc'>TV SMART LED VIDAA 50</p>
                               <p className='product__price'>15 000 FCFA</p>
                               <div className='button--block'>
                               <button className='btn__buy'><Link className='link__btn' to=''></Link>Acheter</button>
                               <button className='btn__add'>+</button>
                                </div>  
                        </div>
                    </div> 
                    <div className='featured__product__cards'>
                        <div className='featured__product__cards__header'>
                        <p className='sales'>Promo -20%</p>
                           <div className='featured__product__cards__header__images'>
                            <img src="https://sociam.ci/gestion/products/89022367-ce07-4956-8607-9151d6c1323a.jpg" alt="" />
                           </div>
                        </div>
                        <div className='featured__product__cards__body'>
                                <p className='brand'>Nasco</p>
                               <h5 className='product__categorie'>Déshumidificateur d'air</h5>
                               <p className='product__desc'>DÉSHUMIDIFICATEUR BLANC</p>
                               <p className='product__price'>15 000 FCFA</p>
                               <div className='button--block'>
                               <button className='btn__buy'><Link className='link__btn' to=''></Link>Acheter</button>
                               <button className='btn__add'>+</button>
                                </div>  
                        </div>
                    </div>        
            </div>
          </div>

          <div className='col-12 col-md-12' >
         <div className='mb__container'>
         <h2 className='mb__title'>Produits Populaires</h2>
         <div className='mb__block'>
     <Link to="/all"><button className='mb__button'>Tous nos produits</button></Link>
         </div>
         </div>

         <div className='part__new__product'>
            <div className='featured__product__cards'>
                        <div className='featured__product__cards__header'>
                        <p className='sales'>Promo -20%</p>
                           <div className='featured__product__cards__header__images'>
                            <img src="https://sociam.ci/gestion/products/a4733a83-995c-4de4-88d3-e1c250d7b63a.jpg" alt="" />
                           </div>
                        </div>
                        <div className='featured__product__cards__body'>
                                <p className='brand'>Nasco</p>
                               <h5 className='product__categorie'>Cuisinière</h5>
                               <p className='product__desc'> GAZINIERE 4 FEUX</p>
                               <p className='product__price'>15 000 FCFA</p>
                               <div className='button--block'>
                               <button className='btn__buy'><Link className='link__btn' to=''></Link>Acheter</button>
                               <button className='btn__add'>+</button>
                                </div>  
                        </div>
                    </div> 
                    <div className='featured__product__cards'>
                        <div className='featured__product__cards__header'>
                        <p className='sales'>Promo -20%</p>
                           <div className='featured__product__cards__header__images'>
                            <img src="https://sociam.ci/gestion/products/910b5fc7-e372-4cfd-a2b1-0d35a3b70d07.jpg" alt="" />
                           </div>
                        </div>
                        <div className='featured__product__cards__body'>
                                <p className='brand'>Nasco</p>
                               <h5 className='product__categorie'>Cuisinière</h5>
                               <p className='product__desc'> GAZINIERE 4 FEUX </p>
                               <p className='product__price'>15 000 FCFA</p>
                               <div className='button--block'>
                               <button className='btn__buy'><Link className='link__btn' to=''></Link>Acheter</button>
                               <button className='btn__add'>+</button>
                                </div>  
                        </div>
                    </div> 
                    <div className='featured__product__cards'>
                        <div className='featured__product__cards__header'>
                        <p className='sales'>Promo -20%</p>
                           <div className='featured__product__cards__header__images'>
                            <img src="https://sociam.ci/gestion/products/1203d501-0c2f-4468-a34c-b1b0a0c2cbbd.jpg" alt="" />
                           </div>
                        </div>
                        <div className='featured__product__cards__body'>
                                <p className='brand'>Nasco</p>
                               <h5 className='product__categorie'>Chaudière </h5>
                               <p className='product__desc'>Chaudière 5L</p>
                               <p className='product__price'>15 000 FCFA</p>
                               <div className='button--block'>
                               <button className='btn__buy'><Link className='link__btn' to=''></Link>Acheter</button>
                               <button className='btn__add'>+</button>
                                </div>  
                        </div>
                    </div> 
                    <div className='featured__product__cards'>
                        <div className='featured__product__cards__header'>
                        <p className='sales'>Promo -20%</p>
                           <div className='featured__product__cards__header__images'>
                            <img src="https://sociam.ci/gestion/products/d960d36a-c19e-48ef-9900-7e58af821f18.jpg" alt="" />
                           </div>
                        </div>
                        <div className='featured__product__cards__body'>
                                <p className='brand'>Nasco</p>
                               <h5 className='product__categorie'>Réfrigerateur</h5>
                               <p className='product__desc'>REFRIGERATEUR 4 PORTES 522L </p>
                               <p className='product__price'>15 000 FCFA</p>
                               <div className='button--block'>
                               <button className='btn__buy'><Link className='link__btn' to=''></Link>Acheter</button>
                               <button className='btn__add'>+</button>
                                </div>  
                        </div>
                    </div>        
            </div>
               
         {/* <div className='part__new__product'>
          
                    <Swiper spaceBetween={50} slidesPerView={3}onSlideChange={() => console.log('slide change')} onSwiper={(swiper) => console.log(swiper)}>
                    <SwiperSlide>  <div className='featured__product__cards'>
                        <div className='featured__product__cards__header'>
                        <p className='sales'>Promo -20%</p>
                           <div className='featured__product__cards__header__images'>
                            <img src="https://sociam.ci/gestion/products/a4733a83-995c-4de4-88d3-e1c250d7b63a.jpg" alt="" />
                           </div>
                        </div>
                        <div className='featured__product__cards__body'>
                                <p className='brand'>Nasco</p>
                               <h5 className='product__categorie'>Cuisinière</h5>
                               <p className='product__desc'> GAZINIERE 4 FEUX - NASGC-50X50S-CTZ</p>
                               <p className='product__price'>15 000 FCFA</p>
                               <p className="reference">Réf:ECMHDEDIPACCHCB3</p>
                                <p className="info">2 en stock</p>
                               <div className='button--block'>
                               <Link className='link__btn' to='/detail'><button className='btn__buy'>Acheter</button></Link>
                               <button className='btn__add'>+</button>
                                </div>  
                        </div>
                    </div> </SwiperSlide>
                    <SwiperSlide>Slide 2</SwiperSlide>
                    <SwiperSlide>Slide 3</SwiperSlide>
                    <SwiperSlide>Slide 4</SwiperSlide>
                    </Swiper>       
            </div> */}
         

         </div>
          


          </div>

          <div className='main__partner container'>
          <div className="society">
                <h1 className='container--header'>Nos partenaires</h1>
              </div>
            <div className="society--details animate__animated animate__lightSpeedInLeft">
                <img src="https://logos-marques.com/wp-content/uploads/2021/03/Apple-logo.png" alt="" />
                <img src="https://sociam.ci/gestion/brands/partners/cfao_logo.png" alt="" />
                <img src="https://sociam.ci/gestion/brands/partners/carrefour_logo.png" alt="" />
                <img src="https://sociam.ci/gestion/brands/partners/daddy_shop.png" alt="" />
                <img src="https://sociam.ci/gestion/brands/partners/prosuma_logo.png" alt="" />
                <img src="https://sociam.ci/gestion/brands/partners/china_logo.png" alt="" />
                <img src="https://sociam.ci/gestion/brands/partners/distrimax_logo.png" alt="" />
                <img src="https://sociam.ci/gestion/brands/partners/Jumia_logo.png" alt="" />
                <img src="https://sociam.ci/gestion/brands/partners/electroland-ghana-ltd_logo.png" alt="" />
            </div>
          </div>
          <Footer/>
        </div>

    )
}
</>
);
}

