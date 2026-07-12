<template>
  <div v-if="product" class="product-details-page">
    <NavBar />
    <div class="product_page">
      <h4 class="product_name">{{ product.name }}</h4>
      <div class="photo-3-4" v-if="currentImage">
        <img :src="currentImage.src" :alt="currentImage.alt">
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
        <h4>Step 1</h4>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae asperiores, perspiciatis recusandae ullam iure amet itaque minima tempore enim temporibus velit doloremque. Praesentium earum facere consequuntur possimus enim dolorum illum?</p>
       <h4>Step 2</h4>
       <p>...</p>
        <h4>Step 3</h4>
       <p>...</p>
      </div>
    </div>
  </div>
    
      

      
   
</template>

<script>
import NavBar from './NavBar.vue'
import Ingredients from './Ingredients.vue'
import oatmeal from '../assets/oat.jpg'
import sourdough from '../assets/brekkie.jpg'
import croissant from '../assets/product8.jpg'
import lemontea from '../assets/product5.jpg'
import oatmeal01 from '../assets/oatmeal01.jpg'
import oatmeal02 from '../assets/oatmeal02.jpg'
import granola from '../assets/granola.jpg'
import ingredientsMap from '../data/ingredients'


export default {
  name: 'ProductDetails',
  components: {
    NavBar,
    Ingredients,
  },
  data() {
    return {
      product: null,
      products: [
        { id: 1, name: 'granola', description: 'healthy, crispy, sweet', checked: false },
        { id: 2, name: 'sourdough', description: 'tasty', ingredient: 'sourdough', checked: false },
        { id: 3, name: 'croissant', description: 'flaky', ingredient: 'croissant', checked: false },
        { id: 4, name: 'lemontea', description: 'refreshing', ingredient: 'lemontea', checked: false },
        { id: 5, name: 'oatmeal01', description: 'tasty', ingredient: 'oatmeal', checked: false },
        { id: 6, name: 'granola', description: 'crispy', ingredient: 'granola', checked: false },
        { id: 7, name: 'lemontea', description: 'refreshing', ingredient: 'lemontea', checked: false },
        { id: 8, name: 'oatmeal02', description: 'delicious', ingredient: 'oatmeal', checked: false },  
      ],
      productImages: [
        { id: 1, src: granola, alt: 'Granola' },
        { id: 2, src: sourdough, alt: 'Sourdough' },
        { id: 3, src: croissant, alt: 'Croissant' },
        { id: 4, src: lemontea, alt: 'Lemon Tea' },
        { id: 5, src: oatmeal01, alt: 'Oatmeal 01' },
        { id: 6, src: granola, alt: 'Granola`' },
        { id: 7, src: lemontea, alt: 'lemontea' },
        { id: 8, src: oatmeal02, alt: 'oatmeal02' },
      ],
    };
  },
  computed: {
    currentImage() {
      if (!this.product) return null
      return this.productImages.find((item) => item.id === this.product.id) || null
    },
    productIngredients() {
      if (!this.product) return { servings: 1, ingredients: [] }
      // Map product ID to ingredient data, using modulo to handle products that share ingredients
      const ingredientId = this.product.id <= 4 ? this.product.id : ((this.product.id - 1) % 4 + 1)
      return ingredientsMap[ingredientId] || { servings: 1, ingredients: [] }
    },
  },
  mounted() {
    const id = Number(this.$route.params.id)
    this.product = this.products.find((item) => item.id === id) || null
  },
}
</script>