<template>
  <div class="container">
    <div :class="ball">
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

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
    }
  },
  computed: {
    ball() {
      return this.start ? "ball ball-start" : "ball"
    },
    movementDurationSecond() {
      return `${this.movementDuration}s`
    }
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
