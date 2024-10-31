# Recipe Calculator

### Instructions

Write a function called `calculateRecipe` that handles recipe calculations and conversions.

The function should:

- Work with nested object literals
- Perform calculations on object properties
- Handle unit conversions
- Support recipe scaling
- Validate ingredient quantities

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
```

Output:

```bash
{
  name: "Chocolate Cake",
  servings: 4,
  ingredients: {
    flour: {
      amount: 1,
      unit: "cups"
    },
    sugar: {
      amount: 0.75,
      unit: "cups"
    },
    chocolate: {
      amount: 100,
      unit: "grams"
    }
  },
  instructions: ["Mix dry ingredients", "Add wet ingredients", "Bake"],
  totalWeight: "375g",
  difficulty: "medium"
}
```
