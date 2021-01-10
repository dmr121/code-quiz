<template>
  <div class="flex justify-center">
    <div
      class="grid gap-y-10 gap-x-8 grid-cols-1 lg:grid-cols-3 md:grid-cols-2 py-3 px-3"
    >
      <heading title="Meet the team" class="md:col-span-2 lg:col-span-3"></heading>
      <grid-items></grid-items>
      <footing class="md:col-span-2 lg:col-span-3"></footing>
    </div>
  </div>
</template>

<script>
import GridItems from "./components/GridItems.vue";
import Heading from "./components/Header.vue";
import Footing from "./components/Footer.vue";

export default {
  components: {
    "grid-items": GridItems,
    "heading": Heading,
    "footing": Footing
  },
};
</script>