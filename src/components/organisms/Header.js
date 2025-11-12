// src/components/organisms/Header.js
'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation'; // <-- 1. Importar usePathname
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Globe } from 'lucide-react'; // <-- 2. Añadir icono Globe

export default function Header({ lang, dict }) {
  const [isOpen, setIsOpen] = useState(false);
  
  // --- 3. Links de navegación actualizados (independientes) ---
  const navLinks = [
    { href: `/${lang}`, label: dict.home },
    { href: `/${lang}/menu-fast-food`, label: dict.fastFood },
    { href: `/${lang}/menu-snacks`, label: dict.snacks },
  ];

  // --- 4. Lógica para el cambio de idioma ---
  const pathname = usePathname();
  const otherLang = lang === 'es' ? 'en' : 'es';
  // Reemplaza el idioma actual en la URL por el otro idioma
  const newPath = pathname.replace(`/${lang}`, `/${otherLang}`);
  const langLabel = otherLang.toUpperCase(); // "EN" o "ES"

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

          {/* --- 5. Navegación Desktop (Actualizada) --- */}
          <div className="hidden md:flex gap-8 items-center">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="font-medium text-foreground hover:text-primary transition-colors"
              >
                {link.label}
              </Link>
            ))}
            
            {/* Botón de Idioma Desktop */}
            <Link
              href={newPath}
              className="flex items-center gap-1.5 font-medium text-sm text-muted hover:text-primary transition-colors border border-gray-300 rounded-full px-3 py-1.5"
            >
              <Globe size={16} />
              {langLabel}
            </Link>
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

      {/* --- 6. Panel Menú Móvil (Actualizado) --- */}
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
              {/* Links móviles principales */}
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
              
              {/* Separador */}
              <motion.div variants={itemVariants} className="w-1/2 h-px bg-gray-200 my-2" />

              {/* Botón de Idioma Móvil */}
              <motion.div variants={itemVariants}>
                <Link
                  href={newPath}
                  className="flex items-center gap-2 py-3 text-lg font-medium text-muted hover:text-primary"
                  onClick={() => setIsOpen(false)}
                >
                  <Globe size={20} />
                  {`Cambiar a ${langLabel}`}
                </Link>
              </motion.div>

            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}