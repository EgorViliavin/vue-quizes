<script setup>
  const emit = defineEmits(['selectOption']);

  const { question } = defineProps(['question']);

  const emitSelectOption = (isCorrect) => {
    emit('selectOption', isCorrect);
  };
</script>

<template>
  <div class="mt-5">
    <h1 class="mb-5 text-4xl">{{ question.text }}</h1>
  </div>
  <div>
    <div
      class="flex gap-2 items-center cursor-pointer bg-red-300 mb-2 hover:bg-red-500 transition-all duration-300"
      v-for="option in question.options"
      :key="option.id"
      @click="emitSelectOption(option.isCorrect)"
    >
      <p class="text-xl bg-cyan-500 h-10 w-10 flex items-center justify-center">
        {{ option.label }}
      </p>
      <div>
        <p class="text text-2xl">{{ option.text }}</p>
      </div>
    </div>
  </div>
</template>
