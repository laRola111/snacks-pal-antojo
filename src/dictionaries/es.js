// src/dictionaries/es.js
export const dictionary = {
  navbar: {
    home: 'Inicio',
    menu: 'Menú',
    fastFood: 'Comida Rápida',
    snacks: 'Snacks y Postres',
  },

  hero: {
    fastFood: {
      title: "Comida Rápida",
      subtitle: "Hamburguesas, Hot Dogs y el auténtico sabor callejero.",
      button: "Ver Menú Salado",
      imgAlt: "Hamburguesa doble carne"
    },
    snacks: {
      title: "Snacks y Postres",
      subtitle: "Fresas, Churros y Antojos Dulces.",
      button: "Ver Menú Dulce",
      imgAlt: "Fresas con crema vaso grande"
    }
  },

  menuSwitch: {
    title: "Nuestros Menús",
    subtitle: "Dos mundos de sabor, un solo lugar.",
    card1: {
      title: "Menú Salado",
      description: "Hamburguesas, Hot Dogs, Elotes y Dorinachos.",
      imgAlt: "Hamburguesa y hot dog",
    },
    card2: {
      title: "Menú Dulce",
      description: "Fresas con crema, Churros, Waffles y Helados.",
      imgAlt: "Fresas con crema y churros",
    }
  },

  // --- MENÚ "SALTY" (Imagen Roja - Hamburguesas/Hot Dogs) ---
  menuFastFood: {
    title: "Hamburguesas y Antojos Salados",
    categories: [
      {
        name: "Hamburguesas / Burgers",
        items: [
          { 
            name: "Hamburguesa Clásica", 
            description: "Carne a la parrilla, queso, lechuga, tomate y aderezo especial." 
          },
          { 
            name: "Hamburguesa Antojo", 
            description: "Doble carne, tocino, queso derretido y salsa secreta." 
          },
        ]
      },
      {
        name: "Hot Dogs",
        items: [
          { 
            name: "Hot Dog Antojo", 
            description: "Envuelto en tocino, mayonesa, mostaza, kétchup, vegetales. (Opcional: Cebolla asada, chiles asados, Salsa Valentina)." 
          },
        ]
      },
      {
        name: "Sandwich", // En la imagen están en el menú rojo
        items: [
          {
            name: "Chicken Sandwich", 
            description: "Pollo crujiente con queso Pepper Jack, lechuga, tomates, pepinillos y salsa especial." 
          },
        ]
      },
      {
        name: "Elotes y Dorinachos", // En la imagen están en el menú rojo
        items: [
          { 
            name: "Elote en Vaso (Corn Cup)", 
            description: "Preparado con Mantequilla, Mayonesa McCormick, Chile en polvo y Queso Cotija." 
          },
          { 
            name: "Elote en Mazorca (Corn on the Cob)", 
            description: "Estilo callejero. Toppings: Mantequilla, Mayonesa McCormick, Chile en polvo, Queso Cotija." 
          },
          { 
            name: "Dorinachos", 
            description: "Doritos con queso, jalapeño y elotes (opcional)." 
          },
        ]
      },
       
      {
        name: "Acompañamientos / Sides",
        items: [
          { name: "Papas Fritas", description: "Clásicas papas crujientes con sal marina." },
          { name: "Aros de Cebolla", description: "Empanizados dorados al punto perfecto." },
          { name: "Papas con Queso", description: "Con queso derretido y salsa especial." },
        ]
      },
      {
        name: "Bebidas / Drinks",
        items: [
          { name: "Refrescos", description: "Variedad de sabores." },
          { name: "Limonadas", description: "Naturales, refrescantes y coloridas." },
          { name: "Malteadas", description: "Fresa, chocolate o vainilla." },
        ]
      }
    ]
  },

  // --- MENÚ "SWEET" (Imagen Rosa - Fresas/Churros) ---
  menuSnacks: {
    title: "Postres y Dulces",
    categories: [
      {
        name: "Fresas con Crema",
        items: [
          { 
            name: "Clásica con Crema", 
            description: "Fresas bañadas con la crema dulce de la casa. (Chica / Mediana / Grande)." 
          },
          { 
            name: "Fresas VIP (Dubai)", 
            description: "Bañadas en chocolate premium con pistacho, kataifi y estilo Dubai." 
          },
        ]
      },
      {
        name: "Churros",
        items: [
          { name: "Churro Clásico", description: "El tradicional azúcar y canela." },
          { name: "Churro Relleno", description: "Rellenos: Chocolate, Cajeta, Fresa, Lechera, Nutella." },
          { name: "Mini Churros", description: "Porción de bocados crujientes." },
          { name: "Caja Variada de Churros", description: "Mixed Churro Box con salsas o topping de elección." },
        ]
      },
      {
        name: "Helados y Postres",
        items: [
          { 
            name: "Helado de Yogurt", 
            description: "Con toppings y coberturas a elección (Salsas de sabor)." 
          },
          { 
            name: "Tres Leches", description: "Pastel tradicional bañado en tres leches." 
          },
          { 
            name: "Flan de la Casa", description: "Cremoso flan casero." 
          },
          { 
            name: "Natillas Caramelizadas", description: "Postre suave con caramelo." 
          },
        ]
      },
      {
        name: "Chocomilk / Esquimos",
        items: [
          { name: "Chocomilk Clásico", description: "Batido espumoso de chocolate." },
          { name: "Chocomilk Antojo", description: "Sabores especiales: Rompope, Baileys, Café o Fresa." },
        ]
      },
      {
        name: "Pancakes & Waffles",
        items: [
          { name: "Mini Pancakes", description: "Esponjosos y dulces." },
          { name: "Waffles", description: "Incluye Frutiwaffle Bowl (especial de la casa)." },
        ]
      },
      {
        name: "Café y Bebidas",
        items: [
          { name: "Café Caliente", description: "Americano, Expreso, Latte, Capuchino, Mocha, Cortado, Chocolate." },
          { name: "Café Frío", description: "Iced Latte, Iced Mocha, Iced Caramel." },
          { name: "Jugos Naturales", description: "Fruta del día." },
        ]
      }
    ]
  },

  // --- SECCIONES GENERALES ---
  specialOffer: {
    title: "Recomendación del Chef",
    subtitle: "Tienes que probar",
    itemName: "Fresas VIP (Dubai)",
    description: "La tendencia viral ahora en tu mesa. Chocolate premium, pistacho crujiente y kataifi. ¡Una experiencia de lujo!",
    button: "Ver Antojos",
  },
  
  aboutUs: {
    title: "Snacks Pal Antojo ATX",
    subtitle: "El sabor que te mereces",
    content: "Somos tu destino en Austin para cumplir esos antojos, desde una hamburguesa doble carne jugosa hasta unas fresas con crema estilo Dubai. ¡Calidad y sabor en cada bocado!",
    imageAlt: "Local de Snacks Pal Antojo"
  },
  
  contactForm: {
    title: "Cotiza Tu Evento",
    subtitle: "¿Tienes una fiesta? Llevamos los churros, elotes y burgers a tu evento.",
    labels: {
      name: "Nombre",
      email: "Correo",
      message: "Detalles del evento",
    },
    button: "Enviar"
  },

  footer: {
    rights: 'Todos los derechos reservados.',
    created: "Desarrollado por Arknica & Rueda La Rola Media"
  }
};