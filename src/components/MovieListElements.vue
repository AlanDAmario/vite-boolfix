<script>
export default {
  name: "MovieListElements",
  props: ["title", "ogTitle", "ogLanguage", "vote"],
};
</script>

<template>
  <div class="col-3">
    <div class="card">
      <img src=".." class="card-img-top" alt="..." />
      <div class="card-body">
        <h5 class="card-title">{{ title }}</h5>
        <p class="card-text">
          {{ ogTitle }}
        </p>
        <p>{{ ogLanguage }}</p>
        <p>{{ vote }}</p>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped></style>
