<template>
  <div class="grid" :style="{ ...gridCss  }">
    <Card v-for="(card, id) in cards" :key="id" :word="card.word" :id="id" :blinking="true" color="blue" />
  </div>
</template>

<script>
import Card from "./Card.vue";

export default {
  components: {
    Card,
  },
  data() {
    return {
      cards: {
        "card-1": { word: "bond", type: -1 },
        "card-2": { word: "vacuum", type: -1 },
        "card-3": { word: "bug", type: -1 },
        "card-4": { word: "bank", type: -1 },
        "card-5": { word: "dance", type: -1 },
        "card-6": { word: "copper", type: -1 },
        "card-7": { word: "model", type: -1 },
        "card-8": { word: "maple", type: -1 },
        "card-9": { word: "alien", type: -1 },
        "card-10": { word: "server", type: -1 },
        "card-11": { word: "bill", type: -1 },
        "card-12": { word: "fair", type: -1 },
        "card-13": { word: "bat", type: -1 },
        "card-14": { word: "olympus", type: -1 },
        "card-15": { word: "post", type: -1 },
        "card-16": { word: "sock", type: -1 },
        "card-17": { word: "beat", type: -1 },
        "card-18": { word: "spell", type: -1 },
        "card-19": { word: "game", type: -1 },
        "card-20": { word: "buffalo", type: 3 },
        "card-21": { word: "note", type: -1 },
        "card-22": { word: "plate", type: -1 },
        "card-23": { word: "carrot", type: -1 },
        "card-24": { word: "court", type: -1 },
        "card-25": { word: "dragon", type: -1 },
      },
    };
  },
  computed: {
    gridCss() {
      const gridCss = {}
      gridCss["grid-template-rows"] = "1fr ".repeat(5).trim()
      gridCss["grid-template-columns"] = "1fr ".repeat(5).trim()
      return gridCss
    }
  },
};
</script>

<style scoped>
.grid {
  position: absolute;
  top: 17%;
  right: 10%;
  width: 64%;
  height: 67%;
  display: grid;
  gap: 1em;
}
</style>
