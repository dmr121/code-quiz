<template>
  <div class="grid grid-item">
    <div
      class="font-sans font-semibold leading-7 w-3/4 self-end pb-20"
      v-bind:class="{
        'justify-self-end': placement == 'right',
      }"
    >
      <quote-vector
        class="w-8 fill-current text-burntorange ml-1 mb-5"
      ></quote-vector>
      <p class="text-bluegray pb-3">
        {{ quoteUpperCase }}
      </p>
      <p class="text-burntorange text-xs">
        {{ personUpperCase }}
      </p>
    </div>
  </div>
</template>

<script>
import Quotes from "./Quotes.vue";

export default {
  props: ["quote", "person", "placement"],
  components: {
    "quote-vector": Quotes,
  },
  computed: {
    quoteUpperCase() {
      return this.quote.toUpperCase();
    },
    personUpperCase() {
      return this.person.toUpperCase();
    },
  },
};
</script>