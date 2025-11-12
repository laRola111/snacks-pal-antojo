// src/dictionaries/es.js
export const dictionary = {
  navbar: {
    home: 'Inicio',
    menu: 'Menú',
    fastFood: 'Comidas Rápidas', // <-- NUEVO
    snacks: 'Snacks y Frutas', // <-- NUEVO
  },
  hero: {
    title: "El Sabor Que Te Mereces",
    subtitle: "Descubre nuestras deliciosas comidas rápidas y snacks hechos al momento. ¡Perfecto para cualquier antojo!",
    button: "Ver Menú",
    imageAlt: "Deliciosa hamburguesa y papas fritas",
  },
  menuSwitch: {
    title: "Nuestros Menús",
    subtitle: "Dos opciones, el mismo increíble sabor.",
    card1: {
      title: "Comidas Rápidas",
      description: "Hamburguesas, Hot Dogs, Sandwiches y más.",
      imgAlt: "Hamburguesa y hot dog",
    },
    card2: {
      title: "Snacks y Frutas",
      description: "Fresas con crema, elotes, churros y bebidas.",
      imgAlt: "Fresas con crema y elotes",
    }
  },
  
  // --- NUEVA SECCIÓN ---
  specialOffer: {
    title: "Oferta Especial",
    subtitle: "Prueba nuestra",
    itemName: "Hamburguesa Antojo",
    description: "Doble carne, queso americano, tocineta crujiente, vegetales frescos y nuestra salsa secreta de la casa. ¡No te la puedes perder!",
    button: "Ver en el Menú",
  },

  // --- NUEVO MENÚ 1 ---
  menuFastFood: {
    title: "Menú de Comidas",
    categories: [
      {
        name: "Hamburguesas Antojo",
        items: [
          { name: "Clásica / Classic", description: "Carne de la casa, queso, lechuga, tomate y aderezo especial.", price: "10.99" },
          { name: "Especial de la Casa / House Special", description: "Doble carne, tocineta, queso cheddar y aros de cebolla.", price: "12.99" },
          { name: "Grill VIP Special", description: "Hamburguesa Antojo con piña asada, queso de cabra y salsa BBQ.", price: "13.99" },
        ]
      },
      {
        name: "Hot Dogs",
        items: [
          { name: "Clásico Americano / Classic American", description: "Salchicha, pan suave, encurtidos y mostaza.", price: "7.99" },
          { name: "Especial Antojo", description: "Salchicha premium con chili, queso y jalapeños.", price: "9.99" },
          { name: "Hot Dog Supremo", description: "Tocineta, cebolla caramelizada y salsas secretas.", price: "10.99" },
        ]
      },
      {
        name: "Sandwiches / Tortas",
        items: [
          { name: "Cubano / Cuban Sandwich", description: "Cerdo, jamón, queso suizo, pepinillos y mostaza.", price: "11.99" },
          { name: "Torta Mexicana", description: "Con milanesa, frijoles, aguacate y queso.", price: "12.99" },
        ]
      },
      {
        name: "Acompañamientos / Sides",
        items: [
          { name: "Papas Fritas / French Fries", description: "Corte clásico, crujientes y saladas.", price: "4.99" },
          { name: "Aros de Cebolla / Onion Rings", description: "Bañados en cerveza y perfectamente fritos.", price: "5.99" },
          { name: "Papas con Queso / Cheesy Fries", description: "Con queso cheddar derretido y tocineta.", price: "6.99" },
        ]
      }
    ]
  },

  // --- NUEVO MENÚ 2 ---
  menuSnacks: {
    title: "Snacks, Postres y Bebidas",
    categories: [
      {
        name: "Fresas con Crema",
        items: [
          { name: "Clásicas", description: "Fresas frescas con crema batida y leche condensada.", price: "7.99" },
          { name: "Fresa VIP (Ours)", description: "Fresas cubiertas con chocolate y topping especial.", price: "9.99" },
        ]
      },
      {
        name: "Elotes / Corn Cups",
        items: [
          { name: "Elote clásico", description: "Con mayonesa, queso cotija, chile y limón.", price: "5.99" },
          { name: "Yogurt Ice Cream Bar", description: "Base de yogurt helado con 3 toppings a elección.", price: "6.99" },
        ]
      },
      {
        name: "Churros",
        items: [
          { name: "Churros Rellenos", description: "Rellenos de arequipe, chocolate o fresa.", price: "6.50" },
          { name: "Mini Churros", description: "Una porción de mini churros para compartir.", price: "5.50" },
        ]
      },
      {
        name: "Pancakes & Waffles",
        items: [
          { name: "Mini Pancakes", description: "Mini pancakes esponjosos con fruta y miel.", price: "8.99" },
          { name: "Waffles", description: "Con crema batida y fresas.", price: "9.99" },
        ]
      },
      {
        name: "Más Antojos",
        items: [
          { name: "DoriNachos", description: "Doritos con elote, queso, crema y salsas.", price: "7.50" },
          { name: "Café / Coffee", description: "Americano, Espresso, Latte o Matcha. Frío o caliente.", price: "4.50" },
        ]
      },
      {
        name: "Bebidas / Drinks",
        items: [
          { name: "Limonadas Naturales", description: "Sabores de fresa, mango o maracuyá.", price: "4.99" },
          { name: "Malteadas / Milkshakes", description: "Vainilla, chocolate o fresa.", price: "6.99" },
          { name: "Refrescos / Sodas", description: "Coca-Cola, Sprite, etc.", price: "2.99" },
        ]
      }
    ]
  },
  
 favorites: {
    title: "Elige y Disfruta",
    subtitle: "Los Favoritos de la Casa",
    items: [
      { 
        name: "Hot Dog Supremo", 
        description: "Salchicha premium, tocineta, cebolla caramelizada y salsas." 
      },
      { 
        name: "Elote Clásico", 
        description: "Con mayonesa, queso cotija, chile y limón." 
      },
      { 
        name: "Fresas con Crema", 
        description: "Nuestra receta especial de crema y leche condensada." 
      },
    ]
  },

  footer: {
    rights: 'Todos los derechos reservados.',
    followUs: 'Síguenos',
    contact: 'Contáctanos', // <-- NUEVO
    created: "Creado por RuedaLaRolaMedia.com"
  }
};