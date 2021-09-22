<template>
  <div class="app">
    <editor />
  </div>
</template>

<script>
import Editor from "../components/Editor.vue";
export default {
  components: {
    Editor
  }
};
</script>

<style lang="scss">
* {
  margin-top: 0;
  font-size: 18.5px;
  line-height: 1.7em;
  font-family: "Noto Serif JP", "Noto Serif TC", HentaiKana, IPAmjm, serif !important;
  font-feature-settings: "palt", "trad";
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-feature-settings: "palt", "trad";
}
</style>
