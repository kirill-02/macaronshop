import {createApp} from 'vue'
import {initializeApp} from 'firebase/app';
import App from './App.vue'
import router from '@/router/index.js'
import "./assets/style/root.css"
import "../public/fontSize/icomoon-v1.0/style.css"
import AppBorderButton from './components/button/AppBorderButton.vue'
import AppSetsCard from "./components/card/AppSetsCard.vue";
import AppFilterCard from "./components/filter/AppFilterCard.vue";
import '@/assets/style/Auth.css'
import AppNewsCard from "@/components/card/AppNewsCard.vue";
import AppReviewsSlider from "@/components/slider/AppReviewsSlider.vue";

const firebaseConfig = {
    apiKey: "AIzaSyAya4z0mB9QPixY6Zm2037NP8sArO6KYeo",
    authDomain: "macaronshop-aea3f.firebaseapp.com",
    projectId: "macaronshop-aea3f",
    // storageBucket: "macaronshop-aea3f.firebasestorage.app",
    storageBucket: "macaronshop-aea3f.appspot.com",
    messagingSenderId: "818877786084",
    appId: "1:818877786084:web:2c8ab8b7a4409a0bad09f1",
    measurementId: "G-8SN7M4KDBP"
};

initializeApp(firebaseConfig);


createApp(App)
    .use(router)
    .component('app-border-button', AppBorderButton)
    .component('app-sets-card', AppSetsCard)
    .component('app-filter-card', AppFilterCard)
    .component('app-news-card', AppNewsCard)
    .component('app-reviews-slider', AppReviewsSlider)
    .mount('#app')

