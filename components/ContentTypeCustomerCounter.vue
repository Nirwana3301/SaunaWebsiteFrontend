<template>
  <section>
    <div class="h-full lg:h-[333px] background font-montserrat text-white p-20 md:px-20">
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 justify-center h-full">
        <div class="p-5 sm:p-0 box">
          <h2 class="text-4xl lg:text-6xl">{{ body.titleOne }}</h2>
          <p class="text-lg lg:text-2xl">{{ body.descOne }}</p>
        </div>
        <div class="p-5 sm:p-0 box">
          <h2 class="text-4xl lg:text-6xl">{{ body.titleTwo }}</h2>
          <p class="text-lg lg:text-2xl">{{ body.descTwo }}</p>
        </div>
        <div class="p-5 sm:p-0 box">
          <h2 class="text-4xl lg:text-6xl">{{ body.titleThree }}</h2>
          <p class="text-lg lg:text-2xl">{{ body.descThree }}</p>
        </div>
        <div class="p-5 sm:p-0 box">
          <h2 class="text-4xl lg:text-6xl">{{ body.titleFour }}</h2>
          <p class="text-lg lg:text-2xl">{{ body.descFour }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts" setup>
const props = defineProps<{
  body: any
  pos: number
}>()

</script>
<style scoped>
.box {
  border-radius: 14px;
  background: linear-gradient(40deg, rgba(255, 255, 255, 0.10) 0%, rgba(255, 255, 255, 0.10) 2.60%, rgba(255, 255, 255, 0.00) 100%);
  box-shadow: 2px 4px 30px 0px rgba(0, 0, 0, 0.10);
  backdrop-filter: blur(35px);

  margin: 5px 0;
  padding: 20px;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;

  transition: 0.5s ease-in-out all;
}

.box:hover {
  transition: 0.5s ease-in-out all;
  transform: scale(1.05);
  box-shadow: 2px 4px 30px 0px rgba(0, 0, 0, 0.20);
  backdrop-filter: blur(35px);
}

.background {
  background-image: url('../assets/waterdrops.jpg');
  background-repeat: no-repeat;
  background-size: cover;
}
</style>
