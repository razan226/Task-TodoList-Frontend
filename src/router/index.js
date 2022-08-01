import Vue from 'vue'
import VueRouter from 'vue-router'
import AboutView from '../views/AboutView.vue'


Vue.use(VueRouter)

const routes = [
 
  {
    path: '/y/:id',
    name: 'test',
    component: AboutView
  }
  
]

const router = new VueRouter({
  routes,
  mode:'history',
  base:process.env.BASE_URL,
});

export default router
