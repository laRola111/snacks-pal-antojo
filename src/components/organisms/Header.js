// src/components/organisms/Header.js
'use client';

import { useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';

export default function Header({ lang, dict }) {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { href: `/${lang}`, label: dict.home },
    { href: `/${lang}#menu`, label: dict.menu },
    // { href: `/${lang}#about`, label: dict.about }, // Descomentar si se añade a diccionarios
  ];

  const menuVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0, transition: { staggerChildren: 0.1 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: -10 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <>
      <header className="sticky top-0 z-50 w-full bg-background shadow-md">
        <nav className="container mx-auto max-w-7xl px-4 h-20 flex justify-between items-center">
          {/* Logo */}
          <Link href={`/${lang}`} className="text-2xl font-bold text-primary-dark font-sans">
            Snacks<span className="text-secondary-dark">PalAntojo</span>
          </Link>

          {/* Navegación Desktop */}
          <div className="hidden md:flex gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="font-medium text-foreground hover:text-primary transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Botón Menú Móvil */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle menu"
              className="text-foreground"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </nav>
      </header>

      {/* Panel Menú Móvil */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="md:hidden bg-background shadow-lg absolute w-full z-40"
          >
            <motion.div
              className="flex flex-col items-center py-4"
              variants={menuVariants}
              initial="hidden"
              animate="visible"
            >
              {navLinks.map((link) => (
                <motion.div key={link.label} variants={itemVariants}>
                  <Link
                    href={link.href}
                    className="block py-3 text-lg font-medium text-foreground hover:text-primary"
                    onClick={() => setIsOpen(false)} // Cierra el menú al hacer clic
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}