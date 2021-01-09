<template>
  <grid-items></grid-items>
</template>

<script>
import GridItems from "./components/GridItems.vue";

export default {
  name: "App",
  components: {
    "grid-items": GridItems,
  },
};
</script>