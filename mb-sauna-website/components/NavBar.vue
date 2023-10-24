<template>
  <nav>
    <div class="absolute top-0 z-40 w-full h-20 bg-green-primary" v-show="currentRoute !== '/'">
    </div>
    <div class="absolute top-0 z-50 w-full h-20 border-b-[1px] customGradient border-green-primary ">
      <div class="flex w-full h-full px-8 tablet:px-20">
        <button aria-label="navLink" class="mr-6 text-white bg-transparent hover:underline" @click="$router.push('/')">Home</button>
        <button aria-label="navLink" class="mr-6 text-white bg-transparent hover:underline hidden sm:block"
          @click="scrollTo('serviceSection')">Leistungen</button>
        <button aria-label="navLink" class="text-white bg-transparent hover:underline hidden sm:block"
          @click="scrollTo('gallerySection')">Galerie</button>
        <div class="flex items-center justify-end flex-1">
          <button aria-label="navLink" class="p-2 px-6 text-white rounded-md bg-green-akzent-base"
            @click="scrollTo('contactFormSection')">Kontakt</button>
        </div>
      </div>
    </div>
  </nav>
</template>

<script setup lang="ts">
import { useRouter } from "vue-router";

const router = useRouter();

const currentRoute = ref(router.currentRoute.value.path);

onMounted(() => {
  router.afterEach((to, from) => {
    currentRoute.value = to.path;
  });
})

const scrollTo = (id: string) => {
  const el = document.getElementById(id);
  el?.scrollIntoView({ behavior: "smooth" });
};
</script>
<style scoped>
.customGradient {
  background: linear-gradient(180deg, #4E6E5870 0%, #4C857721 100%);
  box-shadow: 2px 4px 30px 0px rgba(0, 0, 0, 0.20);
  backdrop-filter: blur(35px);
}

.buttonGradient {
  background: linear-gradient(90deg, #4E6E58 0%, #4C8577 100%);
}

.customBackground {
  background: #4E6E58;
}
</style>