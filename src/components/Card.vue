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
      cache: false,
      get() {
        return `${this.rank}of${this.suit}`;
      },
    },
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.face {
  width: 60px;
  height: 110px;
}
</style>
