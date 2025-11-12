// src/components/organisms/MenuSection.js
'use client';

import { motion } from 'framer-motion';
import MenuItem from '@/components/molecules/MenuItem';

export default function MenuSection({ id, title, categories }) {
  return (
    <section id={id} className="w-full py-16 md:py-24 bg-background">
      <div className="container mx-auto max-w-7xl px-4">
        
        {/* Título de la Sección del Menú */}
        {/* <motion.div
          className="mb-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }} // <-- CAMBIADO DE whileInView
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-4xl md:text-6xl font-bold font-sans text-primary">
            {title}
          </h2>
        </motion.div> */}

        {/* Contenido del Menú */}
        <div className="space-y-16">
          {categories.map((category) => (
            <motion.div
              key={category.name}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }} // <-- CAMBIADO DE whileInView
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6 }}
            >
              <h3 className="text-3xl font-bold font-sans text-center mb-8 text-foreground">
                {category.name}
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {category.items.map((item, index) => (
                  <MenuItem 
                    key={index} 
                    name={item.name} 
                    description={item.description} 
                    price={item.price} 
                  />
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}