<template>
  <div id="contactFormSection">
    <div class="fixed left-[50%]
    transform -translate-x-1/2 w-2/3 sm:w-max
    top-2 z-50 flex flex-col items-center justify-center h-20 rounded-lg text-white p-5 font-bold"
      :class="messageSentFailed ? 'bg-red-500' : 'bg-green-500'" v-if="openModal">
      <p v-if="messageSentFailed">Nachricht konnte nicht gesendet werden.</p>
      <p v-else>Nachricht wurde gesendet.</p>
      <button class="mt-2 px-2 bg-white rounded-lg text-primary font-bold text-black" aria-label="close modal"
        @click="openModal = false">Ok</button>
    </div>
    <div class="w-full h-full p-8 xl:p-20">
      <Headline class="mb-10" headline="Kontakt" />
      <div class="justify-center w-full h-full xl:flex m-auto">
        <div class="flex flex-col h-full m-auto xl:w-1/2 gap-14 items-center xl:items-start">
          <div class="flex flex-col gap-4">
            <ContactData title="Name:" content="Oleg Babunov" />
            <ContactData title="E-Mail:" content="babunov.2016@mail.ru" />
            <ContactData title="Telefon:" content="+49 163 7044945" />
          </div>
          <div class="flex flex-col gap-4">
            <ContactData title="Name:" content="Maier Alexander" />
            <ContactData title="E-Mail:" content="maieralex252@gmail.com" />
            <ContactData title="Telefon:" content="+49 176 83404930" />
          </div>
          <div class="flex flex-row gap-4 w-full h-96 xl:w-[540px] xl:h-[540px]">
            <img title="MapImage" loading="lazy" class="w-full h-full object-cover" src="../assets/maps.png" alt="map" />
          </div>
        </div>
        <div class="w-full mt-10 xl:w-1/2 xl:mt-0">
          <form @submit.prevent="submitForm()">
            <InputField id="name" v-model="nameModel" :error="nameError" placeholder="Name" type="text" />
            <InputField id="email" v-model="emailModel" :error="emailError" placeholder="E-Mail" type="email" />
            <InputField id="phone" v-model="phoneModel" :error="phoneError" placeholder="Telefon" type="tel" />
            <InputField id="issue" v-model="issueModel" :error="issueError" placeholder="Betreff" type="text" />
            <InputField id="message" v-model="messageModel" :error="messageError" placeholder="Nachricht" type="text"
              isTextarea />
            <div class="flex">
              <input class="mr-4" type="checkbox" name="privacy" id="privacy" v-bind:checked="privacyModel"
                @change="privacyModel = !privacyModel" />
              <label for="privacy" class="mb-2 text-sm sm:text-base sm:mb-0">
                Hiermit bestätigen Sie unsere Datenschutzbestimmungen. Mehr
                Informationen finden Sie in der
                <span class="underline cursor-pointer hover:text-primary" @click='$router.push("/datenschutz")'>
                  Datenschutzerklärung</span>.
              </label>
            </div>
            <p v-if="privacyError" class="text-red-500 text-sm">{{ privacyError }}</p>
            <Button :button="button" type="submit" class="mt-4" aria-label="privacyError" />
          </form>
        </div>
      </div>
      <div class="flex items-center justify-center w-full gap-10 mt-10 md:mt-20 flex-wrap">
        <div class="flex items-center justify-center w-14 h-14 p-2 scale-100 hover:scale-110 transition-all duration-200">
          <img title="FacebookImage" loading="lazy" class="w-full h-full object-center" @click="redirectToTikTok()" src="../assets/socialmedia/tiktok.png"
            alt="facebook" />
        </div>
        <div class="flex items-center justify-center w-14 h-14 p-2 scale-100 hover:scale-110 transition-all duration-200"
          @click="redirectToInstagram()"> <img title="InstagrammImage" loading="lazy" class="w-full h-full object-center"
            src="../assets/socialmedia/instagram.png" alt="facebook" />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const apiKey = "110e3757-28bd-4d53-b150-930f356482ab";
import Button from "./elements/Button.vue";
import InputField from "./elements/InputField.vue";
import Headline from "./elements/Headline.vue";
import ContactData from "./elements/ContactData.vue";

import { ref } from "vue";

const nameModel = ref("");
const nameError = ref("");

const emailModel = ref("");
const emailError = ref("");

const phoneModel = ref("");
const phoneError = ref("");

const issueModel = ref("");
const issueError = ref("");

const messageModel = ref("");
const messageError = ref("");

const privacyModel = ref(false);
const privacyError = ref("");

const messageSentFailed = ref(false);
const openModal = ref(false);

const button = ref({
  label: "Absenden",
  style: "primary",
});

const checkContactForm = () => {
  let error = false;

  if (nameModel.value.length < 3) {
    nameError.value = "Bitte geben Sie einen gültigen Namen ein.";
    error = true;
  } else {
    nameError.value = "";
  }

  if (emailModel.value.length < 3) {
    emailError.value = "Bitte geben Sie eine gültige E-Mail Adresse ein.";
    error = true;
  } else {
    emailError.value = "";
  }

  if (phoneModel.value.length < 3) {
    phoneError.value = "Bitte geben Sie eine gültige Telefonnummer ein.";
    error = true;
  } else {
    phoneError.value = "";
  }

  if (issueModel.value.length < 3) {
    issueError.value = "Bitte geben Sie ein gültiges Anliegen ein.";
    error = true;
  } else {
    issueError.value = "";
  }

  if (messageModel.value.length < 3) {
    messageError.value = "Bitte geben Sie eine gültige Nachricht ein.";
    error = true;
  } else {
    messageError.value = "";
  }

  if (!privacyModel.value) {
    privacyError.value = "Bitte bestätigen Sie unsere Datenschutzbestimmungen.";
    error = true;
  } else {
    privacyError.value = "";
  }

  console.log("here");


  return error;
};

const submitForm = async () => {
  console.log("here");

  if (checkContactForm()) {
    return;
  }

  const response = await fetch("https://api.web3forms.com/submit", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify({
      access_key: apiKey,
      name: nameModel.value,
      phone: phoneModel.value,
      issue: issueModel.value,
      email: emailModel.value,
      message: messageModel.value,
    }),
  });
  const result = await response.json();

  if (result.success) {
    openModal.value = true;
    nameModel.value = "";
    emailModel.value = "";
    phoneModel.value = "";
    issueModel.value = "";
    messageModel.value = "";
    privacyModel.value = false;
    openModal.value = true;
    messageSentFailed.value = false;
  } else {
    alert
    openModal.value = true;
    messageSentFailed.value = true;
  }
};

const redirectToInstagram = () => {
  window.open("https://instagram.com/mobil_sauna?igshid=MzMyNGUyNmU2YQ==", "_blank");
};

const redirectToTikTok = () => {
  window.open("https://www.tiktok.com/@mobil_sauna?_t=8flRBCcv0Fd&_r=1", "_blank");
};
</script>

<style scoped></style>
