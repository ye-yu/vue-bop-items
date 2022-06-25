<template>
  <div class="container">
    <div :class="ball">
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
    movementDurationSecond() {
      return `${this.movementDuration}s`
    }
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
.ball {
  display: block;
  width: 20px;
  height: 20px;
  background: v-bind(color);
  border: 0;
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
  0%, 100% {
    margin-left: 0%;
  }

  50% {
    margin-left: calc(100% - 20px);
  }
}
</style>
