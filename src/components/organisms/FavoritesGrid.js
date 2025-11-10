// src/components/organisms/FavoritesGrid.js
'use client';

import { motion } from 'framer-motion';

// Imágenes placeholder de Unsplash para los favoritos
const FAVORITE_IMAGES = {
  item1: 'https://images.unsplash.com/photo-1550317138-10000687a72b?auto=format&fit=crop&w=800&q=80', // Hot Dog
  item2: 'https://images.unsplash.com/photo-1584365604111-a89074a69c0f?auto=format&fit=crop&w=800&q=80', // Elote
  item3: 'https://images.unsplash.com/photo-1576092762791-d01f94d8004f?auto=format&fit=crop&w=800&q=80', // Fresas
};

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
              <div className="relative h-64 w-full overflow-hidden">
                <img
                  src={FAVORITE_IMAGES[`item${i + 1}`]}
                  alt={item.name}
                  className="w-full h-full object-cover transition-transform duration-500 ease-in-out group-hover:scale-110"
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