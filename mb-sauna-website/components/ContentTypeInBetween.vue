<template>
    <section>
        <div v-if="body.isActive" class="relative">
            <div class="relative m-auto md:w-[600px] ">
                <img title="ForestImage" loading="lazy" class="w-full h-full object-center" src="../assets/forest.svg"
                    alt="forest" />
            </div>
            <div class="absolute inset-0 mt-10 flex flex-col justify-center items-center">
                <h2 class="text-3xl md:text-5xl font-montserrat font-bold text-green-primary">{{ body.inBetweenHeadline }}</h2>
                <p class="text-xl md:text-2xl font-montserrat font-bold text-green-secondary">{{ body.subheadline }}</p>
            </div>
        </div>
    </section>
</template>
  
<script setup lang="ts">
const props = defineProps<{
    body: any;
    pos: number;
}>();
</script>
  