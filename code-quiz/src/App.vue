<template>
  <div class="flex justify-center w-full">
    <div
      class="grid gap-y-10 gap-x-8 grid-cols-1 lg:grid-cols-3 md:grid-cols-2 py-3 px-3"
    >
      <heading title="Meet the team" class="col-span-3"></heading>
      <grid-items></grid-items>
    </div>
  </div>
</template>

<script>
import GridItems from "./components/GridItems.vue";
import Heading from "./components/Header.vue";

export default {
  components: {
    "grid-items": GridItems,
    "heading": Heading,
  },
};
</script>