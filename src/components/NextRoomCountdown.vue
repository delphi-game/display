<template>
  <div :style="{ fontSize: system.font_size }"><span>Creating new room in... {{ countdown }}</span></div>
</template>

<script>
import { mapState } from "vuex";

export default {
  data() {
    return {
      countdown: 30,
    };
  },
  mounted() {
    setInterval(() => {
      if (this.countdown > 0) {
        this.countdown--;
      }
    }, 1000);
  },
  computed: {
    ...mapState(["system"])
  }
};
</script>

<style scoped>
div {
  position: absolute;
  bottom: 1%;
  right: 1.2%;
  font-weight: bold;
}

span {
  font-size: 110%;
}
</style>
