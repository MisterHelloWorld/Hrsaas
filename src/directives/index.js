// TODO:自定义指令
import Vue from 'vue'

// 图片加载失败的指令
Vue.directive('imageError', {
  // 当被绑定的元素插入到 DOM 中时……
  inserted(el, options) {
    // 聚焦元素
    el.onerror = function() {
      el.src = options.value
    }
  }
})
