<script>
import HeaderComponent from "./components/HeaderComponent.vue";
import MainComponent from "./components/MainComponent.vue";
import FooterComponent from "./components/FooterComponent.vue";
export default {
  name: 'Boolfix',
  components: {
    HeaderComponent,
    MainComponent,
    FooterComponent,
  },
};
</script>

<template>
  <HeaderComponent />
  <MainComponent />
  <FooterComponent />
</template>

<style lang="scss" scoped></style>
