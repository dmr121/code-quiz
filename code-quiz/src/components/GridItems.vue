<template>
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
  <qa-box
    name="Tuna"
    nickname="Young Buck"
    q="For what would you be famous?"
    a="My legendary puppy dog face and 1st rate begging skills"
  ></qa-box>
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
  <join-team-box
    toptext="Join Our Team"
    bottomtext="Think you've got what it takes?"
  ></join-team-box>
</template>

<script>
import QuoteBox from "./QuoteBox.vue";
import QABox from "./QABox.vue";
import JoinTeam from "./JoinTeam.vue";

export default {
  components: {
    "quote-box": QuoteBox,
    "qa-box": QABox,
    "join-team-box": JoinTeam,
  },
};
</script>

<style>
.grid-item {
  @apply w-80;
  @apply h-107;
}
</style>