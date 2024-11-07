# Recipe Calculator

| Expected file        |
| -------------------- |
| recipe-calculator.js |

### Instructions

### Instructions

Write a function called `calculateRecipe` that handles recipe calculations and conversions.

### Expected Function

```js
function calculateRecipe(recipe, servings) {
  // Your code here
}
```

### Example

```js
const recipe = {
  name: "Chocolate Cake",
  originalServings: 8,
  ingredients: {
    flour: {
      amount: 2,
      unit: "cups",
    },
    sugar: {
      amount: 1.5,
      unit: "cups",
    },
    chocolate: {
      amount: 200,
      unit: "grams",
    },
  },
  instructions: ["Mix dry ingredients", "Add wet ingredients", "Bake"],
};

console.log(calculateRecipe(recipe, 4));
// {
//   name: "Chocolate Cake",
//   servings: 4,
//   ingredients: {
//     flour: {
//       amount: 1,
//       unit: "cups"
//     },
//     sugar: {
//       amount: 0.75,
//       unit: "cups"
//     },
//     chocolate: {
//       amount: 100,
//       unit: "grams"
//     }
//   },
//   instructions: ["Mix dry ingredients", "Add wet ingredients", "Bake"],
//   totalWeight: "375g",
//   difficulty: "medium"
// }
```
