import Vue from 'vue';
import App from './App.vue';
import store from './store';
import gzlbtn from './components/index';
Vue.use(gzlbtn);
Vue.config.productionTip = false;

new Vue({
  store,
  render: (h) => h(App),
}).$mount('#app');
