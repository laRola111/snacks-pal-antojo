// src/dictionaries/en.js
export const dictionary = {
  navbar: {
    home: 'Home',
    menu: 'Menu',
    fastFood: 'Fast Food',
    snacks: 'Snacks & Fruits',
  },

  hero: {
    fastFood: {
      title: "Fast Food",
      subtitle: "Burgers, Hot Dogs, and more.",
      button: "View Fast Food Menu",
      imgAlt: "Delicious burger"
    },
    snacks: {
      title: "Snacks & Fruits",
      subtitle: "Strawberries, Waffles, and Cravings.",
      button: "View Snacks Menu",
      imgAlt: "Strawberries with cream"
    }
  },

  menuSwitch: {
    title: "Our Menus",
    subtitle: "Two options, same amazing flavor.",
    card1: {
      title: "Fast Food",
      description: "Burgers, Hot Dogs, Sandwiches, and more.",
      imgAlt: "Burger and hot dog",
    },
    card2: {
      title: "Snacks & Fruits",
      description: "Strawberries & cream, corn cups, churros, and drinks.",
      imgAlt: "Strawberries with cream and corn cups",
    }
  },

  specialOffer: {
    title: "Special Offer",
    subtitle: "Try our",
    itemName: "Antojo Burger",
    description: "Double patty, American cheese, crispy bacon, fresh veggies, and our secret house sauce. You can't miss it!",
    button: "View in Menu",
  },

  // --- COMPLETE FAST FOOD MENU ---
  menuFastFood: {
    title: "Food Menu",
    categories: [
      {
        name: "Antojo Burgers",
        items: [
          { name: "Classic", description: "House patty, cheese, lettuce, tomato, and special dressing.", price: "10.99" },
          { name: "House Special", description: "Double patty, bacon, cheddar cheese, and onion rings.", price: "12.99" },
          { name: "Grill VIP Special", description: "Antojo Burger with grilled pineapple, goat cheese, and BBQ sauce.", price: "13.99" },
        ]
      },
      {
        name: "Hot Dogs",
        items: [
          { name: "Classic American", description: "Sausage, soft bun, pickles, and mustard.", price: "7.99" },
          { name: "Antojo Special", description: "Premium sausage with chili, cheese, and jalapeños.", price: "9.99" },
          { name: "Supreme Hot Dog", description: "Bacon, caramelized onions, and secret sauces.", price: "10.99" },
        ]
      },
      {
        name: "Sandwiches / Tortas",
        items: [
          { name: "Cuban Sandwich", description: "Pork, ham, Swiss cheese, pickles, and mustard.", price: "11.99" },
          { name: "Torta Mexicana", description: "With 'milanesa' (breaded steak), beans, avocado, and cheese.", price: "12.99" },
        ]
      },
      {
        name: "Sides",
        items: [
          { name: "French Fries", description: "Classic cut, crispy and salty.", price: "4.99" },
          { name: "Onion Rings", description: "Beer-battered and perfectly fried.", price: "5.99" },
          { name: "Cheesy Fries", description: "With melted cheddar cheese and bacon.", price: "6.99" },
        ]
      }
    ]
  },

  // --- COMPLETE SNACKS MENU ---
  menuSnacks: {
    title: "Snacks, Desserts & Drinks",
    categories: [
      {
        name: "Strawberries & Cream",
        items: [
          { name: "Classic", description: "Fresh strawberries with whipped cream and condensed milk.", price: "7.99" },
          { name: "Fresa VIP (Ours)", description: "Strawberries covered in chocolate and special topping.", price: "9.99" },
        ]
      },
      {
        name: "Corn Cups",
        items: [
          { name: "Classic Corn Cup", description: "With mayo, cotija cheese, chili, and lime.", price: "5.99" },
          { name: "Yogurt Ice Cream Bar", description: "Yogurt ice cream base with 3 toppings of your choice.", price: "6.99" },
        ]
      },
      {
        name: "Churros",
        items: [
          { name: "Filled Churros", description: "Filled with 'arequipe' (dulce de leche), chocolate, or strawberry.", price: "6.50" },
          { name: "Mini Churros", description: "A portion of mini churros to share.", price: "5.50" },
        ]
      },
      {
        name: "Pancakes & Waffles",
        items: [
          { name: "Mini Pancakes", description: "Fluffy mini pancakes with fruit and honey.", price: "8.99" },
          { name: "Waffles", description: "With whipped cream and strawberries.", price: "9.99" },
        ]
      },
      {
        name: "More Cravings",
        items: [
          { name: "DoriNachos", description: "Doritos with corn, cheese, cream, and sauces.", price: "7.50" },
          { name: "Coffee", description: "Americano, Espresso, Latte, or Matcha. Iced or hot.", price: "4.50" },
        ]
      },
      {
        name: "Drinks",
        items: [
          { name: "Natural Lemonades", description: "Strawberry, mango, or passion fruit flavors.", price: "4.99" },
          { name: "Milkshakes", description: "Vanilla, chocolate, or strawberry.", price: "6.99" },
          { name: "Sodas", description: "Coca-Cola, Sprite, etc.", price: "2.99" },
        ]
      }
    ]
  },

  favorites: {
    title: "Choose & Enjoy",
    subtitle: "The House Favorites",
    items: [
      { 
        name: "Supreme Hot Dog", 
        description: "Premium sausage, bacon, caramelized onions, and sauces." 
      },
      { 
        name: "Classic Corn Cup", 
        description: "With mayo, cotija cheese, chili, and lime." 
      },
      { 
        name: "Strawberries & Cream", 
        description: "Our special recipe of cream and condensed milk." 
      },
    ]
  },

  footer: {
    rights: 'All rights reserved.',
    followUs: 'Follow Us',
    findUs: 'Find us in Austin, TX',
    location: 'Austin, Texas',
    contact: 'Contact Us',
    created: "Created by RuedaLaRolaMedia.com"
  }
};