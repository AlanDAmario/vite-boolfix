<script>
import { store } from "../store";

export default {
  name: "SearchMovie",
  data() {
    return {
      store,
    };
  },
  methods: {
    search() {
      //EMETTIAMO UN EVENTO
      this.$emit("search", {
        inputSearch: this.store.inputSearch,
      });
      this.store.inputSearch = "";
    },
  },
};
</script>

<template>
  <div class="container-fluid">
    <div class="d-flex justify-content-center my-5">
      <div class="col-6">
        <form @submit.prevent="search" class="d-flex gap-3">
          <input
            id="movie"
            v-model="store.inputSearch"
            type="search"
            class="form-control form-control-dark border-danger"
            placeholder="Search for a movie or Tv series..."
            aria-label="Search"
          />
          <button type="submit" class="btn btn-outline-danger me-2">Go</button>
        </form>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped></style>
