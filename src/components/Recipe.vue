<template>
  <div class="recipe">
    <div v-if="steps && steps.length">
      <div v-for="step in steps" :key="step.step" class="recipe-step">
        <h4 class="step-title">Step {{ step.step }}</h4>
        <p class="step-desc">{{ step.description }}</p>
      </div>
    </div>
    <div v-else>
      <p>No recipe steps available.</p>
    </div>
  </div>
</template>
  

<script>
export default {
  name: 'Recipe',
  props: {
    recipe: {
      type: [Object, Array],
      default: () => ({})
    }
  },
  computed: {
    steps() {
      if (!this.recipe) return []
      if (Array.isArray(this.recipe)) return this.recipe
      return this.recipe.recipe || this.recipe.steps || []
    }
  }
}
</script>

<style scoped>
.recipe-step { margin-bottom: 12px }
.step-title { margin: 0 0 4px }
.step-desc { margin: 0 }
</style>
