<template>
  <div v-if="product" class="product-details-page">
    <NavBar />
    <div class="product_page">
      <h4 class="product_name">{{ product.name }}</h4>
      <div class="photo-3-4" v-if="currentImage">
        <img :src="currentImage.src" :alt="currentImage.alt">
      </div>
    </div>
  </div>
</template>

<script>
import NavBar from './NavBar.vue'
import oatmeal from '../assets/oat.jpg'
import sourdough from '../assets/brekkie.jpg'
import croissant from '../assets/product8.jpg'
import cookie from '../assets/product5.jpg'

export default {
  name: 'ProductDetails',
  components: {
    NavBar,
  },
  data() {
    return {
      product: null,
      products: [
        { id: 1, name: 'oatmeal' },
        { id: 2, name: 'sourdough' },
        { id: 3, name: 'croissant' },
        { id: 4, name: 'cookie' },
      ],
      productImages: [
        { id: 1, src: oatmeal, alt: 'oatmeal' },
        { id: 2, src: sourdough, alt: 'sourdough' },
        { id: 3, src: croissant, alt: 'croissant' },
        { id: 4, src: cookie, alt: 'cookie' },
      ]
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