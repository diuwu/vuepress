/**
 * Generated by "@vuepress/internal-routes"
 */

import { injectComponentOption, ensureAsyncComponentsLoaded } from '@app/util'
import rootMixins from '@internal/root-mixins'
import GlobalLayout from "C:\\Users\\bush\\Desktop\\练习\\vuepress\\node_modules\\@vuepress\\core\\lib\\client\\components\\GlobalLayout.vue"

injectComponentOption(GlobalLayout, 'mixins', rootMixins)
export const routes = [
  {
    name: "v-a62bbcb0",
    path: "/",
    component: GlobalLayout,
    beforeEnter: (to, from, next) => {
      ensureAsyncComponentsLoaded("Layout", "v-a62bbcb0").then(next)
    },
  },
  {
    path: "/index.html",
    redirect: "/"
  },
  {
    name: "v-ab761cf8",
    path: "/guide/interview/",
    component: GlobalLayout,
    beforeEnter: (to, from, next) => {
      ensureAsyncComponentsLoaded("Layout", "v-ab761cf8").then(next)
    },
  },
  {
    path: "/guide/interview/index.html",
    redirect: "/guide/interview/"
  },
  {
    name: "v-2c4e7cce",
    path: "/guide/algorithm/algorithm.html",
    component: GlobalLayout,
    beforeEnter: (to, from, next) => {
      ensureAsyncComponentsLoaded("Layout", "v-2c4e7cce").then(next)
    },
  },
  {
    name: "v-14d124a8",
    path: "/guide/algorithm/",
    component: GlobalLayout,
    beforeEnter: (to, from, next) => {
      ensureAsyncComponentsLoaded("Layout", "v-14d124a8").then(next)
    },
  },
  {
    path: "/guide/algorithm/index.html",
    redirect: "/guide/algorithm/"
  },
  {
    name: "v-320ace8e",
    path: "/guide/interview/handWrite.html",
    component: GlobalLayout,
    beforeEnter: (to, from, next) => {
      ensureAsyncComponentsLoaded("Layout", "v-320ace8e").then(next)
    },
  },
  {
    name: "v-50ce8d8a",
    path: "/guide/",
    component: GlobalLayout,
    beforeEnter: (to, from, next) => {
      ensureAsyncComponentsLoaded("Layout", "v-50ce8d8a").then(next)
    },
  },
  {
    path: "/guide/index.html",
    redirect: "/guide/"
  },
  {
    name: "v-2837a3ba",
    path: "/guide/vue/",
    component: GlobalLayout,
    beforeEnter: (to, from, next) => {
      ensureAsyncComponentsLoaded("Layout", "v-2837a3ba").then(next)
    },
  },
  {
    path: "/guide/vue/index.html",
    redirect: "/guide/vue/"
  },
  {
    name: "v-626b01ce",
    path: "/guide/interview/interview.html",
    component: GlobalLayout,
    beforeEnter: (to, from, next) => {
      ensureAsyncComponentsLoaded("Layout", "v-626b01ce").then(next)
    },
  },
  {
    name: "v-e6931a8e",
    path: "/guide/vue/Vue-Cli.html",
    component: GlobalLayout,
    beforeEnter: (to, from, next) => {
      ensureAsyncComponentsLoaded("Layout", "v-e6931a8e").then(next)
    },
  },
  {
    name: "v-92c3a726",
    path: "/guide/vue/Vue-Router.html",
    component: GlobalLayout,
    beforeEnter: (to, from, next) => {
      ensureAsyncComponentsLoaded("Layout", "v-92c3a726").then(next)
    },
  },
  {
    name: "v-ef1ba42e",
    path: "/guide/vue/VueX.html",
    component: GlobalLayout,
    beforeEnter: (to, from, next) => {
      ensureAsyncComponentsLoaded("Layout", "v-ef1ba42e").then(next)
    },
  },
  {
    name: "v-0b4c6cf3",
    path: "/guide/interview/http.html",
    component: GlobalLayout,
    beforeEnter: (to, from, next) => {
      ensureAsyncComponentsLoaded("Layout", "v-0b4c6cf3").then(next)
    },
  },
  {
    name: "v-6379a499",
    path: "/guide/vue/Vue.html",
    component: GlobalLayout,
    beforeEnter: (to, from, next) => {
      ensureAsyncComponentsLoaded("Layout", "v-6379a499").then(next)
    },
  },
  {
    name: "v-00269a59",
    path: "/guide/webpack/Webpack.html",
    component: GlobalLayout,
    beforeEnter: (to, from, next) => {
      ensureAsyncComponentsLoaded("Layout", "v-00269a59").then(next)
    },
  },
  {
    name: "v-4454162c",
    path: "/guide/webpack/",
    component: GlobalLayout,
    beforeEnter: (to, from, next) => {
      ensureAsyncComponentsLoaded("Layout", "v-4454162c").then(next)
    },
  },
  {
    path: "/guide/webpack/index.html",
    redirect: "/guide/webpack/"
  },
  {
    name: "v-fd86c45a",
    path: "/guide/weixin/weixin.html",
    component: GlobalLayout,
    beforeEnter: (to, from, next) => {
      ensureAsyncComponentsLoaded("Layout", "v-fd86c45a").then(next)
    },
  },
  {
    name: "v-64d93d98",
    path: "/guide/weixin/",
    component: GlobalLayout,
    beforeEnter: (to, from, next) => {
      ensureAsyncComponentsLoaded("Layout", "v-64d93d98").then(next)
    },
  },
  {
    path: "/guide/weixin/index.html",
    redirect: "/guide/weixin/"
  },
  {
    path: '*',
    component: GlobalLayout
  }
]