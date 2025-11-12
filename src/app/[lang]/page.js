// src/app/[lang]/page.js

/* --- 1. SOLUCIÓN DE BUILD ESTÁTICO --- */
export async function generateStaticParams() {
  return [
    { lang: 'es' },
    { lang: 'en' },
  ];
}
export const dynamic = 'force-static';

/* --- 2. IMPORTS --- */
import { getDictionary } from '@/lib/dictionaries';
import HeroSection from '@/components/organisms/HeroSection';
// import MenuSwitch from '@/components/organisms/MenuSwitch'; // <-- ELIMINADO
import AboutUs from '@/components/organisms/AboutUs'; // <-- NUEVO
import SpecialOffer from '@/components/organisms/SpecialOffer';
import FavoritesGrid from '@/components/organisms/FavoritesGrid'; 
import Testimonials from '@/components/organisms/Testimonials'; // <-- NUEVO
import ContactForm from '@/components/organisms/ContactForm'; // <-- NUEVO


/* --- 3. COMPONENTE DE PÁGINA --- */
export default async function HomePage({ params: { lang } }) {
  const dict = await getDictionary(lang);

  return (
    <>
      {/* 1. Hero (con enlaces a menús) */}
      <HeroSection lang={lang} dict={dict.hero} />
      
      {/* 2. Sobre Nosotros (Reemplaza a MenuSwitch) */}
      <AboutUs dict={dict.aboutUs} />

      {/* 3. Oferta Especial */}
      <SpecialOffer lang={lang} dict={dict.specialOffer} />

      {/* 4. Favoritos */}
      <FavoritesGrid lang={lang} dict={dict.favorites} />

      {/* 5. Testimonios */}
      <Testimonials dict={dict.testimonials} />

      {/* 6. Formulario de Contacto */}
      <ContactForm dict={dict.contactForm} />
    </>
  );
}