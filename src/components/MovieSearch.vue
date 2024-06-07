<script>
import { store } from "../store";
export default {
  name: "MovieSearch",
  data() {
    return {
      store,
    };
  },
};
</script>
<template>
  <div class="d-flex justify-content-start">
    <div class="col-5">
      <form class="input-group mb-3" @submit.prevent="searchMovie">
        <input
          v-model="store.inputSearch"
          type="search"
          class="form-control"
          placeholder="Search..."
          aria-label="Search"
        />
        <button
          @click="$emit('searchMovie')"
          class="btn btn-outline-secondary"
          type="submit"
          id="button-addon2"
        >
          Button
        </button>
      </form>
    </div>
  </div>
</template>

<style lang="scss" scoped></style>
