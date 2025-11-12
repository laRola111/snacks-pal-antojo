// src/components/organisms/FavoritesGrid.js
'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

// Array de imágenes locales (corresponden al orden en es.js)
const FAVORITE_IMAGES = [
  '/hotd.png',       // Para "Hot Dog Supremo"
  '/elote.png',      // Para "Elote Clásico" (asumiendo que tienes una imagen de elote llamada elote.png)
  '/fresas.png'      // Para "Fresas con Crema"
];

export default function FavoritesGrid({ lang, dict }) {
  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.2,
        duration: 0.6,
        ease: 'easeOut',
      },
    }),
  };

  return (
    <section className="py-16 md:py-24 bg-gray-50">
      <div className="container px-4 mx-auto max-w-7xl">
        {/* Título */}
        <motion.div
          className="mb-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
        >
          <span className="text-secondary-dark font-bold uppercase tracking-wider">
            {dict.title}
          </span>
          <h2 className="mt-2 text-3xl font-bold md:text-5xl font-sans text-primary-dark">
            {dict.subtitle}
          </h2>
        </motion.div>

        {/* Grid de Favoritos */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {dict.items.map((item, i) => (
            <motion.div
              key={item.name}
              custom={i}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              className="bg-white rounded-xl shadow-lg overflow-hidden group"
            >
              <div className="relative h-64 w-full overflow-hidden flex items-center justify-center bg-white">
                {/* --- CAMBIO AQUÍ --- */}
                <Image
                  src={FAVORITE_IMAGES[i]}
                  alt={item.name}
                  layout="fill"
                  objectFit="contain" // <-- Cambiado de "cover" a "contain"
                  className="w-full h-full transition-transform duration-500 ease-in-out group-hover:scale-105" // Ligera escala para efecto
                />
              </div>
              <div className="p-6 text-center">
                <h3 className="text-2xl font-bold font-sans text-primary mb-2">
                  {item.name}
                </h3>
                <p className="text-muted">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}