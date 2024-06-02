<script setup>
  import { RouterLink } from 'vue-router';
  const { quizQuestionLength, numOfCorrectAnswers } = defineProps([
    'quizQuestionLength',
    'numOfCorrectAnswers',
  ]);
</script>

<template>
  <div class="text-center py-28">
    <p class="text-2xl">Your results....</p>
    <h1 class="text-5xl mt-3">
      {{ numOfCorrectAnswers }} / {{ quizQuestionLength }}
    </h1>
    <RouterLink
      to="/"
      class="bg-red bg-sky-500 p-2 mt-3 w-20 rounded text-white mx-auto hover:bg-sky-700 block transition-all duration-300"
      >Back</RouterLink
    >
  </div>
</template>
