import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import MainListView from '../views/MainListView.vue'


Vue.use(VueRouter)

const routes = [

  {
    path: '/',
    name: 'Home',
    component: HomeView
  },
    {
  path: '/MainList/:id',
  name: 'MainList',
  component: MainListView
},
{
path: '/MainList',
  name: 'MainList',
  component: MainListView
},
  {
    path: '**',
    name: 'defult',
    component: HomeView
  },





  
 
 
  
  
]

const router = new VueRouter({
  routes,
  mode:'history',
  base:process.env.BASE_URL,
});

export default router
