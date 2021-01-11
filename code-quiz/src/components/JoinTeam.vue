<template>
  <div class="relative grid grid-item bg-bluegray-50">
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
    <div class="absolute -bottom-16 -right-12">
      <logo class="w-36 h-36"></logo>
    </div>
  </div>
</template>

<script>
import Logo from "./Logo.vue";

export default {
  props: ["toptext", "bottomtext"],
  components: {
    "logo": Logo,
  },
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