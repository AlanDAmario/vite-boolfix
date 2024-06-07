import { reactive } from "vue";

export const store = reactive({
  movieResult: [], //ARRAY DOVE ANDREMO A STAMPARE LE INFORMAZIONI DATE DALLE PROPRIETà DELL API
  inputSearch: "", //CAMPO CHE CI TORNERà UTILE DURANTE IL V-MODEL E L ASSEGNAZIONE TRAMITE PARAMS DI QUERY(QUERY è IL PARAMETRO REQUIRED PER FILTRARE TUTTI FILM NEL CAMPO DI RICERCA)
  //ADESSO ANDREMO SCOMPORRE TUTTI TADI PRESENTI NELL URL DI PARETENZA "https://api.themoviedb.org/3/search/movie?api_key=e99307154c6dfb0b4750f6603256716d&query="
  apiInfo: {
    apiKey: "3e0c5621d4cc748f0e07a6aed582c200",
    mainUrl: "https://api.themoviedb.org/3",
    endPoints: {
      searchMovieUrl: "/search/movie",
      searchTvSeriesUrl: "/search/tv",
    },
  },
});
