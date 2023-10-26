<template>
  <div class="h-fit md:h-[520px] mb-8 w-80 font-montserrat md:mb-0 ">
    <div class="w-full h-64 gradient-overlay">
      <img title="ServiceImage" loading="lazy" :src="url + card.icon.data.attributes.url" :alt="url + card.icon.data.attributes.alternativeText"
        class="object-fill object-center w-full h-full rounded-md " />
    </div>
    <h2 class="my-2 text-2xl font-bold text-green-primary">{{ card.title }}</h2>
    <p>{{ card.description }}</p>
  </div>
</template>

<script setup lang="ts">
import { getStrapiUrl } from "../../helper/index";

const url = getStrapiUrl();

const props = defineProps<{
  card: any;
}>();
</script>

<style scoped>
.gradient-overlay {
  position: relative;

  &::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(273deg, #4c8579cc 0%, #4e6e5880 100%);
    opacity: 0.9;
  }

  img {
    filter: grayscale(20%)
  }
}
</style>
