import {defineStore} from 'pinia';
import {getAuth, createUserWithEmailAndPassword} from 'firebase/auth';
import {app, db} from '../firebase.js';
import {ref} from 'vue';
import {addDoc, collection, doc, onSnapshot, query} from "firebase/firestore";

export const useStateStore = defineStore('stateStore', () => {
    const user = ref(null);
    const error = ref(null);
    const auth = getAuth(app); // Инициализация auth
    const email = ref('');
    const password = ref('');
    const name = ref('');
    const city = ref('');
    const phone = ref('');
    const company = ref('');
    const promotion = ref([]);
    const product = ref([]);
    const news = ref([]);
    const conditions = ref([]);
    const guarantee = ref([]);
    const filtersSets = ref([]);
    const filtersNews = ref([]);
    const recommendations = ref([]);
    const answersToQuestions = ref([]);


    const setEmail = (newEmail) => {
        email.value = newEmail;
    };
    const setPassword = (newPassword) => {
        password.value = newPassword;
    };
    const setName = (newName) => {
        name.value = newName;
    };
    const setCity = (newCity) => {
        city.value = newCity;
    };
    const setPhone = (newPhone) => {
        phone.value = newPhone;
    };
    const setCompany = (newCompany) => {
        company.value = newCompany;
    };


    const checkLoadingComplete = async () => {
        if (this.promotion.length && this.sets.length && this.news.length && this.conditions.length) {
            this.isLoading = false;
        }
    };

    const registerUser = async () => {
        try {
            const userCredential = await createUserWithEmailAndPassword(auth, email.value, password.value);
            user.value = userCredential.user;
            error.value = null;
            console.log("Пользователь зарегистрирован:", user.value);

            await addDoc(collection(db, 'users'), {
                name: name.value,
                city: city.value,
                phone: phone.value,
                company: company.value,
                uid: user.value.uid,
            })

            const now = new Date();
            const year = now.getFullYear();
            const minutes = now.getMinutes();
            const seconds = now.getSeconds();
            const cartsRandom = "carts_" + Math.floor(Math.random() * (10000 - 1000 + 1)) + 1000 + year + minutes + seconds;

            await addDoc(collection(db, 'basket'), {
                userId: auth.lastNotifiedUid,
                cartsId: cartsRandom,

            })

            const cartsDocRef = doc(db, 'basket', "carts");
            const cartsRandomCollectionRef = collection(cartsDocRef, cartsRandom);

            await addDoc(cartsRandomCollectionRef, {});
        } catch (err) {
            error.value = err.message;
            console.error("Ошибка регистрации:", err.message);
        }
    };

    const withdrawalPromotion = async () => {
        const promotionQuery = query(collection(db, "promotion"));

        onSnapshot(promotionQuery, (snapshot) => {
            promotion.value = snapshot.docs.map(doc => ({
                id: doc.id,
                name: doc.data().name,
                photo: doc.data().photo,
                title: doc.data().title,
                color: doc.data().color,
            }));
        });
    };

    const withdrawalProduct = async () => {
        const productQuery = query(collection(db, "product"));

        onSnapshot(productQuery, (snapshot) => {
            product.value = snapshot.docs.map(doc => ({
                id: doc.id,
                name: doc.data().name,
                price: doc.data().price,
                description: doc.data().description,
                photo: doc.data().photo || [],
                compound: doc.data().compound || [],
                storage_conditions: doc.data().storage_conditions || [],
                description_composition_condition: doc.data().description_composition_condition || [],
                tastes: doc.data().tastes || [],
                title: doc.data().title,
                search: doc.data().search,
            }));
        });
    }

    const withdrawalNews = async () => {
        const newsQuery = query(collection(db, "news"));

        onSnapshot(newsQuery, (snapshot) => {
            news.value = snapshot.docs.map(doc => ({
                id: doc.id,
                name: doc.data().name,
                description: doc.data().description,
                date: doc.data().date,
                photo: doc.data().photo || [],
            }));
        });
    };

    const withdrawalConditions = async () => {
        const conditionsQuery = query(collection(db, "conditions"));

        onSnapshot(conditionsQuery, (snapshot) => {
            conditions.value = snapshot.docs.map(doc => ({
                id: doc.id,
                name: doc.data().name,
                description: doc.data().description,
                photo: doc.data().photo || [],
            }))
            this.checkLoadingComplete();
        })
    };

    const withdrawalQuarantee = async () => {
        const guaranteeQuery = query(collection(db, "guarantee"));

        onSnapshot(guaranteeQuery, (snapshot) => {
            guarantee.value = snapshot.docs.map(doc => ({
                id: doc.id,
                name: doc.data().name,
                description: doc.data().description,
                date: doc.data().date,
                photo: doc.data().photo || [],
            }));
        });
    };

    const withdrawalFiltersSets = async () => {
        const filtersQuery = query(collection(db, "filtersSets"));

        onSnapshot(filtersQuery, (snapshot) => {
            filtersSets.value = snapshot.docs.map(doc => ({
                id: doc.id,
                title: doc.data().title,
            }));
        });
    };

    const withdrawalFiltersNews = async () => {
        const filtersQuery = query(collection(db, "filtersNews"));

        onSnapshot(filtersQuery, (snapshot) => {
            filtersNews.value = snapshot.docs.map(doc => {
                return {
                    id: doc.id,
                    title: doc.data().title,
                }
            });
        });
    };

    const withdrawalRecommendations = async () => {
        const recommendationsQuery = query(collection(db, "recommendations"));

        onSnapshot(recommendationsQuery, (snapshot) => {
            recommendations.value = snapshot.docs.map(doc => ({
                id: doc.id,
                description: doc.data().description,
                title: doc.data().title,
            }));
        });
    };

    const withdrawalAnswersToQuestions = async () => {
        const answersToQuestionsQuery = query(collection(db, "answersToQuestions"));

        onSnapshot(answersToQuestionsQuery, (snapshot) => {
            answersToQuestions.value = snapshot.docs.map(doc => {
                return {
                    id: doc.id,
                    description: doc.data().description,
                    title: doc.data().title,
                }
            });
        });
    };


    return {
        user,
        error,
        auth,
        email,
        password,
        name,
        city,
        phone,
        company,
        promotion,
        product,
        news,
        conditions,
        guarantee,
        filtersSets,
        filtersNews,
        recommendations,
        answersToQuestions,
        checkLoadingComplete,
        setEmail,
        setPassword,
        setName,
        setCity,
        setPhone,
        setCompany,
        registerUser,
        withdrawalPromotion,
        withdrawalProduct,
        withdrawalNews,
        withdrawalConditions,
        withdrawalQuarantee,
        withdrawalFiltersSets,
        withdrawalFiltersNews,
        withdrawalRecommendations,
        withdrawalAnswersToQuestions,
    }
        ;
});