// src/dictionaries/en.js
export const dictionary = {
  navbar: {
    home: 'Home',
    menu: 'Menu',
    fastFood: 'Fast Food',
    snacks: 'Snacks & Desserts',
  },

  hero: {
    fastFood: {
      title: "Fast Food",
      subtitle: "Burgers, Hot Dogs and authentic street flavor.",
      button: "View Salty Menu",
      imgAlt: "Double meat burger"
    },
    snacks: {
      title: "Snacks & Desserts",
      subtitle: "Strawberries, Churros and Sweet Cravings.",
      button: "View Sweet Menu",
      imgAlt: "Large strawberries with cream cup"
    }
  },

  menuSwitch: {
    title: "Our Menus",
    subtitle: "Two worlds of flavor, one place.",
    card1: {
      title: "Salty Menu",
      description: "Burgers, Hot Dogs, Corn and Dorinachos.",
      imgAlt: "Burger and hot dog",
    },
    card2: {
      title: "Sweet Menu",
      description: "Strawberries & cream, Churros, Waffles and Ice Cream.",
      imgAlt: "Strawberries with cream and churros",
    }
  },

  // --- SALTY MENU (Red Image - Burgers/Hot Dogs) ---
  menuFastFood: {
    title: "Burgers & Salty Cravings",
    categories: [
      {
        name: "Hamburguesas / Burgers",
        items: [
          { 
            name: "Classic Burger", 
            description: "Grilled meat, cheese, lettuce, tomato and special dressing." 
          },
          { 
            name: "Antojo Burger", 
            description: "Double meat, bacon, melted cheese and secret sauce." 
          },
        ]
      },
      {
        name: "Hot Dogs",
        items: [
          { 
            name: "Antojo Hot Dog", 
            description: "Bacon-wrapped, mayonnaise, mustard, ketchup, vegetables. (Optional: Grilled onions and chili peppers - Valentina Hot Sauce)." 
          },
        ]
      },
      {
        name: "Sandwich", // En la imagen están en el menú rojo
        items: [
          { 
            name: "Chicken Sandwich", 
            description: "Crispy Chicken with Pepper Jack Cheese, Lettuce, Tomatoes, Pickles & Special Sauce." 
          },
        ]
      },
      {
        name: "Elotes / Corn & Dorinachos",
        items: [
          { 
            name: "Corn Cup (Elote en Vaso)", 
            description: "Corn served in a cup with: Butter, McCormick Mayo, Chili powder, Cotija cheese." 
          },
          { 
            name: "Corn on the Cob (Elote en Mazorca)", 
            description: "Mexican-style street corn. Toppings: Butter, McCormick Mayo, Chili powder, Cotija cheese." 
          },
          { 
            name: "Dorinachos", 
            description: "Doritos with cheese, jalapeño & optional corn." 
          },
        ]
      },
      {
        name: "Acompañamientos / Sides",
        items: [
          { name: "French Fries", description: "Classic crispy fries with sea salt." },
          { name: "Onion Rings", description: "Golden breaded to perfection." },
          { name: "Cheese Fries", description: "With melted cheese and special sauce." },
        ]
      },
      {
        name: "Bebidas / Drinks",
        items: [
          { name: "Sodas", description: "Variety of flavors." },
          { name: "Lemonades", description: "Natural, refreshing and colorful." },
          { name: "Milkshakes", description: "Strawberry, chocolate or vanilla." },
        ]
      }
    ]
  },

  // --- SWEET MENU (Pink Image - Strawberries/Churros) ---
  menuSnacks: {
    title: "Desserts & Sweets",
    categories: [
      {
        name: "Strawberries & Cream",
        items: [
          { 
            name: "Classic with Cream", 
            description: "Fresh strawberries with sweet house cream. (Small / Medium / Large)." 
          },
          { 
            name: "VIP Strawberries (Dubai)", 
            description: "Premium chocolate-dipped strawberries with pistachio, kataifi and Dubai-style finish." 
          },
        ]
      },
      {
        name: "Churros",
        items: [
          { name: "Classic Churro", description: "Traditional cinnamon and sugar." },
          { name: "Filled Churro", description: "Fillings: Chocolate, Cajeta (caramel), Strawberry, Lechera (sweet milk), Nutella." },
          { name: "Mini Churros", description: "A portion of crispy bite-sized churros." },
          { name: "Mixed Churro Box", description: "With sauces or topping of choice." },
        ]
      },
      {
        name: "Ice Cream & Desserts",
        items: [
          { 
            name: "Yogurt Ice Cream", 
            description: "Yogurt ice cream with toppings and flavored sauces." 
          },
          { 
            name: "Tres Leches Cake", description: "Traditional cake soaked in three milks." 
          },
          { 
            name: "House Flan", description: "Creamy homemade flan." 
          },
          { 
            name: "Caramelized Custard", description: "Soft dessert with caramel (Natillas)." 
          },
        ]
      },
      {
        name: "Chocomilk / Esquimos",
        items: [
          { name: "Classic Chocomilk", description: "Frothy chocolate milk drink." },
          { name: "Antojo Chocomilk", description: "Special flavors: Rompope (Eggnog), Baileys, Coffee or Strawberry." },
        ]
      },
      {
        name: "Pancakes & Waffles",
        items: [
          { name: "Mini Pancakes", description: "Fluffy and sweet." },
          { name: "Waffles", description: "Includes Frutiwaffle Bowl (house special)." },
        ]
      },
      {
        name: "Coffee & Drinks",
        items: [
          { name: "Hot Coffee", description: "Americano, Espresso, Latte, Cappuccino, Mocha, Cortado, Hot Chocolate." },
          { name: "Iced Coffee", description: "Iced Latte, Iced Mocha, Iced Caramel." },
          { name: "Fresh Juice", description: "Fruit of the day." },
        ]
      }
    ]
  },

  // --- GENERAL SECTIONS ---
  specialOffer: {
    title: "Chef's Recommendation",
    subtitle: "You have to try",
    itemName: "VIP Strawberries (Dubai)",
    description: "The viral trend now at your table. Premium chocolate, crunchy pistachio and kataifi. A luxury experience!",
    button: "View Cravings",
  },
  
  aboutUs: {
    title: "Snacks Pal Antojo ATX",
    subtitle: "The flavor you deserve",
    content: "We are your destination in Austin to satisfy those cravings, from a juicy double meat burger to Dubai-style strawberries and cream. Quality and flavor in every bite!",
    imageAlt: "Snacks Pal Antojo Location"
  },
  
  contactForm: {
    title: "Book Your Event",
    subtitle: "Having a party? We bring the churros, corn, and burgers to your event.",
    labels: {
      name: "Name",
      email: "Email",
      message: "Event Details",
    },
    button: "Send"
  },

  footer: {
    rights: 'All rights reserved.',
    created: "Developed by Arknica & Rueda La Rola Media"
  }
};