import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/Home'
import Generation from '@/pages/Generation'
import PokeSpecies from '@/pages/PokeSpecies'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/Generation',
      name: 'Generation',
      props: true,
      component: Generation
    },
    {
      path: '/Species',
      name: 'PokeSpecies',
      props: true,
      component: PokeSpecies
    }

  ]
})
