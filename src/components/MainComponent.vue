<script>
import axios from "axios";
import { store } from "../store";
export default {
  name: "MainComponent",
  data() {
    return {
      store,
    };
  },
};
</script>

<template>
  <div class="container">
    <main></main>
  </div>
</template>

<style lang="scss" scoped></style>
