import React from 'react';
import axios from 'axios';

export default function Payment ({ cart, totalAmount, name, address, number }) {

  const handlePayment = async () => {
    if (window.CinetPay) {
      const CinetPay = window.CinetPay;

    try {
      CinetPay.setConfig({
        apikey: '29749441966ae1bf12ec802.60766348',
        site_id: 5877184,
        notify_url: 'https://electroshop-b32l.onrender.com',
        close_after_response: true,
        mode:'PRODUCTION'
      });

      CinetPay.getCheckout({
        transaction_id: Math.floor(Math.random() * 100000000).toString(),
        amount: totalAmount,
        currency: 'XOF',
        channels: 'MOBILE_MONEY',
        description: 'Paiement de commande',
        customer_name: name,
        customer_phone_number: number,
        customer_address: address,
        customer_city: 'Votre ville',
        customer_country: 'CM',
        customer_state: 'Votre état',
        customer_zip_code: 'Votre code postal',
      });

      CinetPay.waitResponse(async (data) => {
        if (data.status === "ACCEPTED") {
          // Envoyer les informations de commande à votre backend pour enregistrement dans MongoDB
          try {
            const response = await axios.post('https://electroshop-b32l.onrender.com/payment', {
              cart,
              totalAmount,
              name,
              address,
              number,
              paymentStatus: data.status,
              transactionId: data.transaction_id,
            });

            if (response.data.success) {
              alert('Payment successful and order validated');
              // Vous pouvez rediriger l'utilisateur vers une page de confirmation
            }
          } catch (error) {
            console.error('Order save error', error);
            alert('Error saving order');
          }
        } else {
          alert('Payment failed');
        }
      });

      CinetPay.onError(function (data) {
        console.error('Payment error', data);
        alert('Payment error');
      });
    } catch (error) {
      console.error('Payment error', error);
      alert('Payment error');
    }
  };

  return (
    <div>
      button
      <button className='btn__payment' onClick={handlePayment}>Procéder au paiement</button>
    </div>
  );
};
}

