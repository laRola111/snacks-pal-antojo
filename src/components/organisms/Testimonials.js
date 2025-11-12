// src/components/organisms/Testimonials.js
'use client';
import { motion } from 'framer-motion';
import { FaStar, FaQuoteLeft } from 'react-icons/fa';

export default function Testimonials({ dict }) {
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

        {/* Grid de Testimonios */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {dict.reviews.map((review, i) => (
            <motion.div
              key={i}
              custom={i}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              className="bg-white rounded-xl shadow-lg overflow-hidden flex flex-col"
            >
              <div className="p-8 flex-grow">
                <FaQuoteLeft className="text-primary text-3xl mb-4" />
                <p className="text-muted text-lg italic mb-6">
                  "{review.quote}"
                </p>
              </div>
              <div className="bg-gray-100 p-6 mt-auto">
                <div className="flex text-yellow-400 mb-2">
                  {[...Array(5)].map((_, j) => (
                    <FaStar key={j} />
                  ))}
                </div>
                <h4 className="text-lg font-bold text-primary-dark">{review.name}</h4>
                <p className="text-sm text-gray-500">{review.source}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}