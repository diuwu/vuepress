/**
 * Generated by "@vuepress/internal-routes"
 */

import { injectComponentOption, ensureAsyncComponentsLoaded } from '@app/util'
import rootMixins from '@internal/root-mixins'
import GlobalLayout from "E:\\Desktop\\练习\\vuepress\\node_modules\\@vuepress\\core\\lib\\client\\components\\GlobalLayout.vue"

injectComponentOption(GlobalLayout, 'mixins', rootMixins)
export const routes = [
  {
    name: "v-92ecd70a",
    path: "/guide/",
    component: GlobalLayout,
    beforeEnter: (to, from, next) => {
      ensureAsyncComponentsLoaded("Layout", "v-92ecd70a").then(next)
    },
  },
  {
    path: "/guide/index.html",
    redirect: "/guide/"
  },
  {
    name: "v-1c03dfe8",
    path: "/guide/algorithm/",
    component: GlobalLayout,
    beforeEnter: (to, from, next) => {
      ensureAsyncComponentsLoaded("Layout", "v-1c03dfe8").then(next)
    },
  },
  {
    path: "/guide/algorithm/index.html",
    redirect: "/guide/algorithm/"
  },
  {
    name: "v-5bec89b3",
    path: "/guide/interview/http.html",
    component: GlobalLayout,
    beforeEnter: (to, from, next) => {
      ensureAsyncComponentsLoaded("Layout", "v-5bec89b3").then(next)
    },
  },
  {
    name: "v-23d9dce8",
    path: "/",
    component: GlobalLayout,
    beforeEnter: (to, from, next) => {
      ensureAsyncComponentsLoaded("Layout", "v-23d9dce8").then(next)
    },
  },
  {
    path: "/index.html",
    redirect: "/"
  },
  {
    name: "v-bce8234e",
    path: "/guide/algorithm/algorithm.html",
    component: GlobalLayout,
    beforeEnter: (to, from, next) => {
      ensureAsyncComponentsLoaded("Layout", "v-bce8234e").then(next)
    },
  },
  {
    name: "v-9d10a678",
    path: "/guide/interview/",
    component: GlobalLayout,
    beforeEnter: (to, from, next) => {
      ensureAsyncComponentsLoaded("Layout", "v-9d10a678").then(next)
    },
  },
  {
    path: "/guide/interview/index.html",
    redirect: "/guide/interview/"
  },
  {
    name: "v-c2a4750e",
    path: "/guide/interview/handWrite.html",
    component: GlobalLayout,
    beforeEnter: (to, from, next) => {
      ensureAsyncComponentsLoaded("Layout", "v-c2a4750e").then(next)
    },
  },
  {
    name: "v-f304a84e",
    path: "/guide/interview/interview.html",
    component: GlobalLayout,
    beforeEnter: (to, from, next) => {
      ensureAsyncComponentsLoaded("Layout", "v-f304a84e").then(next)
    },
  },
  {
    name: "v-2cc1acce",
    path: "/guide/interview/promise.html",
    component: GlobalLayout,
    beforeEnter: (to, from, next) => {
      ensureAsyncComponentsLoaded("Layout", "v-2cc1acce").then(next)
    },
  },
  {
    name: "v-998d820c",
    path: "/guide/vue/",
    component: GlobalLayout,
    beforeEnter: (to, from, next) => {
      ensureAsyncComponentsLoaded("Layout", "v-998d820c").then(next)
    },
  },
  {
    path: "/guide/vue/index.html",
    redirect: "/guide/vue/"
  },
  {
    name: "v-073e492d",
    path: "/guide/vue/Vue-Router.html",
    component: GlobalLayout,
    beforeEnter: (to, from, next) => {
      ensureAsyncComponentsLoaded("Layout", "v-073e492d").then(next)
    },
  },
  {
    name: "v-82b31d28",
    path: "/guide/webpack/",
    component: GlobalLayout,
    beforeEnter: (to, from, next) => {
      ensureAsyncComponentsLoaded("Layout", "v-82b31d28").then(next)
    },
  },
  {
    path: "/guide/webpack/index.html",
    redirect: "/guide/webpack/"
  },
  {
    name: "v-6bdb1f79",
    path: "/guide/vue/Vue-Cli.html",
    component: GlobalLayout,
    beforeEnter: (to, from, next) => {
      ensureAsyncComponentsLoaded("Layout", "v-6bdb1f79").then(next)
    },
  },
  {
    name: "v-eaed2e50",
    path: "/guide/weixin/",
    component: GlobalLayout,
    beforeEnter: (to, from, next) => {
      ensureAsyncComponentsLoaded("Layout", "v-eaed2e50").then(next)
    },
  },
  {
    path: "/guide/weixin/index.html",
    redirect: "/guide/weixin/"
  },
  {
    name: "v-7d771159",
    path: "/guide/vue/Vue.html",
    component: GlobalLayout,
    beforeEnter: (to, from, next) => {
      ensureAsyncComponentsLoaded("Layout", "v-7d771159").then(next)
    },
  },
  {
    name: "v-18c76aa9",
    path: "/guide/vue/VueX.html",
    component: GlobalLayout,
    beforeEnter: (to, from, next) => {
      ensureAsyncComponentsLoaded("Layout", "v-18c76aa9").then(next)
    },
  },
  {
    name: "v-9e862ada",
    path: "/guide/weixin/weixin.html",
    component: GlobalLayout,
    beforeEnter: (to, from, next) => {
      ensureAsyncComponentsLoaded("Layout", "v-9e862ada").then(next)
    },
  },
  {
    name: "v-ad9af1ce",
    path: "/guide/webpack/Webpack.html",
    component: GlobalLayout,
    beforeEnter: (to, from, next) => {
      ensureAsyncComponentsLoaded("Layout", "v-ad9af1ce").then(next)
    },
  },
  {
    path: '*',
    component: GlobalLayout
  }
]