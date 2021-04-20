<template>
  <div :style="{ fontSize: system.font_size }"><span class="title-font" >Round {{ round }}</span></div>
</template>

<script>
import { mapState } from "vuex";

export default {
    computed: {
        ...mapState(["round", "system"])
    }
}
</script>

<style scoped>
div {
  position: absolute;
  top: 25%;
  left: 30%;
  font-weight: bold;
}

span {
  font-size: 300%;
}
</style>