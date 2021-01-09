<template>
  <div class="flex justify-center">
    <div
      class="grid gap-y-10 gap-x-8 grid-cols-1 lg:grid-cols-3 md:grid-cols-2 py-3 px-3"
    >
      <img
        src="./../assets/images/man_with_wine.png"
        alt="Man looking at camera behind some bottles of wine"
        class="grid-item object-fill"
      />
      <img
        src="./../assets/images/man_on_beach.png"
        alt="Man with sunglasse and a hat sitting on a beach"
        class="grid-item object-fill"
      />
      <quote-box
        quote="I drink to make other people more interesting."
        person="Ernest Hemingway"
        placement="right"
      ></quote-box>
      <img
        src="./../assets/images/woman_pouring_wine.png"
        alt="Woman pouring wine"
        class="grid-item object-fill"
      />
      <img
        src="./../assets/images/black_lab_on_beach.png"
        alt="Close-up of a black lab on a beach"
        class="grid-item object-fill"
      />
      <qa-box></qa-box>
      <quote-box
        quote="Good people drink good beer."
        person="Hunter S. Thompson"
        placement="left"
      ></quote-box>
      <img
        src="./../assets/images/woman_sitting_in_chair.png"
        alt="Woman leaning on arm and smiling at camera"
        class="grid-item object-fill"
      />
      <img
        src="./../assets/images/man_with_black_lab.png"
        alt="Man playing with a black lab"
        class="grid-item object-fill"
      />
      <img
        src="./../assets/images/man_holding_baby.png"
        alt="Man holding a baby"
        class="grid-item object-fill"
      />
    </div>
  </div>
</template>

<script>
import QuoteBox from "./QuoteBox.vue";
import QABox from "./QABox.vue";

export default {
  components: {
    "quote-box": QuoteBox,
    "qa-box": QABox,
  },
};
</script>

<style>
.grid-item {
  @apply w-80;
  @apply h-107;
}
</style>