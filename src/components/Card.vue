<template>
  <div class="card" :id="uuid">
    <canvas class="face"></canvas>
  </div>
</template>

<script>
export default {
  name: 'card',

  props: [ 'rank', 'suit' ],

  computed: {
    uuid: {
      cache: true,
      get() {
        return `${this.rank}of${this.suit}`;
      },
    },
  }
}
</script>

<style scoped>

.face {
  width: 60px;
  height: 110px;
}
</style>
