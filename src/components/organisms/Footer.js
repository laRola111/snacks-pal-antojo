// src/components/organisms/Footer.js
'use client';

import Link from 'next/link';
import { FaInstagram, FaFacebook, FaWhatsapp } from 'react-icons/fa';
import { MapPin, Phone } from 'lucide-react'; // <-- Iconos nuevos

export default function Footer({ lang, dict }) {
  const socialLinks = [
    { icon: FaInstagram, href: '#', label: 'Instagram' },
    { icon: FaFacebook, href: '#', label: 'Facebook' },
    { icon: FaWhatsapp, href: `https://wa.me/15125718832`, label: 'WhatsApp' }, // <-- Link de Wpp actualizado
  ];

  const address = '907 Kramer ln, Austin, Texas';
  const phone = '512-571-8832';

  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="container mx-auto max-w-7xl px-4 py-12">
        <div className="flex flex-col md:flex-row justify-between items-center text-center md:text-left">
          
          {/* Logo y Copyright */}
          <div className="mb-6 md:mb-0">
            <Link href={`/${lang}`} className="text-2xl font-bold text-white font-sans">
              Snacks<span className="text-secondary">PalAntojo</span>
            </Link>
            <p className="mt-2 text-sm text-gray-400">
              © {new Date().getFullYear()} Snacks Pal Antojo. {dict.rights}
            </p>
            <p className="mt-1 text-xs text-gray-500">
              {dict.created}
            </p>
          </div>
          
          {/* --- NUEVA SECCIÓN DE CONTACTO --- */}
          <div className="mb-6 md:mb-0">
            <h4 className="font-bold mb-3 text-white">{dict.contact}</h4>
            <div className="flex items-center justify-center md:justify-start gap-2 mb-2">
              <MapPin size={16} className="text-secondary" />
              <span className="text-sm">{address}</span>
            </div>
            <div className="flex items-center justify-center md:justify-start gap-2">
              <Phone size={16} className="text-secondary" />
              <a href="tel:+15125718832" className="text-sm hover:text-white transition-colors">{phone}</a>
            </div>
          </div>

          {/* Redes Sociales */}
          <div>
            <h4 className="font-bold mb-3 text-white">{dict.followUs}</h4>
            <div className="flex justify-center md:justify-start space-x-6">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="text-gray-400 hover:text-white transition-colors duration-300"
                >
                  <social.icon size={28} />
                </a>
              ))}
            </div>
          </div>

        </div>
      </div>
    </footer>
  );
}