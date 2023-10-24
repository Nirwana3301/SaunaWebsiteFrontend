<template>
    <div class="flex flex-row">
        <div class="mr-4">
            <h3 class="w-24 text-xl font-extrabold text-right smw-32 sm:text-2xl font-baskerville decoration-green-primary">
                {{ props.title }}
            </h3>
            <div class="sm:h-[5px] h-[3px] rounded-lg bg-green-primary">
            </div>
        </div>
        <p class="flex items-center justify-center sm:text-xl">
            {{ props.content }}
        </p>
    </div>
</template>
  
<script setup lang="ts">
const props = defineProps<{
    title: string
    content: string
}>();
</script>  