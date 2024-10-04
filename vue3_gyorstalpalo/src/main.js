import { createApp } from 'vue'
import './style.css'
import App from './App.vue'

import { library } from '@fortawesome/fontawesome-svg-core'
import { faFistRaised } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(faFistRaised);

createApp(App)
  .component('font-awesome-icon', FontAwesomeIcon)
  .mount('#app')
