<template>
  <div v-if="product" class="product-details-page">
    <NavBar />
    <div class="product_page">
      <h4 class="product_name">{{ product.name }}</h4>
      <div class="product_img_box">
        <img class="product_img" src="@/assets/product8.JPG" alt="{{ product.name }}">
      </div>
    </div>
  </div>
</template>

<script>
import NavBar from './NavBar.vue'

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
        { id: 3, name: 'salad' },
        { id: 4, name: 'cookie' },
      ],
    };
  },
  mounted() {
    const id = Number(this.$route.params.id)
    this.product = this.products.find((item) => item.id === id) || null
  },
}
</script>