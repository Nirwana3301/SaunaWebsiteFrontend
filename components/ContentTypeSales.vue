<template>
    <section>
        <div class="p-5 sm:p-20 h-full w-full z-0 transition-all">
            <Headline :headline="body.salesHeadline" />
            <div class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 2xl:grid-co gap-6  justify-center mt-10">
                <div v-for="(sale, index) in body.sale" :key="index">
                    <div @click="openSale(index)"
                        class="bg-gray-50 flex flex-col justify-between min-h-full shadow-xl w-full p-5 scale-100 hover:cursor-pointer hover:scale-105 hover:shadow-2xl transition-all duration-200 border-t-green-primary border-t-4 rounded-xl">
                        <div>
                            <h2 class="font-bold text-xl text-green-primary text-center xxl:text-2xl w-full mb-2">{{
                                sale.title }}</h2>
                            <div class="w-full rounded-md h-[300px] sm:h-[350px] md:h-[350px] xl:h-[300px] 2xl:h-[400px]">
                                <img title="SaleCoverImage" loading="lazy" :src="url + sale?.cover?.data?.attributes?.url"
                                    :alt="sale?.cover?.data?.attributes?.alternativeText"
                                    class="object-cover object-center w-full h-full rounded-md" />
                            </div>
                            <div class="flex justify-between mt-4">
                                <h2 class="font-bold flex items-center text-lg">Preis: ab {{ sale.price }}€</h2>
                                <button aria-label="openSale" @click="openSale(index)"
                                    class="p-2 text-white rounded-lg w-fit bg-green-akzent-base buttonGradient">
                                    Mehr erfahren
                                </button>
                            </div>
                        </div>
                    </div>
                    <div v-if="currentSale[index]" class="fixed z-50 w-screen h-screen bg-black bg-opacity-50
                    top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 p-4 xl:p-20"
                        @click="closeSale(index)">
                        <div class="w-full h-full bg-white rounded-xl relative px-2 overflow-y-auto" @click.stop>
                            <h2 class="font-bold text-xl pt-4 px-12 text-green-primary text-center w-full xl:text-4xl">{{
                                sale.title }}</h2>
                            <button aria-label="closeSale" @click="closeSale(index)"
                                class="float-right  m-2 text-black rounded-lg w-fit  absolute right-0 top-0">
                                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24"
                                    stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                        d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            </button>
                            <div class="xl:flex w-full">
                                <div class="mt-4 xl:w-1/2 xl:mt-0 xl:p-4">
                                    <Carousel ref="imgCarousel" :wrap-around="true" :breakpoints="breakpoints">
                                        <Slide v-for="(image, index) in sale.images.data" :key="image.id">
                                            <div class="w-full h-[300px] md:h-[400px] xl:h-[500px] 2xl:h-[600px] md:p-2">
                                                <img title="SaleDetailImage" loading="lazy"
                                                    :src="url + image.attributes.url"
                                                    :alt="image.attributes.alternativeText"
                                                    class="object-cover object-center w-full h-full rounded-md" />
                                            </div>
                                        </Slide>
                                        <template #addons>
                                            <Pagination />
                                        </template>
                                    </Carousel>
                                </div>
                                <div class="mt-4 xl:w-1/2 xl:p-4 p-2">
                                    <h2 class="font-bold text-xl text-green-primary w-full">Preis</h2>
                                    <p class="text-lg">ab {{ sale.price }}€
                                        <span v-if="sale.vb">- Verhandlungsbasis</span>
                                    </p>
                                    <h3 class="font-bold text-xl pt-4 text-green-primary  w-full">Beschreibung</h3>
                                    <div class="markDownItGlobal" v-html="renderMarkdownContent(sale.description)"></div>
                                    <button aria-label="scrollTo"
                                        class="p-2 px-6 mt-2 w-full text-white rounded-lg bg-green-akzent-base buttonGradient"
                                        @click="scrollTo('contactFormSection', index)">
                                        Kontakt aufnehmen
                                    </button>
                                </div>
                            </div>
                        </div>
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

const breakpoints = {
    640: {
        itemsToShow: 1,

    },
    768: {
        itemsToShow: 2,

    },
    1024: {
        itemsToShow: 3,

    },
    1280: {
        itemsToShow: 1,
    },
    1700: {
        itemsToShow: 1,
    },
}

const currentSale = ref(new Array(props.body.sale.length).fill(false));

const openSale = (index: number) => {
    currentSale.value[index] = true;
    document.body.style.overflow = "hidden";
};

const closeSale = (index: number) => {
    currentSale.value[index] = false;
    document.body.style.overflow = "auto";
};

const renderMarkdownContent = (content: string) => {
    const md = new MarkdownIt({ html: true });
    return md.render(content)
}

const scrollTo = (id: string, index: number) => {
    currentSale.value[index] = false;
    document.body.style.overflow = "auto";
    const el = document.getElementById(id);
    el?.scrollIntoView({ behavior: "smooth" });
};
</script>
  
<style scoped>
.buttonGradient {
    background: linear-gradient(90deg, #4e6e58 0%, #4c8577 100%);
    transition: 0.5s ease-in-out all;
}

.buttonGradient:hover {
    transition: 0.5s ease-in-out all;
    box-shadow: 2px 4px 30px 0px rgba(0, 0, 0, 0.2);
    backdrop-filter: blur(35px);
}

.backgroundGradient {
    background: linear-gradient(180deg, #4e6e5870 0%, #4c857721 100%);

}
</style>
  