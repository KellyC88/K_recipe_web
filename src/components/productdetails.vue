<template>
  <div v-if="product" class="product-details-page">
    <NavBar />
    <div class="product_page">
      <h4 class="product_name">{{ product.name }}</h4>
      <div class="photo-3-4" v-if="currentImage">
        <img :src="currentImage.src" :alt="currentImage.alt" class="product_img" />
      </div>
      <!-- <div class="description_box">
        <h3 class="description_title">Description</h3>
        <p class="description_text">{{ product.description }}</p>
      </div> -->
      <div class="ingredient_check_box">
        <h3 class="ingredient_title">Ingredients</h3>
        <Ingredients :ingredients="productIngredients" />
      </div>
      <div class="product_recipe" v-if="product">
        <h3 class="recipe_title">Recipe</h3>
        <Recipe :recipe="productRecipe" />
      </div>
    </div>
  </div>
    
      

      
   
</template>

<script>
import NavBar from './NavBar.vue'
import Ingredients from './Ingredients.vue'
import Recipe from './Recipe.vue'
import oatmeal from '../assets/oat.jpg'
import sourdough from '../assets/brekkie.jpg'
import croissant from '../assets/product8.JPG'
import lemontea from '../assets/product5.jpg'
import FruitOatBowl from '../assets/oatmeal01.jpg'
import YogurtOatBowl from '../assets/oatmeal02.jpg'
import granola from '../assets/granola.jpg'
import productDataMap from '../data/ingredients/index.js'
import FrenchToast from '../assets/bake french toast.jpg'
import bagelplate from '../assets/bagel.jpg'
import Burrito from '../assets/burrito_set.jpeg'
import OatPancake from '../assets/oat_pancake.jpg'

export default {
  name: 'ProductDetails',
  components: {
    NavBar,
    Ingredients,
    Recipe,
  },
  data() {
    return {
      product: null,
      products: [
        { id: 1, name: 'Granola', checked: false },
        { id: 2, name: 'Sourdough', checked: false },
        { id: 3, name: 'Croissant', checked: false },
        { id: 4, name: 'Lemon Tea',  checked: false },
        { id: 5, name: 'Scrambled Oat Bowl', checked: false },
        { id: 6, name: 'Fruit Oat Bowl', checked: false },
        { id: 7, name: 'Yogurt Oat Bowl', checked: false },
        { id: 8, name: 'Baked French Toast', checked: false },
        { id: 9, name: 'Bagel Plate', checked: false },
        { id: 10, name: 'Burrito', checked: false },
        { id: 11, name: 'Oat Pancake', checked: false },
      ],
      productImages: [
        { id: 1, src: granola, alt: 'Granola' },
        { id: 2, src: sourdough, alt: 'Sourdough' },
        { id: 3, src: croissant, alt: 'Croissant' },
        { id: 4, src: lemontea, alt: 'Lemon Tea' },
        { id: 5, src: oatmeal, alt: 'Scrambled Oat Bowl' },
        { id: 6, src: FruitOatBowl, alt: 'Fruit Oat Bowl' },
        { id: 7, src: YogurtOatBowl, alt: 'Yogurt Oat Bowl' },
        { id: 8, src: FrenchToast, alt: 'Baked French Toast' },
        { id: 9, src: bagelplate, alt: 'Bagel Plate' },
        { id: 10, src: Burrito, alt: 'Burrito' },
        { id: 11, src: OatPancake, alt: 'Oat Pancake' },
      ],
    };
  },
  computed: {
    currentImage() {
      if (!this.product) return null
      return this.productImages.find((item) => item.id === this.product.id) || null
    },
    productData() {
      if (!this.product) return { servings: 1, ingredients: [], recipe: [] }
      return productDataMap[this.product.id] || { servings: 1, ingredients: [], recipe: [] }
    },
    productIngredients() {
      return this.productData
    },
    productRecipe() {
      return this.productData.recipe || []
    },
  },
  mounted() {
    const id = Number(this.$route.params.id)
    this.product = this.products.find((item) => item.id === id) || null
  },
  
}
</script>