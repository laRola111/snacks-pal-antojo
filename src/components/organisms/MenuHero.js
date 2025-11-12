// src/components/organisms/MenuHero.js
'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

export default function MenuHero({ title, imageUrl, alt }) {
  return (
    <section className="relative w-full h-64 md:h-80 bg-gray-100">
      <div className="container mx-auto max-w-7xl px-4 h-full flex flex-col md:flex-row items-center justify-between gap-8">
        
        {/* Título */}
        <motion.div
          className="text-center md:text-left"
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2, ease: 'easeOut' }}
        >
          <h1 className="text-4xl md:text-6xl font-bold font-sans text-primary-dark">
            {title}
          </h1>
          <p className="text-lg md:text-xl text-muted mt-2">
            Elige tu antojo favorito
          </p>
        </motion.div>

        {/* Imagen del Logo */}
        <motion.div
          className="relative w-48 h-48 md:w-64 md:h-64"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.4, ease: 'easeOut' }}
        >
          <Image
            src={imageUrl}
            alt={alt}
            fill
            className="object-contain rounded-full shadow-lg"
            priority // Cargar la imagen principal rápidamente
          />
        </motion.div>

      </div>
    </section>
  );
}