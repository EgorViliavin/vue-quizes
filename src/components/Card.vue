<script setup>
  import { RouterLink } from 'vue-router';
  const { quiz } = defineProps(['quiz']);
</script>

<template>
  <RouterLink :to="`/quiz/${quiz.id}`">
    <div class="w-80 shadow-xl p-4 cursor-pointer">
      <img :src="quiz.img" alt="" />
      <div class="w-100">
        <h2 class="text text-lg font-bold">{{ quiz.name }}</h2>
        <p>{{ quiz.questions.length }} questions</p>
      </div>
    </div>
  </RouterLink>
</template>
