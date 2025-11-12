// src/components/atoms/WhatsAppButton.js
'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { FaWhatsapp } from 'react-icons/fa';

export default function WhatsAppButton() {
  // Datos actualizados con la info de Austin, TX
  const phoneNumber = '15125718832'; // <-- CAMBIADO
  const message = 'Hola, ¡me gustaría hacer un pedido!';

  const whatsappLink = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <motion.div
      // ... (el resto del componente sigue igual)
// ...
    >
      <Link
        href={whatsappLink}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center justify-center w-16 h-16 bg-green-500 rounded-full shadow-lg text-white"
        aria-label="Contactar por WhatsApp"
      >
        <FaWhatsapp size={36} />
      </Link>
    </motion.div>
  );
}