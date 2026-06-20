<template>
  <div>
    <div id="list" class="list-group">
      <label
        v-for="(item, index) in checkedIngredients"
        :key="`${item.name}-${index}`"
        class="list-group-item list-group-item-action d-flex align-items-center"
      >
        <input
          type="checkbox"
          class="form-check-input me-2"
          v-model="item.checked"
        />
        {{ item.name }}
      </label>
    </div>
    <p class="selected-count mt-2">Checked: {{ checkedCount }}</p>
  </div>
</template>

<script>
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
