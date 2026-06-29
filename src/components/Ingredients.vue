<template>
  <div>
    <div id="list" class="list-group">
      <label v-for="(item, index) in checkedIngredients" :key="`${item.name}-${index}`"
          class="list-group-item list-group-item-action d-flex flex-column align-items-start">
          <input type="checkbox" class="form-check-input mb-2" v-model="item.checked"/>
          <span class="item-name">{{ item.name }}</span>
      </label>
    </div>
    <!-- <p class="selected-count mt-2">Checked: {{ checkedCount }}</p> -->
  </div>
</template>

<script>
import NavBar from './NavBar.vue'

export default {
  name: 'Ingredients',
  props: {
    ingredients: {
      type: Array,
      default: () => [],
    },
  },
  data() {
    return {
      checkedIngredients: [],
    }
  },
  computed: {
    checkedCount() {
      return this.checkedIngredients.filter((item) => item.checked).length
    },
  },
  watch: {
    ingredients: {
      immediate: true,
      handler(newIngredients) {
        this.checkedIngredients = newIngredients.map((name) => ({
          name,
          checked: false,
        }))
      },
    },
  },
}
</script>

<!-- <style scoped>
.list-group-item {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}
.form-check-input {
  margin-bottom: 0.5rem;
}
</style> -->