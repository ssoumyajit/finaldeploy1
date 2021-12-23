import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from '@nuxt/ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _8ca577f6 = () => interopDefault(import('../pages/about_us.vue' /* webpackChunkName: "pages/about_us" */))
const _9321f92c = () => interopDefault(import('../pages/artists/index.vue' /* webpackChunkName: "pages/artists/index" */))
const _0c07ab6c = () => interopDefault(import('../pages/blogs.vue' /* webpackChunkName: "pages/blogs" */))
const _2c723b87 = () => interopDefault(import('../pages/blogs.vue/index.vue' /* webpackChunkName: "pages/blogs.vue/index" */))
const _228a338a = () => interopDefault(import('../pages/contact.vue' /* webpackChunkName: "pages/contact" */))
const _5b9ed118 = () => interopDefault(import('../pages/create/index.vue' /* webpackChunkName: "pages/create/index" */))
const _44cc35be = () => interopDefault(import('../pages/e1t1/index.vue' /* webpackChunkName: "pages/e1t1/index" */))
const _0ebe7e94 = () => interopDefault(import('../pages/help.vue' /* webpackChunkName: "pages/help" */))
const _6a48e9c4 = () => interopDefault(import('../pages/login.vue' /* webpackChunkName: "pages/login" */))
const _2be5573f = () => interopDefault(import('../pages/logout.vue' /* webpackChunkName: "pages/logout" */))
const _2b7b1680 = () => interopDefault(import('../pages/notificationss.vue' /* webpackChunkName: "pages/notificationss" */))
const _017d1e60 = () => interopDefault(import('../pages/onboarding.vue' /* webpackChunkName: "pages/onboarding" */))
const _20d2e3ad = () => interopDefault(import('../pages/passwordrenew.vue' /* webpackChunkName: "pages/passwordrenew" */))
const _394ca898 = () => interopDefault(import('../pages/register.vue' /* webpackChunkName: "pages/register" */))
const _821f13d0 = () => interopDefault(import('../pages/settings.vue' /* webpackChunkName: "pages/settings" */))
const _394db4f2 = () => interopDefault(import('../pages/test.vue' /* webpackChunkName: "pages/test" */))
const _f174d992 = () => interopDefault(import('../pages/write_blog.vue' /* webpackChunkName: "pages/write_blog" */))
const _265ce0eb = () => interopDefault(import('../pages/create/e1t1index.vue' /* webpackChunkName: "pages/create/e1t1index" */))
const _51506ace = () => interopDefault(import('../pages/create/each1teach1.vue' /* webpackChunkName: "pages/create/each1teach1" */))
const _0510463c = () => interopDefault(import('../pages/create/journey.vue' /* webpackChunkName: "pages/create/journey" */))
const _30dcd660 = () => interopDefault(import('../pages/create/journeyindex.vue' /* webpackChunkName: "pages/create/journeyindex" */))
const _c3dd4528 = () => interopDefault(import('../pages/create/learning.vue' /* webpackChunkName: "pages/create/learning" */))
const _7903283d = () => interopDefault(import('../pages/create/website.vue' /* webpackChunkName: "pages/create/website" */))
const _76d118a2 = () => interopDefault(import('../pages/blogs.vue/_id.vue' /* webpackChunkName: "pages/blogs.vue/_id" */))
const _b21e886e = () => interopDefault(import('../pages/e1t1/_id.vue' /* webpackChunkName: "pages/e1t1/_id" */))
const _bebd72a6 = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))
const _04759510 = () => interopDefault(import('../pages/_username.vue' /* webpackChunkName: "pages/_username" */))
const _7b620f93 = () => interopDefault(import('../pages/_username/index.vue' /* webpackChunkName: "pages/_username/index" */))
const _78f73f20 = () => interopDefault(import('../pages/_username/each1teach1/index.vue' /* webpackChunkName: "pages/_username/each1teach1/index" */))
const _202bc941 = () => interopDefault(import('../pages/_username/journey.vue' /* webpackChunkName: "pages/_username/journey" */))
const _7613d952 = () => interopDefault(import('../pages/_username/myhood.vue' /* webpackChunkName: "pages/_username/myhood" */))
const _d6d370ae = () => interopDefault(import('../pages/_username/notifications.vue' /* webpackChunkName: "pages/_username/notifications" */))

// TODO: remove in Nuxt 3
const emptyFn = () => {}
const originalPush = Router.prototype.push
Router.prototype.push = function push (location, onComplete = emptyFn, onAbort) {
  return originalPush.call(this, location, onComplete, onAbort)
}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/about_us",
    component: _8ca577f6,
    name: "about_us"
  }, {
    path: "/artists",
    component: _9321f92c,
    name: "artists"
  }, {
    path: "/blogs",
    component: _0c07ab6c,
    name: "blogs"
  }, {
    path: "/blogs.vue",
    component: _2c723b87,
    name: "blogs.vue"
  }, {
    path: "/contact",
    component: _228a338a,
    name: "contact"
  }, {
    path: "/create",
    component: _5b9ed118,
    name: "create"
  }, {
    path: "/e1t1",
    component: _44cc35be,
    name: "e1t1"
  }, {
    path: "/help",
    component: _0ebe7e94,
    name: "help"
  }, {
    path: "/login",
    component: _6a48e9c4,
    name: "login"
  }, {
    path: "/logout",
    component: _2be5573f,
    name: "logout"
  }, {
    path: "/notificationss",
    component: _2b7b1680,
    name: "notificationss"
  }, {
    path: "/onboarding",
    component: _017d1e60,
    name: "onboarding"
  }, {
    path: "/passwordrenew",
    component: _20d2e3ad,
    name: "passwordrenew"
  }, {
    path: "/register",
    component: _394ca898,
    name: "register"
  }, {
    path: "/settings",
    component: _821f13d0,
    name: "settings"
  }, {
    path: "/test",
    component: _394db4f2,
    name: "test"
  }, {
    path: "/write_blog",
    component: _f174d992,
    name: "write_blog"
  }, {
    path: "/create/e1t1index",
    component: _265ce0eb,
    name: "create-e1t1index"
  }, {
    path: "/create/each1teach1",
    component: _51506ace,
    name: "create-each1teach1"
  }, {
    path: "/create/journey",
    component: _0510463c,
    name: "create-journey"
  }, {
    path: "/create/journeyindex",
    component: _30dcd660,
    name: "create-journeyindex"
  }, {
    path: "/create/learning",
    component: _c3dd4528,
    name: "create-learning"
  }, {
    path: "/create/website",
    component: _7903283d,
    name: "create-website"
  }, {
    path: "/blogs.vue/:id",
    component: _76d118a2,
    name: "blogs.vue-id"
  }, {
    path: "/e1t1/:id",
    component: _b21e886e,
    name: "e1t1-id"
  }, {
    path: "/",
    component: _bebd72a6,
    name: "index"
  }, {
    path: "/:username",
    component: _04759510,
    children: [{
      path: "",
      component: _7b620f93,
      name: "username"
    }, {
      path: "each1teach1",
      component: _78f73f20,
      name: "username-each1teach1"
    }, {
      path: "journey",
      component: _202bc941,
      name: "username-journey"
    }, {
      path: "myhood",
      component: _7613d952,
      name: "username-myhood"
    }, {
      path: "notifications",
      component: _d6d370ae,
      name: "username-notifications"
    }]
  }],

  fallback: false
}

function decodeObj(obj) {
  for (const key in obj) {
    if (typeof obj[key] === 'string') {
      obj[key] = decode(obj[key])
    }
  }
}

export function createRouter () {
  const router = new Router(routerOptions)

  const resolve = router.resolve.bind(router)
  router.resolve = (to, current, append) => {
    if (typeof to === 'string') {
      to = normalizeURL(to)
    }
    const r = resolve(to, current, append)
    if (r && r.resolved && r.resolved.query) {
      decodeObj(r.resolved.query)
    }
    return r
  }

  return router
}
