import Vue from 'vue'
import Router from 'vue-router'
import app from '../App'
import recommend from 'components/recommend/recommend'
import singer from 'components/singer/singer'
import rank from 'components/rank/rank'
import search from 'components/search/search'
Vue.use(Router)

export default new Router({
  routes: [
   {
      path: '/',
      redirect: 'recommend',
    },
    {
      path: '/recommend',
        name: 'recommend',
        component: recommend
    },
     {
      path: '/singer',
        name: 'singer',
        component: singer
    },
     {
      path: '/search',
        name: 'search',
        component: search
    },
     {
      path: '/rank',
        name: 'rank',
        component: rank
    },
    
  ]
})
