import Vue from 'vue'
import App from './App.vue'

import Vuex from 'vuex'


Vue.use(Vuex)

import Colors from './assets/colors.json'
import Stages from "./assets/stages.json";

const store = new Vuex.Store({
  state: {
    stage: {},
    code: '',
    round: 1,
    teams: {
      "red": {
        remaining: 4,
        ready: true,
      },
      "blue": {
        remaining: 5,
        ready: true,
      },
    },
    clues: {
      "clue-1": {
        colors: Colors["red"],
        text: "Clone",
        remaining: 4,
        count: 9,
      },
    },
    players: [],
    winners: {
      name: "red",
      players: ["Grey", "Brady", "Tom", "Simone"]
    },
    checking:
    {
      presenting: {},
      shown: false,
      checked: false,
    },
    system: {
      isFullscreen: false,
      font_size: '20px'
    },
  },
  mutations: {
    setStage(state, name) {
      state.stage = Stages[name]
      document.title = "Delphi ⁃ " + Stages[name].name
    },
    setFullscreen(state, bool) {
      state.system.isFullscreen = bool
    },
    setRound(state, round) {
      state.round = round
    },
    resetReadiness(state) {
      for (const team in state.teams) {
        state.teams[team].ready = false
      }
    },
    readyTeam(state, team) {
      state.teams[team].ready = true
    },
    teamRemaining(state, { team, remaining }) {
      state.teams[team].remaining = remaining
    },
    newTeam(state, { team, remaining }) {
      Vue.set(state.teams, team, {
        remaining: remaining,
        ready: false,
      })
    },
    player(state, { action, name, team }) {
      if (action == "add") {
        state.players.push({ name, team })
      } else {
        const index = state.players.indexOf({ name, team })
        state.players.splice(index, 1)
      }
    },
    setCode(state, code) {
      state.code = code
    },
    setFontSize(state, font_size) {
      state.system.font_size = font_size
    },
    setPresenting(state, comparison) {
      state.checking.presenting = comparison
    },
    togglePresenting(state) {
      state.checking.shown = !state.checking.shown
    },
    toggleChecked(state) {
      state.checking.checked = !state.checking.checked
    },
  },
  actions: {
    queueThrough({ commit, state }, queue) {
      const delay = 5000
      const reveal = 2500

      setTimeout(() => {
        let iteration = 0

        queue.forEach((comparison) => {
          setTimeout(() => {
            commit("setPresenting", comparison)
            commit("togglePresenting")
            setTimeout(() => {
              commit("toggleChecked")
            }, reveal)

            setTimeout(() => {
              commit("togglePresenting")
              setTimeout(() => {
                commit("setPresenting", {})
                commit("toggleChecked")
              }, 500)
            }, delay - 1000)
          }, delay * iteration)

          iteration++
        })

        setTimeout(() => {
          if (state.winners.name.length < 1) {
            commit("setStage", "thinking")
          } else {
            commit("setStage", "end")
          }
        }, delay * queue.length)
      }, 800)
    }
  }
})

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  store,
}).$mount('#app')
