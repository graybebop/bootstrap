<template>
	<div class="button-wrap">
		<button type="button" class="button" :class="onFormatSizeDisabled" :disabled="isDisable" @click.prevent="onClick">
			<span v-if="hasLabel">{{ label }}</span>
			<i :class="onIcon"></i>
		</button>
		<ul class="dropdown-menu" :class="onOff">
			<li v-for="option in options" :key="option.value" @click.prevent="onSelect(option)">
				<a href="#">{{ option.text }}</a>
			</li>
		</ul>
	</div>
</template>

<script>
export default {
	props: ["label", "options", "format", "size", "icon", "disabled", "auth"],
	emits: ["click", "selected"],
	data() {
		return {
			isDisable: false,
			isOn: false,
		};
	},
	created() {
		//this.onDisabled();
	},

	computed: {
		hasLabel() {
			return this.label == null || this.label == "" ? false : true;
		},
		onFormatSizeDisabled() {
			let attr = [];
			attr.push(this.format);
			attr.push(this.size);
			if (this.isDisable) {
				attr.push("disabled");
			}

			return attr.join(" ");
		},

		onIcon() {
			return this.icon != null && this.icon != "" ? "icon-" + this.icon : "";
		},
		onOff() {
			console.log("aaaa : ", this.isOn);
			return this.isOn ? "on" : "";
		},
	},
	methods: {
		onDisabled() {
			if (this.disabled) {
				this.isDisable = this.disabled;
			} else {
				console.log("ep-form-button");
			}
		},
		onClick() {
			if (this.isDisable) {
				return;
			} else {
				this.isOn = !this.isOn;
				console.log("button clicked ; ", this.isOn, this.onOff);
				this.$emit("click");
			}
		},

		onSelect(option) {
			this.$emit("selected", option);
			this.isOn = false;
		},
	},
	mounted() {
		console.log(this.onOff);
	},
};
</script>
