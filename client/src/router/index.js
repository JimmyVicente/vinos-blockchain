import Vue from 'vue'
import VueRouter from 'vue-router'
import { encontrarMiUsuario } from "../conexion_web3/usuarios";


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Cliente',
    meta: {
      requiresAuth: false
    },
    component: () => import('../views/cliente/base_cliente.vue'),
    children: [
      {
        path: '/',
        name: 'Inicio',
        props: true,
        meta: {
          requiresAuth: false
        },
        component: () => import('../views/cliente/fragmento/inicio.vue')
      },
      {
        path: '/leer_qr',
        name: 'Leer Qr',
        props: true,
        meta: {
          requiresAuth: false
        },
        component: () => import('../views/cliente/fragmento/leer_qr.vue')
      },
      {
        path: '/trazabilidad/:hash_botella',
        name: 'Trazabilidad',
        props: true,
        meta: {
          requiresAuth: false
        },
        component: () => import('../views/cliente/fragmento/trazabilidad.vue')
      },

    ]
  },
  {
    path: '/administrador',
    name: 'Administrador', meta: {
      requiresAuth: false
    },
    component: () => import('../views/administrador/base_administrador.vue'),
    children: [
      {
        path: '/inicio',
        name: 'Inicio Administrador',
        props: true,
        meta: {
          requiresAuth: true
        },
        component: () => import('../views/administrador/fragmento/inicio.vue')
      },
      {
        path: '/perfil',
        name: 'Perfil',
        props: true,
        meta: {
          requiresAuth: true
        },
        component: () => import('../views/administrador/fragmento/perfil.vue')
      },
      {
        path: '/proceso',
        name: 'Proceso',
        props: true,
        meta: {
          requiresAuth: true
        },
        component: () => import('../views/administrador/fragmento/proceso.vue')
      },
      {
        path: '/proceso/nuevo/:hash',
        name: 'Nuevo Proceso',
        props: true,
        meta: {
          requiresAuth: true
        },
        component: () => import('../views/administrador/fragmento/nuevo_proceso.vue')
      },
      {
        path: '/proceso/botellas/:hash',
        name: 'Botellas',
        props: true,
        meta: {
          requiresAuth: true
        },
        component: () => import('../views/administrador/fragmento/botellas.vue')
      },
      {
        path: '/usuario',
        name: 'Usuario',
        props: true,
        meta: {
          requiresAuth: true
        },
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


router.beforeEach(async (to, from, next) => {
  var usuario = await encontrarMiUsuario() ?? {};
  var esMiCuenta = usuario.esMiCuenta ?? false;
  if (to.path == "/" || esMiCuenta == true) {
    next();
  } else {
    next('/');
  }
})

export default router
