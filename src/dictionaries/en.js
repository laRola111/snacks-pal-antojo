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
      subtitle: "Burgers, Hot Dogs, and more.",
      button: "View Fast Food Menu",
      imgAlt: "Delicious burger"
    },
    snacks: {
      title: "Snacks & Desserts",
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
      description: "Burgers, Hot Dogs, and Fries.",
      imgAlt: "Burger and hot dog",
    },
    card2: {
      title: "Snacks & Desserts",
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

  // --- FAST FOOD MENU (No Prices) ---
  menuFastFood: {
    title: "Food Menu",
    categories: [
      {
        name: "Antojo Burgers",
        items: [
          { name: "Classic", description: "House patty, cheese, lettuce, tomato, and special dressing." },
          { name: "House Special", description: "Double patty, bacon, cheddar cheese, and onion rings." },
        ]
      },
      {
        name: "Hot Dogs",
        items: [
          { name: "Classic American", description: "Sausage, soft bun, pickles, and mustard." },
          { name: "Antojo Special", description: "Premium sausage with chili, cheese, and jalapeños." },
          { name: "Supreme Hot Dog", description: "Bacon, caramelized onions, and secret sauces." },
        ]
      },
      {
        name: "Sides",
        items: [
          { name: "French Fries", description: "Classic cut, crispy and salty." },
          { name: "Onion Rings", description: "Beer-battered and perfectly fried." },
          { name: "Cheesy Fries", description: "With melted cheddar cheese and bacon." },
        ]
      }
    ]
  },

  // --- SNACKS MENU (No Prices) ---
  menuSnacks: {
    title: "Snacks, Desserts & Drinks",
    categories: [
      {
        name: "Strawberries & Cream",
        items: [
          { name: "Classic", description: "Fresh strawberries with whipped cream and condensed milk." },
          { name: "Fresa VIP (Ours)", description: "Strawberries covered in chocolate and special topping." },
        ]
      },
      {
        name: "Corn Cups (Elotes)",
        items: [
          { name: "Classic Corn Cup", description: "With mayo, cotija cheese, chili, and lime." },
          { name: "Yogurt Ice Cream Bar", description: "Yogurt ice cream base with 3 toppings of your choice." },
        ]
      },
      {
        name: "Churros",
        items: [
          { name: "Filled Churros", description: "Filled with 'arequipe' (dulce de leche), chocolate, or strawberry." },
          { name: "Mini Churros", description: "A portion of mini churros to share." },
        ]
      },
      {
        name: "Pancakes & Waffles",
        items: [
          { name: "Mini Pancakes", description: "Fluffy mini pancakes with fruit and honey." },
          { name: "Waffles", description: "With whipped cream and strawberries." },
        ]
      },
      {
        name: "More Cravings",
        items: [
          { name: "DoriNachos", description: "Doritos with corn, cheese, cream, and sauces." },
          { name: "Coffee", description: "Americano, Espresso, Latte, or Matcha. Iced or hot." },
        ]
      },
      {
        name: "Drinks",
        items: [
          { name: "Natural Lemonades", description: "Strawberry, mango, or passion fruit flavors." },
          { name: "Milkshakes", description: "Vanilla, chocolate, or strawberry." },
          { name: "Sodas", description: "Coca-Cola, Sprite, etc." },
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
  },
  
  aboutUs: {
    title: "Our Passion, Your Craving",
    subtitle: "We are a family dedicated to bringing authentic flavor.",
    content: "At Snacks Pal Antojo, we believe food is more than just a dish; it's a moment. From our craft burgers to authentic strawberries and cream, every recipe is made with fresh ingredients and lots of love. We are proud to be part of the Austin community.",
    imageAlt: "The Snacks Pal Antojo team cooking"
  },

  testimonials: {
    title: "What Our Customers Say",
    subtitle: "Your opinion is our secret ingredient!",
    reviews: [
      {
        quote: "The best strawberries and cream I've had in all of Austin! Authentic flavor and generous portions. 100% recommended.",
        name: "Maria G.",
        source: "Google Review"
      },
      {
        quote: "The 'Antojo Burger' is next level. The meat is juicy, the ingredients are fresh, and the special sauce is incredible. I'll be back soon!",
        name: "David R.",
        source: "Facebook Recommendation"
      },
      {
        quote: "Excellent service for my event. I ordered several snacks, and everything was delicious and on time. Very professional.",
        name: "Ana P.",
        source: "Catering Client"
      }
    ]
  },

  contactForm: {
    title: "Quote Your Event",
    subtitle: "Have a party, meeting, or corporate event? Let us handle the flavor! Fill out the form, and we'll contact you.",
    labels: {
      name: "Your Name",
      email: "Your Email",
      phone: "Your Phone (Optional)",
      message: "Tell us about your event (Date, # people, etc.)",
    },
    button: "Send Request",
    success: "Message sent! We will contact you soon.",
    error: "Error sending. Please try again."
  },
};