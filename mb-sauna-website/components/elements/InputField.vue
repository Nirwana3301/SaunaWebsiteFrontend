<template>
  <div class="sm:mb-4 mb-2">
    <div class="w-full">
      <label
        ref="refLabel"
        class="mb-2 text-md sm:text-xl text-black"
        :for="id"
        >{{ placeholder }}</label
      >
      <input
        class="w-full p-2 bg-gray-100 rounded-xl"
        :class="[error ? ' !border-red-600' : '']"
        :type="type ? type : 'text'"
        :id="id"
        :value="modelValue"
        @input="updateValue"
        ref="refInput"
        :readonly="readonly"
        v-if="!isTextarea"
      />
      <textarea
        class="w-full p-2 bg-gray-100 h-[300px] sm:h-[420px] rounded-xl"
        :class="[error ? ' !border-red-600' : '']"
        :type="type ? type : 'text'"
        :id="id"
        :value="modelValue"
        @input="updateValue"
        ref="refInput"
        :readonly="readonly"
        v-if="isTextarea"
      />
    </div>
    <div class="text-xs text-red-600" v-if="error">
      {{ error }}
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";

const props = defineProps<{
  id: string;
  type?: string;
  placeholder: string;
  modelValue: string;
  error?: string;
  debounce?: boolean;
  readonly?: boolean;
  isTextarea?: boolean;
}>();

const refLabel = ref<HTMLElement>();
const refInput = ref<HTMLElement>();

const emit = defineEmits(["update:modelValue"]);

let updating = false;
const updateValue = (event: Event) => {
  const target = <HTMLInputElement>event.target;
  if (props.debounce == true) {
    if (!updating) {
      setTimeout(() => {
        emit("update:modelValue", target.value);
        updating = false;
      }, 800); // 0.8 sec delay to debounce input
    }
    updating = true;
  } else {
    emit("update:modelValue", target.value);
  }
};
</script>
