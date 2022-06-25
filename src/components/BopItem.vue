<script setup lang="ts">
import { defineComponent } from "vue";
import BopItemBallVue from "./BopItemBall.vue";
import { Note } from "@/utils/sound.util";
</script>

<template>
  <BopItemBallVue :play-sound="Note.C4" movement-duration="1.4" color="red" :start="start" />
  <BopItemBallVue :play-sound="Note.E4" movement-duration="1.5" color="orange" :start="start" />
  <BopItemBallVue :play-sound="Note.G4" movement-duration="1.6" color="yellow" :start="start" />
  <BopItemBallVue :play-sound="Note.B4" movement-duration="1.7" color="green" :start="start" />
  <BopItemBallVue :play-sound="Note.D5" movement-duration="1.8" color="blue" :start="start" />
  <BopItemBallVue :play-sound="Note.F5" movement-duration="1.9" color="indigo" :start="start" />
  <BopItemBallVue :play-sound="Note.A5" movement-duration="2.0" color="purple" :start="start" />
</template>

<script lang="ts">
export default defineComponent({
  props: {
    start: Boolean
  }
})
</script>