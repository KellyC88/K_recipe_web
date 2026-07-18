<template>
  <div>
    <div class="servingsbox">
      <label for="servings" class="servings-label">Servings: </label>
      <div class="servings-input-group">
        <button @click="decreaseServings" class="btn-serving" :disabled="currentServings <= 1">-</button>
        <input 
          id="servings"
          v-model.number="currentServings" 
          type="number" 
          min="1" 
          class="servings-input"
          @change="validateServings"
        />
        <button @click="increaseServings" class="btn-serving">+</button>
      </div>
    </div>
    <div id="list" class="list-group">
      <label v-for="(item, index) in checkedIngredients" :key="`${item.name}-${index}`"
          class="list-group-item list-group-item-action d-flex align-items-center">
          <input type="checkbox" class="form-check-input me-2" v-model="item.checked"/>
          <div class="item-name" :class="{ checked: item.checked }">
            {{ item.name }} 
            <span v-if="item.quantity" class="ingredient-quantity">
              {{ formatQuantity(item.scaledQuantity) }}<span v-if="item.unit">{{ item.unit }}</span>
            </span>
          </div>
      </label>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Ingredients',
  props: {
    ingredients: {
      type: Object,
      default: () => ({ servings: 1, ingredients: [] }),
    },
  },
  data() {
    return {
      checkedIngredients: [],
      currentServings: 1,
      baseServings: 1,
    }
  },
  computed: {
    checkedCount() {
      return this.checkedIngredients.filter((item) => item.checked).length
    },
    scaleFactor() {
      return this.currentServings / this.baseServings
    },
  },
  watch: {
    ingredients: {
      immediate: true,
      deep: true,
      handler(newIngredients) {
        // Handle both old format (array) and new format (object)
        if (Array.isArray(newIngredients)) {
          this.checkedIngredients = newIngredients.map((name) => ({
            name,
            checked: false,
            quantity: null,
            unit: null,
            scaledQuantity: null,
          }))
          this.baseServings = 1
          this.currentServings = 1
        } else if (newIngredients && newIngredients.ingredients) {
          this.baseServings = newIngredients.servings || 1
          this.currentServings = this.baseServings
          this.checkedIngredients = newIngredients.ingredients.map((ingredient) => ({
            name: ingredient.name,
            checked: false,
            quantity: ingredient.quantity,
            unit: ingredient.unit,
            scaledQuantity: this.calculateScaledQuantity(ingredient.quantity),
          }))
        }
      },
    },
    currentServings() {
      this.updateScaledQuantities()
    },
  },
  methods: {
    calculateScaledQuantity(baseQuantity) {
      if (!baseQuantity) return null
      return baseQuantity * this.scaleFactor
    },
    updateScaledQuantities() {
      this.checkedIngredients.forEach((item) => {
        if (item.quantity) {
          item.scaledQuantity = this.calculateScaledQuantity(item.quantity)
        }
      })
    },
    formatQuantity(quantity) {
      if (!quantity) return ''
      // Round to 2 decimal places and remove trailing zeros
      return (Math.round(quantity * 100) / 100).toString()
    },
    increaseServings() {
      this.currentServings++
    },
    decreaseServings() {
      if (this.currentServings > 1) {
        this.currentServings--
      }
    },
    validateServings() {
      if (this.currentServings < 1 || isNaN(this.currentServings)) {
        this.currentServings = 1
      }
    },
  },
}
</script>



