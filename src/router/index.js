import Vue from 'vue'
import Router from 'vue-router'

import Card from '@/components/Card'
import Community from '@/components/Community'
import Game from '@/components/Game'
//import Hand from '@/components/Hand'
//import Menu from '@/components/Menu'
//import Player from '@/components/Player'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/game',
      name: 'Game',
      component: Game,
    },
  ]
})
