import {createRouter, createWebHistory} from 'vue-router';
import HomeView from '@/view/HomeView.vue';
import AuthView from '@/view/AuthView.vue';
import CabinetView from '@/view/CabinetView.vue';
import RegisterView from "@/view/RegisterView.vue";
import PasswordRecoveryFormView from "@/view/PasswordRecoveryFormView.vue";
import PasswordRecoveryView from "@/view/PasswordRecoveryView.vue";
import ReadySetsView from "@/view/ReadySetsView.vue";
import DeliveryView from "@/view/DeliveryView.vue";
import ContactsView from "@/view/ContactsView.vue";
import QualityAssuranceView from "@/view/QualityAssuranceView.vue";
import DessertCatalogView from "@/view/DessertCatalogView.vue";
import ProductView from "@/view/ProductView.vue";
import NewsView from "@/view/NewsView.vue";
import BasketView from "@/view/BasketView.vue";
import WeddingView from "@/view/WeddingView.vue";
import ErrorView from "@/view/NotFoundView.vue";
import WholesaleSuppliesView from "@/view/WholesaleSuppliesView.vue";
import CorporateGiftsView from "@/view/CorporateGiftsView.vue";

const routes = [
    {
        path: '/home',
        name: 'home',
        component: HomeView,
        alias: '/',
        meta: {
            layout: 'main',
            auth: true
        }
    },
    {
        path: '/ready-sets',
        name: 'ready-sets',
        component: ReadySetsView,
        meta: {
            layout: 'main',
            auth: true
        }
    },
    {
        path: '/delivery',
        name: 'delivery',
        component: DeliveryView,
        meta: {
            layout: 'main',
            auth: true
        }
    },
    {
        path: '/contacts',
        name: 'contacts',
        component: ContactsView,
        meta: {
            layout: 'main',
            auth: true
        }
    },
    {
        path: '/quality-assurance',
        name: 'quality-assurance',
        component: QualityAssuranceView,
        meta: {
            layout: 'main',
            auth: true
        }
    },
    {
        path: '/dessert-catalog',
        name: 'dessert-catalog',
        component: DessertCatalogView,
        meta: {
            layout: 'main',
            auth: true
        }
    },
    {
        path: '/product/:id',
        name: 'product',
        component: ProductView,
        meta: {
            layout: 'main',
            auth: true
        }
    },
    {
        path: '/news',
        name: 'news',
        component: NewsView,
        meta: {
            layout: 'main',
            auth: true
        }
    },
    //
    {
        path: '/basket',
        name: 'basket',
        component: BasketView,
        meta: {
            layout: 'authorized',
            auth: true
        }
    },
    {
        path: '/wedding',
        name: 'wedding',
        component: WeddingView,
        meta: {
            layout: 'main',
            auth: true
        }
    },
    {
        path: '/wholesale-supplies',
        name: 'wholesale-supplies',
        component: WholesaleSuppliesView,
        meta: {
            layout: 'main',
            auth: true
        }
    },
    {
        path: '/corporate-gifts',
        name: 'corporate-gifts',
        component: CorporateGiftsView,
        meta: {
            layout: 'main',
            auth: true
        }
    },

    {
        path: '/auth',
        name: 'auth',
        component: AuthView,
        meta: {
            layout: 'auth',
            auth: true
        }
    },
    {
        path: '/register',
        name: 'register',
        component: RegisterView,
        meta: {
            layout: 'auth ',
            auth: true
        }
    },
    {
        path: '/password-recovery-form',
        name: 'password-recovery-form',
        component: PasswordRecoveryFormView,
        meta: {
            layout: 'auth',
            auth: true
        }
    },
    {
        path: '/password-recovery',
        name: 'password-recovery',
        component: PasswordRecoveryView,
        meta: {
            layout: 'auth',
            auth: true
        }
    },
    {
        path: '/cabinet',
        name: 'cabinet',
        component: CabinetView,
        meta: {
            layout: 'authorized',
            auth: true
        }
    },
    {
        path: '/:pathMatch(.*)*',
        name: '404',
        component: ErrorView,
        meta: {
            layout: 'main',
            auth: true
        }
    },
];

const router = createRouter({
    history: createWebHistory(), // Измените на createWebHistory
    routes,
});

export default router; // Экспортируйте маршрутизатор