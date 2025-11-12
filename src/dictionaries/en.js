// src/dictionaries/en.js
export const dictionary = {
  navbar: {
    home: 'Home',
    menu: 'Menu',
    fastFood: 'Fast Food', // <-- NUEVO
    snacks: 'Snacks & Fruits', // <-- NUEVO
  },
  hero: {
    title: "The Flavor You Deserve",
    subtitle: "Discover our delicious fast food and snacks, made fresh to order. Perfect for any craving!",
    button: "View Menu",
    imageAlt: "Delicious hamburger and french fries",
  },
  menuSwitch: {
    title: "Our Menus",
    subtitle: "Two options, same incredible flavor.",
    card1: {
      title: "Fast Food",
      description: "Burgers, Hot Dogs, Sandwiches and more.",
      imgAlt: "Burger and hot dog",
    },
    card2: {
      title: "Snacks & Fruits",
      description: "Strawberries & cream, corn cups, churros & drinks.",
      imgAlt: "Strawberries with cream and corn cup",
    }
  },

  // --- NUEVA SECCIÓN (TRADUCIDA) ---
  specialOffer: {
    title: "Special Offer",
    subtitle: "Try our",
    itemName: "Antojo Burger",
    description: "Double patty, american cheese, crispy bacon, fresh veggies, and our secret house sauce. You can't miss it!",
    button: "View in Menu",
  },

  // --- NUEVO MENÚ 1 (TRADUCIDO) ---
  menuFastFood: {
    title: "Fast Food Menu",
    categories: [
      {
        name: "Antojo Burgers",
        items: [
          { name: "Classic Burger", description: "House patty, cheese, lettuce, tomato, and special sauce.", price: "10.99" },
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
          { name: "Cuban Sandwich", description: "Pork, ham, swiss cheese, pickles, and mustard.", price: "11.99" },
          { name: "Mexican Torta", description: "Breaded steak, beans, avocado, and cheese.", price: "12.99" },
        ]
      },
      {
        name: "Sides",
        items: [
          { name: "French Fries", description: "Classic cut, crispy and salty.", price: "4.99" },
          { name: "Onion Rings", description: "Beer-battered and perfectly fried.", price: "5.99" },
          { name: "Cheesy Fries", description: "With melted cheddar cheese and bacon bits.", price: "6.99" },
        ]
      }
    ]
  },

  // --- NUEVO MENÚ 2 (TRADUCIDO) ---
  menuSnacks: {
    title: "Snacks, Desserts & Drinks",
    categories: [
      {
        name: "Strawberries & Cream",
        items: [
          { name: "Classic", description: "Fresh strawberries with whipped cream and condensed milk.", price: "7.99" },
          { name: "VIP Strawberry (Ours)", description: "Chocolate-covered strawberries and special toppings.", price: "9.99" },
        ]
      },
      {
        name: "Corn Cups",
        items: [
          { name: "Classic Corn Cup", description: "With mayo, cotija cheese, chili, and lime.", price: "5.99" },
          { name: "Yogurt Ice Cream Bar", description: "Frozen yogurt base with 3 toppings of your choice.", price: "6.99" },
        ]
      },
      {
        name: "Churros",
        items: [
          { name: "Filled Churros", description: "Filled with caramel, chocolate, or strawberry.", price: "6.50" },
          { name: "Mini Churros", description: "A portion of mini churros for sharing.", price: "5.50" },
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
          { name: "DoriNachos", description: "Doritos with corn, cheese, cream, and salsas.", price: "7.50" },
          { name: "Coffee", description: "Americano, Espresso, Latte, or Matcha. Hot or cold.", price: "4.50" },
        ]
      },
      {
        name: "Drinks",
        items: [
          { name: "Natural Lemonades", description: "Strawberry, mango, or passion fruit flavors.", price: "4.99" },
          { name: "Milkshakes", description: "Vanilla, chocolate, or strawberry.", price: "6.99" },
          { name: "Sodas", description: "Coke, Sprite, etc.", price: "2.99" },
        ]
      }
    ]
  },
  
 favorites: {
    title: "Choose & Enjoy",
    subtitle: "Our House Favorites",
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
        description: "Our special cream and condensed milk recipe." 
      },
    ]
  },

  footer: {
    rights: 'All rights reserved.',
    followUs: 'Follow Us',
    contact: 'Contact Us', // <-- NUEVO
    created: "Created by RuedaLaRolaMedia.com"
  }
};