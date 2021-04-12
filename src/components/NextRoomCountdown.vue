<template>
  <div>Creating new room in... {{ countdown }}</div>
</template>

<script>
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
};
</script>

<style scoped>
div {
  position: absolute;
  bottom: 1%;
  right: 1.2%;
  font-weight: bold;
  font-size: 110%;
}
</style>
