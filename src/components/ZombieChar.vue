<template>
  <div class="relative main-box">
    <div v-show="!isZombieLoaded" class="zombie-loading"></div>
    <div v-show="!isZombieLoaded" class="box">
      <img
        v-show="!catMode"
        :style="clothesColor"
        class="left-feet absolute"
        src="@/assets/zombieparts/left-feet-1@2x.png"
      />
      <img
        v-show="!catMode"
        :style="clothesColor"
        class="right-feet absolute"
        src="@/assets/zombieparts/right-feet-1@2x.png"
      />

      <img
        v-show="!catMode"
        :style="clothesColor"
        class="left-leg absolute"
        src="@/assets/zombieparts/left-leg-1@2x.png"
      />
      <img
        v-show="!catMode"
        :style="clothesColor"
        class="right-leg absolute w-1/6"
        src="@/assets/zombieparts/right-leg-1@2x.png"
      />

      <img
        v-show="!catMode"
        :style="clothesColor"
        class="left-thigh"
        src="@/assets/zombieparts/left-thigh-1@2x.png"
      />
      <img
        v-show="!catMode"
        :style="clothesColor"
        class="right-thigh"
        src="@/assets/zombieparts/right-thigh-1@2x.png"
      />

      <img
        :style="headColor"
        class="left-forearm"
        src="@/assets/zombieparts/left-forearm-1@2x.png"
      />
      <img
        :style="headColor"
        class="right-forearm"
        src="@/assets/zombieparts/right-forearm-1@2x.png"
      />

      <img
        :style="headColor"
        class="right-upper-arm"
        src="@/assets/zombieparts/right-upper-arm-1@2x.png"
      />

      <img
        :style="clothesColor"
        class="torso"
        src="@/assets/zombieparts/torso-1@2x.png"
      />

      <img
        v-show="catMode"
        :style="clothesColor"
        class="cat-legs"
        src="@/assets/zombieparts/catlegs.png"
      />

      <img
        v-for="n in 6"
        :key="'shirt-img-' + n"
        :style="clothesColor"
        :class="shirtClass(n)"
        :src="shirtSrc(n)"
      />

      <img
        :style="headColor"
        class="left-upper-arm"
        src="@/assets/zombieparts/left-upper-arm-1@2x.png"
      />

      <img
        :style="headColor"
        class="left-forearm"
        src="@/assets/zombieparts/left-forearm-1@2x.png"
      />
      <img
        :style="headColor"
        class="right-forearm"
        src="@/assets/zombieparts/right-forearm-1@2x.png"
      />

      <img
        :style="headColor"
        class="left-hand"
        src="@/assets/zombieparts/hand1-1@2x.png"
      />
      <img
        :style="headColor"
        class="right-hand"
        src="@/assets/zombieparts/hand-2-1@2x.png"
      />

      <img
        v-for="n in 7"
        :key="'head-img-' + n"
        :style="headColor"
        :class="headClass(n)"
        :src="headSrc(n)"
      />
      <img
        v-for="n in 11"
        :key="'eye-img-' + n"
        :style="eyeColor"
        :class="eyeClass(n)"
        :src="eyeSrc(n)"
      />
      <img class="mouth" src="@/assets/zombieparts/mouth-1@2x.png" />
    </div>
  </div>
</template>

<script>
import "babel-polyfill";
import sha3 from "js-sha3";
import bigInt from "big-integer";
import imagesLoaded from "vue-images-loaded";
export default {
  name: "ZombieChar",
  directives: {
    imagesLoaded,
  },
  props: {
    isZombieLoaded: {
      default: false,
      type: Boolean,
    },
    optionalDna: {
      default: "",
      type: String,
    },
    zombieName: {
      default: "",
      type: String,
    },
    zombieDescription: {
      default: "",
      type: String,
    },
    hideNameField: {
      default: true,
      type: Boolean,
    },
    skinColorChoice: {
      default: 1,
      type: [Number, String],
    },
    eyeColorChoice: {
      default: 1,
      type: [Number, String],
    },
    clothesColorChoice: {
      default: 1,
      type: [Number, String],
    },
    headChoice: {
      default: 1,
      type: [Number, String],
    },
    eyeChoice: {
      default: 1,
      type: [Number, String],
    },
    shirtChoice: {
      default: 1,
      type: [Number, String],
    },
    autoGenerate: {
      default: false,
      type: Boolean,
    },
    catMode: {
      default: false,
      type: Boolean,
    },
  },
  computed: {
    currentDna() {
      if (this.optionalDna) {
        return this.optionalDna;
      } else {
        const name = this.zombieName;
        const hash = sha3.keccak256(name);
        let num = bigInt(hash, 16);
        num = num.mod(Math.pow(10, 16));
        let dnaStr = String(num);
        while (dnaStr.length < 16) dnaStr = "0" + dnaStr;
        return dnaStr;
      }
    },
    currentHeadChoice() {
      return this.autoGenerate
        ? (parseInt(this.currentDna.substring(0, 2)) % 7) + 1
        : this.headChoice;
    },
    currentEyeChoice() {
      return this.autoGenerate
        ? (parseInt(this.currentDna.substring(2, 4)) % 11) + 1
        : this.eyeChoice;
    },
    currentShirtChoice() {
      return this.autoGenerate
        ? (parseInt(this.currentDna.substring(4, 6)) % 6) + 1
        : this.shirtChoice;
    },
    currentSkinColorChoice() {
      return this.autoGenerate
        ? (parseInt(this.currentDna.substring(6, 8)) / 100) * 360
        : this.skinColorChoice;
    },
    currentEyeColorChoice() {
      return this.autoGenerate
        ? (parseInt(this.currentDna.substring(8, 10)) / 100) * 360
        : this.eyeColorChoice;
    },
    currentClothesColorChoice() {
      return this.autoGenerate
        ? (parseInt(this.currentDna.substring(10, 12)) / 100) * 360
        : this.clothesColorChoice;
    },
    headColor() {
      return this.getColor(this.currentSkinColorChoice);
    },
    eyeColor() {
      return this.getColor(this.currentEyeColorChoice);
    },
    clothesColor() {
      return this.getColor(this.currentClothesColorChoice);
    },
    partsVisible() {
      const headVisible = `head-visible-${this.currentHeadChoice}`;
      const eyeVisible = `eye-visible-${this.currentEyeChoice}`;
      const shirtVisible = `shirt-visible-${this.currentShirtChoice}`;
      return `${headVisible} ${eyeVisible} ${shirtVisible}`;
    },
    hideNameFieldClass() {
      return !!this.hideNameField || !this.isZombieLoaded
        ? "hide"
        : "zombie-card card bg-shaded";
    },
    currentZombieDescription() {
      return this.zombieDescription;
    },
  },
  methods: {
    headSrc(i) {
      return require("@/assets/zombieparts/head-" + i + "@2x.png");
    },
    eyeSrc(i) {
      return require("@/assets/zombieparts/eyes-" + i + "@2x.png");
    },
    shirtSrc(i) {
      return require("@/assets/zombieparts/shirt-" + i + "@2x.png");
    },
    headClass(i) {
      return i === this.currentHeadChoice
        ? `head head-part-${i} visible`
        : `head head-part-${i} hidden`;
    },
    eyeClass(i) {
      return i === this.currentEyeChoice
        ? `eye eye-part-${i} visible`
        : `eye eye-part-${i} hidden`;
    },
    shirtClass(i) {
      return i === this.currentShirtChoice
        ? `shirt shirt-part-${i} visible`
        : `shirt shirt-part-${i} hidden`;
    },
    getColor(deg) {
      return `filter: hue-rotate(${deg}deg);`;
    },
  },
};
</script>

<style scoped>
.zombie-loading {
  background: url("../assets/zombiebg/zombierun.png") left center;
  width: 12rem;
  height: 18rem;
  animation: play 0.7s steps(24) infinite;
}
@keyframes play {
  100% {
    background-position: -4608px;
  }
}

.main-box {
  width: 15.5rem;
  height: 19rem;
}

.box {
  width: 15.5rem;
  height: 19rem;
}

.head {
  position: absolute;
  width: 16.4rem;
  left: 0rem;
  top: -2.34rem;
}
.eye {
  position: absolute;
  width: 7.6rem;
  left: 5.9rem;
  top: 4.7rem;
}
.shirt {
  position: absolute;
  width: 7.6rem;
  left: 1.5rem;
  top: 7.6rem;
}
.mouth {
  position: absolute;
  width: 3.5rem;
  left: 7.7rem;
  top: 8.2rem;
}
.torso {
  position: absolute;
  width: 7.6rem;
  left: 1.5rem;
  top: 7.6rem;
}
.left-thigh {
  position: absolute;
  width: 3.5rem;
  left: 2.5rem;
  top: 12.9rem;
}
.right-thigh {
  position: absolute;
  width: 3.5rem;
  left: 4.4rem;
  top: 12.9rem;
}
.cat-legs {
  position: absolute;
  width: 5.85rem;
  left: 1.4rem;
  top: 10.5rem;
}
.left-hand {
  position: absolute;
  width: 2.34rem;
  left: 6.6rem;
  top: 11.1rem;
}
.right-hand {
  position: absolute;
  width: 2.34rem;
  left: 9rem;
  top: 11.1rem;
}
.left-forearm {
  position: absolute;
  width: 2.34rem;
  left: 5.4rem;
  top: 11.8rem;
}
.right-forearm {
  position: absolute;
  width: 2.34rem;
  left: 7.9rem;
  top: 11.7rem;
}
.left-upper-arm {
  position: absolute;
  width: 3.5rem;
  left: 3.7rem;
  top: 9.4rem;
}
.right-upper-arm {
  position: absolute;
  width: 3.5rem;
  left: 6.1rem;
  top: 9.4rem;
}
.left-leg {
  position: absolute;
  width: 2.34rem;
  left: 3.1rem;
  top: 15.8rem;
}
.right-leg {
  position: absolute;
  width: 1.9rem;
  left: 5.6rem;
  top: 16.1rem;
}
.left-feet {
  position: absolute;
  width: 2.34rem;
  left: 3.1rem;
  top: 17.6rem;
}
.right-feet {
  position: absolute;
  width: 1.9rem;
  left: 5.4rem;
  top: 17.75rem;
}
</style>
