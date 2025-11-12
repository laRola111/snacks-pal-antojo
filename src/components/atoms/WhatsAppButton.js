// src/components/atoms/WhatsAppButton.js
import React from 'react';
import { FaWhatsapp } from 'react-icons/fa';

const WhatsAppButton = ({ lang }) => {
  const texts = {
    es: 'Pedir ahora',
    en: 'Order now',
  };

  const phoneNumber = '15125866173'; // Reemplaza con el número de teléfono
  const message = lang === 'es' ? 'Hola, quiero hacer un pedido.' : 'Hello, I want to place an order.';
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 flex items-center justify-center 
                 bg-green-500 text-white p-4 rounded-full 
                 shadow-lg hover:bg-green-600 transition-transform 
                 hover:scale-110"
      // -------------------------
      aria-label="Chat on WhatsApp"
    >
      <FaWhatsapp size={32} />
      <span className="ml-3 font-semibold hidden sm:inline">
        {texts[lang]}
      </span>
    </a>
  );
};

export default WhatsAppButton;