import ing1 from './1.js'
import ing2 from './2.js'
import ing3 from './3.js'
import ing4 from './4.js'

const buildProductData = (servings, ingredients, recipe) => ({
  servings,
  ingredients,
  recipe,
})

export default {
  1: buildProductData(ing1.servings, ing1.ingredients, [
    { step: 1, description: 'Mix the oats, honey, and cocoa powder in a bowl.' },
    { step: 2, description: 'Serve as a crunchy breakfast bowl or snack.' },
  ]),
  2: buildProductData(ing2.servings, ing2.ingredients, [
    { step: 1, description: 'Toast the sourdough bread until lightly crisp.' },
    { step: 2, description: 'Top with yogurt, egg, avocado, and blueberries.' },
  ]),
  3: buildProductData(ing3.servings, ing3.ingredients, [
    { step: 1, description: 'Whisk butter, flour, sugar, eggs, milk, salt, yeast, and water into a smooth dough.' },
    { step: 2, description: 'Bake until golden and fluffy.' },
  ]),
  4: buildProductData(ing4.servings, ing4.ingredients, [
    { step: 1, description: 'Blend mint, water, lemon juice, honey, ginger, and cinnamon until smooth.' },
    { step: 2, description: 'Pour into a glass and serve chilled.' },
  ]),
  5: buildProductData(1, [
    { name: 'oats', quantity: 80, unit: 'g' },
    { name: 'banana', quantity: 1, unit: 'piece' },
    { name: 'peanut butter', quantity: 15, unit: 'g' },
  ], [
    { step: 1, description: 'Cook the oats until soft and creamy.' },
    { step: 2, description: 'Top with sliced banana and peanut butter.' },
  ]),
  6: buildProductData(1, [
    { name: 'oats', quantity: 100, unit: 'g' },
    { name: 'fresh fruit', quantity: 120, unit: 'g' },
    { name: 'yogurt', quantity: 80, unit: 'g' },
  ], [
    { step: 1, description: 'Prepare the oats and let them cool slightly.' },
    { step: 2, description: 'Layer with fruit and yogurt before serving.' },
  ]),
  7: buildProductData(1, [
    { name: 'yogurt', quantity: 150, unit: 'g' },
    { name: 'oats', quantity: 70, unit: 'g' },
    { name: 'berries', quantity: 100, unit: 'g' },
  ], [
    { step: 1, description: 'Stir yogurt with oats until well combined.' },
    { step: 2, description: 'Top with fresh berries and serve.' },
  ]),
  8: buildProductData(2, [
    { name: 'bread slices', quantity: 2, unit: 'slices' },
    { name: 'egg', quantity: 2, unit: 'pieces' },
    { name: 'milk', quantity: 120, unit: 'mL' },
  ], [
    { step: 1, description: 'Dip the bread into the egg and milk mixture.' },
    { step: 2, description: 'Pan-fry until golden and serve warm.' },
  ]),
  9: buildProductData(1, [
    { name: 'bagel', quantity: 1, unit: 'piece' },
    { name: 'cream cheese', quantity: 30, unit: 'g' },
    { name: 'tomato', quantity: 1, unit: 'piece' },
  ], [
    { step: 1, description: 'Toast the bagel until crisp.' },
    { step: 2, description: 'Spread cream cheese and layer tomato on top.' },
  ]),
  10: buildProductData(2, [
    { name: 'tortilla', quantity: 2, unit: 'pieces' },
    { name: 'egg', quantity: 2, unit: 'pieces' },
    { name: 'avocado', quantity: 1, unit: 'piece' },
  ], [
    { step: 1, description: 'Fill the tortillas with scrambled egg and avocado.' },
    { step: 2, description: 'Roll tightly and serve warm.' },
  ]),
  11: buildProductData(1, [
    { name: 'oats', quantity: 90, unit: 'g' },
    { name: 'banana', quantity: 1, unit: 'piece' },
    { name: 'maple syrup', quantity: 10, unit: 'mL' },
  ], [
    { step: 1, description: 'Mix oats and banana into a smooth batter.' },
    { step: 2, description: 'Cook on a pan and drizzle with maple syrup.' },
  ]),
};
