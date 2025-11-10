// src/components/atoms/WhatsAppButton.js
'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { FaWhatsapp } from 'react-icons/fa';

export default function WhatsAppButton() {
  // Datos ficticios como solicitaste
  const phoneNumber = '15551234567'; // Número ficticio (formato internacional sin '+')
  const message = 'Hola, ¡me gustaría hacer un pedido!';

  const whatsappLink = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <motion.div
      className="fixed bottom-6 right-6 z-50"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 1, duration: 0.5, type: 'spring' }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
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