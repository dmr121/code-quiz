<template>
  <div class="flex justify-center w-full">
    <div
      class="grid gap-y-10 gap-x-8 grid-cols-1 lg:grid-cols-3 md:grid-cols-2 py-3 px-3"
    >
      <grid-items></grid-items>
    </div>
  </div>
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