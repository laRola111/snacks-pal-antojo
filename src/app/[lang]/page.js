// src/app/[lang]/page.js

/* --- 1. LOS IMPORTS VAN PRIMERO --- */
import { getDictionary } from '@/lib/dictionaries';
import HeroSection from '@/components/organisms/HeroSection';
import MenuSwitch from '@/components/organisms/MenuSwitch';
import SpecialOffer from '@/components/organisms/SpecialOffer';
// import MenuSection from '@/components/organisms/MenuSection'; // <-- ELIMINADO
import FavoritesGrid from '@/components/organisms/FavoritesGrid'; 

/* --- 2. EL COMPONENTE VA DESPUÉS --- */
export default async function HomePage({ params: { lang } }) {
  const dict = await getDictionary(lang);

  return (
    <>
      {/* 1. Sección Hero */}
      <HeroSection lang={lang} dict={dict.hero} />
      
      {/* 2. Sección para elegir entre los 2 menús */}
      <MenuSwitch lang={lang} dict={dict.menuSwitch} />

      {/* 3. Sección de Oferta Especial */}
      <SpecialOffer lang={lang} dict={dict.specialOffer} />

      {/* 4. Menú de Comidas Rápidas - ELIMINADO */}
      {/* 5. Menú de Snacks y Postres - ELIMINADO */}

      {/* 6. Sección de Favoritos */}
      <FavoritesGrid lang={lang} dict={dict.favorites} />

    </>
  );
}