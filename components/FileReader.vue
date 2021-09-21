<template>
  <button class="text-reader">
    <font-awesome-icon class="solid" :icon="['far', 'folder-open']" />
    <input type="file" @change="loadTextFromFile" id="reader" />
  </button>
</template>

<script>
export default {
  methods: {
    loadTextFromFile(ev) {
      const file = ev.target.files[0];
      const reader = new FileReader();
      reader.onload = e => this.$emit("load", e.target.result);
      reader.readAsText(file);
    }
  }
};
</script>
