<template >
  <section>
    <div id="serviceSection">
      <div class="p-10 sm:p-20">
        <Headline :headline="body.servicesHeadline" />
        <div class="flex flex-wrap items-center justify-center mt-10 md:gap-20 w-full lg:justify-between">
          <div v-for="(card, index) in body.Card" :key="index">
            <Service :card="card" />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import Service from "./elements/Service.vue";
import Headline from "./elements/Headline.vue";

const props = defineProps<{
  body: any;
  pos: number;
}>();
</script>

<style scoped></style>
