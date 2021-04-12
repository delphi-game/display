<template>
  <div class="title-font">Round {{ round }}</div>
</template>

<script>
import { mapState } from "vuex";

export default {
    computed: {
        ...mapState(["round"])
    }
}
</script>

<style scoped>
div {
  position: absolute;
  top: 25%;
  left: 30%;
  font-weight: bold;
  font-size: 300%;
}
</style>