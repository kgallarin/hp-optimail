import Vue from 'vue';
import VueRouter from 'vue-router';
import App from './App.vue';
import store from './store';
import router from './routes';
import VueHighlightJS from 'vue-highlightjs';
// import * as VueGoogleMaps from 'vue2-google-maps';
import { ClickOutside, EventBus, ScrollTo } from './plugins';

import BootstrapVue from 'bootstrap-vue';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';
import './styles/app.scss';

// Font awesome
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import './plugins/customFontAwesome'

// Vue Syntax Highlighting
import bash from 'highlight.js/lib/languages/bash';
import javascript from 'highlight.js/lib/languages/javascript';

/**
  Vue Syntax Highlighting init
**/

Vue.use(VueHighlightJS, {
  languages: {
    bash,
		javascript
	}
})

Vue.component('font-awesome-icon', FontAwesomeIcon)

/**
  Bootstrap
**/

Vue.use(BootstrapVue)

/**
 * Google Maps
 */

 // Vue.use(VueGoogleMaps, {
   // load: {
     // key: 'AIzaSyCTZjwOVnMwhvNp1uI197QJUzpjwVb_1aU',
     //libraries: 'places',  This is required if you use the Autocomplete plugin
     // OR: libraries: 'places,drawing'
     // OR: libraries: 'places,drawing,visualization'
     // (as you require)

     //// If you want to set the version, you can do so:
     // v: '3.26',
   // },
   // installComponents: true
 // })

/**
  Scroll to element
**/

Vue.use(ScrollTo);

/**
  Clicking Outside event directive
**/

Vue.use(ClickOutside)

/**
  Event bus
**/

Vue.use(EventBus)

/**
  Routing
**/

Vue.use(VueRouter)


Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');


router.beforeEach((to, from, next) => {
  window.scrollTo(0, 0);

  next();
});
