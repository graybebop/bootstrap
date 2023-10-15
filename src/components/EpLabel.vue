<template>
	<div class="form-contrrol" :class="onSizeRequired">
		<div class="form-control-label">
			<span>{{ label }}</span>
		</div>
	</div>
</template>

<script>
export default {
	props: ["label", "required", "size"],
	emits: [],

	data() {
		return {};
	},
	computed: {
		onSizeRequired() {
			const cols = ["col-1 ", "col-1 ", "col-2 ", "col-3 ", "col-4 "];
			let size = 0;
			if (this.size != null && this.size >= 0 && this.size <= 4) {
				size = this.size;
			}

			return cols[size] + (this.required ? "required" : "");
		},
	},
	mounted() {
		console.log(this.label, this.size, this.required);
	},
};
</script>
