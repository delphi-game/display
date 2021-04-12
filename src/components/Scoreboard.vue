<template>
  <div class="leaderboard">
    <div class="title title-font">Score Board</div>
    <div>
      <div class="team-score" v-for="i in 9" :key="i">
        <div class="rank">#1</div>
        <div class="team">Team Red</div>
        <div class="cards-left">2 cards left</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {},
  data() {
    return {};
  },
  computed: {
    teams() {
      return this.$store.state.teams;
    },
  },
};
</script>

<style scoped>
.leaderboard {
  position: absolute;
  top: 23%;
  left: 62%;
  height: 55%;
  width: 27%;
}

.title {
  font-size: 110%;
  width: 100%;
  text-align: center;
  margin-bottom: 2%;
}

.team-score {
  margin-bottom: 0.4em;
  display: grid;
  grid-template-columns: 15% 55% 30%;
  background-color: white;
  border-radius: 0.4em;
  padding: 0.14em 0.4em;
  font-size: 75%;
}

.team-score > div {
  display: flex;
  align-items: center;
}

.rank {
  font-weight: bold;
}

.cards-left {
  font-size: 80%;
  justify-content: flex-end;
}
</style>
