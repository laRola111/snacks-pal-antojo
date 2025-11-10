// src/app/[lang]/page.js
import { getDictionary } from '@/lib/dictionaries';
import HeroSection from '@/components/organisms/HeroSection';

export default async function HomePage({ params: { lang } }) {
  const dict = await getDictionary(lang);

  return (
    <>
      <HeroSection lang={lang} dict={dict.hero} />
     
    </>
  );
}