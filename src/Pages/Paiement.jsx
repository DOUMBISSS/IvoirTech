
import Footer from "./Footer";


export default function Paiement (){
    return (
            <div>
                 <div className="main--paiement">
            <div className="main--paiement--container">
                <div className="main--paiement--container--content--box1">
                    <div className="info--articles">
                        <p>Sous total (3 articles)</p>
                        <p>3000 frs</p>
                    </div>
                    <div className="info--articles">
                        <p>Frais de livraison</p>
                        <p>1000 frs</p>
                    </div>
                    <div className="info--articles">
                        <p>Coupon</p>
                        <div className="coupon">
                            <input type="text" id="coupons"  placeholder="coupon..."/>
                            <button className="btn--blue">Appliquer</button>
                        </div>
                    </div>
                    <div className="info--articles">
                        <p>Coupon</p>
                        <p>4000 frs</p>
                    </div>
                </div>
                <div className="main--paiement--container--content--box2">
                    <div className="user--info">
                        <h3>Numero de telephone</h3>
                        <p className="add--adresse">Ajouter une adressse</p>
                    </div>
                  <div className="contact">
                    <p>07 77 88 00 82</p>
                  </div>
                </div>

                <div className="main--paiement--container--content--box2">
                    <div className="user--info">
                        <h3>Differentes adresses</h3>
                        <p className="add--adresse">Ajouter une adressse</p>
                    </div>
                    <div className="row">
                        <div className="row--content">
                            <div className="row--content--box">
                                <div className="col--content">
                                    <p className="place">Maison</p>
                                    <p className="adrresse--description">Non loin de la pharmacie Akadjoba</p>
                                </div>
                            </div>
                            <div className="row--content--box">
                                <div className="col--content">
                                    <p className="place">Maison</p>
                                    <p className="adrresse--description">Riviera Bonoumin non loin de Abidjan Mall</p>
                                </div>
                            </div>
                            <div className="row--content--box">
                                <div className="col--content">
                                    <p className="place">Maison</p>
                                    <p className="adrresse--description">Riviera Bonoumin non loin de Abidjan Mall</p>
                                </div>
                            </div>
                        </div>
                        
                        
                    </div>
                </div>

                <div className="main--paiement--container--content--box2">
                    <div className="user--info">
                        <h3>Option de paiement</h3>
                    </div>
                    <div className="option--paiement">
                        <label>
                            <input type="radio" name="radio"/>
                            Cash a la livraison
                        </label>
                    </div>

                  </div>

                  <button id="btn--paiement">Proceder au paiement </button>
                </div>
                

            </div>
            <Footer/>
            </div>
    );
}