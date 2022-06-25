<script setup lang="ts">
import { defineComponent } from "vue";
import BopItemBallVue from "./BopItemBall.vue";
import { Note } from "@/utils/sound.util";
</script>

<template>
  <BopItemBallVue :play-sound="Note.C4" :movement-duration="durations[6]" color="red" :start="start" />
  <BopItemBallVue :play-sound="Note.E4" :movement-duration="durations[5]" color="orange" :start="start" />
  <BopItemBallVue :play-sound="Note.G4" :movement-duration="durations[4]" color="yellow" :start="start" />
  <BopItemBallVue :play-sound="Note.B4" :movement-duration="durations[3]" color="green" :start="start" />
  <BopItemBallVue :play-sound="Note.D5" :movement-duration="durations[2]" color="blue" :start="start" />
  <BopItemBallVue :play-sound="Note.F5" :movement-duration="durations[1]" color="indigo" :start="start" />
  <BopItemBallVue :play-sound="Note.A5" :movement-duration="durations[0]" color="purple" :start="start" />
</template>

<script lang="ts">
const exp = (factor = 1, powerFactor = 1, basePower = 0.5) => (n: number) => factor * Math.pow(basePower, powerFactor * n);
export default defineComponent({
  props: {
    start: Boolean
  },
  data() {
    return {
      durations: Array.from({length: 7}).map((_, i) => i).map(exp(5, .5))
    }
  }
})
</script>