<template>
    <div class="m-auto max-w-fit">
        <h1 class="mx-4 text-4xl font-extrabold text-center font-baskerville decoration-green-primary">
            {{ props.headline }}
        </h1>
        <div class="h-[5px] rounded-lg bg-green-primary">
        </div>
    </div>
</template>
  
<script setup lang="ts">
const props = defineProps<{
    headline: any;
}>();
</script>
  
<style scoped></style>
  