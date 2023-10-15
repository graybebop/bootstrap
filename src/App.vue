<template>
  <RouterView />
</template>
<script>
export default {
  mounted() {
    document.body.querySelector("#app").classList.add("l-wrap");
  },
};
</script>
