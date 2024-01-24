import { createRouter, createWebHashHistory, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue'

import MainRoutes from '@/router/MainRoutes';
import AuthRoutes from '@/router/AuthRoutes';

console.log("import.meta.env.BASE_URL >>>", import.meta.env.BASE_URL);


export const router = createRouter({
  // history: createWebHistory(import.meta.env.BASE_URL),
  history: createWebHashHistory(import.meta.env.BASE_URL),
  // pageTitle: router.currentRoute.value.name;
  routes: [
    {
      path: '/:pathMatch(.*)*',
      component: () => import('@/views/authentication/Error.vue')
    },
    MainRoutes,
    AuthRoutes
  ]
});

export const pageTitle = router.currentRoute.value.name;
console.log('pageTitle >>>', pageTitle);


router.beforeEach(async (to, from, next) => {
  // redirect to login page if not logged in and trying to access a restricted page
  const publicPages = ['/auth/login'];
  const authRequired = !publicPages.includes(to.path);
  // const auth: any = useAuthStore();
  // const title: any = to.meta?.title || 'vueApp-upstrapp.co.in';
  const title: any = to.name || 'vueApp-upstrapp.co.in';

  document.title = title;

  if (to.matched.some((record) => record.meta.requiresAuth)) {
    if (authRequired && !localStorage.getItem("access_token")) {
      // auth.returnUrl = to.fullPath;
      return next('/auth/login');
    } else next();
  } else {
    next();
  }

  // Log updated title
  console.log(`pageTitle >>> ${title}`);
});


/*

// default configuration ::


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    }
  ]
})
export default router

*/