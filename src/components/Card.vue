<template>
  <div class="card">
    {{ rank }}
    {{ suit }}
    <canvas id="rank+'of'+suit"></canvas>
  </div>
</template>

<script>
export default {
  name: 'card',
  props: [ 'rank', 'suit' ],
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
