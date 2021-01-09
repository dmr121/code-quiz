<template>
  <div class="grid h-107 w-80 bg-green-700">
    <div class="w-2/3 justify-self-end self-end">
      <p class="">
        {{ upperCaseQuote }}
      </p>
    </div>
  </div>
</template>

<script>
export default {
  props: ["quote", "person"],
  computed: {
    upperCaseQuote() {
      return this.quote.toUpperCase();
    },
  },
};
</script>