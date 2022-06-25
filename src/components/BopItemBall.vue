<template>
  <div class="grid">
    <div :class="label">
      {{ color }}
    </div>
    <div :class="container">
      <div :class="ball">
      </div>
    </div>

  </div>
</template>

<script lang="ts">
import { Note, playSineWave } from "@/utils/sound.util";
import { defineComponent, type PropType } from "vue";

export default defineComponent({
  props: {
    color: {
      type: String,
      default: "red",
    },
    start: Boolean,
    movementDuration: {
      type: [Number, String],
      default: 2,
      validate: (n: string | number) => !isNaN(Number(n)),
    },
    playSound: {
      type: Number as PropType<Note>,
      default: Note.A4,
    },
  },
  data(): {
    timeoutId: number | null,
  } {
    return {
      timeoutId: null,
    }
  },
  methods: {
    startSoundLoop() {
      playSineWave(this.playSound);
      this.timeoutId = setTimeout(() => {
        this.startSoundLoop();
      }, Number(this.movementDuration) * 500)
    },
    stopSoundLoop() {
      if (typeof this.timeoutId !== "number") return
      clearTimeout(this.timeoutId);
    }
  },
  computed: {
    ball() {
      return this.start ? "ball ball-start" : "ball"
    },
    container() {
      return this.start ? "container container-start" : "container"
    },
    label() {
      return this.start ? "label label-start" : "label"
    },
    movementDurationSecond() {
      return `${this.movementDuration}s`
    },
    movementDurationHalfSecond() {
      return `${Number(this.movementDuration) / 2}s`
    },
  },
  updated() {
    if (this.start) this.startSoundLoop()
    else this.stopSoundLoop()
  },
  unmounted() {
    this.stopSoundLoop()
  }
})
</script>

<style scoped>
.grid {
  display: grid;
  grid-template-columns: 80px auto;
}

.label {
  font-size: .8rem;
  font-weight: bold;
  text-transform: uppercase;
  margin: auto .8rem auto auto;
  color: lightgrey;
}

.label-start {
  animation: label-color infinite ease-out;
  animation-duration: v-bind(movementDurationHalfSecond);
}

.container {
  display: block;
  border-left: solid 10px grey;
  border-right: solid 10px grey;
  padding-left: 1rem;
  padding-right: 1rem;
}

.container-start {
  animation: border-highlight infinite linear;
  animation-duration: v-bind(movementDurationSecond);
}

.ball {
  display: block;
  width: 20px;
  height: 20px;
  background: v-bind(color);
  border-radius: 50%;
  margin: 2rem 0;
}

.ball-start {
  animation: ball-movement infinite ease-in-out;
  animation-duration: v-bind(movementDurationSecond);
}

.container {
  width: 100%;
}

@keyframes ball-movement {
  0%,
  100% {
    margin-left: 0%;
  }

  50% {
    margin-left: calc(100% - 20px);
  }
}

@keyframes border-highlight {

  0%,
  100% {
    border-left-color: v-bind(color);
  }

  5%,
  95%,
  45%,
  55% {
    border-left-color: gray;
    border-right-color: gray;
  }

  50% {
    border-right-color: v-bind(color);
  }
}

@keyframes label-color {
  from {
    color: v-bind(color);
  }
  to {
    color: lightgray;
  }
}
</style>
