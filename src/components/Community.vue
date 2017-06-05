<template>
  <div class="community">
    Pot: {{ pot }}
    <card v-for="activeCard in cards" :suit="activeCard.suit" :rank="activeCard.rank">
    </card>
    </div>
  </div>
</template>

<script>
import Card from '@/components/Card.vue'

export default {
  name: 'community',
  props: [ 'turn', 'pot', 'cards' ],
  components: {
    'card': Card,
  },
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
