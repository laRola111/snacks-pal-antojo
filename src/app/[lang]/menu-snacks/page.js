// src/app/[lang]/menu-snacks/page.js
import { getDictionary } from '@/lib/dictionaries';
import MenuSection from '@/components/organisms/MenuSection';
import MenuHero from '@/components/organisms/MenuHero';

export default async function SnacksMenuPage({ params: { lang } }) {
  const dict = await getDictionary(lang);

  return (
    <>
      {/* Hero simple para esta página de menú */}
      <MenuHero
        title={dict.menuSnacks.title}
        imageUrl="/logoSnanks-1.png" // Logo de Snacks
        alt="Logo de Snacks Pal Antojo - Snacks y Frutas"
      />

      {/* Sección del Menú de Snacks */}
      <MenuSection 
        id="snacks"
        title={dict.menuSnacks.title}
        categories={dict.menuSnacks.categories}
      />
    </>
  );
}