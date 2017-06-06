<template>
  <div class="card" :id="uuid">
    <canvas class="face"></canvas>
  </div>
</template>

<script>
export default {
  name: 'card',

  props: [ 'rank', 'suit', 'uuid' ],

  mounted() {
    console.log(this.$el);
  }
}
</script>

<style scoped>

.face {
  width: 60px;
  height: 90px;
  background: lightgray;
  border: 2px solid black;
  border-radius: 6px;
}
</style>
