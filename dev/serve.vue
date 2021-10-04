<script>
import { defineComponent } from 'vue';
import PackageTestVueTemporary from '@/zombie-char-component.vue';

export default defineComponent({
  name: 'ServeDev',
  components: {
    PackageTestVueTemporary
  }
});
</script>

<template>
  <div id="app">
    <zombie-char-component />
  </div>
</template>
