// tailwind.config.js
/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Nueva Paleta "Snacks Pal Antojo"
        background: '#FFFFFF', // Fondo principal blanco y limpio
        foreground: '#1F2937', // Texto principal (gris oscuro casi negro)
        muted: '#6B7280',      // Texto secundario (gris)

        primary: {
          DEFAULT: '#EF4444', // Rojo principal (del logo/menú)
          light: '#F87171',   
          dark: '#DC2626',    
        },
        secondary: {
          DEFAULT: '#F59E0B', // Amarillo/Naranja (acento)
          light: '#FBBF24',   
          dark: '#D97706',    
        },
        accent: {
          DEFAULT: '#10B981', // Un verde como acento opcional (para "fresco")
          light: '#34D399',
        },
      },
      fontFamily: {
        // Fuente moderna y audaz para títulos
        sans: ['"Inter"', ...defaultTheme.fontFamily.sans],
        // Fuente limpia para el cuerpo de texto
        body: ['"Lato"', ...defaultTheme.fontFamily.sans],
      },
      backgroundImage: {
         // Limpiamos patrones anteriores
         'vazquez-pattern': 'none', 
         'hero-pattern': "url('/img/hero-bg-placeholder.jpg')", // Placeholder
      }
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
};