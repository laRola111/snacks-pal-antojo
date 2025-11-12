// src/components/organisms/AboutUs.js
'use client';
import Image from 'next/image';
import { motion } from 'framer-motion';

export default function AboutUs({ dict }) {
  return (
    <section className="py-16 md:py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          
          {/* --- COLUMNA DE IMAGEN MODIFICADA --- */}
          {/* 1. Contenedor Padre: Debe ser 'relative' y tener altura definida */}
          <motion.div 
            className="relative w-full h-80 md:h-96"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, amount: 0.3 }}
          >
            {/* 2. Imagen Flotante (Lógica de SpecialOffer) */}
            <motion.div
              className="absolute inset-0 w-full h-full"
              initial={{ opacity: 0, scale: 0.7 }}
              whileInView={{ opacity: 1, scale: 1, y: [0, -15, 0] }} // Flote vertical
              viewport={{ once: true, amount: 0.5 }}
              transition={{
                // Transición para entrada (opacity, scale)
                default: { duration: 0.9, ease: 'easeOut' },
                // Transición para flote (y)
                y: {
                  duration: 3.5, // Duración del ciclo de flote
                  repeat: Infinity,
                  repeatType: 'reverse',
                  ease: 'easeInOut',
                  delay: 0.9 // Empezar a flotar después de entrar
                }
              }}
            >
              <Image
                src="/hotd.png" // Usamos la imagen del hotdog
                alt={dict.imageAlt}
                layout="fill"
                objectFit="contain" // <-- IMPORTANTE: Para que no se corte
                className="drop-shadow-xl" // Sombra como en SpecialOffer
              />
            </motion.div>
          </motion.div>
          {/* --- FIN DE COLUMNA DE IMAGEN --- */}

          {/* Columna de Texto (Sin cambios) */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <span className="text-secondary-dark font-bold uppercase tracking-wider">
              {dict.title}
            </span>
            <h2 className="mt-2 text-3xl font-bold md:text-4xl font-sans text-primary-dark mb-4">
              {dict.subtitle}
            </h2>
            <p className="text-lg text-muted leading-relaxed">
              {dict.content}
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}