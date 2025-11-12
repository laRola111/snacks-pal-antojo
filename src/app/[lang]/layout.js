// src/app/[lang]/layout.js
import { Inter, Poppins } from 'next/font/google';
import '../globals.css';
import Header from '@/components/organisms/Header';
import Footer from '@/components/organisms/Footer';
import WhatsAppButton from '@/components/atoms/WhatsAppButton';
import { getDictionary } from '@/lib/dictionaries';

const inter = Inter({ 
  subsets: ['latin'], 
  variable: '--font-inter' 
});

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '600', '700', '800'],
  variable: '--font-poppins',
});

// --- METADATA (Sin cambios) ---
export const metadata = {
  title: {
    template: '%s | Snacks Pal Antojo ATX',
    default: 'Snacks Pal Antojo ATX - Fast Food y Snacks en Austin, TX',
  },
  description: 'Descubre el mejor menú de comida rápida y snacks saludables en Austin, Texas. Hamburguesas, hot dogs, fresas con crema, waffles y más.',
  keywords: [
    'Snacks Pal Antojo', 
    'Fast Food Austin', 
    'Comida rápida Austin', 
    'Snacks de fruta Austin', 
    'Waffles', 
    'Fresas con crema', 
    'Restaurante mexicano Austin',
    'Antojos'
  ],
  openGraph: {
    title: 'Snacks Pal Antojo ATX',
    description: 'El mejor sabor de comida rápida y snacks en Austin, TX.',
    images: [
      {
        url: '/logoSnanks-1.png', 
        width: 512, 
        height: 512,
        alt: 'Snacks Pal Antojo ATX Logo',
      },
    ],
    locale: 'es_US',
    type: 'website',
  },
};
// -----------------------------

export default async function RootLayout({ children, params: { lang } }) {
  const dict = await getDictionary(lang);

  return (
    <html lang={lang} className={`${inter.variable} ${poppins.variable}`}>
      <body className="font-sans">
        
        <Header lang={lang} dict={dict.navbar} />
        
        <main>{children}</main>
        
        {/* ----- LÍNEA IMPORTANTE ----- */}
        {/* Aquí le pasamos SOLAMENTE el objeto 'footer' al componente Footer */}
        <Footer lang={lang} dict={dict.footer} />
        {/* ----------------------------- */}
        
        <WhatsAppButton lang={lang} />
      </body>
    </html>
  );
}