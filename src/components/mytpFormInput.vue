<template>
	<div>
		<label for="exampleFormControlInput1" class="form-label">
			{{ label !== null ? label : "" }}
		</label>
		<input :type="type" :readonly="readonly" class="form-control" :class="inputClass" :placeholder="placeholder" :value="modelValue" @input="updateValue" :disabled="isDisable" />
	</div>
</template>

<script>
export default {
	name: "mytpFormInput",
	emits: ["update:modelValue"],
	props: {
		label: {
			type: String,
			default: () => "",
		},
		type: {
			type: [String, Array],
			default: () => "text",
		},
		variant: {
			type: [String, Array],
			default: () => "text",
		},
		disabled: {
			type: Boolean,
			default: false,
		},
		readonly: {
			type: Boolean,
			default: false,
		},
		placeholder: {
			type: String,
			default: () => "기본값 입력",
		},

		modelValue: {
			type: [String, Number],
			default: () => "기본값 입력",
		},
	},
	data() {
		return {
			//isDisable: false,
		};
	},
	computed: {
		inputClass() {
			let classes = [];

			classes = this.variant.split(" ").map((variant) => `${variant}`);

			// disabled prop이 true라면 'disabled' 클래스를 추가합니다.
			if (this.disabled) {
				classes.push("disabled");
			}

			return classes;
		},

		isDisable() {
			return this.disabled !== false ? true : false;
		},
	},

	methods: {
		updateValue($event) {
			this.$emit("update:modelValue", $event.target.value);
		},
		// isDisable() {
		// 	console.log(this.disabled);
		// 	//this.disabled === true ? true : false;
		// },
	},

	// created() {
	// 	this.isDisable();
	// },
};
</script>
