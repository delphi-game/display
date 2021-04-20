<template>
  <div :style="{ fontSize: system.font_size }">
    <span class="title-font">PLAY AGAIN</span>
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
  left: 0%;
  font-weight: bold;
  width: 100%;
  text-align: center;
}

span {
  font-size: 250%;
}
</style>