import { RouteConfig } from 'vue-router';

const routes: RouteConfig[] = [
  {
    path: '/',
    component: () => import('layouts/IndexLayout.vue'),
    children: [
      { path: '', name: 'login', component: () => import('src/pages/auth/AuthCardLogin.vue') },
      { path: '/register', name: 'register', component: () => import('src/pages/auth/AuthCardRegister.vue') },
    ]
  },
  {
    path: '/', component: () => import('src/layouts/HomeLayout.vue'),
    children: [
      { path: '/profile', name: 'profile', component: () => import('src/pages/profile/Profile.vue') },
      { path: '/wallet', name: 'wallet', component: () => import('src/pages/wallet/Wallet.vue') },
      { path: '/recharges', name: 'recharges', component: () => import('src/pages/recharges/Recharges.vue') },
      { path: '/payments', name: 'payments', component: () => import('src/pages/payments/Payments.vue') },
    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '*',
    component: () => import('pages/Error404.vue')
  }
];

export default routes;
