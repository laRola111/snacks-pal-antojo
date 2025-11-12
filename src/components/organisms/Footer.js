// src/components/organisms/Footer.js
import React from 'react';
import { FaFacebook, FaInstagram, FaTiktok } from 'react-icons/fa';
import Image from 'next/image';

const Footer = ({ lang, dict }) => {
  // 'dict' ya es el objeto 'footer' que layout.js le pasó.
  // Por eso, accedemos a 'dict.followUs', 'dict.findUs', etc.

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4 text-center max-w-5xl">
        <Image
          src="/logoSnanks-2.png" 
          alt="Snacks Pal Antojo ATX Logo"
          width={150}
          height={150}
          className="mx-auto mb-6"
        />

        {/* ----- CORRECCIÓN DEL ERROR AQUÍ ----- */}
        {/* Antes decía: dict.footer.followUs */}
        <p className="font-semibold text-lg mb-4">{dict.followUs}</p>
        {/* ------------------------------------- */}

        <div className="flex justify-center space-x-6 mb-8">
          <a 
            href="https://www.facebook.com/profile.php?id=61583358463678" 
            target="_blank" 
            rel="noopener noreferrer" 
            aria-label="Facebook Snacks & Fruits"
            className="text-gray-400 hover:text-white transition-colors"
          >
            <FaFacebook size={28} />
          </a>
          <a 
            href="https://www.facebook.com/profile.php?id=61583428869839" 
            target="_blank" 
            rel="noopener noreferrer" 
            aria-label="Facebook Fast Food"
            className="text-gray-400 hover:text-white transition-colors"
          >
            <FaFacebook size={28} />
          </a>
          <a 
            href="https://www.instagram.com/snackspalantojoatx/" // <-- REVISAR
            target="_blank" 
            rel="noopener noreferrer" 
            aria-label="Instagram"
            className="text-gray-400 hover:text-white transition-colors"
          >
            <FaInstagram size={28} />
          </a>
          <a 
            href="http://tiktok.com/@snaks.pal.antojo" 
            target="_blank" 
            rel="noopener noreferrer" 
            aria-label="TikTok"
            className="text-gray-400 hover:text-white transition-colors"
          >
            <FaTiktok size={28} />
          </a>
        </div>
      
        <p className="text-lg text-gray-300 mb-2">
          {dict.findUs}
        </p>
        <p className="text-sm text-gray-400">
          {dict.location}
        </p>
        <p className="text-sm text-gray-500 mt-8">
          &copy; {new Date().getFullYear()} Snacks Pal Antojo ATX. {dict.rights}
        </p>
        <p className="text-sm text-gray-600 mt-2">
          {dict.created}
        </p>
        {/* ------------------------------------- */}
      </div>
    </footer>
  );
};

export default Footer;