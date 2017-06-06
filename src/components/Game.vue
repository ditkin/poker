<template>
  <div class="game">
    <community :cards="cards" :pot="pot"></community>
    <player></player>
  </div>
</template>

<script>
import Community from '@/components/Community.vue'

export default {
  name: 'game',

  data: () => ({
    i: 0,
    pot: 0,
    suits: [ 'club', 'diamond', 'heart', 'spade' ],
    ranks: [ '2', '3', '4', '5', '6', '7', '8', '9', 'T', 'J', 'Q', 'K', 'A' ],
    deck: [ ],
    cards: [ ],
    players: [ ],
    turn: 0,
    round: 1,

  }),

  created() {
    this.initDeck();
    this.flop();
  },

  methods: {
    initDeck() {
      const allCards = this.suits.map(suit => {
        return this.ranks.map(rank => ({
          suit, rank, id: `${rank}of${suit}`
        }));
      }, this);

      const deck = [].concat.apply([], allCards);
      this.deck = this.shuffle(deck);
    },

    shuffle(deck) {
      let randomIdx;
      // for each card, swap it with a card at random index.
      deck.forEach( (card, idx) => {
        randomIdx = Math.floor(Math.random() * deck.length);
        // fancy swap in one line of code
        [ deck[idx], deck[randomIdx] ] = [ deck[randomIdx], deck[idx] ];
      });
      return deck;
    },

    nextTurn() {
      this.collectBets();
      switch (this.turn) {
        case 0:
          this.deal();
        case 1:
          this.flop();
        case 2:
          this.flip();
        case 3:
          this.flip();
      }

      this.turn ++;
      if (this.turn == 4) {
        this.nextRound();
      }
    },

    deal() {
    },

    flop() {
      [1,2,3].forEach(()=>{
        this.cards.push(this.deck.pop());
      }, this);
    },

    flip() {
      this.cards.push(this.deck.pop());
    },

    nextRound() {
      this.initDeck();
      this.clearHands();
      this.round++;
      this.round++;
      this.turn = 0;
    },

    collectBets() {
    },

    clearHands() {
    },
  },

  components: {
    'community': Community,
  },
}
</script>

<style scoped>

</style>
