<script>
import axios from "axios";
import { store } from "../store";
import SearchMovie from "./SearchMovie.vue";
export default {
  name: "HeaderComponent",
  components: {
    SearchMovie,
  },
  data() {
    return {
      store,
    };
  },
  methods: {
    //CHIMATA API
    searchMovie() {
      //CONCATENAZIONE DI API METODO NON ELEGANTE, QUINDI ADESSO SFRUTTEREMO LA POTENZA DEI PARAMS(GUARDA SOTTO)
      // const urlMovie =
      //   this.store.apiInfo.mainUrl +
      //   this.store.apiInfo.endPoints.searchMovieUrl+ this.store.apiInfo.apiKey;

      //CREIAMOUNA VARIABILE PER UNA MAGGIORE LEGGIBILITà DEL CODICE
      const urlMovie =
        store.apiInfo.mainUrl + store.apiInfo.endPoints.searchMovieUrl;

      axios
        .get(urlMovie, {
          //PROCEDIMENTO PER LA CREAZIONE DEI PARAMS
          //PER UNA OTTIMIZZAZIONE DEL CODICE POTEVAMO SALVARE PARAMS COME UNA VARIABILE, ES. CONST PARAMS{} (TASTO INVIO PER ANDARE A CAPO), E SCRIVERE API_KEY: THIS.STORE.ECC, QUERY:THIS.STORE.ECC, DOPODICHè NELLA CHIAMATA AXIOS  axios.get(urlMovie, {params}) e continuare con.then
          params: {
            api_key: store.apiInfo.apiKey, // ANDIAMO AD ASSEGNARE AD API_KEY (PROPRIETà NON DI DEFAULT MA SCRITTA NELL API QUINDI POTREBBE CAMBIARE NEL TEMPO), LA NOSTRA APIKEY DATA DAL SITO
            query: store.inputSearch,
          },
        })
        .then((response) => {
          //ABBIAMO UTILIZZATO UNA VARIABILE PER UNA MIGLIORE LEGGINILITà DEL CODICE, CONST {RESULTS}= RESPONSE.DATA, SERVE AD ESTRARRE LA PROPRIETà RESULTS(NOME CHE PUò ESSERE DIVERSO IN ALTRE API), DIRETTAMENTE DA RESPONSE(NOME ASSEGNATO MANUALMENTE).DATA(NOME DI DEFAULT ASSEGNATO, INVARIABILE, PER TROVARLO FARE UN LOG DI RESPONSE, COSì DA TROVARE TUTTI I NOMI)
          const { results } = response.data;
          console.log(response.data);
          this.store.movieResult = results;
          console.log(this.store.movieResult);
        })
        .catch((error) => console.log(error));
    },
  },
  //CREATED CREATO PER PERFORMARE LE PRESTAZIONI DI SEARCHMOVIE
};
</script>

<template>
  <header>
    <SearchMovie @search="searchMovie" />
  </header>
</template>

<style lang="scss" scoped></style>
