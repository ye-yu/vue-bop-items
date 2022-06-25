<script setup lang="ts">
import { defineComponent } from "vue";
import BopItemBallVue from "./BopItemBall.vue";
import { Note } from "@/utils/sound.util";
</script>

<template>
  <BopItemBallVue :play-sound="Note.C4" movement-duration="3" color="red" :start="start" />
  <BopItemBallVue :play-sound="Note.E4" movement-duration="3.5" color="orange" :start="start" />
  <BopItemBallVue :play-sound="Note.G4" movement-duration="4" color="yellow" :start="start" />
  <BopItemBallVue :play-sound="Note.B4" movement-duration="4.5" color="green" :start="start" />
  <BopItemBallVue :play-sound="Note.D5" movement-duration="5" color="blue" :start="start" />
  <BopItemBallVue :play-sound="Note.F5" movement-duration="5.5" color="purple" :start="start" />
  <BopItemBallVue :play-sound="Note.A5" movement-duration="6" color="indigo" :start="start" />
</template>

<script lang="ts">
export default defineComponent({
  props: {
    start: Boolean
  }
})
</script>