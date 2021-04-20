<template>
  <div id="app" :style="{ backgroundColor: stage.colors.bg }">
    <!-- Vertical and horizontal guide lines -->
    <!--<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" class="guide">
      <line x1="0" y1="50" x2="100" y2="50" stroke="red" />
    </svg>
    <svg
      viewBox="0 0 100 100"
      xmlns="http://www.w3.org/2000/svg"
      class="guide"
      style="transform:rotate(90deg)"
    >
      <line x1="0" y1="50" x2="100" y2="50" stroke="cyan" />
    </svg>-->

    <!-- The "screen" div is the guaranteed area to be visible on the display -->
    <div class="screen" ref="screen">
      <transition-group name="fade" mode="out-in">
        <!-- Each element is absolutely positioned and toggled depeneding on current stage -->
        <TutorialOrButton
          v-if="show('TutorialOrButton')"
          :key="uniqueId('base-element-')"
          class="front"
        />
        <Links
          v-if="show('Links')"
          :key="uniqueId('base-element-')"
          class="front"
        />
        <DelphiTitle
          v-if="show('DelphiTitle')"
          :key="uniqueId('base-element-')"
          class="front"
        />
        <RoundTitle
          v-if="show('RoundTitle')"
          :key="uniqueId('base-element-')"
          class="front"
        />
        <ThinkerProgress
          v-if="show('ThinkerProgress')"
          :key="uniqueId('base-element-')"
          class="front"
        />
        <Scoreboard
          v-if="show('Scoreboard')"
          :key="uniqueId('base-element-')"
          class="front"
        />
        <CardPresentation
          v-if="show('CardPresentation')"
          :key="uniqueId('base-element-')"
          class="front"
        />
        <ClueList
          v-if="show('ClueList')"
          :key="uniqueId('base-element-')"
          class="front"
        />
        <Grid
          v-if="show('Grid')"
          :key="uniqueId('base-element-')"
          class="front"
        />
        <GameOverTitle
          v-if="show('GameOverTitle')"
          :key="uniqueId('base-element-')"
          class="front"
        />
        <TurnTitle
          v-if="show('TurnTitle')"
          :key="uniqueId('base-element-')"
          class="front"
        />
        <ClueTitle
          v-if="show('ClueTitle')"
          :key="uniqueId('base-element-')"
          class="front"
        />
        <WinnerList
          v-if="show('WinnerList')"
          :key="uniqueId('base-element-')"
          class="front"
        />
        <NextRoomCountdown
          v-if="show('NextRoomCountdown')"
          :key="uniqueId('base-element-')"
          class="front"
        />
        <PlayAgainTitle
          v-if="show('PlayAgainTitle')"
          :key="uniqueId('base-element-')"
          class="front"
        />

        <Crystal
          v-if="show('Crystal')"
          :key="uniqueId('base-element-')"
          class="mid"
        />
        <Statue
          v-if="show('Statue')"
          :key="uniqueId('base-element-')"
          class="mid"
        />
        <Medusa
          v-if="show('Medusa')"
          :key="uniqueId('base-element-')"
          class="mid"
        />

        <Vines
          v-if="show('Vines')"
          :key="uniqueId('base-element-')"
          class="back"
        />
        <Clouds
          v-if="show('Clouds')"
          :key="uniqueId('base-element-')"
          class="back"
        />
        <Sun v-if="show('Sun')" :key="uniqueId('base-element-')" class="back" />
        <Snakes
          v-if="show('Snakes')"
          :key="uniqueId('base-element-')"
          class="back"
        />
        <Stars
          v-if="show('Stars')"
          :key="uniqueId('base-element-')"
          class="back"
        />
      </transition-group>

      <Border />
      <Exit v-if="system.isFullscreen" />
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
import uniqueId from "lodash.uniqueid";

import Border from "./components/Border.vue";
import Vines from "./components/Vines.vue";
import DelphiTitle from "./components/DelphiTitle.vue";
import Crystal from "./components/Crystal.vue";
import Links from "./components/Links.vue";
import Sun from "./components/Sun.vue";
import Clouds from "./components/Clouds.vue";
import RoundTitle from "./components/RoundTitle.vue";
import Scoreboard from "./components/Scoreboard.vue";
import ThinkerProgress from "./components/ThinkerProgress.vue";
import Statue from "./components/Statue.vue";
import GameOverTitle from "./components/GameOverTitle.vue";
import NextRoomCountdown from "./components/NextRoomCountdown.vue";
import PlayAgainTitle from "./components/PlayAgainTitle.vue";
import Medusa from "./components/Medusa.vue";
import Snakes from "./components/Snakes.vue";
import WinnerList from "./components/WinnerList.vue";
import Stars from "./components/Stars.vue";
import CardPresentation from "./components/CardPresentation.vue";
import TurnTitle from "./components/TurnTitle.vue";
import TutorialOrButton from "./components/TutorialOrButton.vue";
import Exit from "./components/Exit.vue";
import Grid from "./components/Grid.vue";
import ClueTitle from "./components/ClueTitle.vue";
import ClueList from "./components/ClueList.vue";

export default {
  name: "App",
  components: {
    Border,
    Vines,
    DelphiTitle,
    Crystal,
    Links,
    Sun,
    Clouds,
    RoundTitle,
    Scoreboard,
    ThinkerProgress,
    Statue,
    GameOverTitle,
    NextRoomCountdown,
    PlayAgainTitle,
    Medusa,
    Snakes,
    WinnerList,
    Stars,
    CardPresentation,
    TurnTitle,
    TutorialOrButton,
    Exit,
    Grid,
    ClueTitle,
    ClueList,
  },
  beforeCreate() {
    /*
    this.$store.commit("setTeam", { id: "team-1", color: "magenta", score: 2 });
    this.$store.commit("setTeam", { id: "team-2", color: "yellow", score: 3 });
    //this.$store.commit('setTeam', { id: 'team-3', color: 'orange', score: 5 })
    //this.$store.commit('setTeam', { id: 'team-4', color: 'blue', score: 0 })
    this.$store.commit("setState", { team_id: "team-2", clue: "Purple (2)" });ÎÎ
    */

    this.$store.commit("setStage", "landing");
    //this.$store.commit("setCode", "CODE");
    //this.$store.commit("resetReadiness");

    /*
    this.$store.dispatch("queueThrough", [
      {
        team: "red",
        clue: { word: "Animal", player: "Joe" },
        guess: { word: "Zoo", player: "Joe" },
        correct: true,
        color: "red",
      },
    ]);
    */

    /*
≈≈
    this.$store.commit("newTeam", { team: "yellow", remaining: 9 });

    setTimeout(() => {
      this.$store.commit("readyTeam", "yellow");
    }, 1000);

    setTimeout(() => {
      this.$store.commit("newTeam", { team: "green", remaining: 1 });
      this.$store.commit("setRound", 4);
    }, 3000);

    setTimeout(() => {
      this.$store.commit("teamRemaining", { team: "green", remaining: 5 });
      this.$store.commit("teamRemaining", { team: "yellow", remaining: 1 });
      this.$store.commit("teamRemaining", { team: "red", remaining: 10 });
    }, 5000);

    */

    this.$store.commit("player", {
      action: "add",
      name: "joe",
      team: "blue",
    });

    /*
    Object.keys(require("./assets/stages.json")).forEach((stage, index) => {
      if (stage != "landing") {
        setTimeout(() => {
          this.$store.commit("setStage", stage);
        }, 3000 * index);
      }
    });
    */

    //this.$store.commit("setStage", "landing");
  },
  mounted() {
    this.updateFontSize();

    window.onresize = () => {
      this.updateFontSize();
    };

    window.addEventListener("fullscreenchange", () => {
      if (this.system.isFullscreen) {
        this.$store.commit("setFullscreen", false);
      }
    });
  },
  methods: {
    show(element) {
      if (this.stage.elements.includes(element)) {
        return true;
      } else {
        return false;
      }
    },
    uniqueId(prefix) {
      return uniqueId(prefix);
    },
    updateFontSize() {
      const font_size = this.$refs.screen.clientWidth / 50 + "px";
      this.$store.commit("setFontSize", font_size);
    },
  },
  computed: {
    ...mapState(["stage", "system"]),
  },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Comic+Neue:wght@400;700&display=swap");

@font-face {
  font-family: "ChunkFive";
  font-style: normal;
  src: url("./assets/fonts/Chunk.woff2") format("woff2");
}

html,
body,
#app {
  width: 100%;
  height: 100%;
  margin: 0;
  padding: 0;
  overflow: hidden;
}

body {
  background-color: black;
  display: flex;
  justify-content: center;
  align-items: center;
}

#app {
  font-family: "Comic Neue", "Comic Sans", cursive;
  transition: background-color 2s ease-in-out, opacity 1s ease-in;
  background-color: black;
}

.screen {
  width: 100vw;
  height: 56.25vw;
  max-height: 100vh;
  max-width: 177.78vh;

  margin: auto;
  position: absolute;
  top: 0;
  bottom: 0; /* vertical center */
  left: 0;
  right: 0; /* horizontal center */
}

.front {
  z-index: 30;
}

.mid {
  z-index: 20;
}

.back {
  z-index: 10;
}

.fade-enter-active:not(.no-transition),
.fade-leave-active:not(.no-transition) {
  transition: transform 1s, opacity 0.5s !important;
}

.fade-leave-to,
.fade-enter {
  opacity: 0;
}

.fade-enter:not(.no-transition) {
  transform: translateX(-100vw) !important;
}

.fade-leave-to:not(.no-transition) {
  transform: translateX(100vw) !important;
}

.fade-move:not(.no-transition) {
  transition: transform 1s !important;
}

.title-font {
  font-family: "ChunkFive", "Times New Roman", Times, serif;
  letter-spacing: 0.03em;
}

.fixed-holder {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}

.guide {
  margin: auto;
  position: absolute;
  top: 0;
  bottom: 0; /* vertical center */
  left: 0;
  right: 0; /* horizontal center */

  width: 100%;
  height: 100%;

  z-index: 200;

  stroke-width: 0.3px;

  transform: scale(2);

  pointer-events: none;
}

.hidden {
  opacity: 0;
}
</style>
