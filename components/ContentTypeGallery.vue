<template >
  <section>
    <div id="gallerySection">
      <div class="h-full px-5 py-20 sm:px-10">
        <Headline class="mb-10" :headline="body.galleryHeadline" />
        <div class="flex justify-center">
          <button aria-label="RightArrow" class="min-w-[22px] cursor-pointer hidden sm:block" @click="prev">
            <img title="RightImage" loading="lazy" src="../assets/arrowright.svg" alt="arrowRight" class="rotate-180" />
          </button>
          <Carousel ref="imgCarousel" :wrap-around="true" :autoplay="secondsAutoplay" :breakpoints="breakpoints"
            snap-align="center" v-model="currentSlide" class="sm:mx-10">
            <Slide v-for="(image, index) in body.GalleryImage" :key="image.id"
              class="transition-all cursor-pointer sm:p-2 sm:hover:duration-500 sm:hover:ease-in-out sm:hover:scale-[103%] sm:hover:z-50"
              @click="showImage(index)">
              <img title="GalleryImage" loading="lazy"
                class="object-cover object-center w-full rounded-lg sm:w-96 h-96 border-2 border-green-akzent-base"
                :src="url + image.image.data.attributes.url" alt="" />
            </Slide>
            <template #addons>
              <Pagination />
            </template>
          </Carousel>
          <button aria-label="RightArrow" class="min-w-[22px] cursor-pointer hidden sm:block" @click="next">
            <img title="RightImage" loading="lazy" src="../assets/arrowright.svg" alt="arrowRight" />
          </button>
        </div>
        <div v-if="openGallery" ref="galleryOpen" class="hidden sm:block" @click="closeGallery()">
          <div
            class="fixed inset-0 z-50 flex items-center justify-center w-full h-full bg-black bg-opacity-50 backdrop-blur-lg">
            <button aria-label="closeGallery" @click="closeGallery()"
              class="float-right  m-2 text-white rounded-lg w-fit  absolute right-0 top-0">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-12 w-12" fill="none" viewBox="0 0 24 24"
                stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            <button aria-label="RightArrow" class="absolute left-0 z-50 p-4 invert" @click="prev">
              <img title="RightImage" loading="lazy" src="../assets/arrowright.svg" alt="arrowRight" class="rotate-180" />
            </button>
            <Carousel ref="imgCarousel" :items-to-show="2" :wrap-around="true" snap-align="center" v-model="currentSlide" @click.stop>
              <Slide v-for="image in body.GalleryImage" :key="image.id" class="p-6 transition-all cursor-default">
                <div class="w-full h-[600px]">
                  <img title="GalleryDetailImage" loading="lazy"
                    class="object-cover object-center w-full h-full rounded-lg"
                    :src="url + image.image.data.attributes.url" alt="" />
                </div>
              </Slide>
              <template #addons>
                <Pagination class="invert" />
              </template>
            </Carousel>
            <button aria-label="RightArrow" class="absolute right-0 z-50 p-4 invert" @click="next">
              <img title="RightImage" loading="lazy" src="../assets/arrowright.svg" alt="arrowRight" />
            </button>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { getStrapiUrl } from "../helper/index";
import "vue3-carousel/dist/carousel.css";
import { Carousel, Slide, Pagination } from "vue3-carousel";
import Headline from "./elements/Headline.vue";

const url = getStrapiUrl();

const props = defineProps<{
  body: any;
  pos: number;
}>();

const imgCarousel: Ref<any> = ref(null)
const galleryOpen: Ref<any> = ref(null)
const openGallery = ref(false)
const secondsAutoplay = ref(5000)

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
  1700: {
    itemsToShow: 4,
  },
}

const currentSlide = ref(0)

// Define functions for next image in carousel
const next = () => {
  if (imgCarousel.value !== null) imgCarousel.value.next()
}

// function for previous image in carousel
const prev = () => {
  if (imgCarousel.value !== null) imgCarousel.value.prev()
}

// function to open image in gallery
const showImage = (index: number) => {
  if (window.innerWidth < 640) return

  secondsAutoplay.value = 0

  currentSlide.value = index

  openGallery.value = true
  //disable scroll
  document.body.style.overflow = 'hidden'
}

// function to close image in gallery
const closeGallery = () => {
  openGallery.value = false
  //enable scroll
  document.body.style.overflow = 'auto'
  secondsAutoplay.value = 5000
}
</script>
