// src/components/organisms/ContactForm.js
'use client';
// Nota: Este es un formulario de ejemplo.
// Para que envíe emails, necesita conectarse a una Server Action
// que use un servicio como Resend, SendGrid, o Supabase Edge Functions.

import { motion } from 'framer-motion';

export default function ContactForm({ dict }) {
  
  // Manejador de envío (simulado)
  const handleSubmit = async (e) => {
    e.preventDefault();
    // Aquí iría la lógica de la Server Action
    alert(dict.success);
    e.target.reset();
  };

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container px-4 mx-auto max-w-4xl">
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

        {/* Formulario */}
        <motion.form
          onSubmit={handleSubmit}
          className="bg-gray-50 p-8 md:p-12 rounded-lg shadow-xl"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7 }}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div>
              <label htmlFor="name" className="block text-sm font-bold text-gray-700 mb-2">
                {dict.labels.name}
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-bold text-gray-700 mb-2">
                {dict.labels.email}
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
              />
            </div>
          </div>
          <div className="mb-6">
            <label htmlFor="phone" className="block text-sm font-bold text-gray-700 mb-2">
              {dict.labels.phone}
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
            />
          </div>
          <div className="mb-8">
            <label htmlFor="message" className="block text-sm font-bold text-gray-700 mb-2">
              {dict.labels.message}
            </label>
            <textarea
              id="message"
              name="message"
              rows="5"
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
            ></textarea>
          </div>
          <div className="text-center">
            <button
              type="submit"
              className="px-10 py-3 font-bold text-white transition-all duration-300 rounded-full shadow-lg bg-primary-dark hover:bg-primary focus:outline-none focus:ring-2 focus:ring-primary-light"
            >
              {dict.button}
            </button>
          </div>
        </motion.form>
      </div>
    </section>
  );
}