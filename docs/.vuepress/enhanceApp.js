// .vuepress/enhanceApp.js
// 全局注册 Element 组件库
import Vue from 'vue'

export default ({
                  Vue,
                  router
                }) => {
  Vue.use(Element)
}
