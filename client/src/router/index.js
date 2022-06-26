import Vue from 'vue'
import VueRouter from 'vue-router'


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Iniciar Sesion',
    component: () => import('../views/administrador/inicio_sesion.vue'),
  },
  {
    path: '/administrador',
    name: 'Administrador',
    component: () => import('../views/administrador/base.vue'),
    children: [
      {
        path: '/inicio',
        name: 'Inicio',
        props: true,
        //meta: {
        //  requiresAuth: true
        //},
        component: () => import('../views/administrador/fragmento/inicio.vue')
      },
      {
        path: '/perfil',
        name: 'Perfil',
        props: true,
        //meta: {
        //  requiresAuth: true
        //},
        component: () => import('../views/administrador/fragmento/perfil.vue')
      },
      {
        path: '/proceso',
        name: 'Proceso',
        props: true,
        //meta: {
        //  requiresAuth: true
        //},
        component: () => import('../views/administrador/fragmento/proceso.vue')
      },
      {
        path: '/proceso/nuevo/:hash',
        name: 'Nuevo Proceso',
        props: true,
        //meta: {
        //  requiresAuth: true
        //},
        component: () => import('../views/administrador/fragmento/nuevo_proceso.vue')
      },
      {
        path: '/usuario',
        name: 'Usuario',
        props: true,
        //meta: {
        //  requiresAuth: true
        //},
        component: () => import('../views/administrador/fragmento/usuario.vue')
      },
    ]
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
