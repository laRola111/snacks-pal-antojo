// src/components/organisms/HeroSection.js
'use client';

import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';

export default function HeroSection({ lang, dict }) {
  // 'dict' ya es el objeto 'hero' (pasado desde page.js)
  // Por lo tanto, accedemos a dict.fastFood y dict.snacks

  const panelVariants = (delay = 0) => ({
    hidden: { opacity: 0, scale: 1.05 },
    visible: { 
      opacity: 1, 
      scale: 1,
      transition: { duration: 0.8, ease: 'easeOut', delay }
    },
  });

  return (
    // Grid de 2 columnas en escritorio, 1 en móvil
    <section className="grid grid-cols-1 lg:grid-cols-2 h-[70vh] min-h-[500px] text-white">
      
      {/* Panel 1: Comida Rápida */}
      <motion.div
        className="relative flex flex-col items-center justify-center p-8 text-center overflow-hidden group"
        variants={panelVariants(0)}
        initial="hidden"
        animate="visible"
      >
        {/* Fondo con Imagen */}
        <Image
          src="/burgers.png" // Usando tu imagen de /public
          // ----- CORRECCIÓN AQUÍ -----
          alt={dict.fastFood.imgAlt} // Antes: dict.hero.fastFood.imgAlt
          // -------------------------
          layout="fill"
          objectFit="cover"
          quality={80}
          className="absolute z-0 transition-transform duration-500 ease-in-out group-hover:scale-110"
        />
        {/* Overlay oscuro */}
        <div className="absolute inset-0 bg-black/50 z-10" />

        {/* Contenido */}
        <div className="relative z-20">
          <motion.h2
            className="mb-4 text-4xl font-bold md:text-5xl font-sans"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            {/* ----- CORRECCIÓN AQUÍ ----- */}
            {dict.fastFood.title}
          </motion.h2>
          <motion.p
            className="mb-6 text-lg"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.6 }}
          >
            {/* ----- CORRECCIÓN AQUÍ ----- */}
            {dict.fastFood.subtitle}
          </motion.p>
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.8 }}
          >
            <Link
              href={`/${lang}/menu-fast-food`}
              className="px-8 py-3 font-bold text-white transition-all duration-300 rounded-full shadow-lg bg-primary-dark hover:bg-primary focus:outline-none focus:ring-2 focus:ring-primary-light"
            >
              {/* ----- CORRECCIÓN AQUÍ ----- */}
              {dict.fastFood.button}
            </Link>
          </motion.div>
        </div>
      </motion.div>

      {/* Panel 2: Snacks y Frutas */}
      <motion.div
        className="relative flex flex-col items-center justify-center p-8 text-center overflow-hidden group"
        variants={panelVariants(0.2)}
        initial="hidden"
        animate="visible"
      >
        {/* Fondo con Imagen */}
        <Image
          src="/fresas.png" // Usando tu imagen de /public
          // ----- CORRECCIÓN AQUÍ -----
          alt={dict.snacks.imgAlt} // Antes: dict.hero.snacks.imgAlt
          // -------------------------
          layout="fill"
          objectFit="cover"
          quality={80}
          className="absolute z-0 transition-transform duration-500 ease-in-out group-hover:scale-110"
        />
        {/* Overlay oscuro */}
        <div className="absolute inset-0 bg-black/50 z-10" />

        {/* Contenido */}
        <div className="relative z-20">
          <motion.h2
            className="mb-4 text-4xl font-bold md:text-5xl font-sans"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            {/* ----- CORRECCIÓN AQUÍ ----- */}
            {dict.snacks.title}
          </motion.h2>
          <motion.p
            className="mb-6 text-lg"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.6 }}
          >
            {/* ----- CORRECCIÓN AQUÍ ----- */}
            {dict.snacks.subtitle}
          </motion.p>
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.8 }}
          >
            <Link
              href={`/${lang}/menu-snacks`}
              className="px-8 py-3 font-bold text-black transition-all duration-300 rounded-full shadow-lg bg-secondary hover:bg-secondary-dark focus:outline-none focus:ring-2 focus:ring-secondary-light"
            >
              {/* ----- CORRECCIÓN AQUÍ ----- */}
              {dict.snacks.button}
            </Link>
          </motion.div>
        </div>
      </motion.div>
      
    </section>
  );
}