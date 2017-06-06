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

<style scoped>

.community {
  background-color: green;
}
</style>
