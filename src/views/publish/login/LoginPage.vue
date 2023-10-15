<template>
  <div>로그인 페이지 입니다.</div>
</template>

<script>
const ROUTE_PATH = "/publish/login/LoginPage";
export default {
  name: ROUTE_PATH,
  // data() {
  //   return {
  //     menu: this.$menusTotal.getRouteMenu(ROUTE_PATH)
  //   };
  // },
  mounted() {
    console.log(ROUTE_PATH);
  },
};
</script>
