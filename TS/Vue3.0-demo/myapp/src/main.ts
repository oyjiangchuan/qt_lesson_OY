import Vue from 'vue';
import App from './App.vue';
import axios from  'axios'
import VueAxios from 'vue-axios' // 测试用的
Vue.config.productionTip = false;

Vue.use(VueAxios, axios) // 需要先使用VueAxios


new Vue({
  render: (h) => h(App),
}).$mount('#app');
