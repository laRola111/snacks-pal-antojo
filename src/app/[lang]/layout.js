// src/app/[lang]/layout.js
import '../globals.css';
import Header from '@/components/organisms/Header';
import Footer from '@/components/organisms/Footer';
import { getDictionary } from '@/lib/dictionaries';
import WhatsAppButton from '@/components/atoms/WhatsAppButton'; // <-- 1. IMPORTAR

export const metadata = {
  title: 'Snacks Pal Antojo - Menú Digital',
  description: 'Las mejores comidas rápidas y snacks de la ciudad. ¡Visita nuestros food trucks!',
};

export default async function LangLayout({ children, params: { lang } }) {
  const dict = await getDictionary(lang);

  return (
    <html lang={lang} >
      <body className="flex flex-col min-h-screen bg-background text-foreground font-body">
        <Header lang={lang} dict={dict.navbar} />
        <main className="grow">
          {children}
        </main>
        <Footer lang={lang} dict={dict.footer} />
        <WhatsAppButton /> {/* <-- 2. AÑADIR AQUÍ */}
      </body>
    </html>
  );
}