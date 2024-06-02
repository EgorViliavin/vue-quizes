<script setup>
  const { questionStatus, barPercentage } = defineProps([
    'questionStatus',
    'barPercentage',
  ]);
</script>

<template>
  <header class="w-100 mt-5">
    <h4 class="text-2xl">{{ questionStatus }}</h4>
    <div class="w-100 border border-cyan-500 w-80 h-14 mt-5">
      <div class="filling" :style="{ width: barPercentage }"></div>
    </div>
  </header>
</template>

<style scoped>
  .filling {
    width: 0%;
    height: 100%;
    background-color: rgb(6, 182, 212);
  }
</style>
