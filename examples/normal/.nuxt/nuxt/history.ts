// @ts-nocheck
import Vue from 'vue';
import Router from 'vue-router';
import scrollBehavior from './router.scrollBehavior.js';
import getRoutes from './routes.js';

Vue.use(Router);

export const routerOptions = {
  mode: 'history',
  base: decodeURI('/'),
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,
  routes: getRoutes,

  fallback: false,
};

export function createRouter() {
  return new Router(routerOptions);
}
