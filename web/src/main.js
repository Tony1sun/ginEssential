import Vue from 'vue';
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue';
import App from './App.vue';
import router from './router';
import store from './store';

// scss style
import './assets/scss/index.scss';

// Import Bootstrap an BootstrapVue   CSS files (order is important)
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';

Vue.config.productionTip = false;

// Make BootstrapVue available throughout your project
Vue.use(BootstrapVue);
// Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin);
// 1. 检查语法错误  2. 检查代码规范
const name = 'hayden';

function sayHello(message) {
  console.log('hello', message);
}

sayHello(name);

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');