// src/components/molecules/MenuItem.js
'use client';

import { motion } from 'framer-motion';

export default function MenuItem({ name, description, price }) {
  
  const cardVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { 
      opacity: 1, 
      scale: 1,
      transition: { duration: 0.4, ease: 'easeOut' }
    }
  };
  
  return (
    <motion.div
      className="bg-white rounded-lg shadow-lg overflow-hidden flex flex-col h-full"
      variants={cardVariants}
      // No necesitamos 'initial' o 'whileInView' aquí,
      // porque el 'MenuSection' padre ya se encarga de la animación de entrada del grupo.
    >
      {/* Aquí podríamos añadir una imagen (si la tuviéramos por item):
        <img src="/img/placeholder-item.jpg" alt={name} className="w-full h-48 object-cover" /> 
      */}
      <div className="p-6 flex flex-col flex-grow">
        <h4 className="text-xl font-bold font-sans text-primary-dark">{name}</h4>
        <p className="text-muted mt-2 flex-grow">{description}</p>
        {/* <div className="mt-4 text-2xl font-bold font-sans text-secondary-dark">
          ${price}
        </div> */}
      </div>
    </motion.div>
  );
}