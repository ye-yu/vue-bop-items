<script setup lang="ts">
import { defineComponent } from "vue";
import BopItemBallVue from "./BopItemBall.vue";
</script>

<template>
  <BopItemBallVue movement-duration="3" color="red" :start="start" />
  <BopItemBallVue movement-duration="3.5" color="orange" :start="start" />
  <BopItemBallVue movement-duration="4" color="yellow" :start="start" />
  <BopItemBallVue movement-duration="4.5" color="green" :start="start" />
  <BopItemBallVue movement-duration="5" color="blue" :start="start" />
  <BopItemBallVue movement-duration="5.5" color="purple" :start="start" />
  <BopItemBallVue movement-duration="6" color="indigo" :start="start" />
</template>

<script lang="ts">
export default defineComponent({
  props: {
    start: Boolean
  }
})
</script>