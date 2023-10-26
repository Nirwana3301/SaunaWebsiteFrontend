<template>
  <button aria-label="pageLink" type="button" class="cursor-pointer">
    <nuxt-link class="cursor-pointer" rel="next" :class="{
      'p-2 text-white  gradient': button.style == 'primary',
      'btn-secondary': button.style == 'secondary',
      'hover:underline': button.style == 'link',
      'btn-text': button.style == 'text',
      'bg-transparent text-white': button.style == 'nav_link',
    }" v-if="button.unterseiten &&
  button.unterseiten.data !== null &&
  (button.url == '' || button.url == null)
  " :to="{ path: button.unterseiten.data.attributes.slug }" nuxt>
      <span class="cursor-pointer -z-10">
        {{ button.label }}
      </span>
    </nuxt-link>
  </button>
</template>

<script setup lang="ts">
const props = defineProps<{
  button: any
}>()
</script>

<style scoped>
.gradient {
  background: linear-gradient(90deg, #4E6E58 0%, #4C8577 100%);
}
</style>

