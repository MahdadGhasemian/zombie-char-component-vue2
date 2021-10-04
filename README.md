# Vue Zombie Character Component

![image](https://user-images.githubusercontent.com/1289797/38184554-1654a98c-367b-11e8-8620-655d88916c90.png)

A Vue component for [CryptoZombies.io](https://cryptoZombies.io).

You can generate a preview of the zombie in the browser.
Refer to [lesson 6](https://cryptoZombies.io/course) for more detailed information on how it can work in conjunction with a solidity dApp.

## Installation

### npm

```bash
npm i zombie-char-component --save
```

### Usage

main.js

```javascript
//...
import ZombieChar from "zombie-char-component";
Vue.component("zombie-char", ZombieChar);
//...
```

Or in component

```html
<template>
  <div>
    <zombie-char></zombie-char>
  </div>
</template>

<script>
  import ZombieChar from "zombie-char-component";
  export default {
    data() {
      return {
        date: "",
      };
    },
    components: {
      zombieChar: ZombieChar,
    },
  };
</script>
```
