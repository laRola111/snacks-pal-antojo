// src/app/[lang]/menu-fast-food/page.js
import { getDictionary } from '@/lib/dictionaries';
import MenuSection from '@/components/organisms/MenuSection';
import MenuHero from '@/components/organisms/MenuHero'; 

export default async function FastFoodMenuPage({ params: { lang } }) {
  const dict = await getDictionary(lang);

  return (
    <>
      {/* Hero simple para esta página de menú */}
      <MenuHero
        title={dict.menuFastFood.title}
        imageUrl="/logoSnanks-2.png" // Logo de Comidas Rápidas
        alt="Logo de Snacks Pal Antojo - Comidas Rápidas"
      />

      {/* Sección del Menú de Comidas Rápidas */}
      <MenuSection 
        id="fast-food" 
        title={dict.menuFastFood.title}
        categories={dict.menuFastFood.categories}
      />
    </>
  );
}