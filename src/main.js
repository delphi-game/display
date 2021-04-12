import Vue from 'vue'
import App from './App.vue'

import Vuex from 'vuex'


Vue.use(Vuex)

import colors from './assets/colors.json'
import Stages from "./assets/stages.json";
const store = new Vuex.Store({
  state: {
    teams: {},
    stage: {},
    code: 'XCXD',
    round: 1,
    system: {
      isFullscreen: false,
    },
  },
  mutations: {
    setTeam(state, team) {
      state.teams[team.id] = {
        name: team.color.charAt(0).toUpperCase() + team.color.slice(1),
        color: colors[team.color],
        score: team.score,
      }
    },
    setState(state, newState) {
      state.state = {
        team: newState.team_id,
        clue: (newState.clue) ? newState.clue : false,
        picked: 0,
        round: state.state.round
      }
    },
    setStage(state, name) {
      state.stage = Stages[name]
    },
    setFullscreen(state, bool) {
      state.system.isFullscreen = bool
      console.log(bool)
    }
  }
})

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  store,
}).$mount('#app')
