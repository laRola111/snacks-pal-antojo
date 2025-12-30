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
      subtitle: "Hamburguesas, Hot Dogs y más.",
      button: "Ver Menú Fast Food",
      imgAlt: "Hamburguesa deliciosa"
    },
    snacks: {
      title: "Snacks y Postres",
      subtitle: "Fresas, Waffles y Antojos.",
      button: "Ver Menú Snacks",
      imgAlt: "Fresas con crema"
    }
  },

  menuSwitch: {
    title: "Nuestros Menús",
    subtitle: "Dos opciones, el mismo increíble sabor.",
    card1: {
      title: "Comidas Rápidas",
      description: "Hamburguesas, Hot Dogs y Papas.",
      imgAlt: "Hamburguesa y hot dog",
    },
    card2: {
      title: "Snacks y Postres",
      description: "Fresas con crema, elotes, churros y bebidas.",
      imgAlt: "Fresas con crema y elotes",
    }
  },
  
  specialOffer: {
    title: "Oferta Especial",
    subtitle: "Prueba nuestra",
    itemName: "Hamburguesa Antojo",
    description: "Doble carne, queso americano, tocineta crujiente, vegetales frescos y nuestra salsa secreta de la casa. ¡No te la puedes perder!",
    button: "Ver en el Menú",
  },

  // --- MENÚ FAST FOOD (Sin Precios) ---
  menuFastFood: {
    title: "Menú de Comidas",
    categories: [
      {
        name: "Hamburguesas Antojo",
        items: [
          { name: "Clásica", description: "Carne de la casa, queso, lechuga, tomate y aderezo especial." },
          { name: "Especial de la Casa", description: "Doble carne, tocineta, queso cheddar y aros de cebolla." },
        ]
      },
      {
        name: "Hot Dogs",
        items: [
          { name: "Clásico Americano", description: "Salchicha, pan suave, encurtidos y mostaza." },
          { name: "Especial Antojo", description: "Salchicha premium con chili, queso y jalapeños." },
          { name: "Hot Dog Supremo", description: "Tocineta, cebolla caramelizada y salsas secretas." },
        ]
      },
      {
        name: "Acompañamientos",
        items: [
          { name: "Papas Fritas", description: "Corte clásico, crujientes y saladas." },
          { name: "Aros de Cebolla", description: "Bañados en cerveza y perfectamente fritos." },
          { name: "Papas con Queso", description: "Con queso cheddar derretido y tocineta." },
        ]
      }
    ]
  },

  // --- MENÚ SNACKS (Sin Precios) ---
  menuSnacks: {
    title: "Snacks, Postres y Bebidas",
    categories: [
      {
        name: "Fresas con Crema",
        items: [
          { name: "Clásicas", description: "Fresas frescas con crema batida y leche condensada." },
          { name: "Fresa VIP", description: "Fresas cubiertas con chocolate y topping especial." },
        ]
      },
      {
        name: "Elotes",
        items: [
          { name: "Elote Clásico", description: "Con mayonesa, queso cotija, chile y limón." },
          { name: "Barra de Yogurt Helado", description: "Base de yogurt helado con 3 toppings a elección." },
        ]
      },
      {
        name: "Churros",
        items: [
          { name: "Churros Rellenos", description: "Rellenos de arequipe, chocolate o fresa." },
          { name: "Mini Churros", description: "Una porción de mini churros para compartir." },
        ]
      },
      {
        name: "Pancakes y Waffles",
        items: [
          { name: "Mini Pancakes", description: "Mini pancakes esponjosos con fruta y miel." },
          { name: "Waffles", description: "Con crema batida y fresas." },
        ]
      },
      {
        name: "Más Antojos",
        items: [
          { name: "DoriNachos", description: "Doritos con elote, queso, crema y salsas." },
          { name: "Café", description: "Americano, Espresso, Latte o Matcha. Frío o caliente." },
        ]
      },
      {
        name: "Bebidas",
        items: [
          { name: "Limonadas Naturales", description: "Sabores de fresa, mango o maracuyá." },
          { name: "Malteadas", description: "Vainilla, chocolate o fresa." },
          { name: "Refrescos", description: "Coca-Cola, Sprite, etc." },
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
    findUs: 'Encuéntranos en Austin, TX',
    location: 'Austin, Texas',
    contact: 'Contáctanos',
    created: "Creado por RuedaLaRolaMedia.com"
  },
  
  aboutUs: {
    title: "Nuestra Pasión, Tu Antojo",
    subtitle: "Somos una familia dedicada a traer el auténtico sabor.",
    content: "En Snacks Pal Antojo, creemos que la comida es más que solo un platillo; es un momento. Desde nuestras hamburguesas artesanales hasta las auténticas fresas con crema, cada receta está hecha con ingredientes frescos y mucho cariño. Estamos orgullosos de ser parte de la comunidad de Austin.",
    imageAlt: "El equipo de Snacks Pal Antojo cocinando"
  },

  testimonials: {
    title: "Lo Que Dicen Nuestros Clientes",
    subtitle: "¡Tu opinión es nuestro ingrediente secreto!",
    reviews: [
      {
        quote: "¡Las mejores fresas con crema que he probado en todo Austin! Sabor auténtico y porciones generosas. 100% recomendado.",
        name: "Maria G.",
        source: "Reseña de Google"
      },
      {
        quote: "La Hamburguesa Antojo es de otro nivel. La carne es jugosa, los ingredientes frescos y la salsa especial es increíble. ¡Volveré pronto!",
        name: "David R.",
        source: "Recomendación en Facebook"
      },
      {
        quote: "Excelente servicio para mi evento. Pedí varios snacks y todo estuvo delicioso y a tiempo. Muy profesionales.",
        name: "Ana P.",
        source: "Cliente de Catering"
      }
    ]
  },

  contactForm: {
    title: "Cotiza Tu Evento",
    subtitle: "¿Tienes una fiesta, reunión o evento corporativo? ¡Déjanos encargarnos del sabor! Llena el formulario y te contactaremos.",
    labels: {
      name: "Tu Nombre",
      email: "Tu Correo Electrónico",
      phone: "Tu Teléfono (Opcional)",
      message: "Cuéntanos sobre tu evento (Fecha, # personas, etc.)",
    },
    button: "Enviar Solicitud",
    success: "¡Mensaje enviado! Te contactaremos pronto.",
    error: "Error al enviar. Intenta de nuevo."
  },
};