import ZombieChar from "./components/ZombieChar.vue";

const ZombieCharComponent = {
  install(Vue, options) {
    // Let's register our component globally
    // https://vuejs.org/v2/guide/components-registration.html
    Vue.component("zombie-char", ZombieChar);
  },
};

// Automatic installation if Vue has been added to the global scope.
if (typeof window !== "undefined" && window.Vue) {
  window.Vue.use(ZombieCharComponent);
}

export default ZombieCharComponent;
