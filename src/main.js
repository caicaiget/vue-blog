// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Axios from 'axios'
import ElementUI from 'element-ui';


Axios.defaults.baseURL = 'http://127.0.0.1:1996';

Vue.config.productionTip = false;
Vue.use(ElementUI, {
  size: 'small'
});

// 携带cookies
Axios.defaults.withCredentials = true;
Vue.prototype.$axios = Axios;


new Vue({
  el: '#app',
  router,
  template: '<App/>',
  // render: h => h(App),
  components: {App}
});
