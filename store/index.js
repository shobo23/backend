const Express = require('express')
const app = Express()
const recipes = [
    {
      id: 1,
      name: "Jollof Rice",
      ingredients: [
        {
          name: "Rice",
          quantity: "2 cup",
        },
        {
          name: "Tomato",
          quantity: "2 tbsp",
        },
        {
          name: "Chicken stock",
          quantity: "2 cup",
        },
        {
          name: "Rice",
          quantity: "2 cup",
        },
        {
          name: "Tomato",
          quantity: "2 tbsp",
        },
        {
          name: "Chicken stock",
          quantity: "2 cup",
        },
        {
          name: "Chicken stock",
          quantity: "2 cup"
        },
      ],
    },
  ];
  
console.log(recipes);
