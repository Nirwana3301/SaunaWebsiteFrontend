<template>
    <section>
        <div class="p-10 sm:p-20" v-if="body.isActive">
            <Headline :headline="body.headline" />
            <div class="grid md:grid-cols-2 gap-4 h-full mt-10 grid-cols-1 items-center">

                <Carousel :items-to-show="1" :wrap-around="true" ref="imgCarousel">
                    <Slide v-for="(image, index) in body?.cover?.data" :key="image.id">
                        <div class="w-full h-[300px] md:h-[400px] xl:h-[500px] 2xl:h-[600px] md:p-2">
                            <img title="RentMeImage" loading="lazy" :src="url + image.attributes.url"
                                :alt="image.attributes.alternativeText"
                                class="object-cover object-center w-full h-full rounded-md" />
                        </div>
                    </Slide>
                    <template #addons>
                        <Pagination />
                    </template>
                </Carousel>
                <div>
                    <div v-for="description in body.description"
                        class="p-4 boxGradient border-4  text-white border-white rounded-xl h-2/5">
                        <h2 class="text-2xl font-bold mb-2">{{ description.headline }}</h2>
                        <div class="rentMeMarkDown" v-html="renderMarkdownContent(description.content)"></div>
                    </div>
                    <div class="p-1">
                        <button aria-label="scrollTo" class="p-2 px-6 text-white rounded-md w-full bg-green-akzent-base"
                            @click="scrollTo('contactFormSection')">Kontakt aufnehmen</button>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>
  
  
  
<script setup lang="ts">
import Headline from "./elements/Headline.vue";
import { getStrapiUrl } from "../helper/index";
import { ref } from "vue";
import "vue3-carousel/dist/carousel.css";
import { Carousel, Slide, Pagination } from "vue3-carousel";
import MarkdownIt from 'markdown-it';


const url = getStrapiUrl();

const props = defineProps<{
    body: any;
    pos: number;
}>();

const renderMarkdownContent = (content: string) => {
    const md = new MarkdownIt({ html: true });
    return md.render(content)
}

const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    el?.scrollIntoView({ behavior: "smooth" });
};
</script>
  
<style scoped>
.boxGradient {
    background: linear-gradient(90deg, #4e6e58 0%, #4c8577 100%);
    transition: 0.5s ease-in-out all;
}
</style>
  