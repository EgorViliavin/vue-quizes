<script setup>
	import { useRoute } from 'vue-router';
	import { ref, computed } from 'vue';

	import Result from '../components/Result.vue';
	import Question from '../components/Question.vue';
	import QuizHeader from '../components/QuizHeader.vue';
	import quizData from '../data/quizes.json';

	const route = useRoute();

	const quizId = parseInt(route.params.id);
	const quiz = quizData.find((item) => {
		return item.id === quizId;
	});
	const currentQuestionIndex = ref(0);
	const numberOfCorrectAnswers = ref(0);
	const showResults = ref(false);

	const questionStatus = computed(
		() =>
			(questionStatus.value = `${currentQuestionIndex.value}/${quiz.questions.length}`),
	);

	const barPercentage = computed(
		() => `${(currentQuestionIndex.value / quiz.questions.length) * 100}%`,
	);

	const onOptionSelected = (isCorrect) => {
		if (isCorrect) {
			numberOfCorrectAnswers.value++;
		}
		if (quiz.questions.length - 1 === currentQuestionIndex.value) {
			showResults.value = true;
		}
		currentQuestionIndex.value++;
	};
</script>

<template>
	<div class="container mx-auto px-4">
		<QuizHeader
			:questionStatus="questionStatus"
			:barPercentage="barPercentage" />
		<div>
			<Question
				v-if="!showResults"
				:question="quiz.questions[currentQuestionIndex]"
				@selectOption="onOptionSelected" />
			<Result
				v-else
				:quizQuestionLength="quiz.questions.length"
				:numOfCorrectAnswers="numberOfCorrectAnswers" />
		</div>
	</div>
</template>
