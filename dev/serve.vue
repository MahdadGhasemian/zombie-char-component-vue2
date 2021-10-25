<script>
import Vue from "vue";
import ZombieCharComponentVue2 from "@/zombie-char-component-vue2.vue";

export default Vue.extend({
  name: "ServeDev",
  components: {
    ZombieCharComponentVue2,
  },
  data() {
    return {
      dna: "010101010101",
      name: "Zombie",
    };
  },
});
</script>

<template>
  <div id="app">
    <input v-model="dna" />
    <input v-model="name" />
    <zombie-char-component-vue2 :isZombieLoaded="false" />
    <zombie-char-component-vue2
      :isZombieLoaded="true"
      zombieName="Zombie1"
      :autoGenerate="false"
      :eyeChoice="5"
      :clothesColorChoice="50"
    />
    <zombie-char-component-vue2
      :isZombieLoaded="true"
      :optionalDna="dna"
      :zombieName="name"
      :autoGenerate="true"
      :catMode="true"
    />
    <zombie-char-component-vue2
      :isZombieLoaded="true"
      :optionalDna="dna"
      :zombieName="name"
      :autoGenerate="true"
      :catMode="false"
    />
    <zombie-char-component-vue2
      :isZombieLoaded="true"
      :zombieName="name"
      :autoGenerate="true"
    />
  </div>
</template>
