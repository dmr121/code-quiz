<template>
  <div class="grid grid-item bg-bluegray-50">
    <div
      class="self-center justify-self-center text-center font-semibold text-bluegray-700 font-sans pb-10"
    >
      <p class="text-4xl tracking-widest px-4 pb-6">
        {{ toptextUpperCase }}
      </p>
      <p class="text-base font-josefin tracking-evenwider px-4">
        {{ bottomtextUpperCase }}
      </p>
    </div>
  </div>
</template>

<script>
export default {
  props: ["toptext", "bottomtext"],
  computed: {
    toptextUpperCase() {
      return this.toptext.toUpperCase();
    },
    bottomtextUpperCase() {
      return this.bottomtext.toUpperCase();
    },
  },
};
</script>