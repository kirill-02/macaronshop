import {createApp} from 'vue'
import {createPinia} from 'pinia';
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


createApp(App)
    .use(router)
    .use(createPinia())
    .component('app-border-button', AppBorderButton)
    .component('app-sets-card', AppSetsCard)
    .component('app-filter-card', AppFilterCard)
    .component('app-news-card', AppNewsCard)
    .component('app-reviews-slider', AppReviewsSlider)
    .mount('#app')

