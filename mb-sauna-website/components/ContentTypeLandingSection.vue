<template>
  <section>
    <div id="landingSection">
      <div class="relative w-full h-screen overflow-hidden">
        <div class="video-container">
          <video autoplay loop muted autobuffer preload="auto" class="z-0 object-cover w-full h-full"
            id="backgroundVideo">
            <source src="../assets/fog.mp4" type="video/mp4" alt="video" />
            <source src="../assets/fog.webm" type="video/webm" alt="video" />
          </video>
        </div>
        <div class="relative hidden image-container sm:block">
          <div v-for="(image, index) in body.images.data" :id="`slide-${index + 1}`" :key="index + 1" :class="[
            active === index + 1 ? 'active' : 'inactive',
            init && 'init',
          ]" class="absolute z-0 w-full h-full overflow-hidden carousel-item">
            <div :style="[`background-image: url('${url}${(image as any).attributes.url}')`]"
              class="w-full h-full bg-cover gradient-overlay" style="background-position: 50% 0%"></div>
          </div>
        </div>
        <div class="z-10 w-full h-full gradient"></div>
        <div
          class="absolute flex flex-col justify-between sm:w-3/6 p-10 transform -translate-y-1/2 border-[1px] glass m-8 sm:m-0 border-green-primary top-1/2 sm:left-8">
          <h1 class="text-2xl font-bold text-white sm:text-4xl font-baskerville">
            {{ body.title }}
          </h1>
          <p class="mt-5 text-base font-medium text-white sm:text-xl font-montserrat">
            {{ body.landingDesc }}
          </p>
          <button aria-label="scrollTo" class="p-2 px-6 mt-5 text-white rounded-lg w-fit bg-green-akzent-base buttonGradient"
            @click="scrollTo('contactFormSection')">
            Kontakt aufnehmen
          </button>
        </div>
      </div>
    </div>
  </section>
</template>
<script lang="ts" setup>
import { onMounted, ref } from "vue";
import { getStrapiUrl } from "../helper/index";
import Button from "./elements/Button.vue";

const url = getStrapiUrl();

const props = defineProps<{
  body: any;
  pos: number;
}>();

const init = ref(true);
const active = ref(1);

onMounted(() => {
  window.addEventListener('load', function () {
    const video = document.getElementById('backgroundVideo') as HTMLVideoElement;
    video.play();
  }, false);


  let i = 1;
  setInterval(() => {
    if (init.value) init.value = false;
    i++;
    if (i > props.body.images.data.length) i = 1;
    active.value = i;
  }, 8000);
});

const scrollTo = (id: string) => {
  const el = document.getElementById(id);
  el?.scrollIntoView({ behavior: "smooth" });
};
</script>

<style scoped>
.gradient {
  background: linear-gradient(135deg, #4c8577b2 0%, #4c857700 100%);
  opacity: 0.8;
}

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
    opacity: 0.6;
    filter: blur(1px) drop-shadow(0px 4px 4px #00000040);
  }
}

.buttonGradient {
  background: linear-gradient(90deg, #4e6e58 0%, #4c8577 100%);
  transition: 0.5s ease-in-out all;
}

.buttonGradient:hover {
  transition: 0.5s ease-in-out all;
  transform: scale(1.05);
  box-shadow: 2px 4px 30px 0px rgba(0, 0, 0, 0.2);
  backdrop-filter: blur(35px);
}

.glass {
  border-radius: 14px;
  background: linear-gradient(40deg,
      #ffffff1a 0%,
      #ffffff2a 2.6%,
      #ffffff00 100%);
  box-shadow: 2px 4px 30px 0px #0000001a;
  backdrop-filter: blur(35px);
}

.video-container {
  width: 100vw;
  float: left;
  height: 100vh;
}

.image-container {
  position: absolute;
  top: 0;
  right: 0;
  width: 40%;
  height: 100vh;
  clip-path: polygon(20% 0, 100% 0, 100% 100%, 0% 100%);
}

.carousel-item:not(.init) {
  animation-duration: 3s;
  animation-fill-mode: both;
}

.carousel-item.active {
  animation-name: slide-in;
  opacity: 1;
}

.carousel-item.inactive {
  animation-name: slide-out;
  opacity: 0;
}

@keyframes slide-in {
  0% {
    clip-path: polygon(100% 0%, 100% 0%, 100% 100%, 120% 100%);
    opacity: 0;
  }

  0.01% {
    opacity: 1;
  }

  100% {
    clip-path: polygon(-20% 0%, 100% 0%, 100% 100%, 0% 100%);
    opacity: 1;
  }
}

@keyframes slide-out {
  0% {
    clip-path: polygon(100% 0, 0 0, 0 100%, 120% 100%);
    opacity: 1;
  }

  99.99% {
    opacity: 1;
  }

  100% {
    clip-path: polygon(-20% 0, 0 0, 0 100%, 0% 100%);
    opacity: 0;
  }
}
</style>
