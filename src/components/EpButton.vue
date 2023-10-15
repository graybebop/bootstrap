<template>
	<button type="button" class="button" :class="onFormatSizeDisabled" :disabled="isDisable" :readonly="isReadonly" @click="onClick">
		<span v-if="hasLabel">{{ label }}</span>
		<i :class="onIcon"></i>
	</button>
	<!-- <input type="text" :class="onFormatSizeDisabled" :disabled="isDisable" :readonly="isReadonly" /> -->
</template>

<script>
export default {
	props: ["label", "format", "size", "icon", "disabled", "panel", "validate", "auth", "readonly"],
	emits: ["click"],
	data() {
		return {
			isDisable: false,
			isReadonly: false,
		};
	},
	created() {
		this.onDisabled();
		this.onReadonly();
	},

	computed: {
		hasLabel() {
			return this.label == null || this.label == "" ? false : true;
		},

		onFormatSizeDisabled() {
			let attr = [];
			attr.push(this.readonly);
			attr.push(this.format);
			attr.push(this.size);
			if (this.isDisable) {
				attr.push("disabled");
			}
			if (this.isReadonly) {
				attr.push("readonly");
			}
			this.size !== null ? attr.push(`col-${this.size * 3}`) : "";
			return attr.join(" ");
		},

		onIcon() {
			return this.icon != null && this.icon != "" ? "icon-" + this.icon : "";
		},
	},
	methods: {
		onDisabled() {
			if (this.disabled) {
				this.isDisable = this.disabled;
			}
		},

		onReadonly() {
			if (this.readonly) {
				this.isReadonly = this.readonly;
			}
		},

		onClick() {
			console.log("emit에 의한 클릭까지 들어간다 ; ");
			this.$emit("click", "자식에 의한 클릭이 변수로 전달된다.");
		},
	},
	mounted() {
		console.log("size : ", this.size);
	},
};
</script>
