<template>
  <div class="leaderboard" :style="{ fontSize: system.font_size }">
    <div class="title title-font">Score Board</div>
    <div>
      <transition-group name="slide">
        <div
          class="team-score"
          v-for="team in teamsArray"
          :key="team.name"
          :style="{ backgroundColor: teamColor(team.name) }"
        >
          <div class="rank">#{{ team.rank }}</div>
          <div class="team">Team {{ capitalize(team.name) }}</div>
          <div class="cards-left">{{ team.remaining }} cards left</div>
        </div>
      </transition-group>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
import Colors from "../assets/colors.json";

export default {
  props: {},
  data() {
    return {};
  },
  methods: {
    capitalize(s) {
      if (typeof s !== "string") return "";
      return s.charAt(0).toUpperCase() + s.slice(1);
    },
    teamColor(name) {
      return Colors[name].light;
    },
  },
  computed: {
    teamsArray() {
      let teamsArray = [];
      Object.keys(this.teams).forEach((name) => {
        const teamObject = { name, ...this.teams[name] };
        teamsArray.push(teamObject);
      });

      teamsArray.sort((a, b) => a.remaining - b.remaining);

      let last_rank = 0;

      teamsArray.forEach((team, index) => {
        if (index != 0 && team.remaining == teamsArray[index - 1].remaining) {
          teamsArray[index].rank = last_rank;
        } else {
          teamsArray[index].rank = last_rank + 1;
        }
        last_rank = teamsArray[index].rank;
      });

      return teamsArray;
    },
    ...mapState(["teams", "system"]),
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
  border-radius: 0.6em;
  padding: 0.14em 0.5em;
  font-size: 75%;
  border: 0.23em solid black;
}

.team-score > div {
  display: flex;
  align-items: center;
}

.rank {
  font-family: "ChunkFive";
  transform: translateY(0.12em);
  font-size: 95%;
}

.cards-left {
  font-size: 80%;
  justify-content: flex-end;
}

.slide-move {
  transition: transform 1s;
}
</style>
