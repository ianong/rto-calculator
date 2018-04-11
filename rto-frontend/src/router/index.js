import Vue from 'vue'
import Router from 'vue-router'
import RtoCalculator from '@/components/RtoCalculator'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'RtoCalculator',
      component: RtoCalculator
    }
  ]
})
