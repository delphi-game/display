<template>
  <div :style="{ fontSize: system.font_size }">
    <span class="title-font">CLUES</span>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  computed: {
    ...mapState(["system"]),
  },
};
</script>

<style scoped>
div {
  position: absolute;
  top: 20%;
  left: 11.8%;
}

span {
  font-size: 160%;
}
</style>
