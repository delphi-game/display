<template>
  <div :style="{ fontSize: system.font_size }">
    <span class="title-font">GAME OVER</span>
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
  top: 23%;
  left: 27%;
  font-weight: bold;
}

span {
  font-size: 220%;
}
</style>
