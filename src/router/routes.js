import Home from '@/views/Home.vue'

export default [
  {
    path: '/',
    name: 'Home',
    // alias: '/home_page',
    component: Home,
    props: route => {
      console.log(route)
      return {
        name: route.query.name
      }
    },
    meta: {
      requiresAuth: true
    }
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('@/views/Login.vue')
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ '../views/About.vue'),
    props: {
      food: 'banana'
    },
    meta: {
      requiresAuth: true
    }
  },
  {
    path: '/argu/:name',
    name: 'argu',
    component: () => import('@/views/Argu.vue'),
    props: true,
    meta: {
      requiresAuth: true
    }
  },
  {
    path: '/parent',
    name: 'Parent',
    component: () => import('@/views/Parent.vue'),
    children: [
      {
        path: 'child',
        component: () => import('@/views/Child.vue')
      }
    ],
    meta: {
      requiresAuth: true
    }
  },
  {
    path: '/name_view',
    components: {
      default: () => import('@/views/Child.vue'),
      email: () => import('@/views/Email.vue'),
      tel: () => import('@/views/Tel.vue')
    },
    meta: {
      requiresAuth: true
    }
  },
  {
    path: '/main',
    redirect: '/',
    meta: {
      requiresAuth: true
    }
  },
  {
    path: '*',
    component: () => import('@/views/Error.vue')
  }
]
