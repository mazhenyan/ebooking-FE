import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router';
import Index from '../layout/Index.vue';
import Login from '../layout/Login.vue';
import Register from '../layout/Register.vue';
import HotelRegister from '../layout/HotelRegister.vue';
import Menu from '../layout/Menu.vue';
import Bar from '../layout/Bar.vue'
import Footer from '../layout/Footer.vue';

// content
import workbench from '../layout/workbench.vue'
import consumeOrder from '../layout/consumeOrder.vue'
import orderAuto from '../layout/orderAuto.vue'
import feedback from '../layout/feedback.vue'
import hos from '../layout/hos.vue'
import hotelStudy from '../layout/hotelStudy.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/ebooking/',
    name: 'Index',
    components: {
      default: Index,
      menu: Menu,
      bar: Bar,
      footer: Footer
    },
    children: [{
      path: 'workbench',
      component: workbench
    },{
      path: 'consume-order',
      component: consumeOrder
    },{
      path: 'order-auto',
      component: orderAuto
    },{
      path: 'feedback',
      component: feedback
    },{
      path: 'hos',
      component: hos
    },{
      path: 'hotel-study',
      component: hotelStudy
    }]
  },
  {
    path: '/login',
    name: 'Login',
    component: Login,
  },
  {
    path: '/register',
    name: 'Register',
    component: Register,
  },
  {
    path: '/hotelRegister',
    name: 'HotelRegister',
    component: HotelRegister,
  },
  // {
  //   path: "/about",
  //   name: "About",
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () =>
  //     import(/* webpackChunkName: "about" */ "../views/About.vue")
  // }
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
