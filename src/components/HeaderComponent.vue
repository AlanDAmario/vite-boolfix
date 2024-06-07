<script>
import axios from "axios";
import { store } from "../store";
export default {
  name: "HeaderComponent",
  data() {
    return {
      store,
    };
  },
  methods: {
    searchMovie() {
      //CHIMATA API

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
            api_key: store.apiInfo.apiKey, // ANDIAMO AD ASSEGNARE AD API_KEY (PROPRIETà NON DI DEFAULT MA SCRITTA NELL API QUINDI POTREBBE CAMIARE NEL TEMPO), LA NOSTRA APIKEY DATA DAL SITO
            query: store.inputSearch,
          },
        })
        .then((response) => console.log(response))
        .catch((error) => console.log(error));
    },
  },
};
</script>

<template>
  <header>
    <div class="container-fluid">
      <div class="d-flex justify-content-center my-5">
        <div class="col-6">
          <form @submit.prevent="searchMovie" class="d-flex gap-3">
            <input
              id="movie"
              v-model="store.inputSearch"
              type="search"
              class="form-control form-control-dark border-danger"
              placeholder="Search for a movie or Tv series..."
              aria-label="Search"
              @keyup="searchMovie"
            />
            <button
              type="submit"
              class="btn btn-outline-danger me-2"
              @click="searchMovie"
            >
              Go
            </button>
          </form>
        </div>
      </div>
    </div>
  </header>
</template>

<style lang="scss" scoped></style>
