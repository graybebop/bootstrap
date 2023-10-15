<template>
	<div class="custom-component">
		<slot name="header"></slot>

		<!-- 나머지 컨텐츠 -->

		<slot></slot>

		<!-- 푸터 영역 -->
		<div class="footer">
			<slot name="footer" :submit="handleSubmit"></slot>
		</div>
	</div>
</template>

<script>
export default {
	methods: {
		handleSubmit() {
			console.log("제출 버튼이 클릭되었습니다.");
		},
	},
	computed: {
		onOff() {
			return "aaaa";
		},
	},

	cereated() {
		console.log(this.onOff);
	},
};
</script>

<style scoped>
.custom-component {
	border: solid 1px gray;
	padding: 20px;
}
.footer {
	margin-top: 10px;
}
</style>
