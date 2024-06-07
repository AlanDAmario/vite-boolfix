<script>
import { store } from "../store";
export default {
  name: "Movie&SeriesList",
};
</script>
<template>
  <div class="card" style="width: 18rem" v-for="(movie, id) in store.results">
    <img src="..." class="card-img-top" alt="..." />
    <div class="card-body">
      <p class="card-text">
        Some quick example text to build on the card title and make up the bulk
        of the card's content.
      </p>
    </div>
  </div>
</template>

<style lang="scss" scoped></style>
