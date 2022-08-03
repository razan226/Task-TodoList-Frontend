import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'


Vue.use(VueRouter)

const routes = [
  {
    path: '/Home',
    name: 'home',
    component: HomeView
  },
  {
    path: '/',
    name: 'defult',
    component: HomeView
  }
 
 
  
  
]

const router = new VueRouter({
  routes,
  mode:'history',
  base:process.env.BASE_URL,
});

export default router
