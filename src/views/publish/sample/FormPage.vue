<template>
	<ep-button label="Primary 버튼" format="primary" :disabled="false" :readonly="false" @click="buttonClicked" :size="4"></ep-button>
	<ep-form-input label="Form Input Test" size="4"></ep-form-input>
	<!-- <div class="form-row">
		<ep-button label="Primary 버튼" format="primary" @click="buttonClicked"></ep-button>
		<ep-button label="Secondary 버튼" format="secondary"></ep-button>
		<ep-button label="Delete 버튼" format="delete"></ep-button>
		<ep-button label="" format="primary" icon="pencil"></ep-button>
		<ep-button label="" format="secondary" icon="bin"></ep-button>
		<ep-button label="" format="secondary" icon="loop2"></ep-button>
		<ep-button label="버튼-disabled" format="disabled"></ep-button>
	</div>
	<div class="form-row">
		<ep-label size="4" label="라벨테스트"></ep-label>
		<ep-option-button label="액셀다운로드" format="secondary" icon="excel" :options="codes.options" @selected="optionSelected"></ep-option-button>
	</div> -->
	<!-- <div class="form-row">
		<ep-label size="4" label="Form Input 테스트" placeholder="readonly"></ep-label>
		<ep-form-input label="텍스트 입력 테스트"></ep-form-input>
		<ep-form-input label="텍스트 입력 테스트" type="number" label="단위포함(숫자형)" maxlength="2" placeholder="단위보이기" unit="Km"></ep-form-input>
		<ep-form-input label="텍스트 입력 테스트" unit="km" type="number" align="center"></ep-form-input>
		<ep-form-input label="readonly" readonly="true" placeholder="readonly" disabled="true"></ep-form-input>
	</div>
	<div class="form-row">
		<ep-form-input-button label="차량번호" btnIcon="search" btnFormat="primary"></ep-form-input-button>
	</div> -->
</template>
<script>
const ROUTE_PATH = "/publish/sample/FormPage";
export default {
	name: ROUTE_PATH,
	data() {
		return {
			//menu: this.$menusTotal.getRouteMenu(ROUTE_PATH)
			codes: {
				options: [
					{ text: "전체 데이터 다운", value: "request-all" },
					{ text: "요청 데이터 다운", value: "request-all" },
					{ text: "요청 데이터 조회", value: "request-popup" },
					{ text: "현 데이터 다운", value: "request-grid" },
				],
			},
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
	},
	mounted() {
		console.log(ROUTE_PATH);
	},
};
</script>
