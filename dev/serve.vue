<script>
import { defineComponent } from 'vue';
import ZombieCharComponent from '@/zombie-char-component.vue';

export default defineComponent({
  name: 'ServeDev',
  components: {
    ZombieCharComponent
  }
});
</script>

<template>
  <div id="app">
    <zombie-char-component />
  </div>
</template>
