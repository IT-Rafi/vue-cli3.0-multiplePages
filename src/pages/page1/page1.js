import Vue from 'vue'
import App from './page1.vue'
import eleui from 'element-ui'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI)
new Vue({
    render: h => h(App)
  }).$mount('#app')