<script setup>
  import { TransitionGroup, ref, watch } from 'vue';

  import q from '../data/quizes.json';
  import Card from '../components/Card.vue';

  const QUIZES_DATA = ref(q);
  const search = ref('');
  const beforeEnter = () => {
    console.log('BEFORE ENTER');
  };
  const enter = () => {
    console.log('Enter');
  };
  watch(search, () => {
    return (QUIZES_DATA.value = q.filter((quiz) =>
      quiz.name.toLowerCase().includes(search.value.toLowerCase()),
    ));
  });
</script>

<template>
  <div class="px-2 mx-auto container">
    <header class="flex pt-4 mb-3 items-center">
      <h1 class="font-bold text-2xl mr-4">Quizes</h1>
      <input
        type="text"
        class="border rounded-md p-1 bg-cyan-100"
        placeholder="Search......"
        v-model.trim="search"
      />
    </header>
    <div class="w-100 flex flex-wrap gap-10 mt-5">
      <TransitionGroup
        name="card"
        appear
        @before-enter="beforeEnter"
        @enter="enter"
      >
        <Card v-for="quiz in QUIZES_DATA" :key="quiz.id" :quiz="quiz" />
      </TransitionGroup>
    </div>
  </div>
</template>

<style scoped>
  .card-enter-from {
    transform: translateY(-50px);
    opacity: 0;
  }
  .card-enter-to {
    transform: translateY(0px);
    opacity: 1;
  }
  .card-enter-active {
    transition: all 0.5s ease;
  }
</style>
