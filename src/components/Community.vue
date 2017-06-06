<template>
  <div class="community">
    <div class="pot">
      Pot: {{ pot }}
    </div>
    <div class="cards">
      <card
      v-for="activeCard in cards"
      :suit="activeCard.suit"
      :rank="activeCard.rank"
      :key="activeCard.id"
      :uuid="activeCard.id">
      </card>
    </div>
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
  height: 300px;
}
.pot {
  color: white;
  padding-top: 60px;
  margin-bottom: 20px;
}
.cards {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
}
.card {
  margin-left: 10px;
}
</style>
