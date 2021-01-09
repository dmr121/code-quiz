<template>
  <div class="grid grid-item dog-background">
    <div class="grid bg-bluegray-300 opacity-95">
      <div class="font-sans text-center self-center justify-self-center">
        <p class="text-white tracking-widest font-semibold pb-2">
          {{ upperCaseName }}
        </p>
        <p
          class="text-bluegray-700 tracking-evenwider font-normal text-sm pb-6"
        >
          {{ nickname }}
        </p>
        <div class="px-12 space-y-6 font-josefin">
          <p class="text-white">
            <span class="text-bluegray-700 font-bold">Q:</span>
            {{ q }}
          </p>
          <p class="text-white">
            <span class="text-bluegray-700 font-bold">A:</span> {{ a }}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["name", "nickname", "q", "a"],
  computed: {
    upperCaseName() {
      return this.name.toUpperCase();
    },
  },
};
</script>

<style>
.dog-background {
  background: url("./../assets/images/dog_shopping_for_food.png");
  background-position: center;
}

.font-josefin {
  font-family: "Josefin Sans";
}
</style>