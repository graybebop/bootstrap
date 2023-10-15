<template>
  <div v-if="isVisible" class="form-row">
    <slot></slot>
  </div>
</template>

<script>
const MIN_TOGGLE = 3;

export default {
  props: ["row"],
  emits: [],
  data() {
    return {
      isVisible: false,
    };
  },
  mounted() {
    if (this.row >= MIN_TOGGLE) {
      console.log("3위");
    } else {
      this.inVisible = true;
    }
  },

  methods: {
    toggle() {
      this.inVisible = !this.isVisible;
    },
  },
};
</script>
