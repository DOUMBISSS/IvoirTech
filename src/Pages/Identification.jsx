import { useEffect, useState,useContext } from "react";
import { Link, useParams } from "react-router-dom";
import { CartContext } from '../context/CartContext';



export default function Identification (){
  const keys = ["title","label","reference"];
  const [search,setSearch]=useState("");
  const [items, setItems] = useState([]);
  const [products, setProducts] = useState(items);
  const { dispatch: cartDispatch } = useContext(CartContext);

  useEffect(() => {
    fetch('https://back-fodex-ecommerce.onrender.com/products')
        .then(response => response.json())
        .then(items => { setItems(items);
        })
        .catch(error => console.error('Error:', error));
}, []);

const handleSearching = (e)=>{
  setSearch(e.target.value);
}
console.log(items)

    return (
        <div>
            <div class="container">
            <h3 className="identify">IDENTIFIEZ VOTRE APPAREIL EN 1 CLIC</h3>
            <hr/>

            <div class="identification">
            <p>Trouvez la pièce qu'il vous faut de manière simplifiée grâce à notre outil d'identification de pièce.
                <br/>Copiez Collez le <strong>nom du modèle</strong> ou <strong>nom de la marque</strong> ou <strong>numéro de référence du constructeur</strong> et RECHERCHEZ.<br/>
                  Vous retrouverez alors les caractéristiques de votre machine ainsi qu'un lien pour accéder directement 
                    aux pièces détachées de la gamme de votre appareil. </p>
            <div class="box-search">
              <div class="form-floating mb-3">
              <input type="email" class="form-control" id="floatingInput" placeholder="name@example.com" onChange={handleSearching} value={search}/>
              <label for="floatingInput">Lancez votre recherche</label>
            </div>
            </div>
         </div>
         <div className="col-3 col-md-12">
              <div className="identification__part">

              {items.filter((item) => keys.some((key) => {
            if (search === ""){
                return 0;
              }
              else if (item[key].toLocaleLowerCase().includes(search.toLocaleLowerCase())){
                return item;
              }
              return 0;
                })).map((item) => <div key={item._id}className='featured__product__cards'>
                <div className='product__cards__header'>
                <p className='sales'>{item.title}</p>
                   <div className='featured__product__cards__header__images'>
                   {/* <Link to={`/detail/${item._id}`}><img src={`${process.env.PUBLIC_URL}/${item.image}`} alt="" /></Link> */}
                    <img src={item.img} alt="" />
                   </div>
                </div>
                <div className='featured__product__cards__body'>
                        {/* <h5 className='product__title'>{article.title}</h5> */}
                        <p className='product__desc'>{item.description}</p>
                        <p className='brand'>{item.label}</p>
                       <h5 className='product__categorie'>Smartphone</h5>
                       <p className="reference">{item.reference}</p>
                        <p className="info">2 en stock</p>
                       <p className='product__price'>{item.price} FCFA</p>
                       <div className='button--block'>
                       <Link className='link__btn' to={`/product/${item._id}`}><button className='btn__buy'>Acheter</button></Link>
                        <button className='btn__add' onClick={() => cartDispatch({ type: 'ADD_TO_CART', payload: item })}>+</button>
                        </div>  
                </div>
            </div> 
                        )}
              </div>
            </div>
        </div>



        </div>
    );
}