<script>
import axios from "axios";
import { store } from "../store";
import MovieList from "./MovieList.vue";
export default {
  name: "MainComponent",
  components: {
    MovieList,
  },
  data() {
    return {
      store,
    };
  },
};
</script>

<template>
  <div class="container">
    <main>
      <MovieList />
    </main>
  </div>
</template>

<style lang="scss" scoped></style>
