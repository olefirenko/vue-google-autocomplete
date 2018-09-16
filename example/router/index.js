import Vue from 'vue';
import Router from 'vue-router';
import Home from '../components/Home';
import Page1 from '../components/Page1';
import Page2 from '../components/Page2';
import Page3 from '../components/Page3';

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/page-1',
      name: 'page1',
      component: Page1,
    },
    {
      path: '/page-2',
      name: 'page2',
      component: Page2,
    },
    {
      path: '/page-3',
      name: 'page3',
      component: Page3,
    },
  ],
});
