<template>
  <div class="outer">
    <div class="clue" v-for="i in 9" :key="i"></div>
  </div>
</template>

<script>
</script>

<style scoped>
.outer {
  position: absolute;
  top: 28%;
  left: 10.5%;
  width: 13.6%;
  height: 55%;

  background: red;
}
</style>