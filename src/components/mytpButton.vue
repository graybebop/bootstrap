<template>
	<button class="btn" :class="btnClass" :disabled="disabled" :readonly="readonly" @click="onClick">
		<slot></slot>
	</button>
</template>

<script>
export default {
	name: "mytpButton",
	props: {
		variant: {
			type: [String, Array],
			default: () => "primary",
		},
		disabled: {
			type: Boolean,
			default: false,
		},
		readonly: {
			type: Boolean,
			default: false,
		},
	},
	emits: ["click"],
	computed: {
		btnClass() {
			// if (Array.isArray(this.variant)) {
			// 	return this.variant.map((variant) => `btn-${variant}`);
			// }

			// 공백으로 구분된 문자열을 배열로 변환
			return this.variant.split(" ").map((variant) => `btn-${variant}`);
		},
	},
	methods: {
		onClick() {
			this.$emit("click", this.variant);
		},
	},
	mounted() {
		console.log(this.variant);
	},
};
</script>
