<script>
import { store } from "../store";
import MovieListElements from "./MovieListElements.vue";
export default {
  name: "MovieList",
  components: {
    MovieListElements,
  },
  data() {
    return {
      store,
    };
  },
};
</script>
<template>
  <div class="d-flex flex-wrap gap-3 justify-content-center">
    <MovieListElements
      v-for="(movie, index) in store.movieResult"
      :title="movie.title"
      :ogTitle="movie.original_title"
      :ogLanguage="movie.original_language"
      :vote="movie.vote_average"
    />
  </div>
</template>

<style lang="scss" scoped></style>
