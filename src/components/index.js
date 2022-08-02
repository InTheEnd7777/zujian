import ffbutton from './button/index.vue';
import jindu from './jindu/index.vue';
export default {
  install(Vue) {
    Vue.component('gz-btn', ffbutton);
    Vue.component('gz-gogo', jindu);
  },
};
