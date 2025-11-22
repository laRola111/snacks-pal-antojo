// src/components/organisms/SpecialOffer.js
'use client';

import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';

export default function SpecialOffer({ lang, dict }) {
  return (
    <section className="w-full bg-gray-50 overflow-hidden">
      <div className="container mx-auto max-w-7xl px-4 py-20 md:py-32">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          
          {/* Columna de Texto (Sin cambios) */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
          >
            <span className="text-secondary-dark font-bold uppercase tracking-wider">
              {dict.title}
            </span>
            
            {/* <motion.div 
              className="absolute top-0 right-0 md:right-10 bg-secondary text-foreground font-bold font-sans text-xl px-5 py-2 rounded-lg shadow-lg z-30"
              initial={{ opacity: 0, scale: 0.5, rotate: 15 }}
              whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.5, delay: 0.6, type: 'spring', stiffness: 100 }}
            >
              $12.99
            </motion.div> */}
            
            <h2 className="mt-2 text-3xl md:text-5xl font-bold font-sans text-foreground">
              {dict.subtitle} <br className="hidden md:block" />
              <span className="text-primary">{dict.itemName}</span>
            </h2>
            <p className="mt-6 text-lg text-muted">
              {dict.description}
            </p>
            <Link
              href={`/${lang}/menu-fast-food`}
              className="inline-block mt-8 px-8 py-3 font-bold text-white transition-all duration-300 rounded-full shadow-lg bg-primary-dark hover:bg-primary focus:outline-none focus:ring-2 focus:ring-primary-light focus:ring-offset-2"
            >
              {dict.button}
            </Link>
          </motion.div>

          {/* Columna de Imagen (Con transiciones corregidas) */}
          <motion.div
            className="relative h-80 md:h-[500px]"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5 }}
          >
            {/* Papas (Detrás y a la izquierda) */}
            <motion.div
              className="absolute top-2 -translate-y-1/4 left-0 w-48 h-48 lg:w-64 lg:h-64 z-10"
              initial={{ opacity: 0, x: -50, rotate: -10, y: 0 }} // Estado inicial
              whileInView={{ opacity: 1, x: 0, rotate: 0, y: [0, -10, 0] }} // Estado final (incluye flote)
              viewport={{ once: true, amount: 0.5 }}
              // --- 1. TRANSICIÓN CORREGIDA ---
              transition={{
                // Transición para entrada (opacity, x, rotate)
                default: { duration: 0.8, delay: 0.4, ease: 'easeOut' },
                // Transición para flote (y)
                y: {
                  duration: 6,
                  repeat: Infinity,
                  repeatType: 'reverse',
                  ease: 'easeInOut',
                  delay: 1.2 // Empieza a flotar después de entrar
                }
              }}
            >
              <Image src="/papas.png" alt="Papas Fritas" fill className="object-contain drop-shadow-xl" />
            </motion.div>
            
            {/* Hamburguesa (Delante y a la derecha) */}
            <motion.div
              className="absolute top-2 -translate-y-1/2 right-1/4 w-72 h-72 lg:w-96 lg:h-96 z-20"
              initial={{ opacity: 0, scale: 0.7, x: 50, y: 0 }} // Estado inicial
              whileInView={{ opacity: 1, scale: 1, x: 0, y: [0, 10, 0] }} // Estado final (incluye flote)
              viewport={{ once: true, amount: 0.5 }}
              // --- 2. TRANSICIÓN CORREGIDA ---
              transition={{
                // Transición para entrada (opacity, scale, x)
                default: { duration: 0.8, ease: 'easeOut' },
                // Transición para flote (y)
                y: {
                  duration: 4,
                  repeat: Infinity,
                  repeatType: 'reverse',
                  ease: 'easeInOut',
                  delay: 0.8 // Empieza a flotar después de entrar
                }
              }}
            >
              <Image src="/burgers.png" alt={dict.itemName} fill className="object-contain drop-shadow-2xl" />
            </motion.div>

          </motion.div>
        </div>
      </div>
    </section>
  );
}