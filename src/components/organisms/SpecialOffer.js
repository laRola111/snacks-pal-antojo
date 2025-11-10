// src/components/organisms/SpecialOffer.js
'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';

// Placeholder de alta calidad para la hamburguesa
const OFFER_IMAGE_URL = 'https://images.unsplash.com/photo-1571091718767-18b5b1457add?auto=format&fit=crop&w=1000&q=80';

export default function SpecialOffer({ lang, dict }) {
  return (
    <section className="w-full bg-gray-50 overflow-hidden">
      <div className="container mx-auto max-w-7xl px-4 py-20 md:py-32">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          
          {/* Columna de Texto */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
          >
            <span className="text-secondary-dark font-bold uppercase tracking-wider">
              {dict.title}
            </span>
            <h2 className="mt-2 text-3xl md:text-5xl font-bold font-sans text-foreground">
              {dict.subtitle} <br className="hidden md:block" />
              <span className="text-primary">{dict.itemName}</span>
            </h2>
            <p className="mt-6 text-lg text-muted">
              {dict.description}
            </p>
            <Link
              href={`/${lang}#fast-food`}
              className="inline-block mt-8 px-8 py-3 font-bold text-white transition-all duration-300 rounded-full shadow-lg bg-primary-dark hover:bg-primary focus:outline-none focus:ring-2 focus:ring-primary-light focus:ring-offset-2"
            >
              {dict.button}
            </Link>
          </motion.div>

          {/* Columna de Imagen */}
          <motion.div
            className="relative h-80 md:h-[500px]"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
          >
            <img
              src={OFFER_IMAGE_URL}
              alt={dict.itemName}
              className="w-full h-full object-cover rounded-2xl shadow-2xl"
            />
            {/* Pequeño tag de precio (opcional) */}
            <div className="absolute top-4 -left-4 bg-secondary text-foreground font-bold font-sans text-xl px-5 py-2 rounded-lg shadow-lg">
              $12.99
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}