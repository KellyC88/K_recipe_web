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
        <div class="col-4">
          <div id="list" class="list-group">
            <a class="list-group-item list-group-item-action"></a>
            <a class="list-group-item list-group-item-action" ></a>
            <a class="list-group-item list-group-item-action"></a>
            <a class="list-group-item list-group-item-action"></a>
          </div>
        </div>
        <div data-bs-spy="scroll" data-bs-target="#list" data-bs-smooth-scroll="true" 
           class="scrollspy-example" tabindex="0">
          <h4 id="list-item-1">Item 1</h4>
          <p></p>
          <h4 id="list-item-2">Item 2</h4>
          <p>...</p>
          <h4 id="list-item-3">Item 3</h4>
          <p>...</p>
          <h4 id="list-item-4">Item 4</h4>
          <p>...</p>
        </div>
      </div>
    </div>
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
      

      
   
</template>

<script>
import NavBar from './NavBar.vue'
import oatmeal from '../assets/oat.jpg'
import sourdough from '../assets/brekkie.jpg'
import croissant from '../assets/product8.jpg'
import lemontea from '../assets/product5.jpg'

export default {
  name: 'ProductDetails',
  components: {
    NavBar,
  },
  data() {
    return {
      product: null,
      products: [
        { id: 1, name: 'oatmeal', description: 'healthy', ingredient: 'oat' },
        { id: 2, name: 'sourdough', description: 'tasty', ingredient: 'sourdough' },
        { id: 3, name: 'croissant', description: 'flaky', ingredient: 'croissant' },
        { id: 4, name: 'lemontea', description: 'refreshing', ingredient: 'lemontea' },
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
  },
  mounted() {
    const id = Number(this.$route.params.id)
    this.product = this.products.find((item) => item.id === id) || null
  },
}
</script>