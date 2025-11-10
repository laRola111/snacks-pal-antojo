// src/components/organisms/HeroSection.js
'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';

// NOTA: Usaremos un placeholder de Unsplash mientras el cliente nos pasa fotos.
// He añadido 'images.unsplash.com' a next.config.mjs
const HERO_IMAGE_URL = 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1970&q=80';

export default function HeroSection({ lang, dict }) {
  return (
    <section className="relative w-full h-[70vh] min-h-[500px] text-white overflow-hidden">
      {/* Fondo de Imagen */}
      <motion.div
        className="absolute inset-0 z-0"
        initial={{ scale: 1.1 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1.5, ease: 'easeOut' }}
      >
        <img
          src={HERO_IMAGE_URL}
          alt={dict.imageAlt}
          className="object-cover w-full h-full"
        />
        {/* Overlay oscuro para legibilidad */}
        <div className="absolute inset-0 bg-black/50" />
      </motion.div>

      {/* Contenido */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full max-w-4xl px-4 mx-auto text-center">
        <motion.h1
          className="mb-4 text-4xl font-bold leading-tight md:text-6xl font-sans"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          {dict.title}
        </motion.h1>
        
        <motion.p
          className="mb-8 text-lg md:text-xl max-w-2xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          {dict.subtitle}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <Link
            href={`/${lang}#menu`} // Lo haremos apuntar a la sección de menú
            className="px-8 py-3 font-bold text-white transition-all duration-300 rounded-full shadow-lg bg-primary-dark hover:bg-primary focus:outline-none focus:ring-2 focus:ring-primary-light focus:ring-offset-2"
          >
            {dict.button}
          </Link>
        </motion.div>
      </div>
    </section>
  );
}