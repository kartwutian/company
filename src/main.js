// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import Axios from 'axios';
import App from './App';
import router from './router';
import {Slider, SliderItem} from 'vue-ydui/dist/lib.rem/slider';
import {Tab, TabPanel} from 'vue-ydui/dist/lib.rem/tab';

Vue.config.productionTip = false;
Axios.defaults.baseURL = '/wgh';
Vue.prototype.baseImageUrl = 'http://192.168.1.232:8081';
Vue.prototype.$ajax = Axios;
Vue.component(Tab.name, Tab);
Vue.component(TabPanel.name, TabPanel);
Vue.component(Slider.name, Slider);
Vue.component(SliderItem.name, SliderItem);
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
});
