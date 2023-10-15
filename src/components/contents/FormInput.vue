<template>
	<div class="form-control-content" :class="onReadonlyDisabledError">
		<div class="form-control-input">
			<input :type="type" :placeholder="myPlaceholder" v-model="inputValue" :disabled="disabled" :readonly="readonly" :maxlength="maxlength" :style="onAlign" />
			<div v-if="hasIcon" class="form-control-button">
				<button class="button" @click.prevent="iconClicked()">
					<i class="icon-search"></i>
				</button>
			</div>
			<span v-if="hasUnit" class="form-control-unit">{{ unitValue }}</span>
		</div>
		<div v-if="false" class="form-control-validation">
			<span>{{ errorMessage }}</span>
		</div>
	</div>
</template>

<script>
export default {
	props: ["label", "type", "modelValue", "placeholder", "required", "disabled", "readonly", "icon", "unit", "maxlength", "validator", "panel", "align"],
	data() {
		return {
			inputValue: "",
			unitValue: "",
			hasError: false,
			errorMessage: "",
			myPlaceholder: "",
		};
	},
	computed: {
		onReadonlyDisabledError() {
			let attr = [];
			if (this.readonly) {
				attr.push("readonly");
			}
			if (this.disabled) {
				attr.push("disabled");
			}

			return attr.join("  ");
		},

		onAlign() {
			let style = "text-align:";
			if (this.align == "center") style += "center";
			else if (this.align == "right") style += "right";
			else style += "left";
			return style;
		},

		hasIcon() {
			return this.icon ? true : false;
		},

		hasUnit() {
			return this.unit == null || this.unit == "" ? false : true;
		},
	},

	created() {
		this.unitValue = this.unit;
		this.myPlaceholder = this.placeholder;
	},
};
</script>
