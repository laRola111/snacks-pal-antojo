// src/components/organisms/MenuSwitch.js
'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';

// Datos de las tarjetas (podríamos mover esto al diccionario si se repite)
const menuCards = [
  {
    key: 'card1',
    href: '#fast-food', // ID de la futura sección del menú
    imageUrl: '/img/menu-fast-food.jpg',
  },
  {
    key: 'card2',
    href: '#snacks', // ID de la futura sección del menú
    imageUrl: '/img/menu-snacks.jpg',
  },
];

export default function MenuSwitch({ lang, dict }) {
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
    <section id="menu" className="py-16 bg-white md:py-24 text-foreground">
      <div className="container px-4 mx-auto max-w-7xl">
        {/* Título de la Sección */}
        <motion.div
          className="mb-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-bold md:text-5xl font-sans text-primary-dark">
            {dict.title}
          </h2>
          <p className="mt-4 text-lg text-muted max-w-xl mx-auto">
            {dict.subtitle}
          </p>
        </motion.div>

        {/* Grid de Tarjetas de Menú */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {menuCards.map((card, i) => (
            <motion.div
              key={card.key}
              custom={i}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
            >
              <Link href={`/${lang}${card.href}`}>
                <div className="relative h-96 w-full rounded-xl shadow-2xl overflow-hidden group transform transition-all duration-500 hover:scale-105">
                  {/* Imagen de fondo */}
                  <img
                    src={card.imageUrl}
                    alt={dict[card.key].imgAlt}
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  {/* Overlay oscuro */}
                  <div className="absolute inset-0 bg-black/40 group-hover:bg-black/30 transition-colors duration-300" />
                  
                  {/* Contenido de la tarjeta */}
                  <div className="relative z-10 flex flex-col items-center justify-end h-full p-8 text-center text-white">
                    <h3 className="text-3xl font-bold font-sans mb-2">
                      {dict[card.key].title}
                    </h3>
                    <p className="text-lg opacity-90">
                      {dict[card.key].description}
                    </p>
                    <div className="mt-4 px-6 py-2 bg-secondary rounded-full text-sm font-bold text-foreground opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300">
                      Ver Menú
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}