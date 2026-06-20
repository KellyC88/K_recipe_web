<template>
  <div v-if="product" class="product-details-page">
    <NavBar />
    <div class="product_page">
      <h4 class="product_name">{{ product.name }}</h4>
      <div class="photo-3-4" v-if="currentImage">
        <img :src="currentImage.src" :alt="currentImage.alt">
      </div>
      <div class="description_box">
        <p>Description: {{ product.description }}</p>
      </div>
      <div class="ingredient_check_box">
        <h3 class="ingredient_title">Ingredients</h3>
        <Ingredients :ingredients="productIngredients" />
      </div>
      <div class="product_recipe" v-if="product">
        <h3 class="recipe_title">Recipe</h3>
        <h4>Step 1</h4>
        <p>...</p>
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
        { id: 1, name: 'oatmeal', description: 'healthy', checked: false },
        { id: 2, name: 'sourdough', description: 'tasty', ingredient: 'sourdough', checked: false },
        { id: 3, name: 'croissant', description: 'flaky', ingredient: 'croissant', checked: false },
        { id: 4, name: 'lemontea', description: 'refreshing', ingredient: 'lemontea', checked: false },
      ],
      productImages: [
        { id: 1, src: oatmeal, alt: 'oatmeal' },
        { id: 2, src: sourdough, alt: 'sourdough' },
        { id: 3, src: croissant, alt: 'croissant' },
        { id: 4, src: lemontea, alt: 'lemontea' },
      ],
    };
  },
  computed: {
    currentImage() {
      if (!this.product) return null
      return this.productImages.find((item) => item.id === this.product.id) || null
    },
    productIngredients() {
      if (!this.product) return []
      return ingredientsMap[this.product.id] || []
    },
  },
  mounted() {
    const id = Number(this.$route.params.id)
    this.product = this.products.find((item) => item.id === id) || null
  },
}
</script>