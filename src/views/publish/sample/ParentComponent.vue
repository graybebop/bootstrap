<template>
	<custom-component>
		<template #header>
			<!-- 헤더 슬롯 내용 -->
			<h1 :class="onOff">{{ title }}</h1>
		</template>

		<template #default>
			<!-- 기본 슬롯 내용 -->
			<p>{{ content }}</p>
		</template>

		<template #footer="{ submit }">
			<!-- 푸터 슬롯 내용 -->
			<button @click="submit">제출</button>
		</template>
	</custom-component>
</template>

<script>
import CustomComponent from "./CustomComponent.vue";

export default {
	components: {
		CustomComponent,
	},
	data() {
		return {
			title: "안녕하세요!",
			content: "이것은 부모 컴포넌트의 콘텐츠입니다.",
		};
	},
	computed: {
		onOff() {
			return "aaaa";
		},
	},

	created() {
		console.log(this.onOff);
	},
};
</script>

<style scoped></style>
