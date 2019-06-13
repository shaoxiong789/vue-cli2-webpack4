import Vue from 'vue';
import App from './app.vue'
import Tapable from 'tapable';
console.log(Tapable);
window.Tapable = Tapable;

new Vue({
  el: '#app',
  components: { App },
  template: '<App/>'
})