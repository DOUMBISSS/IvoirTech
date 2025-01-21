import React from 'react';
import Footer from '../Pages/Footer';

function Contact () {
            
    return (
    <div>
 
        <div className="container">
          <div className="main--contact">
            <h4>Remplissez notre formulaire de contact</h4>
            <div className="main--contact--content">
                <div className="main--contact--content--left">
                  <form>
                    <div class="mb-3">
                      <label for="exampleInputEmail1" className="form-label">Noms complets</label>
                      <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                    </div>
                    <div class="mb-3">
                      <label for="exampleFormControlInput1" className="form-label">Email address</label>
                      <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com"/>
                    </div>
                    <div class="mb-3">
                      <label for="exampleFormControlInput1" className="form-label">Numéro de téléphone</label>
                      <input type="number" className="form-control" id="exampleFormControlInput1" placeholder=""/>
                    </div>
                    <div className="mb-3">
                      <label for="exampleFormControlTextarea1" className="form-label">Votre message</label>
                      <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                    </div>
                    <button type="submit" className="btn btn-primary">Envoyer</button>
                  </form>
                </div>
                <div className="main--contact--content--right">
                  <p>Aidez-nous à mieux comprendre vos besoins</p>
                  <p>Adresse : Cocody Angré 7eme Tranche / Abidjan – Plateau – 01 BP 2076 Abidjan 01</p>
                  <p>Tel : +225 07 77 88 00 82 / +225 07 89 80 08 62</p>
                  <p> E-mail : sci-mayedo@immobilier.com</p>
                  <p>site web : www.sci-mayedo.com</p>
                </div>
            </div>
          </div>
        </div>
        <Footer/>
    </div>
    );
}

export default Contact;
