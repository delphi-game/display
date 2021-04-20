<template>
  <div class="container" :style="{ fontSize: system.font_size }">
    <div class="title">Team <b> {{ winners.name.toUpperCase() }} </b> Won!</div>
    <svg
      viewBox="0 0 384 9"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      xmlns:xlink="http://www.w3.org/1999/xlink"
      xml:space="preserve"
      xmlns:serif="http://www.serif.com/"
      style="fill-rule:evenodd;clip-rule:evenodd;stroke-linejoin:round;stroke-miterlimit:2;"
    >
      <g transform="matrix(1,0,0,1,-6546.11,-7868.67)">
        <g transform="matrix(1,0,0,1,-5.32473,6194.35)">
          <g transform="matrix(1,0,0,1,7.16268,-3600.99)">
            <path
              d="M6548.77,5284.31C6548.77,5284.31 6574.13,5283.93 6611.64,5283.66C6620.06,5283.6 6629.09,5283.54 6638.59,5283.56C6665.88,5283.62 6696.99,5284.22 6728.4,5284.29C6737.98,5284.31 6747.6,5284.27 6757.14,5284.19C6780.43,5284 6803.26,5283.49 6824.2,5283.36C6832.51,5283.3 6840.53,5283.3 6848.15,5283.34C6892.14,5283.61 6922.99,5284.31 6922.99,5284.31C6925.47,5284.31 6927.49,5282.3 6927.49,5279.81C6927.49,5277.33 6925.47,5275.31 6922.99,5275.31C6922.99,5275.31 6892.14,5276.01 6848.15,5276.28C6840.53,5276.33 6832.51,5276.32 6824.2,5276.27C6803.26,5276.13 6780.43,5275.62 6757.14,5275.43C6747.6,5275.36 6737.98,5275.31 6728.4,5275.33C6696.99,5275.4 6665.88,5276 6638.59,5276.06C6629.09,5276.08 6620.06,5276.02 6611.64,5275.96C6574.13,5275.7 6548.77,5275.31 6548.77,5275.31C6546.29,5275.31 6544.27,5277.33 6544.27,5279.81C6544.27,5282.3 6546.29,5284.31 6548.77,5284.31Z"
            />
          </g>
        </g>
      </g>
    </svg>
    <div class="body" v-html="winningPlayers"></div>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
 computed: {
   winningPlayers() {
     let players = ""
     this.winners.players.forEach((player, index) => {
       if (index != this.winners.players.length - 1) {
         players = players + player + '<br />'
       } else {
         players = players + player
       }
     })
     return players
   },
   ...mapState(["winners", "system"]),
 }
}
</script>

<style scoped>
div.container {
  position: absolute;
  top: 32%;
  left: 23%;
  width: 40%;
  height: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}

svg {
  width: 70%;
  height: 3%;
  margin-bottom: 3%;
}

.title {
  font-size: 150%;
  width: 100%;
  height: 20%;
  text-align: center;
  margin-bottom: -2%;
}

.body {
  font-size: 130%;
  width: 100%;
  height: 50%;
  text-align: center;
}
</style>
