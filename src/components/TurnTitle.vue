<template>
  <div :style="{ fontSize: system.font_size }">
    <span class="title-font" :class="{ hidden: !checking.shown }">
      {{ teamName }}
    </span>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  computed: {
    ...mapState(["system", "checking"]),
    teamName() {
      if (this.checking.presenting.team) {
        return "Team " + this.checking.presenting.team.toUpperCase();
      } else {
        return "";
      }
    },
  },
};
</script>

<style scoped>
div {
  position: absolute;
  top: 22%;
  left: 0%;
  width: 100%;
  text-align: center;
}

span {
  font-size: 250%;
  transition: opacity 0.5s ease-in-out;
}
</style>
