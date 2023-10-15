<template>
	<div class="container">
		<mytp-button variant="success" :disabled="false" :readonly="true" @click="buttonClicked">쓰읍</mytp-button>
		<mytp-form-input
			label="적어도"
			type="text"
			variant="fuckyou now killme"
			:disabled="true"
			:readonly="false"
			placeholder="플레이스홀더"
			v-model="text"
			@update:modelValue="handleInput"
		></mytp-form-input>
	</div>
</template>
<script>
const ROUTE_PATH = "/publish/sample/FormPage";
export default {
	name: ROUTE_PATH,
	data() {
		return {
			variant: "",
			text: "",
		};
	},

	methods: {
		buttonClicked(text) {
			//
			console.log(text);
		},

		optionSelected(option) {
			console.log(option);
		},

		handleInput(newValue) {
			this.text = newValue;
			console.log("Updated value:", this.text);
		},
	},
};
</script>
