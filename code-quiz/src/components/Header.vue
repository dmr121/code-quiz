<template>
  <div>
    <div class="flex items-center pt-4">
      <div class="line flex-grow"></div>
      <div class="bg-gray-800 h-2 w-2 ml-5 transform rotate-45"></div>
      <p class="tracking-evenwider font-semibold px-7">{{ titleUpperCase }}</p>
      <div class="bg-gray-800 h-2 w-2 mr-5 transform rotate-45"></div>
      <div class="line flex-grow"></div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["title"],
  computed: {
    titleUpperCase() {
      return this.title.toUpperCase();
    },
  },
};
</script>

<style>
.line {
  @apply bg-gray-300;
  height: 1px;
}
</style>