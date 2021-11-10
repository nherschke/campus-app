import { createApp } from 'vue'
import App from './App.vue'
import router from './router';

import { IonicVue } from '@ionic/vue';

import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore/lite';
import { getAuth, connectAuthEmulator } from "firebase/auth";

/* Core CSS required for Ionic components to work properly */
import '@ionic/vue/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/vue/css/normalize.css';
import '@ionic/vue/css/structure.css';
import '@ionic/vue/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/vue/css/padding.css';
import '@ionic/vue/css/float-elements.css';
import '@ionic/vue/css/text-alignment.css';
import '@ionic/vue/css/text-transformation.css';
import '@ionic/vue/css/flex-utils.css';
import '@ionic/vue/css/display.css';

/* Theme variables */
import './theme/variables.css';

/* Firebase Configuration */
const firebaseConfig = {
  apiKey: "AIzaSyDOmnkk-r_DFtikCTyHrMXxpSfv7z9K5ws",
  authDomain: "campus-app-521d0.firebaseapp.com",
  projectId: "campus-app-521d0",
  storageBucket: "campus-app-521d0.appspot.com",
  messagingSenderId: "66703311140",
  appId: "1:66703311140:web:378705cef1f7d0996733b1"
}

const fbApp = initializeApp(firebaseConfig);
const db = getFirestore(fbApp);
const auth = getAuth();

const app = createApp(App)
  .use(IonicVue)
  .use(router);
  
router.isReady().then(() => {
  app.mount('#app');
});
