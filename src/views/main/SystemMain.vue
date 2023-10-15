<template>
	<header class="l-header">
		<h1>
			<router-link to="#none">
				<img src="@/assets/images/logo-skr.svg" alt="SK 렌터카" />
			</router-link>
		</h1>
		<span class="cur-title">{{ system }}</span>
		<div class="l-button">
			<div class="button-wrap">
				<ep-button label="" icon="user"></ep-button>
			</div>
		</div>
	</header>
	<RouterView />
</template>
<script>
export default {
	data() {
		return {
			system: "상품화/성능/입고/재고 관리시스템",
		};
	},
};
</script>
