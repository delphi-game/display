<template>
  <div class="container">
    <div v-if="false">
      <h1>Welcome to Delphi!</h1>
      <p>
        This is the <b>display</b> screen that everyone playing needs to see.
        Each player will also need a <b>remote</b> device. First, the host needs
        to follow the instructions on the right using their device to open the
        room.
      </p>
    </div>
    <button v-else tabindex="0" @click="openRoom" ref="openRoomButton">
      <svg
        viewBox="0 0 562 204"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        xmlns:xlink="http://www.w3.org/1999/xlink"
        xml:space="preserve"
        xmlns:serif="http://www.serif.com/"
        style="fill-rule:evenodd;clip-rule:evenodd;stroke-linejoin:round;stroke-miterlimit:2;"
      >
        <g transform="matrix(1,0,0,1,-6239.87,-1816.83)">
          <g transform="matrix(1,0,0,1,5958.49,1332.26)">
            <g transform="matrix(0.874287,0,0,0.747676,-5165.58,-818.562)">
              <path
                d="M6863.97,1759.34C6654.42,1736.87 6445.71,1738 6237.73,1759.34C6227.63,1839.64 6227.68,1921.26 6237.73,2004.19C6444.22,2019.74 6653.03,2019.33 6863.97,2004.19C6874.31,1923.36 6876.97,1841.94 6863.97,1759.34Z"
                style="fill:rgb(253,213,142);"
              />
              <clipPath id="_clip1Button">
                <path
                  d="M6863.97,1759.34C6654.42,1736.87 6445.71,1738 6237.73,1759.34C6227.63,1839.64 6227.68,1921.26 6237.73,2004.19C6444.22,2019.74 6653.03,2019.33 6863.97,2004.19C6874.31,1923.36 6876.97,1841.94 6863.97,1759.34Z"
                />
              </clipPath>
              <g clip-path="url(#_clip1Button)">
                <g transform="matrix(1.14379,0,0,1.33748,-1352.9,866.904)">
                  <text
                    x="6733.27px"
                    y="778.845px"
                    style="font-family:'ComicNeue-Bold', 'Comic Neue';font-weight:700;font-size:63px;"
                  >
                    OPEN ROOM
                  </text>
                </g>
              </g>
              <path
                d="M6863.97,1759.34C6654.42,1736.87 6445.71,1738 6237.73,1759.34C6227.63,1839.64 6227.68,1921.26 6237.73,2004.19C6444.22,2019.74 6653.03,2019.33 6863.97,2004.19C6874.31,1923.36 6876.97,1841.94 6863.97,1759.34ZM6848.2,1780.05C6853.17,1814.03 6855.52,1847.84 6855.69,1881.55C6855.86,1916.74 6853.74,1951.78 6850.07,1986.74C6823.15,1988.56 6796.27,1990.25 6769.41,1991.33C6696.27,1994.29 6623.41,1994.24 6550.83,1993.03C6488.24,1991.98 6425.9,1989.03 6363.73,1985.84C6327.95,1984.01 6292.23,1982.3 6256.58,1979.95C6252.55,1947.04 6250.15,1914.31 6249.41,1881.73C6248.62,1846.67 6249.65,1811.82 6252.66,1777.15C6273.04,1774.95 6293.42,1772.78 6313.85,1771.54C6351.28,1769.26 6388.72,1769.34 6426.2,1769.18C6469.85,1768.99 6513.42,1770.74 6557.11,1771.33C6587.6,1771.74 6618.11,1771.32 6648.65,1771.73C6715.06,1772.64 6781.55,1774.98 6848.2,1780.05L6848.2,1780.05Z"
              />
            </g>
          </g>
        </g>
      </svg>
    </button>
  </div>
</template>

<script>
import { mapState } from "vuex";
import soundManager from "../sound/soundManager";

export default {
  computed: {
    ...mapState(["round"]),
  },
  methods: {
    openRoom() {
      this.$refs.openRoomButton.classList.add("active");
      setTimeout(() => {
        this.$refs.openRoomButton.classList.remove("active");
        setTimeout(() => {
          soundManager.startMusic();
          var docElm = document.getElementById("app");
          if (docElm.requestFullscreen) {
            docElm.requestFullscreen();
            setTimeout(() => {
              this.$store.commit("setFullscreen", true);
            }, 800);
          } else if (docElm.msRequestFullscreen) {
            docElm = document.body; //overwrite the element (for IE)
            docElm.msRequestFullscreen();
          } else if (docElm.mozRequestFullScreen) {
            docElm.mozRequestFullScreen();
          } else if (docElm.webkitRequestFullScreen) {
            docElm.webkitRequestFullScreen();
          }
          setTimeout(() => {
            this.$store.commit("setStage", "join");
          }, 800);
        }, 40);
      }, 100);
    },
  },
};
</script>

<style scoped>
div.container {
  position: absolute;
  top: 0;
  bottom: 0;
  margin: 0 auto;
  left: 15%;
  width: 30%;
  display: flex;
  justify-content: center;
  flex-direction: column;
}

h1,
p {
  margin: 0;
  padding: 0;
}

h1 {
  font-size: 140%;
  margin-bottom: 4%;
  font-weight: bold;
}

p {
  font-size: 80%;
}

button {
  padding: 0;
  margin: 0;
  border: 0;
  background: none;
  z-index: 50;
  cursor: pointer;
}

button:hover,
button:focus {
  transform: scale(1.1);
}

button:focus {
  outline: 0.7em #05510073 solid;
}

button.active,
button:active {
  transform: scale(0.95);
  filter: brightness(0.9);
}
</style>
