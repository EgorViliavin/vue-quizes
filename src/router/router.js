import { createRouter, createWebHistory } from 'vue-router';
import MainPage from '../pages/MainPage.vue';
import QuizPage from '../pages/QuizPage.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URl),
  routes: [
    {
      path: '/',
      name: 'main-page',
      component: MainPage,
    },
    {
      path: '/quiz/:id',
      name: 'quiz',
      component: QuizPage,
    },
  ],
});

export default router;
