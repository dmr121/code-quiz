<template>
  <div class="grid h-107 w-80">
    <div
      class="font-sans font-medium leading-7 w-3/4 self-end pb-20"
      v-bind:class="{
        'justify-self-end': placement == 'right',
      }"
    >
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
export default {
  props: ["quote", "person", "placement"],
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