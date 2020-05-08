import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes: Array<RouteConfig> = [
  {
    path: '/auth/login',
    name: 'Login',
    component: () =>
      import('@/views/auth/Login.vue')
  },
  {
    path: '/auth/register',
    name: 'Register',
    component: () =>
      import('@/views/auth/Register.vue')
  },
  {
    path: '/auth/forgot',
    name: 'Forgot',
    component: () =>
      import('@/views/auth/Forgot.vue')
  },
  {
    path: '/auth/sent',
    name: 'Sent',
    component: () =>
      import('@/views/auth/Sent.vue')
  },
  {
    path: '/auth/reset',
    name: 'Reset',
    component: () =>
      import('@/views/auth/Reset.vue')
  },
  {
    path: '/auth/reset/success',
    name: 'ResetSuccess',
    component: () =>
      import('@/views/auth/ResetSuccess.vue')
  },
  {
    path: '/',
    redirect: '/dashboard/home'
  },
  {
    path: '/dashboard',
    component: () =>
      import('@/views/Dashboard.vue'),
    children: [{
      path: 'home',
      name: 'Home',
      component: () =>
        import('@/views/dashboard/Home.vue')
    },
    {
      path: 'customer/add',
      name: 'CustomerAdd',
      component: () =>
        import('@/views/dashboard/CustomerAdd.vue')
    },
    {
      path: 'customer/add/success',
      name: 'CustomerAddSuccess',
      component: () =>
        import('@/views/dashboard/CustomerAddSuccess.vue')
    },
    {
      path: 'customer/all',
      name: 'CustomerAll',
      component: () =>
        import('@/views/dashboard/CustomerAll.vue')
    },
    {
      path: 'package/all',
      name: 'PackageAll',
      component: () =>
        import('@/views/dashboard/PackageAll.vue')
    },
    {
      path: 'package/all/edit',
      name: 'PackageAllEdit',
      component: () =>
        import('@/views/dashboard/PackageAllEdit.vue')
    },
    {
      path: 'package/all/edit/success',
      name: 'PackageAllEditSuccess',
      component: () =>
        import('@/views/dashboard/PackageAllEditSuccess.vue')
    },
    {
      path: 'package/add',
      name: 'PackageAdd',
      component: () =>
        import('@/views/dashboard/PackageAdd.vue')
    },
    {
      path: 'package/add/success',
      name: 'PackageAddSuccess',
      component: () =>
        import('@/views/dashboard/PackageAddSuccess.vue')
    },
    {
      path: 'category/all',
      name: 'CategoryAll',
      component: () =>
        import('@/views/dashboard/CategoryAll.vue')
    },
    {
      path: 'category/add',
      name: 'CategoryAdd',
      component: () =>
        import('@/views/dashboard/CategoryAdd.vue')
    },
    {
      path: 'category/add/success',
      name: 'CategoryAddSuccess',
      component: () =>
        import('@/views/dashboard/CategoryAddSuccess.vue')
    },
    {
      path: 'discount/all',
      name: 'DiscountAll',
      component: () =>
        import('@/views/dashboard/DiscountAll.vue')
    },
    {
      path: 'discount/add',
      name: 'DiscountAdd',
      component: () =>
        import('@/views/dashboard/DiscountAdd.vue')
    },
    {
      path: 'discount/add/success',
      name: 'DiscountAddSuccess',
      component: () =>
        import('@/views/dashboard/DiscountAddSuccess.vue')
    },
    {
      path: 'packageinquiry',
      name: 'PackageInquiry',
      component: () =>
        import('@/views/dashboard/PackageInquiry.vue')
    },
    {
      path: 'booking/tour/all',
      name: 'BookingTourAll',
      component: () =>
        import('@/views/dashboard/BookingTourAll.vue')
    },
    {
      path: 'booking/car/all',
      name: 'BookingCarAll',
      component: () =>
        import('@/views/dashboard/BookingCarAll.vue')
    },
    {
      path: 'car/all',
      name: 'CarAll',
      component: () =>
        import('@/views/dashboard/CarAll.vue')
    }

    ]
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {
  console.log("beforeEach", to);
  if (to.path.indexOf('/dashboard/') != -1) {
    if (!localStorage.jm_admin_vuetify_logged) {
      return next({ name: 'Login' });
    }
  } else if (to.path.indexOf('/auth/') != -1) {
    if (localStorage.jm_admin_vuetify_logged) {
      return next({ name: 'Home' });
    }
  }
  next();
});
export default router
