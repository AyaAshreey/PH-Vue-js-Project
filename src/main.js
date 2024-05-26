import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import store from './store/index';
import i18n from './i18n';

// Pinia config
import { createPinia } from "pinia";
// Emitter config
import mitt from "mitt";
const Emitter = mitt();

// Import the Vuex store

//swiper congig
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";


// Vuetify
import '@mdi/font/css/materialdesignicons.css';
import 'vuetify/styles';
import { createVuetify } from 'vuetify';
import * as components from 'vuetify/components';
import * as directives from 'vuetify/directives';

const vuetify = createVuetify({
  components,
  directives
});

createApp(App)
  .use(vuetify)
  .use(store) // Register the Vuex store
  .provide("Emitter", Emitter)
  .use(createPinia())
  .use(router)
  .use(i18n)
  .mount("#app");


