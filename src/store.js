import { reactive } from "vue";

export const store = reactive({
  movieResult: [],
  inputSearch: '',
  apiKey: "3e0c5621d4cc748f0e07a6aed582c200",
  searchMovieUrl: "https://api.themoviedb.org/3/search/movie",
});
