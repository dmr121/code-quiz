<template>
  <div class="grid h-107 w-80">
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
        {{ upperCaseQuote }}
      </p>
      <p class="text-burntorange text-sm">
        {{ upperCasePerson }}
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
    upperCaseQuote() {
      return this.quote.toUpperCase();
    },
    upperCasePerson() {
      return this.person.toUpperCase();
    },
  },
};
</script>