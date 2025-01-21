import React from 'react';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { coffee } from '@fortawesome/free-brands-svg-icons'
export default function  Footer () {
            
return (
    <div className="footer">
      <div className="footer__container">

          <div className="footer__container__content">
                <h5 className="footer__header">ELECTRO<span>SHOP</span></h5>
                <p>Suivez-nous :</p>
                <div className="social__media__box">
                  <p><i class="fa-brands fa-facebook"></i></p>
                  <p><i class="fa-brands fa-instagram"></i></p>
                  <p><i class="fa-brands fa-tiktok"></i></p>
                  <p><i class="fa-brands fa-twitter"></i></p>
                </div>
          </div>
          <div className="footer__container__content">
                <h5 className="footer__header">Compagnie</h5>
              <p>Devenir partenaires</p>
              <p>Contactez-nous</p>
              <p>Politique de confidentialité</p>
              <p>Termes et conditions</p>
          </div>
          <div className="footer__container__content">
                <h5 className="footer__header">Contacts</h5>
                  <p><i class="fa-solid fa-location-dot"></i> Cocody Angre 7eme Tranche</p>
                  <p><i class="fa-solid fa-envelope"></i> shoppingBag@online.com</p>
                  <p><i class="fa-brands fa-whatsapp"></i> +225 07 77 88 00 82 </p>
                  <p><i class="fa-solid fa-globe"></i> www.shoppingBag@online.com </p>
          </div>
          <div className="footer__container__content">
              <h5 className="footer__header">Payment methods</h5>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
              <div className="payment__content">
                  <div className="payment__img">
                      <img src="https://financialit.net/sites/default/files/visa-mastercard-amex_0.png" alt="" />
                  </div>
              </div>
          </div>
      </div>
          <div className='copyright'>
            <p>All Rights Reserved © Designed by <span>Doumbia Fode</span></p>
      </div>
    </div>

    );
}

