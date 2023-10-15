<template>
	<div class="form-control" :class="onSizeRequired">
		<div v-if="hasLabel" class="form-control-label">
			<span>{{ label }}</span>
			<slot></slot>
		</div>
		<div class="form-control-container">
			<form-input
				:label="label"
				:type="type"
				v-model="inputValue"
				:placeholder="placeholder"
				:required="required"
				:maxlength="maxlength"
				:disabled="disabled"
				:readonly="readonly"
				:icon="icon"
				:unit="unitValue"
				:validator="validator"
				:panel="panel"
				:align="align"
				@icon-clicked="iconClicked"
			></form-input>
		</div>
	</div>
</template>

<script>
import FormInput from "@/components/contents/FormInput";
export default {
	props: ["label", "size", "type", "modelValue", "placeholder", "required", "disabled", "readonly", "icon", "unit", "maxlength", "validator", "panel", "align"],
	emits: ["update:modelValue", "iconClicked", "enterKeyup", "tabKeyup"],
	components: { FormInput },
	data() {
		return {
			inputValue: "",
			unitValue: "",
			hasError: false,
		};
	},
	created() {
		this.inputValue = this.modelValue != null ? this.modelValue : "";
		this.unitValue = this.unit;
	},

	// watch: {
	// 	inputValue() {
	// 		this.$emit("update:modelValue", this.inputValue);
	// 	},
	// 	modelValue() {
	// 		this.inputValue = this.modelValue;
	// 	},
	// 	unit() {
	// 		this.unitValue = this.unit;
	// 	},
	// },
	computed: {
		onSizeRequired() {
			let size = this.size < 0 && this.size <= 4 ? this.size : 1;
			return "col-" + 3 * size + this.required ? "required" : "";
		},

		hasLabel() {
			return this.label == null || this.label == "" ? false : true;
		},
	},

	methods: {
		iconClicked() {
			this.$emit("iconClicked");
		},
		// enterKeyup() {
		// 	this.$emit("enterKeyup");
		// },
		// keyup(value) {
		// 	this.$emit("keyup", value);
		// },
		// tabKeyup() {
		// 	this.$emit("tabKeyup");
		// },
	},

	mounted() {
		console.log(this.type, this.unit);
	},
};
</script>
